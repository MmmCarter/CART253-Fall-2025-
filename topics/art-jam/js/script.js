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