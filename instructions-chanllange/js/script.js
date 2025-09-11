/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600,600)
    background(0,0,102);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
fill(224,224,224);
ellipse(500,0,400,400);

fill(0,51,25);
rect(0,400,600,300);

fill(0,128,255)
triangle(0, 600, 600, 600, 250, 300);

fill(64,64,64)
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(100, 150, 80, 80, 0, PI + QUARTER_PI);
arc(200, 50, 80, 80, 0, PI + QUARTER_PI);

fill(255,255,0);
rect(230,200,60,80);

fill(255,255,255);
rect(240,279,10,30);
rect(270,279,10,30);
rect(200,235,30,10);
rect(270,235,30,10);

fill(0,0,0);
ellipse(240,220,10,10);
ellipse(270,220,10,10);

fill(102,51,0)
rect(400,300,150,120);
fill(0,102,0)
triangle(475, 250, 400, 300, 550, 300);
}