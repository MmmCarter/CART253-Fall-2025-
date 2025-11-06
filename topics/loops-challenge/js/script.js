/**
 * Lines
 * Haolei Ma, Jason Lee
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background(255, 0, 0);


    let x = 0;
    let y = 0;

    for (let i = 0; i <= 5; i++) {
        stroke(100 - i * 5);
        strokeWeight(i);
        colorMode(HSB);

    }

    while (x <= width) {
        line(x, 0, x, height);
        x += 10;
    }

    while (y <= height) {
        line(0, y, width, y);
        y += 15;
    }


}