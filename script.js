// Sample games data
const games = [
    {
        id: 1,
        title: "Space Invaders",
        description: "Classic arcade space shooter",
        url: "https://play.idevgames.co.uk/game/space-invaders",
        color: "#40e0d0"
    },
    {
        id: 2,
        title: "Asteroids",
        description: "Destroy asteroids in deep space",
        url: "https://play.idevgames.co.uk/game/asteroids",
        color: "#ff00ff"
    },
    {
        id: 3,
        title: "Galaxy Racer",
        description: "Race through cosmic tracks",
        url: "https://play.idevgames.co.uk/game/galaxy-racer",
        color: "#ff9900"
    },
    {
        id: 4,
        title: "Stellar Defense",
        description: "Defend your space station",
        url: "https://play.idevgames.co.uk/game/stellar-defense",
        color: "#00ffaa"
    },
    {
        id: 5,
        title: "Cosmic Puzzle",
        description: "Solve puzzles across galaxies",
        url: "https://play.idevgames.co.uk/game/cosmic-puzzle",
        color: "#aa00ff"
    },
    {
        id: 6,
        title: "Nebula Escape",
        description: "Escape through colorful nebulas",
        url: "https://play.idevgames.co.uk/game/nebula-escape",
        color: "#00aaff"
    }
];

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    setupNavigation();
    setupProxyListener();
});

// Load games into the container
function loadGames() {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-thumbnail" style="background: linear-gradient(45deg, ${game.color}, #000);">
                <i class="fas fa-gamepad"></i>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <button onclick="playGame('${game.url}')" class="btn btn-space" style="width: 100%;">
                    <i class="fas fa-play"></i> Play Now
                </button>
            </div>
        `;
        container.appendChild(gameCard);
    });
}

// Search games
function searchGames() {
    const searchTerm = document.getElementById('gameSearch').value.toLowerCase();
    const container = document.getElementById('gamesContainer');
    const gamesList = container.getElementsByClassName('game-card');
    
    Array.from(gamesList).forEach(card => {
        const title = card.querySelector('.game-title').textContent.toLowerCase();
        const description = card.querySelector('.game-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Play game in proxy
function playGame(url) {
    document.getElementById('proxyUrl').value = url;
    loadProxy();
    document.getElementById('proxy').scrollIntoView({ behavior: 'smooth' });
}

// Proxy functionality
function loadProxy() {
    const urlInput = document.getElementById('proxyUrl').value.trim();
    const proxyFrame = document.getElementById('proxyFrame');
    const proxyLoader = document.getElementById('proxyLoader');
    
    if (!urlInput) {
        alert('Please enter a valid URL');
        return;
    }
    
    // Show loading
    proxyLoader.style.display = 'flex';
    
    // Prepare URL (add https if missing)
    let targetUrl = urlInput;
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        targetUrl = 'https://' + targetUrl;
    }
    
    // Use a CORS proxy to bypass restrictions
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    
    // For security, we'll use an iframe with proper sandboxing
    // Note: For a real proxy, you'd need a backend server
    // This is a simplified frontend-only version
    
    try {
        // Encode the URL for the iframe
        proxyFrame.src = `https://www.google.com/search?igu=1&q=${encodeURIComponent(targetUrl)}`;
        
        // Hide loader after a delay
        setTimeout(() => {
            proxyLoader.style.display = 'none';
        }, 2000);
        
    } catch (error) {
        proxyLoader.style.display = 'none';
        alert('Error loading page. Some sites may be restricted.');
        console.error('Proxy error:', error);
    }
}

// Proxy navigation controls
function goBack() {
    const proxyFrame = document.getElementById('proxyFrame');
    try {
        proxyFrame.contentWindow.history.back();
    } catch (error) {
        console.error('Cannot go back:', error);
    }
}

function goForward() {
    const proxyFrame = document.getElementById('proxyFrame');
    try {
        proxyFrame.contentWindow.history.forward();
    } catch (error) {
        console.error('Cannot go forward:', error);
    }
}

function refreshPage() {
    const proxyFrame = document.getElementById('proxyFrame');
    try {
        proxyFrame.contentWindow.location.reload();
    } catch (error) {
        console.error('Cannot refresh:', error);
    }
}

// Setup proxy frame event listener
function setupProxyListener() {
    const proxyFrame = document.getElementById('proxyFrame');
    const proxyLoader = document.getElementById('proxyLoader');
    
    proxyFrame.addEventListener('load', function() {
        proxyLoader.style.display = 'none';
    });
    
    proxyFrame.addEventListener('error', function() {
        proxyLoader.style.display = 'none';
        alert('Failed to load the page. The site may be blocked or unavailable.');
    });
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Highlight active section
    function updateActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial call
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!event.target.closest('.nav-container') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
