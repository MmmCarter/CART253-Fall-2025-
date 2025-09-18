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
    x: 50,
    y: 50,
    // Dimensions
    size: 50,
    // color
    fill: yellow,
    velocity: {
        x: 0,
        y: 0,
    },
    minVelocity: {
        x: -3,
        y: -2,
    },
    maxvelocity: {
        x: 3,
        y: 2,
    },
    acceleration: {
        x: 0.025,
        y: -0.05
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


  background(sky.r, sky.g, sky.b);
  
  bird.velocity.x = bird.velocity.x + bird.acceleration.x;
    bird.velocity.y = bird.velocity.y + bird.acceleration.y;
    
    // NEW! Constrain the bird's velocity
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);
    
    // Move the bird by adding its velocity in x and y
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;
    
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  
  pop();

}