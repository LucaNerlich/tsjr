"use strict";
let canvas;
let context;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.arc(400, 400, 100, 0, 2 * Math.PI);
    context.stroke();
}
window.onload = () => {
    canvas = document.getElementById('mainGameCanvas');
    context = canvas.getContext("2d");
    gameLoop();
};
//# sourceMappingURL=App.js.map