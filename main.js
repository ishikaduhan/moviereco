// Main application logic
let selectedMovie = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayMovies(movies);
    setupSearch();
});

// Display all movies in the grid
function displayMovies(moviesToDisplay) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';

    moviesToDisplay.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });
}

// Create a movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <div class="movie-header">
            <h3>${movie.title}</h3>
            <span class="movie-year">${movie.year}</span>
        </div>
        <div class="movie-categories">
            ${movie.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
        </div>
        <div class="movie-rating">
            <i class="fas fa-star"></i>
            <span>${movie.rating}</span>
        </div>
        <div class="movie-description">
            ${movie.description.substring(0, 120)}...
        </div>
        <button class="select-btn" onclick="selectMovie(${movie.id})">
            <i class="fas fa-heart"></i> Select Movie
        </button>
    `;
    return card;
}

// Handle movie selection
function selectMovie(movieId) {
    selectedMovie = movies.find(m => m.id === movieId);
    if (!selectedMovie) return;

    // Update selected movie section
    const selectedSection = document.getElementById('selectedMovie');
    const selectedTitle = document.getElementById('selectedTitle');
    const selectedCategories = document.getElementById('selectedCategories');
    const selectedDescription = document.getElementById('selectedDescription');

    selectedTitle.textContent = selectedMovie.title;
    selectedCategories.innerHTML = selectedMovie.categories.map(cat => 
        `<span class="category-tag">${cat}</span>`
    ).join('');
    selectedDescription.textContent = selectedMovie.description;
    
    selectedSection.style.display = 'block';

    // Get and display recommendations
    const recommendations = recommender.getRecommendations(movieId);
    displayRecommendations(recommendations);

    // Scroll to selected movie
    selectedSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Display movie recommendations
function displayRecommendations(recommendations) {
    const recommendationsSection = document.getElementById('recommendations');
    const recommendationGrid = document.getElementById('recommendationGrid');
    
    recommendationGrid.innerHTML = '';

    if (recommendations.length === 0) {
        recommendationGrid.innerHTML = '<p class="no-recommendations">No similar movies found. Try selecting a different movie!</p>';
    } else {
        recommendations.forEach(movie => {
            const card = createRecommendationCard(movie);
            recommendationGrid.appendChild(card);
        });
    }

    recommendationsSection.style.display = 'block';
}

// Create a recommendation card element
function createRecommendationCard(movie) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const explanations = recommender.getSimilarityExplanation(selectedMovie, movie);
    
    card.innerHTML = `
        <div class="rec-header">
            <h3>${movie.title}</h3>
            <div class="similarity-score">
                <i class="fas fa-percentage"></i>
                <span>${movie.similarityScore}%</span>
            </div>
        </div>
        <div class="movie-categories">
            ${movie.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
        </div>
        <div class="movie-rating">
            <i class="fas fa-star"></i>
            <span>${movie.rating}</span>
            <span class="movie-year">${movie.year}</span>
        </div>
        <div class="movie-description">
            ${movie.description.substring(0, 120)}...
        </div>
        <div class="similarity-reasons">
            <h4>Why recommended:</h4>
            <ul>
                ${explanations.map(exp => `<li>${exp}</li>`).join('')}
            </ul>
        </div>
        <button class="select-btn" onclick="selectMovie(${movie.id})">
            <i class="fas fa-heart"></i> Select This Movie
        </button>
    `;
    return card;
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('movieSearch');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        
        if (searchTerm.length === 0) {
            searchResults.style.display = 'none';
            displayMovies(movies);
            return;
        }

        const results = recommender.searchMovies(searchTerm);
        
        if (results.length > 0) {
            searchResults.innerHTML = results.slice(0, 5).map(movie => `
                <div class="search-result-item" onclick="selectMovie(${movie.id}); searchInput.value=''; searchResults.style.display='none';">
                    <strong>${movie.title}</strong> (${movie.year})
                    <div class="search-categories">
                        ${movie.categories.slice(0, 2).join(', ')}
                    </div>
                </div>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="no-results">No movies found</div>';
            searchResults.style.display = 'block';
        }

        // Display filtered results in grid
        displayMovies(results);
    });

    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});