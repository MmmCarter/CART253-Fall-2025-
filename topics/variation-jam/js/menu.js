/**
 * MENU.JS
 * This menu file contains the code to run *only* the menu part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(1) Delay Frog
(2) Variation 2
(3) Variation 3 `

/**
 * Display the main menu
 */
function menuDraw() {
    background(0);
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.key.toUpperCase()) {
        case "1":
            state = "delay";
            delaySetup();
            break;

        case "2":
            state = "2";
            greenSetup();
            break;

        case "3":
            state = "3";
            blueSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}