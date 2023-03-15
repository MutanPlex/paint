const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#000';

let isDrawing = false;
  canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  });
  
  canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
    }
  });
  
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });