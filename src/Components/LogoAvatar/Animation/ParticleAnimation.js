export function drawImage(ctx, canvas, mouse, particleArray, png) {
  let imageWidth = png.width || png.naturalWidth;
  let imageHeight = png.height || png.naturalHeight;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  class Particle {
    constructor(x, y, color, size) {
      this.x = x + canvas.width / 4 - png.width;
      this.y = y + canvas.height / 4 - png.width;
      this.color = color;
      this.size = 2;
      this.baseX = x + canvas.width / 4 - png.width;
      this.baseY = y + canvas.height / 4 - png.width;
      this.density = Math.random() * 10 + 2;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update() {
      ctx.fillStyle = this.color;
      // check mouse position/particle position - collision detection
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      // distance past which the force is zero
      var maxDistance = 80;
      var force = (maxDistance - distance) / maxDistance;

      // if we go below zero, set it to zero.
      if (force < 0) force = 0;

      let directionX = forceDirectionX * force * this.density * 0.9;
      let directionY = forceDirectionY * force * this.density * 0.9;

      if (distance < mouse.radius + this.size) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          // let dy = this.y - this.baseY;
          this.x -= dx / 5;
        }
        if (this.y !== this.baseY) {
          // let dx = this.x - this.baseX;
          let dy = this.y - this.baseY;
          this.y -= dy / 5;
        }
      }
      this.draw();
    }
  }
  function init() {
    particleArray = [];

    for (var y = 0, y2 = data.height; y < y2; y++) {
      for (var x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
          let positionX = x;
          let positionY = y;
          let color =
            "rgb(" +
            data.data[y * 4 * data.width + x * 4] +
            "," +
            data.data[y * 4 * data.width + x * 4 + 1] +
            "," +
            data.data[y * 4 * data.width + x * 4 + 2] +
            ")";

          particleArray.push(new Particle(positionX * 4, positionY * 4, color));
        }
      }
    }
  }
  function animate() {
    if (canvas.width !== 400 || canvas.height !== 400) {
      canvas.width = 400;
      canvas.height = 400;
    }
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }
  init();
  animate();
}
