// Games data and functionality for NebulaHub

const allGames = [
    // Action Games
    {
        id: 1,
        title: "Space Invaders Extreme",
        description: "Modern take on the classic space shooter",
        category: "action",
        popularity: 95,
        icon: "fas fa-rocket",
        color: "#ff00ff",
        url: "https://archive.org/embed/arcade_spaceinv",
        featured: true
    },
    {
        id: 2,
        title: "Galaxy Warriors",
        description: "Fight through alien invasions across multiple planets",
        category: "action",
        popularity: 88,
        icon: "fas fa-space-shuttle",
        color: "#40e0d0",
        url: "https://www.crazygames.com/embed/space-soldier-shooting",
        featured: true
    },
    {
        id: 3,
        title: "Nebula Runner",
        description: "Endless runner through colorful space tunnels",
        category: "arcade",
        popularity: 92,
        icon: "fas fa-running",
        color: "#ff9900",
        url: "https://www.crazygames.com/embed/tunnel-rush",
        featured: true
    },
    
    // Puzzle Games
    {
        id: 4,
        title: "Cosmic Puzzle",
        description: "Solve puzzles across different galaxies",
        category: "puzzle",
        popularity: 85,
        icon: "fas fa-puzzle-piece",
        color: "#00ffaa",
        url: "https://www.crazygames.com/embed/color-match",
        featured: false
    },
    {
        id: 5,
        title: "Star Match 3",
        description: "Match colorful stars in this space-themed match-3 game",
        category: "puzzle",
        popularity: 90,
        icon: "fas fa-star",
        color: "#aa00ff",
        url: "https://www.crazygames.com/embed/jewel-mine",
        featured: true
    },
    
    // Adventure Games
    {
        id: 6,
        title: "Alien Adventure",
        description: "Explore alien planets and discover secrets",
        category: "adventure",
        popularity: 87,
        icon: "fas fa-user-astronaut",
        color: "#00aaff",
        url: "https://www.crazygames.com/embed/alien-adventure",
        featured: false
    },
    
    // Racing Games
    {
        id: 7,
        title: "Space Racer X",
        description: "High-speed racing through asteroid fields",
        category: "racing",
        popularity: 93,
        icon: "fas fa-car",
        color: "#ff5555",
        url: "https://www.crazygames.com/embed/madalin-stunt-cars-2",
        featured: true
    },
    
    // Strategy Games
    {
        id: 8,
        title: "Galaxy Defense",
        description: "Build defenses against alien invasions",
        category: "strategy",
        popularity: 86,
        icon: "fas fa-shield-alt",
        color: "#ffaa00",
        url: "https://www.crazygames.com/embed/age-of-war-2",
        featured: false
    },
    
    // Classic Games
    {
        id: 9,
        title: "Retro Asteroids",
        description: "Classic asteroids with modern graphics",
        category: "classic",
        popularity: 89,
        icon: "fas fa-meteor",
        color: "#40e0d0",
        url: "https://archive.org/embed/arcade_astdelux",
        featured: true
    },
    {
        id: 10,
        title: "Lunar Lander",
        description: "Navigate your ship safely to the moon's surface",
        category: "simulation",
        popularity: 82,
        icon: "fas fa-moon",
        color: "#cccccc",
        url: "https://www.crazygames.com/embed/lunar-lander",
        featured: false
    },
    
    // Multiplayer Games
    {
        id: 11,
        title: "Space Battle Royale",
        description: "Battle against players in space arenas",
        category: "multiplayer",
        popularity: 96,
        icon: "fas fa-users",
        color: "#ff00ff",
        url: "https://www.crazygames.com/embed/1v1-lol",
        featured: true
    },
    
    // Sports Games
    {
        id: 12,
        title: "Zero-G Soccer",
        description: "Soccer in zero gravity space stations",
        category: "sports",
        popularity: 84,
        icon: "fas fa-futbol",
        color: "#00ff00",
        url: "https://www.crazygames.com/embed/soccer-random",
        featured: false
    }
];

// Load games on games page
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    const loading = document.getElementById('loading');
    const gamesCount = document.getElementById('gamesCount');
    
    if (!gamesGrid) return;
    
    // Clear loading
    if (loading) {
        loading.style.display = 'none';
    }
    
    // Clear grid
    gamesGrid.innerHTML = '';
    
    // Update count
    if (gamesCount) {
        gamesCount.textContent = `${allGames.length} Cosmic Games Available`;
    }
    
    // Add games to grid
    allGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Load featured games on homepage
