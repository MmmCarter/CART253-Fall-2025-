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
        case "delay":
            delayDraw();
            break
        case "2":
            greenDraw();
            break;
        case "3":
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
        case "delay":
            delayKeyPressed(event);
            break
        case "2":
            greenKeyPressed(event);
            break;
        case "3":
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
        case "delay":
            delayMousePressed();
            break
        case "2":
            greenMousePressed();
            break;
        case "3":
            blueMousePressed();
            break;
    }
}