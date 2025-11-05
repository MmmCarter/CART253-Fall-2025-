/**
 * Frogfrogfrog
 */

"use strict";

// Game states
let gameState = "title"; // title, instructions, game

//Scoring system
let score = 0; // Current score
let comboCount = 0; // Count of hits in a row
let missCount = 0; // Count of misses
let scoreBarmaxWidth = 120; // Maximum width of the score bar
let tongueLaunched = false; //Make sure that a single missile launch is only counted as a hit or a miss once.

// Winning condition
const winningScore = 30;

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 30,
    speedX: 0,
    speedY: 0
};

// Title screen elements
let titleFlies = [];
let titleFrog = {
    x: 580,
    y: 360,
    size: 120,
    tongue: {
        x: 320,
        y: 300,
        state: "idle",
        progress: 0,
        targetX: 0,
        targetY: 0
    }
};

// UI elements
let buttons = [];
let titleAnimationTime = 0;

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();

    // Initialize title screen
    initializeTitleScreen();

    // Create UI buttons
    createButtons();
}

function draw() {
    background("#87ceeb");

    if (gameState === "title") {
        drawTitleScreen();
    } else if (gameState === "instructions") {
        drawInstructionsScreen();
    } else if (gameState === "game") {
        drawGame();
    } else if (gameState === "win") {
        drawWinScreen();
    }
}

function drawGame() {
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    drawScoreBar();

    // Check for winning condition
    if (score >= winningScore) {
        gameState = "win";
    }
}

/**
 * Initializes title screen elements
 */
function initializeTitleScreen() {
    // Create decorative flies for title screen
    for (let i = 0; i < 6; i++) {
        titleFlies.push({
            x: random(width),
            y: random(100, 200),
            size: random(8, 15),
            speedX: random(-1, 1),
            speedY: random(-0.5, 0.5),
            wingAngle: random(TWO_PI)
        });
    }
}

/**
 * Create UI buttons
 */
function createButtons() {
    buttons = [
        {
            x: width / 2,
            y: height / 2 + 40,
            width: 200,
            height: 50,
            text: "Start",
            state: "title"
        },
        {
            x: width / 2,
            y: height / 2 + 100,
            width: 200,
            height: 50,
            text: "Instructions",
            state: "title"
        },
        {
            x: width / 2,
            y: height - 60,
            width: 200,
            height: 50,
            text: "Back",
            state: "instructions"
        },
        {
            x: width / 2,
            y: height - 60,
            width: 200,
            height: 50,
            text: "Play Again",
            state: "win"
        }
    ];
}

/**
 * Draw the title screen
 */
function drawTitleScreen() {
    // Draw background with gradient effect
    drawTitleBackground();

    // Update title animation
    titleAnimationTime += 0.05;

    // Draw decorative elements
    drawTitleDecorations();

    // Draw title
    drawTitleText();

    // Draw buttons
    drawButtons();
}

/**
 * Draw title screen background
 */
function drawTitleBackground() {
    //sky gradient
    for (let y = 0; y < height; y++) {
        let blue = map(y, 0, height, 200, 135);
        stroke(135, 206, blue);
        line(0, y, width, y);
    }

    //Draw clouds
    drawClouds();

    //Draw pond
    fill(30, 144, 255, 150);
    noStroke();
    rect(0, height - 100, width, 100);
}

/**
 * Draw clouds on title screen
 */
function drawClouds() {
    fill(255);
    noStroke();

    //Cloud 1
    ellipse(100 + sin(titleAnimationTime) * 10, 80, 60, 40);
    ellipse(130 + sin(titleAnimationTime) * 10, 70, 70, 50);
    ellipse(160 + sin(titleAnimationTime) * 10, 85, 50, 35);

    //Cloud 2
    ellipse(500 + cos(titleAnimationTime * 0.8) * 15, 120, 70, 45);
    ellipse(530 + cos(titleAnimationTime * 0.8) * 15, 110, 80, 55);
    ellipse(560 + cos(titleAnimationTime * 0.8) * 15, 125, 60, 40);
}

