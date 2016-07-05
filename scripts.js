var canvas = document.getElementById("game-region");
var ctx = canvas.getContext("2d");

function draw() {
    "use strict";
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
window.setInterval(draw, 10);

