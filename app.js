const home = document.getElementById("home");
const games = document.getElementById("games");
const player = document.getElementById("player");

function showHome() {
  home.style.display = "block";
  games.style.display = "none";
  player.style.display = "none";
  player.src = "";
}

function showGames() {
  home.style.display = "none";
  games.style.display = "block";
  player.style.display = "none";
  player.src = "";
}

function launchGame(url) {
  home.style.display = "none";
  games.style.display = "none";
  player.style.display = "block";
  player.src = url;
}
