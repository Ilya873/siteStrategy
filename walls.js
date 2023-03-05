var walls = [
{ x: 100, y: 100, width: 100, height: 200 },
{ x: 200, y: 150, width: 100, height: 300 },
{ x: 300, y: 100, width: 100, height: 200 },
  { x: 190, y: 100, points: [{x: 200, y: 250}, {x: 200, y: 350}, {x: 100, y: 350}], shape: 'triangle' },
  { x: 100, y: 100, points: [{x: 300, y: 250}, {x: 400, y: 350}, {x: 300, y: 350}], shape: 'triangle' }
];

function drawWalls() {
ctx.fillStyle = "black";
for (var i = 0; i < walls.length; i++) {
if (walls[i].shape === 'triangle') {
ctx.beginPath();
ctx.moveTo(walls[i].points[0].x + walls[i].x, walls[i].points[0].y + walls[i].y);
ctx.lineTo(walls[i].points[1].x + walls[i].x, walls[i].points[1].y + walls[i].y);
ctx.lineTo(walls[i].points[2].x + walls[i].x, walls[i].points[2].y + walls[i].y);
ctx.closePath();
ctx.fill();
} else {
ctx.fillRect(walls[i].x, walls[i].y, walls[i].width, walls[i].height);
}
}
}

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWalls();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "red";
  ctx.fill();
}