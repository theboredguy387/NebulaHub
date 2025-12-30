const home = document.getElementById("home");
const games = document.getElementById("games");
const player = document.getElementById("player");
const body = document.body;

document.getElementById("homeBtn").onclick = showHome;
document.getElementById("gamesBtn").onclick = showGames;

document.querySelectorAll(".game-list button").forEach(btn => {
  btn.onclick = () => launchGame(btn.dataset.url);
});

function showHome() {
  body.className = "home";
  home.style.display = "block";
  games.style.display = "none";
  player.style.display = "none";
  player.src = "";
}

function showGames() {
  body.className = "games";
  home.style.display = "none";
  games.style.display = "block";
  player.style.display = "none";
  player.src = "";
}

function launchGame(url) {
  body.className = "games";
  home.style.display = "none";
  games.style.display = "none";
  player.style.display = "block";
  player.src = url;
}
