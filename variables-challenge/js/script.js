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
// The bird which Mr. Furious hates
let bird = {
    // Position
    x: 30,
    y: 30,
    // Dimensions
    size: 50,
    velocity: {
      x: 20,
      y: 2,
    }
 
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
    // Color changing over time for Mr. Furious
    mrFurious.fill.g += random(-0.1,-0.3);
    mrFurious.fill.b += random(-0.1,-0.3);

    // Color changing over time for the sky
    sky.r += random(-0.1,-0.3);
    sky.g += random(-0.1,-0.3);
    sky.b += random(-0.1,-0.3);

    //Bird movement
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;


  background(sky.r, sky.g, sky.b);
  
    
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x + random(-10,10), mrFurious.y, mrFurious.size);

  // Draw the bird as a yellow circle
  fill(255, 255, 0);
  ellipse(bird.x, bird.y, bird.size);
  pop();

}