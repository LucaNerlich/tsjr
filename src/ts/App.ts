import Circle from './Model/Circle.js';

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let circle1: Circle;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.arc(1280 / 2, 720 / 2, 100, 0, 2 * Math.PI);
    context.stroke();

    circle1.draw();

    if (circle1.x++ >= 1280 + circle1.radius) {
        circle1.x = -circle1.radius;
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('mainGameCanvas');
    document.addEventListener('keydown', keyboardInput);
    context = canvas.getContext("2d");
    circle1 = new Circle(200, 300, 50, context);
    gameLoop();
}

function keyboardInput(event: KeyboardEvent) {
    // PRESS LEFT ARROW
    if (event.keyCode == 37) {
        circle1.moveLeft();
    }
    // PRESS UP ARROW
    else if (event.keyCode == 38) {
        circle1.moveUp();
    }
    // PRESS RIGHT ARROW
    else if (event.keyCode == 39) {
        circle1.moveRight();
    }
    // PRESS DOWN ARROW
    else if (event.keyCode == 40) {
        circle1.moveDown();
    }
    // PRESS SPACE BAR
    else if (event.keyCode == 32) {
        console.log("Space Key Pressed");
    }
    // PRESS BACKSPACE BAR
    else if (event.keyCode == 8) {
        console.log("Backspace Key Pressed");
    }
}