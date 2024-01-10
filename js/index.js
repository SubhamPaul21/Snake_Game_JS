import { FOOD_SOUND, GAMEOVER_SOUND, MOVE_SOUND, GAMEPLAY_SOUND } from "./constants.js";

// Variables and Constants
let inputDir = { x: 0, y: 0 };
let speed = 2;
let lastRenderedTime = 0;
let snakeArr = [
    { x: 12, y: 15 },
];
let food = { x: 5, y: 5 };
let score = 0;

// Function Declarations
function main(cTime) {
    window.requestAnimationFrame(main);
    // console.log(`Current Time: ${cTime}`);
    if ((cTime - lastRenderedTime) / 1000 < 1 / speed) {
        return;
    }
    lastRenderedTime = cTime;
    gameEngine();
}

function gameEngine() {
    // Update the snake array
    updateSnake();
    // Update the food
    updateFood();
    let board = document.getElementById("board");
    // declared to remove any redundant items from the board
    board.innerHTML = "";
    // Display/Render the snake in the board
    displaySnake(board);
    // Display/Render the food in the board
    displayFood(board);
}

// Function to check if snake collided with wall
function isCollide() {
    return false;
}

// Function to update snake in the board
function updateSnake() {
    // When snake collides with the wall of the board
    if (isCollide()) {
        GAMEOVER_SOUND.play();
        GAMEPLAY_SOUND.pause();
        inputDir = { x: 0, y: 0 };
        alert("You lost. Press any key to play again!");
        snakeArr = [
            { x: 12, y: 15 },
        ];
        score = 0;
        GAMEPLAY_SOUND.play();
    }
}

// Function to display snake in the board
function displaySnake(board) {
    snakeArr.forEach((element, index) => {
        let snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        if (index === 0) {
            snakeElement.classList.add("snakeHead");
        } else {
            snakeElement.classList.add("snakeBody");
        }
        board.appendChild(snakeElement);
    });
}

// Function to update the food in the board when snake eats it
function updateFood() {
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        // Increment the score when snake eats the food
        score += 1;
        // Move the food to a new random position
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }
}

// Function to display food in the board
function displayFood(board) {
    let foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}

// Main Game Process Starts Here
window.requestAnimationFrame(main);
window.addEventListener('keydown', event => { // start the game on any key down press
    inputDir = { x: 0, y: 1 };
    MOVE_SOUND.play();
    switch (event.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})