// 100 Fast Loading Games for Nebula
const allGames = [
    // Action Games (1-20)
    {
        id: 1,
        title: "1v1.LOL",
        description: "Battle royale shooter game",
        category: "shooting",
        icon: "fas fa-crosshairs",
        color: "#ef4444",
        url: "https://1v1.lol"
    },
    {
        id: 2,
        title: "PolyTrack",
        description: "Fast-paced racing game",
        category: "racing",
        icon: "fas fa-car",
        color: "#3b82f6",
        url: "https://polytrack.io"
    },
    {
        id: 3,
        title: "Clash of Vikings",
        description: "Viking battle strategy game",
        category: "strategy",
        icon: "fas fa-helmet-battle",
        color: "#f59e0b",
        url: "https://clashofvikings.com"
    },
    {
        id: 4,
        title: "Shell Shockers",
        description: "Multiplayer egg shooter",
        category: "shooting",
        icon: "fas fa-egg",
        color: "#84cc16",
        url: "https://shellshock.io"
    },
    {
        id: 5,
        title: "Krunker.io",
        description: "Fast FPS browser game",
        category: "shooting",
        icon: "fas fa-running",
        color: "#8b5cf6",
        url: "https://krunker.io"
    },
    {
        id: 6,
        title: "Temple Run 2",
        description: "Classic endless runner",
        category: "arcade",
        icon: "fas fa-person-running",
        color: "#f59e0b",
        url: "https://templerun2.com"
    },
    {
        id: 7,
        title: "Slope",
        description: "3D running ball game",
        category: "arcade",
        icon: "fas fa-basketball",
        color: "#6366f1",
        url: "https://slope-game.com"
    },
    {
        id: 8,
        title: "Friday Night Funkin'",
        description: "Rhythm music game",
        category: "music",
        icon: "fas fa-music",
        color: "#ec4899",
        url: "https://fridaynightfunkin.com"
    },
    {
        id: 9,
        title: "Among Us",
        description: "Social deduction game",
        category: "strategy",
        icon: "fas fa-user-astronaut",
        color: "#8b5cf6",
        url: "https://amongus.com"
    },
    {
        id: 10,
        title: "Geometry Dash",
        description: "Rhythm-based platformer",
        category: "arcade",
        icon: "fas fa-shapes",
        color: "#f97316",
        url: "https://geometrydash.io"
    },
    {
        id: 11,
        title: "Subway Surfers",
        description: "Endless running game",
        category: "arcade",
        icon: "fas fa-train-subway",
        color: "#f59e0b",
        url: "https://subwaysurfers.com"
    },
    {
        id: 12,
        title: "Minecraft Classic",
        description: "Browser version of Minecraft",
        category: "adventure",
        icon: "fas fa-cube",
        color: "#10b981",
        url: "https://classic.minecraft.net"
    },
    {
        id: 13,
        title: "Retro Bowl",
        description: "Football management game",
        category: "sports",
        icon: "fas fa-football",
        color: "#06b6d4",
        url: "https://www.retrobowl.me"
    },
    {
        id: 14,
        title: "Cookie Clicker",
        description: "Addictive clicking game",
        category: "idle",
        icon: "fas fa-cookie-bite",
        color: "#8b5cf6",
        url: "https://cookieclicker.com"
    },
    {
        id: 15,
        title: "Tanks 2D",
        description: "Tank battle game",
        category: "action",
        icon: "fas fa-tank",
        color: "#78716c",
        url: "https://tanks2d.com"
    },
    {
        id: 16,
        title: "Stickman Hook",
        description: "Physics swinging game",
        category: "arcade",
        icon: "fas fa-user",
        color: "#fbbf24",
        url: "https://stickmanhook.com"
    },
    {
        id: 17,
        title: "Paper.io 2",
        description: "Territory conquest game",
        category: "strategy",
        icon: "fas fa-map",
        color: "#3b82f6",
        url: "https://paperio2.com"
    },
    {
        id: 18,
        title: "Snake.is MLG",
        description: "Modern snake game",
        category: "arcade",
        icon: "fas fa-snake",
        color: "#10b981",
        url: "https://snake.is"
    },
    {
        id: 19,
        title: "Dino Game",
        description: "Chrome offline dinosaur",
        category: "arcade",
        icon: "fas fa-dinosaur",
        color: "#84cc16",
        url: "https://chromedino.com"
    },
    {
        id: 20,
        title: "FNAF 1",
        description: "Five Nights at Freddy's",
        category: "horror",
        icon: "fas fa-ghost",
        color: "#6b7280",
        url: "https://fnaf1.com"
    },
    // Adventure Games (21-40)
    {
        id: 21,
        title: "Fireboy & Watergirl",
        description: "Puzzle platformer",
        category: "adventure",
        icon: "fas fa-fire",
        color: "#f97316",
        url: "https://fireboyandwatergirl.com"
    },
    {
        id: 22,
        title: "Papa's Burgeria",
        description: "Burger cooking game",
        category: "adventure",
        icon: "fas fa-hamburger",
        color: "#f59e0b",
        url: "https://papasburgeria.com"
    },
    {
        id: 23,
        title: "Papa's Pizzeria",
        description: "Pizza cooking game",
        category: "adventure",
        icon: "fas fa-pizza-slice",
        color: "#ef4444",
        url: "https://papaspizzeria.com"
    },
    {
        id: 24,
        title: "Papa's Freezeria",
        description: "Ice cream shop game",
        category: "adventure",
        icon: "fas fa-ice-cream",
        color: "#06b6d4",
        url: "https://papasfreezeria.com"
    },
    {
        id: 25,
        title: "Run 3",
        description: "Space running game",
        category: "adventure",
        icon: "fas fa-running",
        color: "#8b5cf6",
        url: "https://run3.io"
    },
    {
        id: 26,
        title: "Bloons TD 6",
        description: "Tower defense game",
        category: "strategy",
        icon: "fas fa-meteor",
        color: "#fbbf24",
        url: "https://bloonstd6.com"
    },
    {
        id: 27,
        title: "Bloons TD Battles",
        description: "Tower defense battles",
        category: "strategy",
        icon: "fas fa-tower-broadcast",
        color: "#84cc16",
        url: "https://bloonstdbattles.com"
    },
    {
        id: 28,
        title: "Stick Fight",
        description: "Stick figure fighting",
        category: "action",
        icon: "fas fa-fist-raised",
        color: "#ef4444",
        url: "https://stickfight.com"
    },
    {
        id: 29,
        title: "Drift Hunters",
        description: "Car drifting game",
        category: "racing",
        icon: "fas fa-car-side",
        color: "#3b82f6",
        url: "https://drifthunters.com"
    },
    {
        id: 30,
        title: "Moto X3M",
        description: "Motorbike stunt game",
        category: "racing",
        icon: "fas fa-motorcycle",
        color: "#f59e0b",
        url: "https://motox3m.com"
    },
    {
        id: 31,
        title: "Moto X3M Pool Party",
        description: "Motorbike water park",
        category: "racing",
        icon: "fas fa-water",
        color: "#06b6d4",
        url: "https://motox3mpoolparty.com"
    },
    {
        id: 32,
        title: "Basketball Stars",
        description: "Basketball multiplayer",
        category: "sports",
        icon: "fas fa-basketball",
        color: "#f97316",
        url: "https://basketballstars.io"
    },
    {
        id: 33,
        title: "Soccer Skills",
        description: "Soccer training game",
        category: "sports",
        icon: "fas fa-futbol",
        color: "#10b981",
        url: "https://soccerskills.io"
    },
    {
        id: 34,
        title: "Tennis Masters",
        description: "Tennis multiplayer",
        category: "sports",
        icon: "fas fa-baseball",
        color: "#3b82f6",
        url: "https://tennismasters.io"
    },
    {
        id: 35,
        title: "Hole.io",
        description: "Black hole city game",
        category: "arcade",
        icon: "fas fa-circle",
        color: "#000000",
        url: "https://hole.io"
    },
    {
        id: 36,
        title: "Paper.io",
        description: "Original territory game",
        category: "strategy",
        icon: "fas fa-pen",
        color: "#3b82f6",
        url: "https://paper.io"
    },
    {
        id: 37,
        title: "Agar.io",
        description: "Cell eating game",
        category: "arcade",
        icon: "fas fa-circle",
        color: "#06b6d4",
        url: "https://agar.io"
    },
    {
        id: 38,
        title: "Slither.io",
        description: "Snake multiplayer",
        category: "arcade",
        icon: "fas fa-snake",
        color: "#10b981",
        url: "https://slither.io"
    },
    {
        id: 39,
        title: "Diep.io",
        description: "Tank arena game",
        category: "shooting",
        icon: "fas fa-shield-alt",
        color: "#78716c",
        url: "https://diep.io"
    },
    {
        id: 40,
        title: "Moomoo.io",
        description: "Survival multiplayer",
        category: "survival",
        icon: "fas fa-cow",
        color: "#84cc16",
        url: "https://moomoo.io"
    },
    // More Games (41-60)
    {
        id: 41,
        title: "Surviv.io",
        description: "Battle royale 2D",
        category: "shooting",
        icon: "fas fa-crosshairs",
        color: "#ef4444",
        url: "https://surviv.io"
    },
    {
        id: 42,
        title: "Zombs.io",
        description: "Zombie survival",
        category: "survival",
        icon: "fas fa-skull",
        color: "#6b7280",
        url: "https://zombs.io"
    },
    {
        id: 43,
        title: "Wings.io",
        description: "Plane battle game",
        category: "shooting",
        icon: "fas fa-plane",
        color: "#3b82f6",
        url: "https://wings.io"
    },
    {
        id: 44,
        title: "Flappy Bird",
        description: "Classic flappy game",
        category: "arcade",
        icon: "fas fa-dove",
        color: "#06b6d4",
        url: "https://flappybird.io"
    },
    {
        id: 45,
        title: "Pac-Man",
        description: "Classic arcade game",
        category: "classic",
        icon: "fas fa-ghost",
        color: "#fbbf24",
        url: "https://pacman.com"
    },
    {
        id: 46,
        title: "Tetris",
        description: "Block puzzle game",
        category: "puzzle",
        icon: "fas fa-th",
        color: "#8b5cf6",
        url: "https://tetris.com"
    },
    {
        id: 47,
        title: "Snake",
        description: "Classic snake game",
        category: "classic",
        icon: "fas fa-snake",
        color: "#10b981",
        url: "https://snakegame.io"
    },
    {
        id: 48,
        title: "Space Invaders",
        description: "Classic arcade shooter",
        category: "classic",
        icon: "fas fa-rocket",
        color: "#6366f1",
        url: "https://spaceinvaders.com"
    },
    {
        id: 49,
        title: "Asteroids",
        description: "Classic space game",
        category: "classic",
        icon: "fas fa-meteor",
        color: "#78716c",
        url: "https://asteroids.com"
    },
    {
        id: 50,
        title: "Pong",
        description: "Classic ping pong",
        category: "classic",
        icon: "fas fa-table-tennis",
        color: "#3b82f6",
        url: "https://pong.com"
    },
    // Sports Games (51-70)
    {
        id: 51,
        title: "Basketball.io",
        description: "3D basketball game",
        category: "sports",
        icon: "fas fa-basketball-ball",
        color: "#f97316",
        url: "https://basketball.io"
    },
    {
        id: 52,
        title: "Soccer.io",
        description: "Multiplayer soccer",
        category: "sports",
        icon: "fas fa-futbol",
        color: "#10b981",
        url: "https://soccer.io"
    },
    {
        id: 53,
        title: "Football.io",
        description: "American football",
        category: "sports",
        icon: "fas fa-football-ball",
        color: "#ef4444",
        url: "https://football.io"
    },
    {
        id: 54,
        title: "Hockey.io",
        description: "Ice hockey game",
        category: "sports",
        icon: "fas fa-hockey-puck",
        color: "#3b82f6",
        url: "https://hockey.io"
    },
    {
        id: 55,
        title: "Golf.io",
        description: "Mini golf game",
        category: "sports",
        icon: "fas fa-golf-ball",
        color: "#84cc16",
        url: "https://golf.io"
    },
    {
        id: 56,
        title: "Bowling.io",
        description: "Multiplayer bowling",
        category: "sports",
        icon: "fas fa-bowling-ball",
        color: "#8b5cf6",
        url: "https://bowling.io"
    },
    {
        id: 57,
        title: "Baseball.io",
        description: "Baseball game",
        category: "sports",
        icon: "fas fa-baseball-ball",
        color: "#f59e0b",
        url: "https://baseball.io"
    },
    {
        id: 58,
        title: "Tennis.io",
        description: "Tennis multiplayer",
        category: "sports",
        icon: "fas fa-tennis-ball",
        color: "#fbbf24",
        url: "https://tennis.io"
    },
    {
        id: 59,
        title: "Volleyball.io",
        description: "Beach volleyball",
        category: "sports",
        icon: "fas fa-volleyball-ball",
        color: "#ec4899",
        url: "https://volleyball.io"
    },
    {
        id: 60,
        title: "Badminton.io",
        description: "Badminton game",
        category: "sports",
        icon: "fas fa-feather-alt",
        color: "#06b6d4",
        url: "https://badminton.io"
    },
    // Puzzle Games (61-80)
    {
        id: 61,
        title: "2048",
        description: "Number puzzle game",
        category: "puzzle",
        icon: "fas fa-th-large",
        color: "#f59e0b",
        url: "https://2048game.com"
    },
    {
        id: 62,
        title: "Sudoku",
        description: "Number puzzle",
        category: "puzzle",
        icon: "fas fa-table",
        color: "#3b82f6",
        url: "https://sudoku.com"
    },
    {
        id: 63,
        title: "Chess",
        description: "Classic chess game",
        category: "puzzle",
        icon: "fas fa-chess",
        color: "#78716c",
        url: "https://chess.com"
    },
    {
        id: 64,
        title: "Checkers",
        description: "Draughts game",
        category: "puzzle",
        icon: "fas fa-circle",
        color: "#ef4444",
        url: "https://checkers.com"
    },
    {
        id: 65,
        title: "Mahjong",
        description: "Tile matching game",
        category: "puzzle",
        icon: "fas fa-th",
        color: "#10b981",
        url: "https://mahjong.com"
    },
    {
        id: 66,
        title: "Solitaire",
        description: "Card game",
        category: "puzzle",
        icon: "fas fa-spade",
        color: "#3b82f6",
        url: "https://solitaire.com"
    },
    {
        id: 67,
        title: "Crossword",
        description: "Word puzzle",
        category: "puzzle",
        icon: "fas fa-font",
        color: "#8b5cf6",
        url: "https://crossword.com"
    },
    {
        id: 68,
        title: "Word Search",
        description: "Word finding game",
        category: "puzzle",
        icon: "fas fa-search",
        color: "#06b6d4",
        url: "https://wordsearch.com"
    },
    {
        id: 69,
        title: "Jigsaw Puzzle",
        description: "Picture puzzle",
        category: "puzzle",
        icon: "fas fa-puzzle-piece",
        color: "#ec4899",
        url: "https://jigsawpuzzle.com"
    },
    {
        id: 70,
        title: "Memory Game",
        description: "Card matching",
        category: "puzzle",
        icon: "fas fa-brain",
        color: "#f97316",
        url: "https://memorygame.com"
    },
    // Arcade Games (81-100)
    {
        id: 71,
        title: "Bubble Shooter",
        description: "Bubble popping game",
        category: "arcade",
        icon: "fas fa-bubbles",
        color: "#06b6d4",
        url: "https://bubbleshooter.com"
    },
    {
        id: 72,
        title: "Candy Rain",
        description: "Match 3 game",
        category: "arcade",
        icon: "fas fa-candy-cane",
        color: "#ec4899",
        url: "https://candyrain.com"
    },
    {
        id: 73,
        title: "Fruit Ninja",
        description: "Fruit slicing game",
        category: "arcade",
        icon: "fas fa-apple-alt",
        color: "#ef4444",
        url: "https://fruitninja.com"
    },
    {
        id: 74,
        title: "Angry Birds",
        description: "Bird launching game",
        category: "arcade",
        icon: "fas fa-dove",
        color: "#fbbf24",
        url: "https://angrybirds.com"
    },
    {
        id: 75,
        title: "Cut the Rope",
        description: "Physics puzzle",
        category: "arcade",
        icon: "fas fa-candy",
        color: "#84cc16",
        url: "https://cuttherope.com"
    },
    {
        id: 76,
        title: "Where's My Water",
        description: "Water puzzle game",
        category: "arcade",
        icon: "fas fa-water",
        color: "#3b82f6",
        url: "https://wheresmywater.com"
    },
    {
        id: 77,
        title: "Plants vs Zombies",
        description: "Tower defense",
        category: "strategy",
        icon: "fas fa-leaf",
        color: "#10b981",
        url: "https://pvz.com"
    },
    {
        id: 78,
        title: "Tower Defense",
        description: "Classic TD game",
        category: "strategy",
        icon: "fas fa-tower",
        color: "#78716c",
        url: "https://towerdefense.com"
    },
    {
        id: 79,
        title: "Kingdom Rush",
        description: "Fantasy TD game",
        category: "strategy",
        icon: "fas fa-castle",
        color: "#8b5cf6",
        url: "https://kingdomrush.com"
    },
    {
        id: 80,
        title: "Bloons TD 5",
        description: "Monkey TD game",
        category: "strategy",
        icon: "fas fa-banana",
        color: "#fbbf24",
        url: "https://bloonstd5.com"
    },
    // Shooting Games (81-90)
    {
        id: 81,
        title: "Bullet Force",
        description: "Modern FPS game",
        category: "shooting",
        icon: "fas fa-gun",
        color: "#6b7280",
        url: "https://bulletforce.com"
    },
    {
        id: 82,
        title: "Combat Online",
        description: "2D shooter",
        category: "shooting",
        icon: "fas fa-crosshairs",
        color: "#ef4444",
        url: "https://combatonline.com"
    },
    {
        id: 83,
        title: "SAS Zombie Assault",
        description: "Zombie shooter",
        category: "shooting",
        icon: "fas fa-skull",
        color: "#78716c",
        url: "https://saszombie.com"
    },
    {
        id: 84,
        title: "Madness Combat",
        description: "Stick figure shooter",
        category: "shooting",
        icon: "fas fa-user-injured",
        color: "#ef4444",
        url: "https://madnesscombat.com"
    },
    {
        id: 85,
        title: "Raze",
        description: "Alien shooter",
        category: "shooting",
        icon: "fas fa-alien",
        color: "#84cc16",
        url: "https://raze.com"
    },
    {
        id: 86,
        title: "Strike Force Heroes",
        description: "2D hero shooter",
        category: "shooting",
        icon: "fas fa-user-shield",
        color: "#3b82f6",
        url: "https://strikeforceheroes.com"
    },
    {
        id: 87,
        title: "Boxhead 2Play",
        description: "Zombie defense",
        category: "shooting",
        icon: "fas fa-box",
        color: "#f59e0b",
        url: "https://boxhead2play.com"
    },
    {
        id: 88,
        title: "Sniper Team",
        description: "Sniper game",
        category: "shooting",
        icon: "fas fa-bullseye",
        color: "#10b981",
        url: "https://sniperteam.com"
    },
    {
        id: 89,
        title: "Gun Mayhem",
        description: "Platform shooter",
        category: "shooting",
        icon: "fas fa-gun",
        color: "#ef4444",
        url: "https://gunmayhem.com"
    },
    {
        id: 90,
        title: "Riddle School",
        description: "Escape puzzle game",
        category: "adventure",
        icon: "fas fa-school",
        color: "#fbbf24",
        url: "https://riddleschool.com"
    },
    // Last 10 Games (91-100)
    {
        id: 91,
        title: "Fancy Pants",
        description: "Platform adventure",
        category: "adventure",
        icon: "fas fa-running",
        color: "#8b5cf6",
        url: "https://fancypants.com"
    },
    {
        id: 92,
        title: "Super Smash Flash",
        description: "Fighting game",
        category: "action",
        icon: "fas fa-fist-raised",
        color: "#3b82f6",
        url: "https://supersmashflash.com"
    },
    {
        id: 93,
        title: "Baldi's Basics",
        description: "Horror education",
        category: "horror",
        icon: "fas fa-chalkboard-teacher",
        color: "#fbbf24",
        url: "https://baldisbasics.com"
    },
    {
        id: 94,
        title: "Getting Over It",
        description: "Frustration game",
        category: "arcade",
        icon: "fas fa-mountain",
        color: "#78716c",
        url: "https://gettingoverit.com"
    },
    {
        id: 95,
        title: "Only Up!",
        description: "Climbing game",
        category: "adventure",
        icon: "fas fa-arrow-up",
        color: "#06b6d4",
        url: "https://onlyup.com"
    },
    {
        id: 96,
        title: "Parkour Block 3D",
        description: "Parkour game",
        category: "arcade",
        icon: "fas fa-running",
        color: "#3b82f6",
        url: "https://parkourblock3d.com"
    },
    {
        id: 97,
        title: "Color Switch",
        description: "Color matching",
        category: "arcade",
        icon: "fas fa-palette",
        color: "#ec4899",
        url: "https://colorswitch.com"
    },
    {
        id: 98,
        title: "Helix Jump",
        description: "Ball falling game",
        category: "arcade",
        icon: "fas fa-helmet-safety",
        color: "#8b5cf6",
        url: "https://helixjump.com"
    },
    {
        id: 99,
        title: "Rolling Sky",
        description: "Ball rolling game",
        category: "arcade",
        icon: "fas fa-globe",
        color: "#06b6d4",
        url: "https://rollingsky.com"
    },
    {
        id: 100,
        title: "Stack",
        description: "Block stacking game",
        category: "arcade",
        icon: "fas fa-layer-group",
        color: "#f59e0b",
        url: "https://stackgame.com"
    }
];

