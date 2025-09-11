/**
 * Work title: Spongebob at night
 * Author Name: Haolei Ma, Jason Lee, Liam St-Georges

"use strict";

/**
 * Setup for a landscape.
*/
function setup() {
    createCanvas(600,600)
    background(0,0,102);
}


/**
 *
*/
function draw() {
//*Moon
fill(224,224,224);
ellipse(500,0,400,400);

//*Ground
fill(0,51,25);
rect(0,400,600,300);


//*Mountain
fill(0,128,255)
triangle(0, 600, 600, 600, 250, 300);

//*Bats
fill(64,64,64)
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(100, 150, 80, 80, 0, PI + QUARTER_PI);
arc(200, 50, 80, 80, 0, PI + QUARTER_PI);

//*Spongebob body
fill(255,255,0);
rect(230,200,60,80);

//*Spongebob legs and arms
fill(255,255,255);
rect(240,279,10,30);
rect(270,279,10,30);
rect(200,235,30,10);
rect(270,235,30,10);

//*Spongebob eyes
fill(0,0,0);
ellipse(240,220,10,10);
ellipse(270,220,10,10);

//*House
fill(102,51,0)
rect(400,300,150,120);
fill(0,102,0)
triangle(475, 250, 400, 300, 550, 300);
}