// Матрица фон для страницы банка
const canvas = document.createElement('canvas');
canvas.id = 'matrix-bg';
document.body.prepend(canvas); // Добавляем на фон, под текст

const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const lettersArray = letters.split('');

const fontSize = 16;
let columns = canvas.width / fontSize;
let drops = [];

function initDrops() {
  columns = Math.floor(canvas.width / fontSize);
  drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
}
initDrops();

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // зелёный, матрица
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
  resizeCanvas();
  initDrops();
});
