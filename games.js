// Games for NebulaHub - Play directly on page

const games = [
    {
        id: 1,
        title: "1v1.LOL",
        description: "Popular 1v1 shooting game",
        icon: "fas fa-crosshairs",
        color: "#ef4444",
        url: "https://1v1.lol",
        category: "shooting"
    },
    {
        id: 2,
        title: "Slope",
        description: "3D running ball game",
        icon: "fas fa-running",
        color: "#6366f1",
        url: "https://slope-game.com",
        category: "arcade"
    },
    {
        id: 3,
        title: "Temple Run 2",
        description: "Classic endless runner",
        icon: "fas fa-person-running",
        color: "#f59e0b",
        url: "https://templerun2.com",
        category: "arcade"
    },
    {
        id: 4,
        title: "Minecraft Classic",
        description: "Browser version of Minecraft",
        icon: "fas fa-cube",
        color: "#10b981",
        url: "https://classic.minecraft.net",
        category: "adventure"
    },
    {
        id: 5,
        title: "Cookie Clicker",
        description: "Addictive clicking game",
        icon: "fas fa-cookie-bite",
        color: "#8b5cf6",
        url: "https://cookieclicker.com",
        category: "idle"
    },
    {
        id: 6,
        title: "Retro Bowl",
        description: "Football management game",
        icon: "fas fa-football",
        color: "#06b6d4",
        url: "https://www.retrobowl.me",
        category: "sports"
    },
    {
        id: 7,
        title: "Friday Night Funkin'",
        description: "Rhythm music game",
        icon: "fas fa-music",
        color: "#ec4899",
        url: "https://fridaynightfunkin.com",
        category: "rhythm"
    },
    {
        id: 8,
        title: "Shell Shockers",
        description: "Multiplayer egg shooter",
        icon: "fas fa-egg",
        color: "#84cc16",
        url: "https://shellshock.io",
        category: "shooting"
    },
    {
        id: 9,
        title: "Geometry Dash",
        description: "Rhythm-based platformer",
        icon: "fas fa-shapes",
        color: "#f97316",
        url: "https://geometrydash.io",
        category: "arcade"
    },
    {
        id: 10,
        title: "Among Us",
        description: "Social deduction game",
        icon: "fas fa-user-astronaut",
        color: "#8b5cf6",
        url: "https://amongus.com",
        category: "strategy"
    },
    {
        id: 11,
        title: "Subway Surfers",
        description: "Endless running game",
        icon: "fas fa-train-subway",
        color: "#f59e0b",
        url: "https://subwaysurfers.com",
        category: "arcade"
    },
    {
        id: 12,
        title: "Pac-Man",
        description: "Classic arcade game",
        icon: "fas fa-ghost",
        color: "#fbbf24",
        url: "https://pacman.com",
        category: "classic"
    }
];

let currentGame = null;

// Load games when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Update year
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
    
    loadGames();
    setupSearch();
    setupGamePlayer();
});

// Load games into grid
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => playGame(game);
        
        gameCard.innerHTML = `
            <div class="game-icon" style="background: linear-gradient(45deg, ${game.color}, ${darkenColor(game.color)})">
                <i class="${game.icon}"></i>
            </div>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <span class="game-category">${game.category}</span>
            <button class="btn-small" onclick="event.stopPropagation(); playGame(${JSON.stringify(game)})">
                <i class="fas fa-play"></i> Play
            </button>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Darken color for gradient
function darkenColor(color) {
    return color + '80';
}

// Play game directly on page
function playGame(game) {
    currentGame = game;
    
    // Show game player
    const gamePlayer = document.getElementById('gamePlayer');
    const mainContent = document.getElementById('mainContent');
    const gameTitle = document.getElementById('currentGameTitle');
    const gameFrame = document.getElementById('gameFrame');
    const gameLoading = document.getElementById('gameLoading');
    
    if (gamePlayer && mainContent && gameTitle && gameFrame) {
        // Update title
        gameTitle.textContent = game.title;
        
        // Show player, dim background
        gamePlayer.style.display = 'flex';
        mainContent.classList.add('player-active');
        
        // Show loading
        if (gameLoading) {
            gameLoading.style.display = 'flex';
        }
        
        // Load game
        gameFrame.src = game.url;
        
        // Hide loading when game loads
        gameFrame.onload = function() {
            if (gameLoading) {
                gameLoading.style.display = 'none';
            }
            showGameNotification(`Playing ${game.title}`);
        };
        
        gameFrame.onerror = function() {
            if (gameLoading) {
                gameLoading.style.display = 'none';
            }
            showGameNotification(`Failed to load ${game.title}. Trying alternative...`, 'error');
            
            // Try alternative URL
            setTimeout(() => {
                if (game.alternativeUrl) {
                    gameFrame.src = game.alternativeUrl;
                }
            }, 1000);
        };
    }
}

// Refresh current game
function refreshGame() {
    const gameFrame = document.getElementById('gameFrame');
    const gameLoading = document.getElementById('gameLoading');
    
    if (gameFrame && gameLoading) {
        gameLoading.style.display = 'flex';
        gameFrame.contentWindow.location.reload();
        
        setTimeout(() => {
            gameLoading.style.display = 'none';
        }, 1000);
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

// Close game player
function closeGame() {
    const gamePlayer = document.getElementById('gamePlayer');
    const mainContent = document.getElementById('mainContent');
    const gameFrame = document.getElementById('gameFrame');
    
    if (gamePlayer && mainContent && gameFrame) {
        gamePlayer.style.display = 'none';
        mainContent.classList.remove('player-active');
        gameFrame.src = '';
        currentGame = null;
    }
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const gameCards = document.querySelectorAll('.game-card');
        
        let visibleCount = 0;
        
        gameCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
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
    });
}

// Setup game player event listeners
function setupGamePlayer() {
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGame();
        }
    });
}

// Game notification
function showGameNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'gamepad'}"></i>
        <span style="margin-left: 10px">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Make functions globally available
window.playGame = playGame;
window.refreshGame = refreshGame;
window.fullscreenGame = fullscreenGame;
window.closeGame = closeGame;
