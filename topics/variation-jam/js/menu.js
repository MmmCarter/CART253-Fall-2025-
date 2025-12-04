/**
 * MENU.JS
 * This menu file contains the code to run *only* the menu part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(1) Delay Frog
(2) Split-Perception Frog
(3) Anti-Control Frog
(ESC) Return to Menu`

let glowPulse = 0;

/**
 * Display the main menu
 */
function menuDraw() {
    background(15, 15, 20);

    //glowing effect
    glowPulse += 0.05;

    //title
    push();
    fill(180 + sin(glowPulse) * 50);//subtle glow
    textSize(50);
    textAlign(CENTER, CENTER);
    text("FROG VARIATIONS", width / 2, 120);
    pop();

    //pixel border frame
    push();
    fill(255);
    strokeWeight(6);
    noFill();
    rect(width / 2 - 220, height / 2 - 140, 440, 280);
    pop();

    //menu text insdie frame
    push();
    fill(240);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed() {
    switch (key.toUpperCase()) {
        case "1":
            state = "delay";
            delaySetup();
            break;

        case "2":
            state = "split";
            splitSetup();
            break;

        case "3":
            state = "anticontrol";
            antiSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}