// Movie dataset with categories and descriptions - Now includes Bollywood and Hollywood
const movies = [
    // Hollywood Classics & Modern Films
    {
        id: 1,
        title: "The Shawshank Redemption",
        categories: ["Drama", "Crime", "Hope"],
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. A story of hope and friendship in the darkest of places.",
        year: 1994,
        rating: 9.3
    },
    {
        id: 2,
        title: "The Godfather",
        categories: ["Crime", "Drama", "Family"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A tale of power, loyalty, and the American Dream.",
        year: 1972,
        rating: 9.2
    },
    {
        id: 3,
        title: "The Dark Knight",
        categories: ["Action", "Crime", "Superhero"],
        description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy. A psychological battle between order and chaos.",
        year: 2008,
        rating: 9.0
    },
    {
        id: 4,
        title: "Pulp Fiction",
        categories: ["Crime", "Drama", "Dark Comedy"],
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption. Non-linear storytelling at its finest.",
        year: 1994,
        rating: 8.9
    },
    {
        id: 5,
        title: "Inception",
        categories: ["Sci-Fi", "Action", "Mind-bending"],
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Dreams within dreams.",
        year: 2010,
        rating: 8.8
    },
    {
        id: 6,
        title: "The Matrix",
        categories: ["Sci-Fi", "Action", "Philosophy"],
        description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free. Red pill or blue pill?",
        year: 1999,
        rating: 8.7
    },
    {
        id: 7,
        title: "Interstellar",
        categories: ["Sci-Fi", "Drama", "Space"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Love and gravity transcend time and space.",
        year: 2014,
        rating: 8.6
    },
    {
        id: 8,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        categories: ["Fantasy", "Adventure", "Epic"],
        description: "A young hobbit and his companions set out to destroy a powerful ring before it falls into evil hands. An epic journey of friendship and courage.",
        year: 2001,
        rating: 8.8
    },
    {
        id: 9,
        title: "Fight Club",
        categories: ["Drama", "Thriller", "Psychological"],
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more. The first rule of Fight Club...",
        year: 1999,
        rating: 8.8
    },
    {
        id: 10,
        title: "Forrest Gump",
        categories: ["Drama", "Romance", "Inspirational"],
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man. Life is like a box of chocolates.",
        year: 1994,
        rating: 8.8
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Two Towers",
        categories: ["Fantasy", "Adventure", "Epic"],
        description: "The Fellowship is broken, but the quest to destroy the One Ring continues. The forces of good prepare for the ultimate battle against darkness.",
        year: 2002,
        rating: 8.7
    },
    {
        id: 12,
        title: "Goodfellas",
        categories: ["Crime", "Drama", "True Story"],
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners. As far back as I can remember, I always wanted to be a gangster.",
        year: 1990,
        rating: 8.7
    },
    {
        id: 13,
        title: "The Lord of the Rings: The Return of the King",
        categories: ["Fantasy", "Adventure", "Epic"],
        description: "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. The journey ends where it began.",
        year: 2003,
        rating: 8.9
    },
    {
        id: 14,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        categories: ["Sci-Fi", "Adventure", "Space Opera"],
        description: "After the Rebels are brutally overpowered by the Empire, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader. I am your father.",
        year: 1980,
        rating: 8.7
    },
    {
        id: 15,
        title: "The Silence of the Lambs",
        categories: ["Thriller", "Crime", "Psychological"],
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer. Hello, Clarice.",
        year: 1991,
        rating: 8.6
    },
    {
        id: 16,
        title: "Saving Private Ryan",
        categories: ["War", "Drama", "Action"],
        description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action. The mission is the man.",
        year: 1998,
        rating: 8.6
    },
    {
        id: 17,
        title: "The Prestige",
        categories: ["Drama", "Thriller", "Mystery"],
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have. Are you watching closely?",
        year: 2006,
        rating: 8.5
    },
    {
        id: 18,
        title: "The Departed",
        categories: ["Crime", "Drama", "Thriller"],
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston. I don't want to be a product of my environment.",
        year: 2006,
        rating: 8.5
    },
    {
        id: 19,
        title: "Gladiator",
        categories: ["Action", "Drama", "Epic"],
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. Are you not entertained?",
        year: 2000,
        rating: 8.5
    },
    {
        id: 20,
        title: "The Lion King",
        categories: ["Animation", "Adventure", "Family"],
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. The circle of life continues.",
        year: 1994,
        rating: 8.5
    },

    // Bollywood Blockbusters & Classics
    {
        id: 21,
        title: "Dilwale Dulhania Le Jayenge",
        categories: ["Romance", "Drama", "Family"],
        description: "Raj and Simran fall in love during a trip across Europe. However, Simran's strict father has already arranged her marriage to someone else. A timeless love story that redefined Indian cinema.",
        year: 1995,
        rating: 8.8
    },
    {
        id: 22,
        title: "3 Idiots",
        categories: ["Comedy", "Drama", "Education"],
        description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently. All is well!",
        year: 2009,
        rating: 8.4
    },
    {
        id: 23,
        title: "Sholay",
        categories: ["Action", "Adventure", "Classic"],
        description: "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture him. The ultimate Indian action adventure.",
        year: 1975,
        rating: 8.7
    },
    {
        id: 24,
        title: "Lagaan",
        categories: ["Drama", "Sports", "Colonial"],
        description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers. A story of courage, unity, and the human spirit.",
        year: 2001,
        rating: 8.6
    },
    {
        id: 25,
        title: "Dangal",
        categories: ["Sports", "Drama", "Biography"],
        description: "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers, defying societal expectations. A powerful story of determination and female empowerment.",
        year: 2016,
        rating: 8.8
    },
    {
        id: 26,
        title: "PK",
        categories: ["Comedy", "Drama", "Social"],
        description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on society.",
        year: 2014,
        rating: 8.2
    },
    {
        id: 27,
        title: "Bajrangi Bhaijaan",
        categories: ["Drama", "Comedy", "Social"],
        description: "A man with a magnanimous heart helps a mute girl from Pakistan return home. A heartwarming tale of humanity transcending borders and religious differences.",
        year: 2015,
        rating: 8.1
    },
    {
        id: 28,
        title: "Queen",
        categories: ["Drama", "Comedy", "Self-discovery"],
        description: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled. A journey of self-discovery and female empowerment.",
        year: 2013,
        rating: 8.2
    },
    {
        id: 29,
        title: "Gangs of Wasseypur",
        categories: ["Crime", "Drama", "Revenge"],
        description: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations. A gritty crime saga.",
        year: 2012,
        rating: 8.3
    },
    {
        id: 30,
        title: "Barfi!",
        categories: ["Romance", "Comedy", "Drama"],
        description: "Three young people learn that love can neither be defined nor contained by society's definition of normal and abnormal. A beautiful story of unconditional love.",
        year: 2012,
        rating: 8.1
    },
    {
        id: 31,
        title: "Swades",
        categories: ["Drama", "Social", "Patriotic"],
        description: "A successful Indian scientist returns to an Indian village to take his nanny to America with him, rediscovers his roots. A touching tale of homecoming and social responsibility.",
        year: 2004,
        rating: 8.3
    },
    {
        id: 32,
        title: "My Name is Khan",
        categories: ["Drama", "Social", "Romance"],
        description: "An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President of the United States seriously and embarks on a cross-country journey. My name is Khan and I am not a terrorist.",
        year: 2010,
        rating: 8.0
    },
    {
        id: 33,
        title: "Rang De Basanti",
        categories: ["Drama", "Youth", "Patriotic"],
        description: "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters from their past, and the events that lead them to relive the long-forgotten saga of freedom.",
        year: 2006,
        rating: 8.3
    },
    {
        id: 34,
        title: "Taare Zameen Par",
        categories: ["Drama", "Education", "Family"],
        description: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school. Every child is special.",
        year: 2007,
        rating: 8.5
    },

    // Additional Hollywood Films
    {
        id: 35,
        title: "The Godfather Part II",
        categories: ["Crime", "Drama", "Epic"],
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate. The epic continuation of the Corleone saga.",
        year: 1974,
        rating: 9.0
    },
    {
        id: 36,
        title: "Schindler's List",
        categories: ["Drama", "War", "Historical"],
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis. A powerful story of humanity in the darkest times.",
        year: 1993,
        rating: 9.0
    },
    {
        id: 37,
        title: "The Lord of the Rings: The Return of the King",
        categories: ["Fantasy", "Adventure", "Epic"],
        description: "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. The journey ends where it began, with the fate of all realms hanging in the balance.",
        year: 2003,
        rating: 8.9
    },
    {
        id: 38,
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        categories: ["Adventure", "Fantasy", "Comedy"],
        description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies who are now undead. A swashbuckling adventure on the high seas.",
        year: 2003,
        rating: 8.1
    },
    {
        id: 39,
        title: "The Avengers",
        categories: ["Action", "Superhero", "Team-up"],
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity. The ultimate superhero team-up.",
        year: 2012,
        rating: 8.1
    },
    {
        id: 40,
        title: "Jurassic Park",
        categories: ["Sci-Fi", "Adventure", "Thriller"],
        description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose. Welcome to Jurassic Park!",
        year: 1993,
        rating: 8.2
    }
];