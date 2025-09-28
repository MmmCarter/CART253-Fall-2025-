/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    // Creates a 480x640 canvas (suitable for mobile as well)
    createCanvas(480, 640);

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
    ellipse(180, 350, 40, 20); // Left
    ellipse(300, 350, 40, 20); // Right

    //pupils
    fill(50, 30, 20);
    ellipse(180, 350, 15, 15);
    ellipse(300, 350, 15, 15);

    // details
    fill(255);
    noStroke();
    ellipse(185, 345, 5, 5);
    ellipse(305, 345, 5, 5);
}

/**
 * Draw the mouth
 */
function drawMouth() {
    noFill();
    stroke(200, 50, 50);
    strokeWeight(2);
    arc(240, 450, 60, 20, 0, PI);
}

/**
 * Draw the hair
 */
function drawHair() {
    fill(50, 30, 10);
    noStroke();
    beginShape();
    vertex(125, 150);
    vertex(275, 150);
    vertex(260, 100);
    vertex(240, 120);
    vertex(220, 80);
    vertex(200, 120);
    vertex(180, 80);
    vertex(160, 120);
    vertex(140, 100);
    endShape(CLOSE);
}
