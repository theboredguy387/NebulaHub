const categories = ["All", "Arcade", "Favorites"];
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

// Game list: GN-Math games + local demo game
const games = [
  {
    name: "Happy Wheels",
    category: "Arcade",
    path: "https://genizymath.github.io/games/happy-wheels/",
    thumb: "default.png",
    fullscreen: true
  },
  {
    name: "Slope",
    category: "Arcade",
    path: "https://genizymath.github.io/games/slope/",
    thumb: "default.png",
    fullscreen: true
  },
  {
    name: "Run 1",
    category: "Arcade",
    path: "https://genizymath.github.io/games/run-1/",
    thumb: "default.png",
    fullscreen: true
  },
  {
    name: "Sort the Court",
    category: "Arcade",
    path: "https://genizymath.github.io/games/sort-the-court/",
    thumb: "default.png",
    fullscreen: true
  },
  {
    name: "Tag",
    category: "Arcade",
    path: "https://genizymath.github.io/games/tag/",
    thumb: "default.png",
    fullscreen: true
  },
  {
    name: "Ages of Conflict",
    category: "Arcade",
    path: "https://genizymath.github.io/games/ages-of-conflict/",
    thumb: "default.png",
    fullscreen: true
  },
  {
    name: "Demo Click Game",
    category: "Arcade",
    path: "games/game1/index.html",
    thumb: "games/game1/hrm.jpg",
    fullscreen: false
  }
];

let active = "All";

const gamesDiv = document.getElementById("games");
const search = document.getElementById("search");
const tabs = document.getElementById("tabs");
const player = document.getElementById("player");

// Render tabs
categories.forEach(c => {
  const b = document.createElement("button");
  b.textContent = c;
  b.onclick = () => {
    active = c;
    render();
  };
  tabs.appendChild(b);
});

// Toggle favorites
function toggleFav(name) {
  const i = favorites.indexOf(name);
  i > -1 ? favorites.splice(i, 1) : favorites.push(name);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  render();
}

// Render games
function render() {
  gamesDiv.innerHTML = "";
  const term = search.value.toLowerCase();

  games.filter(g => {
    if (active === "Favorites") return favorites.includes(g.name);
    if (active !== "All" && g.category !== active) return false;
    return g.name.toLowerCase().includes(term);
  }).forEach(g => {
    const d = document.createElement("div");
    d.className = "game";
    d.innerHTML = `
      <img src="${g.thumb}" onerror="this.src='default.png'">
      <span>${g.name}</span>
      <small>${g.category}</small>
      <button class="fav">${favorites.includes(g.name) ? "★" : "☆"}</button>
    `;

    d.onclick = () => {
      player.src = g.path;

      // Fullscreen GN-Math games
      if (g.fullscreen) {
        player.style.width = "100%";
        player.style.height = "100vh";
        player.style.position = "fixed";
        player.style.top = 0;
        player.style.left = 0;
        player.style.zIndex = 9999;

        // Hide the rest of the UI
        tabs.style.display = "none";
        gamesDiv.style.display = "none";
        search.style.display = "none";
      } else {
        // Normal local games
        player.style.width = "100%";
        player.style.height = "500px";
        player.style.position = "relative";
        player.style.zIndex = "1";
        tabs.style.display = "flex";
        gamesDiv.style.display = "flex";
        search.style.display = "block";
      }
    };

    d.querySelector(".fav").onclick = e => {
      e.stopPropagation();
      toggleFav(g.name);
    };
    gamesDiv.appendChild(d);
  });
}

// Search input
search.oninput = render;
render();
