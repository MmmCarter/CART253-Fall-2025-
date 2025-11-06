/**
 * Lines
 * Pippin Barr
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
    background("pink");

    let x = 0;
    let y = 0;

    while (x <= width) {
        line(x, 0, x, height);
        x += 50;
    }

    while (y <= height) {
        line(0, y, width, y);
        y += 50;
    }


}