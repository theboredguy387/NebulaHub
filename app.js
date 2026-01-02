const home = document.getElementById("home");
const games = document.getElementById("games");
const frame = document.getElementById("gameFrame");

function showHome() {
  home.style.display = "flex";
  games.style.display = "none";
  frame.src = "";
}

function showGames() {
  home.style.display = "none";
  games.style.display = "block";
}

function loadGame() {
  // embeddable game, same tab
  frame.src = "https://itch.io/embed-upload/493807?color=000000";
}

showHome();
