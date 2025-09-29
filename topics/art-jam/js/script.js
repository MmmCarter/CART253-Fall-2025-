/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//position of the movavle hand
let handX, handY;

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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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

}

/**
 * Draw the face
 */
function drawFace() {
    fill(255, 200, 160);
    noStroke();
    ellipse(240, 380, 290, 350);
}

/**
 * Draw the eyes
 */
function drawEyes() {
    //eyes white
    fill(255);
    stroke(0);
    strokeWeight(1);
    ellipse(180, 360, 50, 25); // Left
    ellipse(300, 360, 50, 25); // Right

    //pupils
    fill(50, 30, 20);
    ellipse(180, 360, 20, 20);
    ellipse(300, 360, 20, 20);

    // details
    fill(255);
    noStroke();
    ellipse(183, 355, 8, 8);
    ellipse(303, 355, 8, 8);
}

/**
 * Draw the mouth
 */
function drawMouth() {
    noFill();
    stroke(200, 50, 50);
    strokeWeight(2);
    arc(240, 470, 100, 30, 0, PI);
}

/**
 * Draw the hair
 */
function drawHair() {
    fill(50, 30, 10);
    noStroke();
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
