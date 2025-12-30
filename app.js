const home = document.getElementById("home");
const games = document.getElementById("games");
const player = document.getElementById("player");
const particlesCanvas = document.getElementById("particles");
const ctx = particlesCanvas.getContext("2d");

document.getElementById("homeBtn").onclick = showHome;
document.getElementById("gamesBtn").onclick = showGames;

document.querySelectorAll(".game-list button").forEach(btn => {
  btn.onclick = () => launchGame(btn.dataset.url);
});

/* NAV */
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

/* PARTICLES */
function resize() {
  particlesCanvas.width = window.innerWidth;
  particlesCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * particlesCanvas.width,
  y: Math.random() * particlesCanvas.height,
  r: Math.random() * 2 + 1,
  vx: Math.random() * 0.5 - 0.25,
  vy: Math.random() * 0.5 - 0.25
}));

function animate() {
  ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.6)";

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();
