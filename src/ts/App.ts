/** Main Game Class */

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

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
    canvas = <HTMLCanvasElement>document.getElementById('mainGameCanvas');
    context = canvas.getContext("2d");
    gameLoop();
}