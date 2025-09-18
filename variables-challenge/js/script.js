/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
  }
};
// Color variables for the sky
let skyred = 160;
let skygreen = 180;
let skyblue = 200;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    // Color changing over time
    mrFurious.fill.g += random(-0.1,-0.3);
    mrFurious.fill.b += random(-0.1,-0.3);

    // Color changing over time
    skyred += random(-0.1,-0.3);
    skygreen += random(-0.1,-0.3);
    skyblue += random(-0.1,-0.3);

  background(skyred, skygreen, skyblue);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}