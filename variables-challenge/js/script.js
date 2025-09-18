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
let sky = {
    r:160,
    g:180,
    b:200,
};

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
    sky.r += random(-0.1,-0.3);
    sky.g += random(-0.1,-0.3);
    sky.b += random(-0.1,-0.3);

  background(sky.r, sky.g, sky.b);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}