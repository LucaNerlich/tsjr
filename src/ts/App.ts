import Circle from './Model/Circle.js';

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

let circle1: Circle = new Circle(200, 300, 50, context);
let circle2: Circle = new Circle(400, 550, 150, context, "blue", 5);

let x: number = 0;

function gameLoop() {
    let start: number = new Date().getTime();

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

    let end: number = new Date().getTime();
    // console.log("Frame produced in: " + (end - start));
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('mainGameCanvas');
    document.addEventListener('keydown', keyboardInput);
    context = canvas.getContext("2d");
    gameLoop();
}

function keyboardInput(event: KeyboardEvent) {
    // PRESS LEFT ARROW
    if (event.keyCode == 37) {
        console.log("Left Key Pressed");
    }
    // PRESS UP ARROW
    else if (event.keyCode == 38) {
        console.log("Up Key Pressed");
    }
    // PRESS RIGHT ARROW
    else if (event.keyCode == 39) {
        console.log("Right Key Pressed");
    }
    // PRESS DOWN ARROW
    else if (event.keyCode == 40) {
        console.log("Down Key Pressed");
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