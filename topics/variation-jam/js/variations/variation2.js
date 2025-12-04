/**
 * SPLIT PERCEPTION MODE
 * This file contains the code to run *only* the split perception mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let mic; //microphone input
let splitX = 300;
let splitY = 300;
let splitFrogColor = [100, 200, 100]; //current frog color

let smoothVol = 0; //smoothed audio volume
let lastKeyTime = 0; //keyboard typing rhythm
let keySpeed = 0; //color based on typing rhythm
let jitterAmount = 0; //screen jitter intensity

function splitSetup() {
    mic = new p5.AudioIn();
    userStartAudio().then(() => {
        mic.start();
    });

    //reset internal states
    smoothVol = 0;
    keySpeed = 0;
    lastKeyTime = millis();

    splitFrogColor = [100, 200, 100];
}

function splitDraw() {
    //transparent background, creating an afterimage
    background(0, 30);

    noStroke();

    // X follows mouse
    splitX = mouseX;

    let vol = 0;

    // Y follows mic volume
    if (mic) {
        let vol = mic.getLevel();
        smoothVol = lerp(smoothVol, vol, 0.08);
        splitY = map(vol, 0, 0.2, height * 0.7, height * 0.3);
    }

    //sound-based jitter
    jitterAmount = map(vol, 0, 0.3, 0, 10);
    let jitterX = random(-jitterAmount, jitterAmount);
    let jitterY = random(-jitterAmount, jitterAmount);

    //sound-based multi-split vision
    drawAudioAfterimages(splitX, splitY, vol);

    //draw main frog
    drawSplitFrog(splitX + jitterX, splitY + jitterY, splitFrogColor);
}

function splitKeyPressed() {
    let now = millis();
    let delta = now - lastKeyTime;
    lastKeyTime = now;

    //map typing speed → color
    keySpeed = constrain(map(delta, 50, 500, 255, 50), 50, 255);

    splitFrogColor = [
        keySpeed,
        200 - keySpeed * 0.4,
        120 + keySpeed * 0.2
    ];
}

function splitMousePressed() { }

//multi-layer audio afterimage, the louder the sound → the more pronounced the afterimage
function drawAudioAfterimages(x, y, vol) {

    let layers = 4; //number of ghost layers
    let maxOffset = map(vol, 0, 0.2, 10, 60);

    for (let i = layers; i >= 1; i--) {
        let alpha = map(i, 1, layers, 15, 3);
        let offset = i * (vol * 40);

        let ghostColor = [
            splitFrogColor[0],
            splitFrogColor[1],
            splitFrogColor[2],
            alpha
        ];

        drawSplitFrog(x - offset, y, ghostColor);
    }
}

// draw the frog
function drawSplitFrog(x, y, col) {
    push();
    translate(x, y);
    fill(col);
    ellipse(0, 0, 40, 30);

    //audio-reactive eyes
    let eyeShift = map(mic.getLevel(), 0, 0.2, 1, 6);

    fill(255);
    ellipse(-10, -10, 15, 20);
    ellipse(10, -10, 15, 20);
    fill(0);
    ellipse(-10 + eyeShift, -10, 5, 5);
    ellipse(10 - eyeShift, -10, 5, 5);
    pop();
}