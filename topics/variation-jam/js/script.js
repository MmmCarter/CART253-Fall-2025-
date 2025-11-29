/**
 * FrogFrogFrog Variations
 * Haolei Ma
 * 
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 600);
}

/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "variation1":
            redDraw();
            break
        case "variation2":
            greenDraw();
            break;
        case "variation3":
            blueDraw();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "variation1":
            redKeyPressed(event);
            break
        case "variation2":
            greenKeyPressed(event);
            break;
        case "variation3":
            blueKeyPressed(event);
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "variation1":
            redMousePressed();
            break
        case "variation2":
            greenMousePressed();
            break;
        case "variation3":
            blueMousePressed();
            break;
    }
}