/**
 * Draw title screen decorations
 */
function drawTitleDecorations() {
    // Update and draw title flies
    updateTitleFlies();

    // Draw title frog with animation
    drawTitleFrog();
}

/**
 * Update title screen flies
 */
function updateTitleFlies() {
    for (let i = 0; i < titleFlies.length; i++) {
        let tFly = titleFlies[i];

        //Move fly
        tFly.x += tFly.speedX;
        tFly.y += tFly.speedY;
        tFly.wingAngle += 0.3;

        //Bounce off edges
        if (tFly.x < 0 || tFly.x > width) tFly.speedX *= -1;
        if (tFly.y < 100 || tFly.y > 250) tFly.speedY *= -1;

        //Draw fly
        drawTitleFly(tFly);
    }
}

/**
 * Draw flies for title screen
 */
function drawTitleFly(tFly) {
    push();

    // Body
    fill(0);
    noStroke();
    ellipse(tFly.x, tFly.y, tFly.size);

    // Wings
    let wingSize = map(sin(tFly.wingAngle), -1, 1, tFly.size * 0.3, tFly.size * 0.8);
    fill(255, 200);
    ellipse(tFly.x - tFly.size * 0.3, tFly.y, wingSize, wingSize * 0.4);
    ellipse(tFly.x + tFly.size * 0.3, tFly.y, wingSize, wingSize * 0.4);

    pop();
}

/**
 * Draw title frog
 */
function drawTitleFrog() {
    push();

    // Body
    fill(50, 205, 50);
    noStroke();
    ellipse(titleFrog.x, titleFrog.y, titleFrog.size);

    // Eyes
    fill(255);
    ellipse(titleFrog.x - 30, titleFrog.y - 30, 25);
    ellipse(titleFrog.x + 30, titleFrog.y - 30, 25);
    fill(0);
    ellipse(titleFrog.x - 30, titleFrog.y - 30, 12);
    ellipse(titleFrog.x + 30, titleFrog.y - 30, 12);

    // Animate tongue occasionally
    if (frameCount % 120 === 0 && titleFrog.tongue.state === "idle") {
        titleFrog.tongue.state = "out";
        titleFrog.tongue.progress = 0;
        // Target a random fly
        let targetFly = titleFlies[floor(random(titleFlies.length))];
        titleFrog.tongue.targetX = targetFly.x;
        titleFrog.tongue.targetY = targetFly.y;
    }

    // Handle tongue animation
    if (titleFrog.tongue.state === "out") {
        titleFrog.tongue.progress += 0.1;
        if (titleFrog.tongue.progress >= 1) {
            titleFrog.tongue.state = "back";
        }
    } else if (titleFrog.tongue.state === "back") {
        titleFrog.tongue.progress -= 0.1;
        if (titleFrog.tongue.progress <= 0) {
            titleFrog.tongue.state = "idle";
        }
    }

    // Draw tongue if active
    if (titleFrog.tongue.state !== "idle") {
        let tongueX = lerp(titleFrog.x, titleFrog.tongue.targetX, titleFrog.tongue.progress);
        let tongueY = lerp(titleFrog.y, titleFrog.tongue.targetY, titleFrog.tongue.progress);

        // Tongue line
        stroke("#ff0000");
        strokeWeight(8);
        line(titleFrog.x, titleFrog.y, tongueX, tongueY);

        // Tongue tip
        fill("#ff0000");
        noStroke();
        ellipse(tongueX, tongueY, 15);
    }

    pop();
}

/**
 * Draw title text
 */
function drawTitleText() {
    push();

    // Main title
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(34, 139, 34);
    textStyle(BOLD);
    text("FrogFrogFrog", width / 2, 120);

    // Subtitle
    textSize(24);
    fill(255);
    text("Remastered Edition", width / 2, 170);

    pop();
}

