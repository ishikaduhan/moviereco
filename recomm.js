// Recommendation system logic
class MovieRecommender {
    constructor(movies) {
        this.movies = movies;
    }

    // Calculate similarity between two movies based on categories and description
    calculateSimilarity(movie1, movie2) {
        if (movie1.id === movie2.id) return 0; // Don't recommend the same movie

        let similarityScore = 0;

        // Category similarity (weighted heavily)
        const commonCategories = movie1.categories.filter(cat => 
            movie2.categories.includes(cat)
        );
        const categorySimilarity = commonCategories.length / 
            Math.max(movie1.categories.length, movie2.categories.length);
        similarityScore += categorySimilarity * 0.6;

        // Description similarity based on common words
        const desc1 = movie1.description.toLowerCase().split(/\s+/);
        const desc2 = movie2.description.toLowerCase().split(/\s+/);
        
        // Remove common stop words
        const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should']);
        
        const filteredDesc1 = desc1.filter(word => !stopWords.has(word) && word.length > 3);
        const filteredDesc2 = desc2.filter(word => !stopWords.has(word) && word.length > 3);

        const commonWords = filteredDesc1.filter(word => filteredDesc2.includes(word));
        const descriptionSimilarity = commonWords.length / 
            Math.max(filteredDesc1.length, filteredDesc2.length);
        similarityScore += descriptionSimilarity * 0.3;

        // Year similarity (bonus for movies within 5 years)
        const yearDiff = Math.abs(movie1.year - movie2.year);
        const yearSimilarity = yearDiff <= 5 ? 1 - (yearDiff / 5) : 0;
        similarityScore += yearSimilarity * 0.1;

        return Math.min(similarityScore, 1); // Cap at 1
    }

    // Get recommendations for a specific movie
    getRecommendations(movieId, count = 6) {
        const selectedMovie = this.movies.find(m => m.id === movieId);
        if (!selectedMovie) return [];

        // Calculate similarity scores for all movies
        const similarities = this.movies.map(movie => ({
            movie: movie,
            similarity: this.calculateSimilarity(selectedMovie, movie)
        }));

        // Sort by similarity score (descending) and exclude the selected movie
        similarities.sort((a, b) => b.similarity - a.similarity);

        // Return top recommendations
        return similarities
            .filter(item => item.movie.id !== movieId)
            .slice(0, count)
            .map(item => ({
                ...item.movie,
                similarityScore: Math.round(item.similarity * 100)
            }));
    }

    // Find movies by search term
    searchMovies(searchTerm) {
        const term = searchTerm.toLowerCase();
        return this.movies.filter(movie => 
            movie.title.toLowerCase().includes(term) ||
            movie.categories.some(cat => cat.toLowerCase().includes(term)) ||
            movie.description.toLowerCase().includes(term)
        );
    }

    // Get similarity explanation
    getSimilarityExplanation(selectedMovie, recommendedMovie) {
        const explanations = [];

        // Category overlap
        const commonCategories = selectedMovie.categories.filter(cat => 
            recommendedMovie.categories.includes(cat)
        );
        if (commonCategories.length > 0) {
            explanations.push(`Shared categories: ${commonCategories.join(', ')}`);
        }

        // Description keywords
        const desc1 = selectedMovie.description.toLowerCase().split(/\s+/);
        const desc2 = recommendedMovie.description.toLowerCase().split(/\s+/);
        const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by']);
        
        const filteredDesc1 = desc1.filter(word => !stopWords.has(word) && word.length > 3);
        const filteredDesc2 = desc2.filter(word => !stopWords.has(word) && word.length > 3);
        const commonWords = filteredDesc1.filter(word => filteredDesc2.includes(word));
        
        if (commonWords.length > 0) {
            explanations.push(`Common themes: ${commonWords.slice(0, 3).join(', ')}`);
        }

        return explanations;
    }
}

// Create recommender instance
const recommender = new MovieRecommender(movies);