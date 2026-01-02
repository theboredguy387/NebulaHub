// Games for NebulaHub

const games = [
    {
        id: 1,
        title: "Space Invaders",
        description: "Classic arcade space shooter",
        icon: "fas fa-rocket",
        color: "#6366f1",
        url: "https://www.crazygames.com/embed/space-invaders"
    },
    {
        id: 2,
        title: "Galaxy Warriors",
        description: "Fight alien invasions",
        icon: "fas fa-space-shuttle",
        color: "#8b5cf6",
        url: "https://www.crazygames.com/embed/space-warrior"
    },
    {
        id: 3,
        title: "Space Racer",
        description: "High-speed space racing",
        icon: "fas fa-car",
        color: "#06b6d4",
        url: "https://www.crazygames.com/embed/space-racer"
    },
    {
        id: 4,
        title: "Cosmic Puzzle",
        description: "Solve space puzzles",
        icon: "fas fa-puzzle-piece",
        color: "#f59e0b",
        url: "https://www.crazygames.com/embed/cosmic-puzzle"
    },
    {
        id: 5,
        title: "Asteroid Attack",
        description: "Destroy asteroids",
        icon: "fas fa-meteor",
        color: "#ef4444",
        url: "https://www.crazygames.com/embed/asteroid-attack"
    },
    {
        id: 6,
        title: "Star Defender",
        description: "Defend your star base",
        icon: "fas fa-shield-alt",
        color: "#10b981",
        url: "https://www.crazygames.com/embed/star-defender"
    },
    {
        id: 7,
        title: "Lunar Lander",
        description: "Land on the moon",
        icon: "fas fa-moon",
        color: "#8b5cf6",
        url: "https://www.crazygames.com/embed/lunar-lander"
    },
    {
        id: 8,
        title: "Alien Shooter",
        description: "Shoot alien invaders",
        icon: "fas fa-user-astronaut",
        color: "#6366f1",
        url: "https://www.crazygames.com/embed/alien-shooter"
    }
];

// Load games when page loads
window.addEventListener('DOMContentLoaded', function() {
    loadGames();
    setupSearch();
});

// Load games into grid
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => playGame(game.url, game.title);
        
        gameCard.innerHTML = `
            <div class="game-icon" style="background: linear-gradient(45deg, ${game.color}, ${darkenColor(game.color)})">
                <i class="${game.icon}"></i>
            </div>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <button class="btn-small" onclick="event.stopPropagation(); playGame('${game.url}', '${game.title}')">
                Play Now
            </button>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Darken color for gradient
function darkenColor(color) {
    // Simple color darkening
    return color + '80'; // Add transparency
}

// Play game
function playGame(url, title) {
    // Open in proxy page
    localStorage.setItem('proxyUrl', url);
    localStorage.setItem('proxyTitle', title);
    window.open('proxy.html', '_blank');
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const gameCards = document.querySelectorAll('.game-card');
        
        gameCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// If on proxy page and has saved URL
if (window.location.pathname.includes('proxy.html')) {
    const savedUrl = localStorage.getItem('proxyUrl');
    if (savedUrl) {
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.value = savedUrl;
            localStorage.removeItem('proxyUrl');
        }
    }
}
