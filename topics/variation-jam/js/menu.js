/**
 * MENU.JS
 * This menu file contains the code to run *only* the menu part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let glowPulse = 0;

//menu entries
const menuItems = [
    { label: "(1) Delay Frog", state: "delay" },
    { label: "(2) Split-Perception Frog", state: "split" },
    { label: "(3) Anti-Control Frog", state: "anticontrol" }
];

//hover direction
let hoverIndex = -1;

/**
 * Display the main menu
 */
function menuDraw() {
    background(8, 8, 12);
    noStroke();

    //glowing effect
    glowPulse += 0.05;

    drawCRTOverlay();

    //title
    push();
    fill(180 + sin(glowPulse) * 60);//subtle glow
    textSize(40);
    textAlign(CENTER, CENTER);
    textFont("monospace");
    text("FROG VARIATIONS", width / 2, 120);
    pop();

    //frame box
    push();
    stroke(255);
    strokeWeight(5);
    noFill();
    rect(width / 2 - 240, height / 2 - 160, 480, 320);
    pop();

    //menu items
    let startY = height / 2 - 60;

    hoverIndex = -1;
    for (let i = 0; i < menuItems.length; i++) {
        let y = startY + i * 50;

        //check hover
        if (mouseX > width / 2 - 180 &&
            mouseX < width / 2 + 180 &&
            mouseY > y - 20 &&
            mouseY < y + 20) {
            hoverIndex = i;
        }

        push();
        textAlign(CENTER, CENTER);
        textSize(24);
        textFont("monospace");

        if (hoverIndex === i) {
            fill(255, 240, 150); //highlight color
            text("> " + menuItems[i].label + " <", width / 2, y);
        } else {
            fill(220);
            text(menuItems[i].label, width / 2, y);
        }
        pop();
    }

    //bottom hint
    push();
    fill(150);
    textSize(14);
    textFont("monospace");
    textAlign(CENTER);
    text("(Use number keys or click)", width / 2, height - 50);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed() {
    switch (key) {
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
    if (hoverIndex !== -1) {
        let chosen = menuItems[hoverIndex].state;

        if (chosen === "delay") {
            state = "delay";
            delaySetup();
        } else if (chosen === "split") {
            state = "split";
            splitSetup();
        } else if (chosen === "anticontrol") {
            state = "anticontrol";
            antiSetup();
        }
    }
}

/**
 * CRT Overlay effect for piexl aesthetic
 */
function drawCRTOverlay() {
    push();
    noStroke();
    fill(255, 255, 255, 15);

    // horizontal lines
    for (let y = 0; y < height; y += 4) {
        rect(0, y, width, 2);
    }

    // slight vignette
    for (let i = 0; i < 10; i++) {
        fill(0, 0, 0, 10);
        rect(i * 3, i * 3, width - i * 6, height - i * 6);
    }

    pop();
}