/** Main Game Class */
import { Circle } from 'Model/Circle';

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

let circle1: Circle = new Circle(200, 300, 50, context);
let circle2: Circle = new Circle(400, 550, 150, context, "blue", 5);

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.arc(400, 400, 100, 0, 2 * Math.PI);
    context.stroke();

    if (circle1.x++ >= 1280 + circle1.radius) {
        circle1.x = -circle1.radius;
    }

    if (circle2.y++ >= 720 + circle2.radius) {
        circle2.y = -circle2.radius;
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('mainGameCanvas');
    context = canvas.getContext("2d");
    gameLoop();
}