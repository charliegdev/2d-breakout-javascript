let canvas = document.getElementById("game-region"),
    ctx = canvas.getContext("2d"),
    x = canvas.width/2,
    y = canvas.height-30,
    dx = 1,
    dy = -1;

function drawBall() {
    "use strict";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    "use strict";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
window.setInterval(draw, 5);

