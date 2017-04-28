import { Circle } from 'Model/Circle';
let canvas;
let context;
let circle1 = new Circle(200, 300, 50, context);
let circle2 = new Circle(400, 550, 150, context, "blue", 5);
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