/**
 * Super Saiyan Self-Portrait (Art-Jam Assignment)
 * Haolei Ma
 * 
 * This is an interactive self-portrait where a hand follows the mouse cursor.
 * 
 * The self-portrait will be generated the center of the canvas, please take a moment to admire his captivating face.
 * 
 * There is a movable hand that follows your mouse, try to move the hand to touch the eyes of the face (Haolei loves palying with eyes).
 * 
 * 
 */

"use strict";

//Position of the movable hand
let handX, handY;
//Whether the eye is touched
let eyeTouched = false;
//Variables for hair flash effect
let hairFlash = 0;
//Variables for charging
let charging = false;
let chargeGlow = 0;
let shakeOffsetX = 0;
let shakeOffsetY = 0;

//position of the face
const FACE_X = 240;
const FACE_Y = 380;
//eye sizes
const EYEWHITE_SIZE = 50;
const PUPIL_SIZE = 20;

/**
 * Creates the canvas
 */
function setup() {
    // Creates a 480x640 canvas (suitable for mobile as well)
    createCanvas(480, 640);
    handX = width / 2;
    handY = height / 2;

}


/**
 * Draws Haolei's self-portrait
 */
function draw() {
    background(220);

    // Draw the self-portrait
    drawFace();
    drawEyes();
    drawMouth();
    drawHair();
    drawEyebrows();
    drawNose();
    drawEars();

    // Draw the movable hand
    drawHand();

    //hand controlled by mouse
    handX = mouseX;
    handY = mouseY;

    //Determine whwther the hand is touching the eyes
    if (dist(handX, handY, FACE_X - 60, FACE_Y - 20) < EYEWHITE_SIZE / 2 || // Left eye
        dist(handX, handY, FACE_X + 60, FACE_Y - 20) < EYEWHITE_SIZE / 2) { // Right eye
        eyeTouched = true;
    } else {
        eyeTouched = false;
    }

    //Hair flash effect
    if (eyeTouched) {
        hairFlash = sin(frameCount * 0.3) * 50;
    } else {
        hairFlash = 0;
    }
}

/**
 * Draw the face
 */
function drawFace() {
    fill(255, 200, 160);
    noStroke();
    ellipse(FACE_X, FACE_Y, 290, 350);
}

/**
 * Draw the eyes
 */
function drawEyes() {
    //eyes whites (when hand touches, change color randomly)
    stroke(0);
    strokeWeight(1);
    if (eyeTouched) {
        fill(random(255), random(255), random(255));
    } else {
        fill(255);
    }
    ellipse(FACE_X - 60, FACE_Y - 20, EYEWHITE_SIZE, 30);
    ellipse(FACE_X + 60, FACE_Y - 20, EYEWHITE_SIZE, 30);

    //pupils (when hand touches, change color randomly)
    if (eyeTouched) {
        fill(random(255), random(255), random(255));
    } else {
        fill(50, 30, 20);
    }
    ellipse(FACE_X - 60, FACE_Y - 20, PUPIL_SIZE, 20);
    ellipse(FACE_X + 60, FACE_Y - 20, PUPIL_SIZE, 20);

    // details
    fill(255);
    noStroke();
    ellipse(183, 355, 8, 8); // Left
    ellipse(303, 355, 8, 8); // Right

}

/**
 * Draw the mouth
 */
function drawMouth() {
    noFill();
    stroke(200, 50, 50);
    strokeWeight(2);
    if (eyeTouched) {
        arc(240, 480, 120, 50, 0, PI, CHORD); // Open mouth and laugh when hand touched
    } else {
        arc(240, 470, 100, 30, 0, PI); // Smile
    }
}

/**
 * Draw the hair
 */
function drawHair() {
    noStroke();
    if (eyeTouched) {
        // Hair turn into super saiyan style when hand touches the eyes
        fill(255, 215 + hairFlash, 0);
        beginShape();
        vertex(116, 290);
        vertex(364, 290);
        vertex(335, 185);
        vertex(295, 205);
        vertex(265, 180);
        vertex(235, 205);
        vertex(195, 180);
        vertex(175, 205);
        vertex(130, 185);
        endShape(CLOSE);
    } else {
        // Normal hair
        fill(50, 30, 10);
        beginShape();
        vertex(116, 290);
        vertex(364, 290);
        vertex(335, 185);
        vertex(295, 205);
        vertex(265, 180);
        vertex(235, 205);
        vertex(195, 180);
        vertex(175, 205);
        vertex(130, 185);
        endShape(CLOSE);
    }
}

/**
 * Draw the eyebrows
 */
function drawEyebrows() {
    stroke(50, 30, 10);
    strokeWeight(6);
    noFill();
    line(155, 335, 205, 340);
    line(275, 340, 325, 335);
}

/**
 * Draw the nose
 */
function drawNose() {
    noFill();
    stroke(150, 100, 80);
    strokeWeight(2);
    beginShape();
    vertex(240, 370);
    vertex(230, 400);
    vertex(240, 410);
    endShape();
}

/**
 * Draw the ears
 */
function drawEars() {
    fill(255, 220, 190);
    stroke(200, 180, 160);
    strokeWeight(1.5);
    ellipse(90, 380, 40, 60); // Left
    ellipse(390, 380, 40, 60); // Right
}

/**
 * Draw the movable hand
 */
function drawHand() {
    fill(255, 224, 189);
    noStroke();
    ellipse(handX, handY, 60, 80);
}