/**
 * Draw UI buttons
 */
function drawButtons() {
    for (let button of buttons) {
        if (button.state !== gameState) continue;

        let isHover = isMouseOverButton(button);

        // Draw button background
        fill(isHover ? [46, 125, 50] : [56, 142, 60]);
        stroke(isHover ? [30, 100, 35] : [40, 120, 45]);
        strokeWeight(2);
        rect(button.x - button.width / 2, button.y - button.height / 2, button.width, button.height, 10);

        // Button text
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(18);
        text(button.text, button.x, button.y);
    }
}

/**
 * Checks if the mouse is over a button
 */
function isMouseOverButton(button) {
    return mouseX > button.x - button.width / 2 &&
        mouseX < button.x + button.width / 2 &&
        mouseY > button.y - button.height / 2 &&
        mouseY < button.y + button.height / 2;
}

/**
 * Draw instructions screen
 */
function drawInstructionsScreen() {
    // Same background with title screen
    drawTitleBackground();

    // Instructions Title
    push();
    textAlign(CENTER, CENTER);
    textSize(36);
    fill(34, 139, 34);
    textStyle(BOLD);
    text("Instructions", width / 2, 60);
    pop();

    // Instructions content
    drawInstructionsContent();

    // Draw buttons
    drawButtons();
}

/**
 * Draw instructions content (Gaming rules)
 */
function drawInstructionsContent() {
    push();
    textAlign(LEFT);
    textSize(16);
    fill(255);
    let instructions = [
        "Game Objective:",
        "Use the frog's tongue to catch as many flies as possible!",
        "",
        "Controls:",
        "Move the frog horizontally by moving your mouse.",
        "Click the mouse to launch the tongue.",
        "",
        "Game Tips:",
        "Predict the flight path of the flies.",
        "Launch the tongue when the flies are approaching.",
        "Continuously catch to obtain a higher score."
    ];

    let startY = 100;
    let lineHeight = 25;

    for (let i = 0; i < instructions.length; i++) {
        let y = startY + i * lineHeight;

        if (instructions[i] === "") {
            // Empty line for spacing
            continue;
        } else {
            // Regular text
            fill(0);
            textSize(16);
        }

        text(instructions[i], 100, y);
    }

    pop();
}

/**
 * Draws the score bar
 */
function drawScoreBar() {
    push();
    textAlign(LEFT, CENTER);
    textSize(18);
    fill(255);
    text("Score: " + score, 20, 25);

    // Draw score bar background
    noStroke();
    fill(255, 255, 255, 80);
    rect(20, 40, scoreBarmaxWidth, 20, 5);

    // Dynamic bar length
    let barWidth = map(score, 0, 30, 0, scoreBarmaxWidth, true);
    fill(50, 205, 50);
    rect(20, 40, barWidth, 20, 5);

    // Combo text
    if (comboCount >= 3) {
        fill(255, 215, 0);
        text("COMBO x" + comboCount, 20, 60);
    }

    pop();
}

/**
 * Draws the win screen
 */
function drawWinScreen() {
    background("#90ee90"); // background

    push();
    textAlign(CENTER, CENTER);
    fill(34, 139, 34);
    textSize(48);
    textStyle(BOLD);
    text("Victory!", width / 2, height / 2 - 60);

    textSize(24);
    fill(0);
    text("Congratulations! You reached " + score + " points!", width / 2, height / 2);

    pop();

    // Draws replay button
    drawButtons();
}

/**
 * Reset the game
 */
function resetGame() {
    score = 0;
    comboCount = 0;
    missCount = 0;
    tongueLaunched = false;
    frog.tongue.state = "idle";
    frog.tongue.y = 480;
    resetFly();
}

/**
 * Moves the fly randomly around the screen
 */