// Game Manager
let displayedGames = 20;
let filteredGames = [...allGames];

document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    setupSearch();
    setupCategoryFilter();
    
    // Show game count
    const gameCountElements = document.querySelectorAll('.game-count span');
    gameCountElements.forEach(el => {
        el.textContent = `${allGames.length} Games`;
    });
});

function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = '';
    
    const gamesToShow = filteredGames.slice(0, displayedGames);
    
    if (gamesToShow.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    
    gamesToShow.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => playGame(game);
        
        gameCard.innerHTML = `
            <div class="game-icon" style="background: linear-gradient(45deg, ${game.color}, ${darkenColor(game.color)})">
                <i class="${game.icon}"></i>
            </div>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <span class="game-category">${game.category}</span>
            <button class="game-play" onclick="event.stopPropagation(); playGame(${game.id})">
                <i class="fas fa-play"></i> Play Now
            </button>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
    
    // Hide load more button if all games shown
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedGames >= filteredGames.length ? 'none' : 'block';
    }
}

function darkenColor(color) {
    return color + 'cc';
}

function playGame(gameId) {
    let game;
    if (typeof gameId === 'object') {
        game = gameId;
    } else {
        game = allGames.find(g => g.id === gameId);
    }
    
    if (!game) return;
    
    // Open in new tab for faster loading
    window.open(game.url, '_blank');
    
    // Alternative: Open in modal (slower)
    // openGameModal(game);
}

function openGameModal(game) {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    const loading = document.getElementById('gameLoading');
    const title = document.getElementById('currentGameName');
    
    if (modal && frame && loading && title) {
        title.textContent = game.title;
        modal.style.display = 'flex';
        loading.style.display = 'flex';
        frame.src = game.url;
        
        frame.onload = () => {
            loading.style.display = 'none';
        };
    }
}

function refreshGame() {
    const frame = document.getElementById('gameFrame');
    const loading = document.getElementById('gameLoading');
    
    if (frame && loading) {
        loading.style.display = 'flex';
        frame.contentWindow.location.reload();
        
        setTimeout(() => {
            loading.style.display = 'none';
        }, 1000);
    }
}

function fullscreenGame() {
    const frame = document.getElementById('gameFrame');
    if (!frame) return;
    
    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    } else if (frame.mozRequestFullScreen) {
        frame.mozRequestFullScreen();
    } else if (frame.webkitRequestFullscreen) {
        frame.webkitRequestFullscreen();
    } else if (frame.msRequestFullscreen) {
        frame.msRequestFullscreen();
    }
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    if (modal && frame) {
        modal.style.display = 'none';
        frame.src = '';
    }
}

function setupSearch() {
    const searchBox = document.getElementById('searchBox');
    if (!searchBox) return;
    
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        filterGames(searchTerm, document.getElementById('categoryFilter').value);
    });
}

function setupCategoryFilter() {
    const filter = document.getElementById('categoryFilter');
    if (!filter) return;
    
    filter.addEventListener('change', function() {
        filterGames(document.getElementById('searchBox').value, this.value);
    });
}

function filterGames(searchTerm, category) {
    filteredGames = allGames.filter(game => {
        const matchesSearch = searchTerm === '' || 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = category === 'all' || game.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    displayedGames = 20;
    loadGames();
}

function loadMoreGames() {
    displayedGames += 20;
    loadGames();
}

// Cloak functions
function showCloak() {
    const panel = document.getElementById('cloakPanel');
    if (panel) panel.style.display = 'block';
}

function hideCloak() {
    const panel = document.getElementById('cloakPanel');
    if (panel) panel.style.display = 'none';
}

function cloakTab(title, icon) {
    document.title = title;
    
    // Create favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
    document.head.appendChild(link);
    
    hideCloak();
}

function resetCloak() {
    document.title = '🌌 Nebula - Unblocked Games';
    const link = document.querySelector("link[rel*='icon']");
    if (link) {
        link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌌</text></svg>`;
    }
    hideCloak();
}

// Make functions global
window.playGame = playGame;
window.refreshGame = refreshGame;
window.fullscreenGame = fullscreenGame;
window.closeGame = closeGame;
window.loadMoreGames = loadMoreGames;
window.showCloak = showCloak;
window.hideCloak = hideCloak;
window.cloakTab = cloakTab;
window.resetCloak = resetCloak;
