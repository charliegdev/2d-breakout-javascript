let canvas = document.getElementById("game-region"),
    ctx = canvas.getContext("2d"),
    x = canvas.width/2,
    y = canvas.height-30,
    dx = 0.5,
    dy = -0.5,
    ballRadius = 20;

function drawBall() {
    "use strict";
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
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

    // collision detection for x direction
    if ((x + dx > canvas.width - ballRadius) || (x + dx < ballRadius)) {
        // keep the y direction going, but reverse the x direction
        dx = -dx;
    }

    // collision detection for y direction
    if ((y + dy > canvas.height - ballRadius) || (y + dy < ballRadius)) {
        // keep the x direction going, but reverse the y direction
        dy = -dy;
    }
}
window.setInterval(draw, 5);