function moveFly() {
    if (random() < 0.05) {
        fly.speedX += random(-1, 1);
        fly.speedY += random(-1, 1);
    }

    fly.speedX = constrain(fly.speedX, -4, 4);
    fly.speedY = constrain(fly.speedY, -4, 4);

    fly.x += fly.speedX;
    fly.y += fly.speedY;

    if (fly.x < 0 || fly.x > width) {
        fly.speedX *= -1;
        fly.x = constrain(fly.x, 0, width);
    }
    if (fly.y < 0 || fly.y > height - 150) {
        fly.speedY *= -1;
        fly.y = constrain(fly.y, 0, height - 150);
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);

    // Draw wings
    fill(255, 200);
    let wingSize = map(sin(frameCount * 0.2), -1, 1, fly.size * 0.3, fly.size * 0.6);
    ellipse(fly.x - fly.size * 0.4, fly.y, wingSize, fly.size * 0.4);
    ellipse(fly.x + fly.size * 0.4, fly.y, wingSize, fly.size * 0.4);
    pop();
}

/**
 * Reset the fly to a random position and random direction
 */
function resetFly() {
    fly.x = random(50, width - 50);
    fly.y = random(50, height / 2);
    fly.speedX = random(-3, 3);
    fly.speedY = random(-3, 3);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        if (tongueLaunched) {
            // Launch is over and miss the hit
            missCount++;
            comboCount = 0;
            tongueLaunched = false;

            if (missCount >= 3) {
                score -= 5;
                missCount = 0
                score = Math.max(score, 0);
            }
        }
        // nothing else when idle
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);

    // Eyes follow the fly
    let eyeOffsetMax = 14; // Maximum offset for the eyes
    let leftEyeBase = { x: frog.body.x - 55, y: frog.body.y - 55 };
    let rightEyeBase = { x: frog.body.x + 55, y: frog.body.y - 55 };

    //Each eye rotates according to its own direction and the direction of the fly.
    let leftAngle = atan2(fly.y - leftEyeBase.y, fly.x - leftEyeBase.x);
    let rightAngle = atan2(fly.y - rightEyeBase.y, fly.x - rightEyeBase.x);

    // Calculate the offset of each eye
    let leftEyeOffsetX = cos(leftAngle) * eyeOffsetMax;
    let leftEyeOffsetY = sin(leftAngle) * eyeOffsetMax;
    let rightEyeOffsetX = cos(rightAngle) * eyeOffsetMax;
    let rightEyeOffsetY = sin(rightAngle) * eyeOffsetMax;

    // Eye white
    fill(255);
    ellipse(leftEyeBase.x, leftEyeBase.y, 25);
    ellipse(rightEyeBase.x, rightEyeBase.y, 25);

    // Pupils
    fill(0);
    ellipse(leftEyeBase.x + leftEyeOffsetX * 0.6, leftEyeBase.y + leftEyeOffsetY * 0.6, 12);
    ellipse(rightEyeBase.x + rightEyeOffsetX * 0.6, rightEyeBase.y + rightEyeOffsetY * 0.6, 12);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";

        //Scoring logic
        comboCount++;
        missCount = 0;

        if (comboCount <= 3) {
            score += 1; // 1 point for combos before 3
        } else {
            score += 3; // 3 points for combos of 3 or more
        }

        // Reset tongue launch status
        tongueLaunched = false;

        // The score cannot be negative
        score = Math.max(score, 0);
    }
}

/**
 * Handle mouse clicks for UI and game interactions
 */
function mousePressed() {
    // Check buttons
    for (let button of buttons) {
        if (button.state === gameState && isMouseOverButton(button)) {
            if (button.text === "Start") {
                resetGame();
                gameState = "game";
            } else if (button.text === "Instructions") {
                gameState = "instructions";
            } else if (button.text === "Back") {
                gameState = "title";
            } else if (button.text === "Play Again") {
                resetGame();
                gameState = "title";
            }
            return;
        }
    }

    // Click within the game
    if (gameState === "game") {
        if (frog.tongue.state === "idle") {
            frog.tongue.state = "outbound";
            tongueLaunched = true;
        }
    }
}