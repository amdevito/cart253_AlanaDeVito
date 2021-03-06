/**************************************************
Installation 1 of 3: The Sonic Shape Invader
Alana M DeVito

The Sonic Shape Invader: the Interactive Oscillator Game
Hit circles with your mallet to activate sine wave oscillators.
Hit triangles to activate triangle wave oscillators. Click to activate effects and visuals.
Letting the shapes hit the bottom of the screen will stop the oscillators.
Hitting them again will re-activate the same oscillator. Have fun!

Background video coded by Am DeVito in Hydra Video Synth: https://hydra.ojack.xyz/

Integrated Components:
1. User control - mousePressed and mouseX, mouseY movement controlling mallet and sound effects (filter sweep (cutOff frequency) on the delay is connected to the mouseX position.)
2. Three Classes: sinButton, TriButton and Mallet
3. Multiple results depending on your interaction with the shapes and if you click for the visuals and the effects or not. Also, if you don't interact with the circles they will bounce off screen and disappear!

See all code credits in Gallery README file.
**************************************************/
"use strict";

//setting gravity so that bouncing looks 'real'
let gravityForce = 0.0025;

//setting variable for video background
let mitocybria;

//setting variable for user controlled mallet that activates oscillators
let mallet;

//setting up 'buttons' arrays to activate sin or triangle oscillators
let sinButtons = [];

let triButtons = [];

let numSinButtons = 5;

let numTriButtons = 5;

let instructions = {
  active: true,
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  //setup background video
  mitocybria = createVideo(["assets/images/mitocybria.mov"]);
  mitocybria.hide();

  //recall mallet class here

  mallet = new Mallet(190, 20, 150, 50); //(w, h, malletThickness, malletHeight)

  //loop through sinButton array
  for (let i = 0; i < numSinButtons; i++) {
    let x = random(50, width - 100);
    let y = random(-1000, -150);
    let size = random(30, 180);
    let sinButton = new SinButton(x, y, size);
    sinButtons.push(sinButton);
  }
  //loop through triButton array
  for (let i = 0; i < numTriButtons; i++) {
    let x1 = random(50, width - 100);
    let y1 = random(-1000, -150);
    let x2 = random(x1, x1 + 100);
    let y2 = random(y1, y1 + 100);
    let x3 = random(x2, x2 - 100);
    let y3 = random(y2, y2 - 100);
    let triButton = new TriButton(x1, y1, x2, y2, x3, y3);
    triButtons.push(triButton);
  }
}

function draw() {
  background(149, 37, 186);

  //place video
  imageMode(CENTER);
  image(mitocybria, width / 2, height / 2);

  if (instructions.active) {
    //draw up title and instructions
    push();
    textSize(20);
    fill(255);
    textFont("Monospace");
    text(
      "Welcome to The Sonic Shape Invader \n->TURN YOUR VOLUME DOWN<-\nMOUSE CLICK shows & HIDES INSTRUCTIONS",
      25,
      35
    );
    textSize(18);
    fill(0);
    textFont("Monospace");
    text(
      "\nClick to activate effects \nand visuals. Hit circles with\nyour mallet to activate\nsine wave oscillators.\nHit triangles to \nactivate triangle \nwave oscillators. \nLetting the\nshapes hit\nthe bottom \nscreen of the \nwill stop the\noscillators.",
      25,
      90
    );
    pop();
    push();
    textSize(18);
    fill(0);
    textFont("Monospace");
    textAlign(RIGHT);
    text(
      "Hit your browser's back button to return to the gallery.",
      width - 25,
      35
    );
    pop();

    pop();
    push();
    textSize(18);
    fill(0);
    textFont("Monospace");
    textAlign(RIGHT);
    text(
      "Refresh to randomize frequencies and play again.",
      width - 25,
      height - 55
    );
    pop();

    pop();
    push();
    textSize(18);
    fill(0);
    textFont("Monospace");
    textAlign(LEFT);
    text(
      "Hitting them \nagain will\nre-activate \nthe same oscillator. \nMallet movement changes delay effect\ncutoff frequency (after you have activated it).\nHave fun!",
      25,
      height - 185
    );
    pop();
  }

  //call mallet classes
  mallet.move();
  mallet.display();

  //call sinButton classes, through the arrays
  for (let i = 0; i < sinButtons.length; i++) {
    let sinButton = sinButtons[i];
    sinButton.gravity(gravityForce);
    sinButton.move();
    sinButton.bounce(mallet);
    sinButton.display();
  }

  //call triButton classes, through the arrays
  for (let i = 0; i < triButtons.length; i++) {
    let triButton = triButtons[i];
    triButton.gravity(gravityForce);
    triButton.move();
    triButton.bounce(mallet);
    triButton.display();
    triButton.updateFilter();
  }
}

//set user actions, mousePressed, including calling class methods
function mousePressed() {
  mitocybria.loop();
  for (let i = 0; i < sinButtons.length; i++) {
    let sinButton = sinButtons[i];
    sinButton.mousePressed();
  }
  for (let i = 0; i < triButtons.length; i++) {
    let triButton = triButtons[i];
    triButton.mousePressed();
  }

  if (instructions.active) {
    instructions.active = false;
  } else if (!instructions.active) {
    instructions.active = true;
  }
}