function loadFeaturedGames() {
    const featuredGames = document.getElementById('featuredGames');
    if (!featuredGames) return;
    
    // Get featured games
    const featured = allGames.filter(game => game.featured).slice(0, 6);
    
    // Add to grid
    featured.forEach(game => {
        const previewCard = document.createElement('div');
        previewCard.className = 'preview-card';
        previewCard.onclick = () => playGame(game.url, game.title);
        
        previewCard.innerHTML = `
            <div class="preview-image" style="background: linear-gradient(45deg, ${game.color}, #000);">
                <i class="${game.icon}"></i>
            </div>
            <div class="preview-content">
                <h4>${game.title}</h4>
                <p>${game.description}</p>
                <button class="play-btn" onclick="event.stopPropagation(); playGame('${game.url}', '${game.title}')">
                    <i class="fas fa-play"></i> Play Now
                </button>
            </div>
        `;
        
        featuredGames.appendChild(previewCard);
    });
}

// Create game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => playGame(game.url, game.title);
    
    card.innerHTML = `
        <div class="game-image" style="background: linear-gradient(45deg, ${game.color}, #000);">
            <i class="${game.icon}"></i>
            <span class="game-category">${game.category.toUpperCase()}</span>
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-meta">
                <span><i class="fas fa-fire"></i> ${game.popularity}%</span>
                <span><i class="fas fa-gamepad"></i> ${game.category}</span>
            </div>
            <button class="play-btn" onclick="event.stopPropagation(); playGame('${game.url}', '${game.title}')">
                <i class="fas fa-play"></i> Launch Game
            </button>
        </div>
    `;
    
    return card;
}

// Play game in modal
function playGame(url, title) {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    
    if (!modal || !gameFrame) {
        // If no modal, open in new tab
        window.open(url, '_blank');
        return;
    }
    
    // Set iframe source
    gameFrame.src = url;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Update page title in modal if needed
    const modalTitle = document.querySelector('.modal-title');
    if (modalTitle) {
        modalTitle.textContent = title;
    }
    
    // Show notification
    if (window.NebulaHub && window.NebulaHub.showNotification) {
        window.NebulaHub.showNotification(`Launching ${title}...`, 'info');
    }
}

// Search games
function searchGames() {
    const searchInput = document.getElementById('searchInput');
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!searchInput || !gamesGrid) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const gameCards = gamesGrid.getElementsByClassName('game-card');
    
    let visibleCount = 0;
    
    Array.from(gameCards).forEach(card => {
        const title = card.querySelector('.game-title').textContent.toLowerCase();
        const description = card.querySelector('.game-description').textContent.toLowerCase();
        const category = card.querySelector('.game-category').textContent.toLowerCase();
        
        if (searchTerm === '' || 
            title.includes(searchTerm) || 
            description.includes(searchTerm) ||
            category.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    if (noResults) {
        if (visibleCount === 0 && searchTerm !== '') {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}

// Sort games
function sortGames() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    
    switch(sortBy) {
        case 'popular':
            allGames.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'newest':
            allGames.sort((a, b) => b.id - a.id);
            break;
        case 'name':
            allGames.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    loadGames();
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        searchGames();
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (gameFrame) {
        gameFrame.src = '';
    }
}

// Fullscreen game
function fullscreenGame() {
    const gameFrame = document.getElementById('gameFrame');
    if (!gameFrame) return;
    
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.mozRequestFullScreen) {
        gameFrame.mozRequestFullScreen();
    } else if (gameFrame.webkitRequestFullscreen) {
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) {
        gameFrame.msRequestFullscreen();
    }
}

// Initialize games page
if (window.location.pathname.includes('games.html')) {
    // Debounce search for better performance
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', 
            window.NebulaHub ? 
            window.NebulaHub.debounce(searchGames, 300) : 
            searchGames
        );
    }
    
    // Close modal when clicking close button
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
}

// Make functions available globally
window.playGame = playGame;
window.searchGames = searchGames;
window.sortGames = sortGames;
window.clearSearch = clearSearch;
window.closeModal = closeModal;
window.fullscreenGame = fullscreenGame;
