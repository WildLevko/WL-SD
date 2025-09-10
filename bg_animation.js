<script>
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Line {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * -h;
    this.len = 50 + Math.random() * 150;
    this.speed = 2 + Math.random() * 5;
    const colors = ['#FF4500', '#32CD32', '#00FFFF', '#FF1493', '#FFD700', '#FFFFFF', '#00FF7F'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = 0.2 + Math.random() * 0.8;
    this.width = 1 + Math.random() * 3;
  }
  update() {
    this.y += this.speed;
    if (this.y > h + this.len) this.reset();
  }
  draw() {
    ctx.strokeStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.lineWidth = this.width;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y - this.len);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

const lines = [];
for (let i = 0; i < 60; i++) {
  lines.push(new Line());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  for (const line of lines) {
    line.update();
    line.draw();
  }
  requestAnimationFrame(animate);
}

animate();
</script>
