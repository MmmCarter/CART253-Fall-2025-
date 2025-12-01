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
        case "anticontrol":
            antiDraw();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed() {
    switch (state) {
        case "menu":
            menuKeyPressed();
            break;
        case "delay":
            delayKeyPressed();
            break
        case "split":
            splitKeyPressed();
            break;
        case "anticontrol":
            antiKeyPressed();
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
        case "anticontrol":
            antiMousePressed();
            break;
    }
}