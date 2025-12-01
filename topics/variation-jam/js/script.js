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

    // if split perception mode needs microphone
    if (typeof getAudioContext !== "undefined") {
        userStartAudio();
    }
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
        case "split":
            splitDraw();
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
        case "split":
            splitKeyPressed(event);
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
        case "split":
            splitMousePressed();
            break;
        case "3":
            blueMousePressed();
            break;
    }
}