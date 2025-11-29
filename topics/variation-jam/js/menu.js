/**
 * MENU.JS
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(1) Variation 1
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
            state = "variation1";
            redSetup();
            break;

        case "2":
            state = "variation2";
            greenSetup();
            break;

        case "3":
            state = "variation3";
            blueSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}