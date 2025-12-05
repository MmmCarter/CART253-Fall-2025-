/**
 * FrogFrogFrog Variations
 * Haolei Ma
 * 
 * This is a creative interactive project exploring three experimental "frog" variations. Each variation demonstrates unique visual and interactive behaviors, inspired by perception, delay, and anti-control dynamics. 
 * 
 * Menu Navigation:
 * Hover over options and click, or press 1, 2, or 3 to select a variation.
 * Press ESC at any time to return to the menu.
 * 
 * Variation Controls:
 * Delay Frog: Move the mouse to see the real and delayed frogs.
 * 
 * Split-Perception Frog: Move the mouse horizontally, speak or make noise for vertical movement, type keys to affect frog color.
 * 
 * Anti-Control Frog: Move the mouse near the frog to see it evade, watch floating protest text, enjoy the subtle screen shake.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
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

    //Return to the main menu at any time
    if (keyCode === ESCAPE) {
        state = "menu";
        return;
    }

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