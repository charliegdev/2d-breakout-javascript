"use strict";

var canvas = document.getElementById("game-region"),
    ctx = canvas.getContext("2d"),

// starting point of the ball
x = canvas.width / 2,
    y = canvas.height - 60,

// ball moving speed
dx = 2,
    dy = -2,
    ballRadius = 20,

// paddle dimension and starting x position
paddleHeight = 15,
    paddleWidth = 200,
    paddleX = (canvas.width - paddleWidth) / 2,

// handle keyboard press
rightPressed = false,
    leftPressed = false;

function drawBall() {
    "use strict";

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    "use strict";

    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

var counter = 0;
// main draw function, called once every 5ms.
function draw() {
    "use strict";
    // clear the canvas at the start of each frame

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // collision detection for x direction (ball)
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        // keep the y direction going, but reverse the x direction
        dx = -dx;
    }

    // collision detection for y direction (ball)
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        // keep the x direction going, but reverse the y direction
        dy = -dy;
    }

    // movement and collision detection for pedal (horizontally)
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    drawPaddle();

    x += dx;
    y += dy;

    counter++;
    if (counter % 10 === 0) {
        console.log(counter);
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    "use strict";

    if (e.keyCode === 39) {
        rightPressed = true;
    } else if (e.keyCode === 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    "use strict";

    if (e.keyCode === 39) {
        rightPressed = false;
    } else if (e.keyCode === 37) {
        leftPressed = false;
    }
}
window.setInterval(draw, 10);
