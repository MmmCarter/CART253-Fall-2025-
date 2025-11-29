/**
 * DELAY MODE
 * This file contains the code to run *only* the delay mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let delayBuffer = [];
let delayAmount = 30; //frames
let frogX = 300;
let frogY = 300;

function delaySetup() {
    delayBuffer = [];
}

function delayDraw() {
    background(30, 50, 80);
}

function delayKeyPressed(event) { }
function delayMousePressed() { }