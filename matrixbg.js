// Матрица фон
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const letters = 'アァカサタナハマヤャラワガザダバパABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const lettersArr = letters.split('');

const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = [];

function initDrops() {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}
initDrops();

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, index) => {
    const text = lettersArr[Math.floor(Math.random() * lettersArr.length)];
    ctx.fillText(text, index * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[index] = 0;
    }
    drops[index]++;
  });
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
  resizeCanvas();
  initDrops();
});
