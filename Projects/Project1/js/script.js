/**************************************************
Alana DeVito
CART 253 -
Project 1:
Tumbling through Madness: The Great White Squirrel Caper of 2020

3 level Simulation GAME.

You are the white squirrel, just enjoying a regular day in the park, running away from dogs and collecting acorns. Control the squirrel with the arrow keys and avoid touching dogs. Your acorn counter will be on the left hand of the screen in brown with a neon green stroke border (for the entire game). Collect 6 acorns and win the level.

Level 2, things get crazy! Collect loaves of homemade sourdough bread while avoiding the
Anti-Mask protestors who have taken over your beloved park! Careful! They are spreading covid around the park (don't touch the red Covid dots!). You can throw acorns at the Anti-Maskers to fend them off (using either SHIFT key), but the acorns will not deter the COVID! Collect 6 loaves of bread to move on to level 3.

Level 3, take back the park! Team up with the Black Squirrel and fight off the warms of WASPS  invading the park. You can play with two hands, controlling each squirrel or play in 2 player game mode (just ask a friend to play with you!). Black squirrel is controlled using AWSD keys and Q to shoot acorns. Shoot 6 WASPS and WIN THE GAME!

HAVE FUN AND TAKE BACK THE PARK!

**************************************************/
//Set up objects for game play

//OPENING:
//enter Screen//After clicking to continue music should start with the title screen.//make this screen early internet style? photo?// or just in american typewriter?

'use strict';

let mainTheme;

let enterScreen = {
  string: `Error 404: Gender Not Found. \n Please click to Continue.`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//title//
let title = {
  string: `Tumbling Through Madness: \n The Great White Squirrel Caper of 2020`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//instructions//
let instruction1 = {
  string: `Level ONE: \n It all Started like any Other Day... \n\n HOW TO PLAY: Use the arrow keys to control the white squirrel. \n Collect 6 acorns to win. \n Be careful! The dogs are out to play today! \n When you're ready... \n CLICK TO START THE GAME!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction2 = {
  string: `Level TWO: \n Let the Madness Begin... \n\n HOW TO PLAY: Use the arrow keys to control the white squirrel, \n and press SHIFT to shoot acorns! \n Collect 6 loaves of homemade sourdough bread to win. \n Be careful! \n The Anti-Mask Protestors have taken over the park and are spreading the Virus! \n Studies haven't shown that white squirrels are immune yet...\n When you're ready... \n CLICK TO START!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

let instruction3 = {
  string: `Level THREE: \n Take Back the Park! \n\n HOW TO PLAY: \n Team Up with black squirrel and fight off the growing swarms of WASPS! \n Use the arrow keys to control the white squirrel and hit SHIFT to shoot acorns. \n Use AWSD keys to control the black squirrel and 'Q' to shoot. \n Hit 6 wasps and they just might retreat! \n When you're ready... \n CLICK TO START!`,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  size: 0,
};

//GENERAL OBJECTS

//keyboard control
let keyboardControl = {
  left: 8,
  right: 8,
  up: 10,
  down: 10
}

//backdrops
//level one background
let bg;
//level two background
let bg2;
//level three background
let bg3;
//all level game over
let bgGameOver;

//WHITE SQUIRREL
//set squirrel objects
let squirrel = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}


//squirrel WIN screens
let squirrelWin = {
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

let squirrelWin2 = { //squirrel with bread
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

//black and white squirrel win, final screen
let squirrelBothWin = {
  x: 575,
  y: 400,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}

//BLACK SQUIRREL
let squirrel2 = {
  x: 100,
  y: 340,
  vx: 0,
  vy: 0,
  image: 0,
  ax: 0,
  ay: 0
}


//SCORE DOTS//
let score = 0;
let scoreDots = {
  x: 450,
  y: 340,
  radius: 50,
  offset1: 55,
  offset2: 110,
  offset3: 165,
  offset4: 220,
  r: 94,
  g: 69,
  b: 35
}

//LEVEL specific OBJECTS

//LEVEL1:
//setting Acorns to Collect
let acorn1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 5,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn2 = {
  x: -650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 10,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn3 = {
  x: -750,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 5,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn4 = {
  x: -850,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn5 = {
  x: -950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 5,
  image: 0,
  ax: 0,
  ay: 0
}
let acorn6 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained acorn spawn//
let randomAcornSpawn = {
  min:575,
  max:770
}

//DOGS
///setting dog objects
let dog1 = {
  x: 1400,
  y: 500,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let dog2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let dog3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let dog4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let dog5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained dog spawn//
let randomDogSpawn = {
  min:575,
  max:770
}


//LEVEL 2:
//Bread to Collect
let bread1 = {
  x: -450,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread2 = {
  x: -750,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 10,
  image: 0,
  ax: 0,
  ay: 0
}
let bread3 = {
  x: -1050,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread4 = {
  x: -1350,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}
let bread5 = {
  x: -1650,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 3,
  image: 0,
  ax: 0,
  ay: 0
}
let bread6 = {
  x: -1950,
  y: 775,
  vx: 0,
  vy: 0,
  speed: 8,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained bread spawn//
let randomBreadSpawn = {
  min:575,
  max:770
}

//Anti-maskers
///setting anti-masker character objects
let antiMasker1 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0
}
let antiMasker6 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -4,
  image: 0,
  ax: 0,
  ay: 0
}

//Contained AntiMasker spawn//
let randomAntiMaskerSpawn = {
  min:575,
  max:770
}

//Covid Virus' that shoot from anti-maskers
let covid1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid2 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}
let covid3 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  r: 255,
  g: 0,
  b: 0,
  fired: false
}


//LEVEL 3:
//Wacky wasps
///setting wasp character objects
let wasp1 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -5,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp2 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -8,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp3 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -2,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp4 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -10,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp5 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp6 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp7 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}
let wasp8 = {
  x: 1400,
  y: 0,
  vx: 0,
  vy: 0,
  speed: -3,
  image: 0,
  ax: 0,
  ay: 0,
  active: true
}

//Contained wasp spawn//
let randomWaspSpawn = {
  min:575,
  max:770
}


//acorn Bullets (3 each for BS and WS) -- start with brown dots, change to the images later?
let acornBullet1 = {
  x: 0,
  y: 0,
  image: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  fired: false
}
let acornBullet2 = {
  x: 0,
  y: 0,
  image: 0,
  speed: 0,
  vx: 0,
  vy: 0,
  fired: false
}

//set inital state
let state = 'enter'; //different states: enter>title>level1>gameover>win>level2>level3

//Set up Functions
function setUpEnterScreen() {
  enterScreen.x = width / 2;
  enterScreen.y = height/2;
  enterScreen.vx = unit(5);
  enterScreen.vy = unit(1);
  enterScreen.size = unit(30);
}



function setUpTitle() {
  title.x = width / 2;
  title.y = height;
  title.vx = unit(5);
  title.vy = unit(1);
  title.size = unit(60);
}
function setUpInstruction1() {
  instruction1.x = width / 2;
  instruction1.y = height;
  instruction1.vx = unit(5);
  instruction1.vy = unit(1);
  instruction1.size = unit(30);
}

function setUpInstruction2() {
  instruction2.x = width / 2;
  instruction2.y = height;
  instruction2.vx = unit(5);
  instruction2.vy = unit(1);
  instruction2.size = unit(25);
}
function setUpInstruction3() {
  instruction3.x = width / 2;
  instruction3.y = height;
  instruction3.vx = unit(5);
  instruction3.vy = unit(1);
  instruction3.size = unit(25);
}

function setUpScoreDots() {
  scoreDots.x = unit(30);
  scoreDots.y = unit(220);
  scoreDots.radius = unit(10);
  scoreDots.offset1 = unit(10.75);
  scoreDots.offset2 = unit(21);
  scoreDots.offset3 = unit(31);
  scoreDots.offset4 = unit(41);
}

function setUpSquirrelWin() {
  squirrelWin.x = width / 2;
  squirrelWin.y = height / 2;
  squirrelWin2.x = width/ 2;
  squirrelWin2.y = height / 2;
  squirrelBothWin.x = width / 2;
  squirrelBothWin.y = height / 2;
}


function setUpSpawn() {
  //L1
randomDogSpawn.min = unit(380);
randomDogSpawn.max = unit(600);

randomAcornSpawn.min = unit(480);
randomAcornSpawn.max = unit(600);

  //L2
randomAntiMaskerSpawn.min = unit(380);
randomAntiMaskerSpawn.max = unit(600);

randomBreadSpawn.min = unit(480);
randomBreadSpawn.max = unit(600);

  //L3
randomWaspSpawn.min = 0;
randomWaspSpawn.max = unit(50);

}

//LEVEL ONE: setups

function setUpDogs() {
  dog1.x = width;
  dog1.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog1.vx = dog1.speed;

  dog2.x = width;
  dog2.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog2.vx = dog2.speed;

  dog3.x = width;
  dog3.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog3.vx = dog3.speed;

  dog4.x = width;
  dog4.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog4.vx = dog4.speed;

  dog5.x = width;
  dog5.y = random(randomDogSpawn.min, randomDogSpawn.max);
  dog5.vx = dog5.speed;
}

function setUpAcorns() {
  acorn1.x = -450;
  acorn1.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  acorn1.vx = acorn1.speed;

  acorn2.x = -600;
  acorn2.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  acorn2.vx = acorn2.speed;

  acorn3.x = -750;
  acorn3.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  acorn3.vx = acorn3.speed;

  acorn4.x = -900;
  acorn4.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  acorn4.vx = acorn4.speed;

  acorn5.x = -1050;
  acorn5.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  acorn5.vx = acorn5.speed;

  acorn6.x = -1200;
  acorn6.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  acorn6.vx = acorn6.speed;

}


///LEVEL TWO: setups
function setUpAntiMaskers() {
  antiMasker1.x = width;
  antiMasker1.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  antiMasker1.vx = antiMasker1.speed;

  antiMasker2.x = width;
  antiMasker2.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  antiMasker2.vx = antiMasker2.speed;

  antiMasker3.x = width;
  antiMasker3.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  antiMasker3.vx = antiMasker3.speed;

  antiMasker4.x = width;
  antiMasker4.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  antiMasker4.vx = antiMasker4.speed;

  antiMasker5.x = width;
  antiMasker5.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  antiMasker5.vx = antiMasker5.speed;

  antiMasker6.x = width;
  antiMasker6.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  antiMasker6.vx = antiMasker6.speed;
}

function setUpCovid() {
    covid1.x = 0;
    covid1.y = 0;
    covid1.size = unit(20);
    covid1.speed = unit(7);
    covid1.vx = unit(3);
    covid1.vy = unit(10);

    covid2.x = 0,
    covid2.y = 0,
    covid2.size = unit(20);
    covid2.speed = unit(7);
    covid2.vx = unit(3);
    covid2.vy = unit(10);

    covid3.x = 0;
    covid3.y = 0;
    covid3.size = unit(20);
    covid3.speed = unit(7);
    covid3.vx = unit(3);
    covid3.vy = unit(10);

}

function setUpBread() {
  bread1.x = -450;
  bread1.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  bread1.vx = bread1.speed;

  bread2.x = -550;
  bread2.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  bread2.vx = bread2.speed;

  bread3.x = -650;
  bread3.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  bread3.vx = bread3.speed;

  bread4.x = -750;
  bread4.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  bread4.vx = bread4.speed;

  bread5.x = -850;
  bread5.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  bread5.vx = bread5.speed;

  bread6.x = -950;
  bread6.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  bread6.vx = bread6.speed;



}

//LEVEL THREE: setUps

function setUpWasps(){
  wasp1.x = width;
  wasp1.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp1.vx = wasp1.speed;

  wasp2.x = width;
  wasp2.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp2.vx = wasp2.speed*2;

  wasp3.x = width;
  wasp3.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp3.vx = wasp3.speed*2;

  wasp4.x = width;
  wasp4.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp4.vx = wasp4.speed*2;

  wasp5.x = width;
  wasp5.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp5.vx = wasp5.speed*3;

  wasp6.x = width;
  wasp6.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp6.vx = wasp6.speed*3;

  wasp7.x = width;
  wasp7.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp7.vx = wasp7.speed*3;

  wasp8.x = width;
  wasp8.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  wasp8.vx = wasp8.speed*3;

}

function setUpAcornBullets() {
    acornBullet1.x = 0;
    acornBullet1.y = 0;
    acornBullet1.speed = unit(20);
    acornBullet1.vx = unit(15);

    acornBullet2.x = 0;
    acornBullet2.y = 0;
    acornBullet2.speed = unit(20);
    acornBullet2.vx = unit(15);

}

//start Functions
function enterStart() { // set up click to enter screen

  background(0);
  textSize(enterScreen.size);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont("American Typewriter");
  stroke(50, 200, 50);
  strokeWeight(unit(0.9));

  text(enterScreen.string, enterScreen.x, enterScreen.y);


}

function titleStart() { // set up title scrolling screen
push();
  checkTitleOffScreen();
  isTitleOffScreen();
  textSize(title.size);
  fill(random(0, 255), random(0, 255), random(0, 255));
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont("Luminari");
  stroke(50, 200, 50);
  strokeWeight(unit(0.9));

  title.y += -unit(2);
  title.size = title.size - unit(0.17);

  text(title.string, title.x, title.y);
pop();

}

function instruction1Start() { ///

  push();

  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("American Typewriter");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction1.size);
  instruction1.size = instruction1.size - unit(0.02);

  text(instruction1.string, instruction1.x, instruction1.y);

  instruction1.y += -unit(0.9);

  pop();
  // font options: Arial, Verdana, Trebuchet MS, Times New Roman, Didot, American Typewriter, Andale Mono, Courier, Bradley Hand, Luminari ~ Sans-serif, serif, Monospace, Cursive, Fantasy, Impact, Trattatello
}

function instruction2Start() { ///
  push();

  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("American Typewriter");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction2.size);
  instruction2.size = instruction2.size - unit(0.02);

  text(instruction2.string, instruction2.x, instruction2.y);

  instruction2.y += -unit(0.7);

  pop();

}

function instruction3Start() { ///

  push();

  fill(255);
  textAlign(CENTER, CENTER);
  textStyle();
  textFont("American Typewriter");
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(unit(0.9));

  textSize(instruction3.size);
  instruction3.size = instruction3.size - unit(0.02);

  text(instruction3.string, instruction3.x, instruction3.y);

  instruction3.y += -unit(0.9);

  pop();
}

///function to convert units to adjust to the size of the user's window
/// best way to use this is consider all values are in the range of 1000x1000
function unit(u) {
  if (height >= width) {
    let unit = (height / width) * u;
    return unit;
  }
    else if (width >= height) {
    let unit = (width / height) * u;
    return unit;
  }
}
///
///

function simulation1() {
  move1();
  checkOverlap1();
  display1();
  keepScore1();
}
function simulation2() {
  checkOverlap2();
  display2();
  keepScore2();
  move2();

}
function simulation3() {
  checkOverlap3();
  display3();
  keepScore3();
  move3();
}

///

function move1() { ///ALL LEVEL ONE automated MOVEMENT - DOGS AND ACORNS

  //LEVEL ONE: Dog movement
  dog1.x += dog1.vx;
  dog1.y += dog1.vy;

  if (dog1.x < 0) {
    dog1.x = 1400;
    dog1.y = random(randomDogSpawn.min, randomDogSpawn.max);
  }

  dog2.x += dog2.vx;
  dog2.y += dog2.vy;


  if (dog2.x < 0) {
    dog2.x = 1400;
    dog2.y = random(randomDogSpawn.min, randomDogSpawn.max);
  }

  dog3.x += dog3.vx;
  dog3.y += dog3.vy;



  if (dog3.x < 0) {
    dog3.x = 1400;
    dog3.y = random(randomDogSpawn.min, randomDogSpawn.max);
  }

  dog4.x += dog4.vx;
  dog4.y += dog4.vy;



  if (dog4.x < 0) {
    dog4.x = 1400;
    dog4.y = random(randomDogSpawn.min, randomDogSpawn.max);
  }

  dog5.x += dog5.vx;
  dog5.y += dog5.vy;



  if (dog5.x < 0) {
    dog5.x = 1400;
    dog5.y = random(randomDogSpawn.min, randomDogSpawn.max);
  }

  //LEVEL ONE: Acorn Movement
  acorn1.x += acorn1.vx;
  if (acorn1.x > width) {
    acorn1.x = 0;
    acorn1.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  }

  acorn2.x += acorn2.vx;
  if (acorn2.x > width) {
    acorn2.x = 0;
    acorn2.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  }

  acorn3.x += acorn3.vx;
  if (acorn3.x > width) {
    acorn3.x = 0;
    acorn3.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  }

  acorn4.x += acorn4.vx;
  if (acorn4.x > width) {
    acorn4.x = 0;
    acorn4.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  }

  acorn5.x += acorn5.vx;
  if (acorn5.x > width) {
    acorn5.x = 0;
    acorn5.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
  }

  acorn6.x += acorn6.vx;
  if (acorn6.x > width) {
    acorn6.x = 0;
    acorn6.y = random(randomAcornSpawn.min, randomAcornSpawn.max);
}


}

function move2() { ///ALL LEVEL TWO automated movement - antimaskers, covid firing from antimaskers, rolling bread to collect
  //LEVEL TWO: AntiMasker movement
  antiMasker1.x += antiMasker1.vx;
  antiMasker1.y += antiMasker1.vy;

  if (antiMasker1.x < 0) {
    antiMasker1.x = width;
    antiMasker1.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  }

//
  antiMasker2.x += antiMasker2.vx;
  antiMasker2.y += antiMasker2.vy;

  if (antiMasker2.x < 0) {
    antiMasker2.x = width;
    antiMasker2.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  }

//
  antiMasker3.x += antiMasker3.vx;
  antiMasker3.y += antiMasker3.vy;

  if (antiMasker3.x < 0) {
    antiMasker3.x = width;
    antiMasker3.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  }

//
  antiMasker4.x += antiMasker4.vx;
  antiMasker4.y += antiMasker4.vy;

  if (antiMasker4.x < 0) {
    antiMasker4.x = width;
    antiMasker4.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  }

//
  antiMasker5.x += antiMasker5.vx;
  antiMasker5.y += antiMasker5.vy;

  if (antiMasker5.x < 0) {
    antiMasker5.x = width;
    antiMasker5.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  }

//
  antiMasker6.x += antiMasker6.vx;
  antiMasker6.y += antiMasker6.vy;

  if (antiMasker6.x < 0) {
    antiMasker6.x = width;
    antiMasker6.y = random(randomAntiMaskerSpawn.min, randomAntiMaskerSpawn.max);
  }

  antiMasker6.x += antiMasker6.vx;
  antiMasker6.y += antiMasker6.vy;

  // LEVEL two: acornBullet shoot
  acornBullet1.x += acornBullet1.vx;
  acornBullet1.y += acornBullet1.vy;


  //LEVEL TWO: BREAD Movement
  bread1.x += bread1.vx;
  if (bread1.x > width) {
    bread1.x = 0;
    bread1.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  }

  bread2.x += bread2.vx;
  if (bread2.x > width) {
    bread2.x = 0;
    bread2.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  }

  bread3.x += bread3.vx;
  if (acorn3.x > width) {
    acorn3.x = 0;
    acorn3.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  }

  bread4.x += bread4.vx;
  if (bread4.x > width) {
    bread4.x = 0;
    bread4.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  }

  bread5.x += bread5.vx;
  if (bread5.x > width) {
    bread5.x = 0;
    bread5.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
  }

  bread6.x += bread6.vx;
  if (bread6.x > width) {
    bread6.x = 0;
    bread6.y = random(randomBreadSpawn.min, randomBreadSpawn.max);
}

if (antiMasker1.x <= width - 50 && !covid1.fired) {
  covid1.fired = true;
  covid1.x = antiMasker1.x;
  covid1.y = antiMasker1.y;
  covid1.vx = covid1.speed;
}

if (antiMasker2.x <= width - 50 && !covid2.fired) {
  covid2.fired = true;
  covid2.x = antiMasker2.x;
  covid2.y = antiMasker2.y;
  covid2.vx = covid2.speed;
}

if (antiMasker3.x <= width - 50 && !covid3.fired) {
  covid3.fired = true;
  covid3.x = antiMasker3.x;
  covid3.y = antiMasker3.y;
  covid3.vx = covid3.speed;
}



///if covid fires, draw covid
if (covid1.fired) {
  fill(covid1.r, covid1.g, covid1.b);
  ellipse(covid1.x, covid1.y, covid1.size);
}
if (covid2.fired) {
  fill(covid2.r, covid2.g, covid2.b);
  ellipse(covid2.x, covid2.y, covid2.size);
}
if (covid3.fired) {
  fill(covid3.r, covid3.g, covid3.b);
  ellipse(covid3.x, covid3.y, covid3.size);
}

// covid move
covid1.x -= covid1.vx;

covid2.x -= covid2.vx;

covid3.x -= covid3.vx;

//check if covid are offscreen
if (covid1.x < 0) {
  covid1.fired = false;
}
if (covid2.x < 0) {
    covid2.fired = false;
}
if (covid3.x < 0) {
    covid3.fired = false;
}

}

function move3() { /// ALL LEVEL THREE automated movement - wacky wasps
  ///add acorn bullets here if time!

//LEVEL 3: WACKY WASPS
  wasp1.x += wasp1.vx;
  wasp1.y += wasp1.vy;
  wasp1.vy = map(noise(wasp1.y), 0, 1, 0, 15);

  if (wasp1.x < 0) {
    wasp1.x = width;
    wasp1.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp2.x += wasp2.vx;
  wasp2.y += wasp2.vy;
  wasp2.vy = map(noise(wasp2.y), 0, 1, 0, 15);


  if (wasp2.x < 0) {
    wasp2.x = width;
    wasp2.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp3.x += wasp3.vx;
  wasp3.y += wasp3.vy;
  wasp3.vy = map(noise(wasp3.y), 0, 1, 0, 15);


  if (wasp3.x < 0) {
    wasp3.x = width;
    wasp3.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp4.x += wasp4.vx;
  wasp4.y += wasp4.vy;
  wasp4.vy = map(noise(wasp4.y), 0, 1, 0, 15);


  if (wasp4.x < 0) {
    wasp4.x = width;
    wasp4.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp5.x += wasp5.vx;
  wasp5.y += wasp5.vy;
  wasp5.vy = map(noise(wasp5.y), 0, 1, 0, 15);


  if (wasp5.x < 0) {
    wasp5.x = width;
    wasp5.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp6.x += wasp6.vx;
  wasp6.y += wasp6.vy;
  wasp6.vy = map(noise(wasp6.y), 0, 1, 0, 15);


  if (wasp6.x < 0) {
    wasp6.x = width;
    wasp6.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp7.x += wasp7.vx;
  wasp7.y += wasp7.vy;
  wasp7.vy = map(noise(wasp7.y), 0, 1, 0, 15);


  if (wasp7.x < 0) {
    wasp7.x = width;
    wasp7.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

//
  wasp8.x += wasp8.vx;
  wasp8.y += wasp8.vy;
  wasp8.vy = map(noise(wasp8.y), 0, 1, 0, 15);


  if (wasp8.x < 0) {
    wasp8.x = width;
    wasp8.y = random(randomWaspSpawn.min, randomWaspSpawn.max);
  }

// LEVEL three: acornBullet shoot
  acornBullet1.x += acornBullet1.vx;
  acornBullet1.y += acornBullet1.vy;

  acornBullet2.x += acornBullet2.vx;
  acornBullet2.y += acornBullet2.vy;
  }


///
function checkOverlap1() { //check if dogs hit squirrel or squirrel collects acorns

//check if dog catches squirrel - game over -

  let d1 = dist(squirrel.x, squirrel.y, dog1.x, dog1.y);
  if (d1 < unit(65)) {
    state = `lose`;
  }
  let d2 = dist(squirrel.x, squirrel.y, dog2.x, dog2.y);
  if (d2 < unit(65)) {
    state = `lose`;
  }
  let d3 = dist(squirrel.x, squirrel.y, dog3.x, dog3.y);
  if (d3 < unit(65)) {
    state = `lose`;
  }
  let d4 = dist(squirrel.x, squirrel.y, dog4.x, dog4.y);
  if (d4 < unit(65)) {
    state = `lose`;
  }
  let d5 = dist(squirrel.x, squirrel.y, dog5.x, dog5.y);
  if (d5 < unit(65)) {
    state = `lose`;
  }

//check if squirrel gets acorn, add to scoreDots

  let d6 = dist(squirrel.x, squirrel.y, acorn1.x, acorn1.y);
  if (d6 < unit(50)) {
    score ++;
    acorn1.x = -60000;
  }
  let d7 = dist(squirrel.x, squirrel.y, acorn2.x, acorn2.y);
  if (d7 < unit(50)) {
    score ++;
    acorn2.x = -60000;
  }
  let d8 = dist(squirrel.x, squirrel.y, acorn3.x, acorn3.y);
  if (d8 < unit(50)) {
    score ++;
    acorn3.x = -60000;
  }
  let d9 = dist(squirrel.x, squirrel.y, acorn4.x, acorn4.y);
  if (d9 < unit(50)) {
    score ++;
    acorn4.x = -60000;
  }
  let d10 = dist(squirrel.x, squirrel.y, acorn5.x, acorn5.y);
  if (d10 < unit(50)) {
    score ++;
    acorn5.x = -60000;
  }
  let d11 = dist(squirrel.x, squirrel.y, acorn6.x, acorn6.y);
  if (d11 < unit(50)) {
    score ++;
    acorn6.x = -60000;
  }

}

function checkOverlap2() { //check if squirrel collects bread, check if covid hits squirrel, check if anti-masker hits squirrel, check if acornBullet kills antimasker

  //check if squirrel gets bread, add to scoreDots

  let d21 = dist(squirrel.x, squirrel.y, bread1.x, bread1.y);
  if (d21 < 50) {
    score ++;
    bread1.x = -60000;
  }
  let d22 = dist(squirrel.x, squirrel.y, bread2.x, bread2.y);
  if (d22 < 50) {
    score ++;
    bread2.x = -60000;
  }
  let d23 = dist(squirrel.x, squirrel.y, bread3.x, bread3.y);
  if (d23 < 50) {
    score ++;
    bread3.x = -60000;
  }
  let d24 = dist(squirrel.x, squirrel.y, bread4.x, bread4.y);
  if (d24 < 50) {
    score ++;
    bread4.x = -60000;
  }
  let d25 = dist(squirrel.x, squirrel.y, bread5.x, bread5.y);
  if (d25 < 50) {
    score ++;
    bread5.x = -60000;
  }
  let d26 = dist(squirrel.x, squirrel.y, bread6.x, bread6.y);
  if (d26 < 50) {
    score ++;
    bread6.x = 0;
  }

//check if antimasker hits squirrel
  let d211 = dist(squirrel.x, squirrel.y, antiMasker1.x, antiMasker1.y);
  if (d211 < unit(75)) {
    state = `lose`;
  }
  let d222 = dist(squirrel.x, squirrel.y, antiMasker2.x, antiMasker2.y);
  if (d222 < unit(75)) {
    state = `lose`;
  }
  let d233 = dist(squirrel.x, squirrel.y, antiMasker3.x, antiMasker3.y);
  if (d233 < unit(75)) {
    state = `lose`;
  }
  let d244 = dist(squirrel.x, squirrel.y, antiMasker4.x, antiMasker4.y);
  if (d244 < unit(75)) {
    state = `lose`;
  }
  let d255 = dist(squirrel.x, squirrel.y, antiMasker5.x, antiMasker5.y);
  if (d255 < unit(75)) {
    state = `lose`;
  }
  let d266 = dist(squirrel.x, squirrel.y, antiMasker6.x, antiMasker6.y);
  if (d266 < unit(75)) {
    state = `lose`;
  }

  //check if covid hits squirrel
    let d2211 = dist(squirrel.x, squirrel.y, covid1.x, covid1.y);
    if (d2211 < unit(30)) {
      state = `lose`;
    }
    let d2222 = dist(squirrel.x, squirrel.y, covid2.x, covid2.y);
    if (d2222 < unit(30)) {
      state = `lose`;
    }
    let d2333 = dist(squirrel.x, squirrel.y, covid3.x, covid3.y);
    if (d2333 < unit(30)) {
      state = `lose`;
    }

    //check if acornBullet hits antiMasker

    let da1 = dist(acornBullet1.x, acornBullet1.y, antiMasker1.x, antiMasker1.y);
    if (da1 < unit(75)) {
      antiMasker1.y = -60000;
    }
    let da2 = dist(acornBullet1.x, acornBullet1.y, antiMasker2.x, antiMasker2.y);
    if (da2 < unit(75)) {
      antiMasker2.y = -60000;
    }
    let da3 = dist(acornBullet1.x, acornBullet1.y, antiMasker3.x, antiMasker3.y);
    if (da3 < unit(75)) {
      antiMasker3.y = -60000;
    }
    let da4 = dist(acornBullet1.x, acornBullet1.y, antiMasker4.x, antiMasker4.y);
    if (da4 < unit(75)) {
      antiMasker4.y = -60000;
    }
    let da5 = dist(acornBullet1.x, acornBullet1.y, antiMasker5.x, antiMasker5.y);
    if (da5 < unit(75)) {
      antiMasker5.y = -60000;
    }
    let da6 = dist(acornBullet1.x, acornBullet1.y, antiMasker6.x, antiMasker6.y);
    if (da6 < unit(75)) {
      antiMasker6.y = -60000;
    }


}

function checkOverlap3() { //check if wasp hits white squirrel or black squirrel, check if acornBullets hit wasp.

//wasp hits white squirrel
let d27 = dist(squirrel.x, squirrel.y, wasp1.x, wasp1.y);
if (d27 < unit(75)) {
  state = `lose`;
}
let d28 = dist(squirrel.x, squirrel.y, wasp2.x, wasp2.y);
if (d28 < unit(75)) {
  state = `lose`;
}
let d29 = dist(squirrel.x, squirrel.y, wasp3.x, wasp3.y);
if (d29 < unit(75)) {
  state = `lose`;
}
let d30 = dist(squirrel.x, squirrel.y, wasp4.x, wasp4.y);
if (d30 < unit(75)) {
  state = `lose`;
}
let d31 = dist(squirrel.x, squirrel.y, wasp5.x, wasp5.y);
if (d31 < unit(75)) {
  state = `lose`;
}
let d32 = dist(squirrel.x, squirrel.y, wasp6.x, wasp6.y);
if (d32 < unit(75)) {
  state = `lose`;
}
let d33 = dist(squirrel.x, squirrel.y, wasp5.x, wasp5.y);
if (d33 < unit(75)) {
  state = `lose`;
}
let d34 = dist(squirrel.x, squirrel.y, wasp6.x, wasp6.y);
if (d34 < unit(75)) {
  state = `lose`;
}
let d35 = dist(squirrel.x, squirrel.y, wasp7.x, wasp7.y);
if (d35 < unit(75)) {
  state = `lose`;
}
let d36 = dist(squirrel.x, squirrel.y, wasp8.x, wasp8.y);
if (d36 < unit(75)) {
  state = `lose`;
}

//wasp hits black squirrel(squirrel2)

let d37 = dist(squirrel2.x, squirrel2.y, wasp1.x, wasp1.y);
if (d37 < unit(75)) {
  state = `lose`;
}
let d38 = dist(squirrel2.x, squirrel2.y, wasp2.x, wasp2.y);
if (d38 < unit(75)) {
  state = `lose`;
}
let d39 = dist(squirrel2.x, squirrel2.y, wasp3.x, wasp3.y);
if (d39 < unit(75)) {
  state = `lose`;
}
let d40 = dist(squirrel2.x, squirrel2.y, wasp4.x, wasp4.y);
if (d40 < unit(75)) {
  state = `lose`;
}
let d41 = dist(squirrel2.x, squirrel2.y, wasp5.x, wasp5.y);
if (d41 < unit(75)) {
  state = `lose`;
}
let d42 = dist(squirrel2.x, squirrel2.y, wasp6.x, wasp6.y);
if (d42 < unit(75)) {
  state = `lose`;
}
let d43 = dist(squirrel2.x, squirrel2.y, wasp5.x, wasp5.y);
if (d43 < unit(75)) {
  state = `lose`;
}
let d44 = dist(squirrel2.x, squirrel2.y, wasp6.x, wasp6.y);
if (d44 < unit(75)) {
  state = `lose`;
}
let d45 = dist(squirrel2.x, squirrel2.y, wasp7.x, wasp7.y);
if (d45 < unit(75)) {
  state = `lose`;
}
let d46 = dist(squirrel2.x, squirrel2.y, wasp8.x, wasp8.y);
if (d46 < unit(75)) {
  state = `lose`;
}

//acornBullet hits wasps

//check if acornBullets 1-6 hits wasps1-8, add to score - hit 6, win!

//acornBullet1 hits wasps1-8

let d55 = dist(acornBullet1.x, acornBullet1.y, wasp1.x, wasp1.y);
if (d55 < unit(75)) {
  wasp1.x = unit(10000);
  score++;
}
let d56 = dist(acornBullet1.x, acornBullet1.y, wasp2.x, wasp2.y);
if (d56 < unit(75)) {
  wasp2.x = unit(10000);
  score++;
}
let d57 = dist(acornBullet1.x, acornBullet1.y, wasp3.x, wasp3.y);
if (d57 < unit(75)) {
  wasp3.x = unit(10000);
  score++;
}
let d58 = dist(acornBullet1.x, acornBullet1.y, wasp4.x, wasp4.y);
if (d58 < unit(75)) {
  wasp4.x = unit(10000);
  score++;
}
let d59 = dist(acornBullet1.x, acornBullet1.y, wasp5.x, wasp5.y);
if (d59 < unit(75)) {
  wasp5.x = unit(10000);
  score++;
}
let d60 = dist(acornBullet1.x, acornBullet1.y, wasp6.x, wasp6.y);
if (d60 < unit(75)) {
  wasp6.x = unit(10000);
  score++;
}
let d61 = dist(acornBullet1.x, acornBullet1.y, wasp5.x, wasp5.y);
if (d61 < unit(75)) {
  wasp5.x = unit(10000);
  score++;
}
let d62 = dist(acornBullet1.x, acornBullet1.y, wasp6.x, wasp6.y);
if (d62 < unit(75)) {
  wasp6.x = unit(10000);
  score++;
}
let d63 = dist(acornBullet1.x, acornBullet1.y, wasp7.x, wasp7.y);
if (d63 < unit(75)) {
  wasp7.x = unit(10000);
  score++;
}
let d64 = dist(acornBullet1.x, acornBullet1.y, wasp8.x, wasp8.y);
if (d64 < unit(75)) {
  wasp8.x = unit(10000);
  score++;
}
//acornBullet2 hits wasps1-8

let d255 = dist(acornBullet2.x, acornBullet2.y, wasp1.x, wasp1.y);
if (d255 < unit(75)) {
  wasp1.x = unit(10000);
  score++;
}
let d256 = dist(acornBullet2.x, acornBullet2.y, wasp2.x, wasp2.y);
if (d256 < unit(75)) {
  wasp2.x = unit(10000);
  score++;
}
let d257 = dist(acornBullet2.x, acornBullet2.y, wasp3.x, wasp3.y);
if (d257 < unit(75)) {
  wasp3.x = unit(10000);
  score++;
}
let d258 = dist(acornBullet2.x, acornBullet2.y, wasp4.x, wasp4.y);
if (d258 < unit(75)) {
  wasp4.x = unit(10000);
  score++;
}
let d259 = dist(acornBullet2.x, acornBullet2.y, wasp5.x, wasp5.y);
if (d259 < unit(75)) {
  wasp5.x = unit(10000);
  score++;
}
let d260 = dist(acornBullet2.x, acornBullet2.y, wasp6.x, wasp6.y);
if (d260 < unit(75)) {
  wasp6.x = unit(10000);
  score++;
}
let d261 = dist(acornBullet2.x, acornBullet2.y, wasp5.x, wasp5.y);
if (d261 < unit(75)) {
  wasp5.x = unit(10000);
  score++;
}
let d262 = dist(acornBullet2.x, acornBullet2.y, wasp6.x, wasp6.y);
if (d262 < unit(75)) {
  wasp6.x = unit(10000);
  score++;
}
let d263 = dist(acornBullet2.x, acornBullet2.y, wasp7.x, wasp7.y);
if (d263 < unit(75)) {
  wasp7.x = unit(10000);
  score++;
}
let d264 = dist(acornBullet2.x, acornBullet2.y, wasp8.x, wasp8.y);
if (d264 < unit(75)) {
  wasp8.x = unit(10000);
  score++;
}




}
function keepScore1() {
  if (score >= 1){
    fill(94, 69, 35);
    circle(scoreDots.x,scoreDots.y,scoreDots.radius);

  }
  if (score >= 2){
    circle(scoreDots.x + scoreDots.offset1,scoreDots.y,scoreDots.radius);

  }
  if (score >= 3){
    circle(scoreDots.x + scoreDots.offset2,scoreDots.y,scoreDots.radius);

  }
  if (score >= 4){
    circle(scoreDots.x + scoreDots.offset3,scoreDots.y,scoreDots.radius);

  }
  if (score >= 5){
    circle(scoreDots.x + scoreDots.offset4,scoreDots.y,scoreDots.radius);

  }
  if (score >= 6){
    state = 'win1';

  }
}
function keepScore2() {
  if (score >= 1){
    fill(94, 69, 35);
    circle(scoreDots.x,scoreDots.y-150,scoreDots.radius);
  }
  if (score >= 2){
    circle(scoreDots.x + scoreDots.offset1,scoreDots.y-150,scoreDots.radius);
  }
  if (score >= 3){
    circle(scoreDots.x + scoreDots.offset2,scoreDots.y-150,scoreDots.radius);
  }
  if (score >= 4){
    circle(scoreDots.x + scoreDots.offset3,scoreDots.y-150,scoreDots.radius);
  }
  if (score >= 5){
    circle(scoreDots.x + scoreDots.offset4,scoreDots.y -150,scoreDots.radius);
  }
  if (score >= 6){
    state = 'win2';
  }
}
function keepScore3() {
  if (score >= 1){
    fill(94, 69, 35);
    circle(scoreDots.x,scoreDots.y,scoreDots.radius);
  }
  if (score >= 2){
    circle(scoreDots.x + scoreDots.offset1,scoreDots.y,scoreDots.radius);
  }
  if (score >= 3){
    circle(scoreDots.x + scoreDots.offset2,scoreDots.y,scoreDots.radius);
  }
  if (score >= 4){
    circle(scoreDots.x + scoreDots.offset3,scoreDots.y,scoreDots.radius);
  }
  if (score >= 5){
    circle(scoreDots.x + scoreDots.offset4,scoreDots.y,scoreDots.radius);
  }
  if (score >= 6){
    state = `win3`;
  }
}

///
function display1() { // Level one objects to display: dogs, squirrel, acorns
  background(bg);

//display squirrel
  push();
  imageMode(CENTER);
  image(squirrel.image, squirrel.x, squirrel.y, unit(80),unit(30));
  pop();

//display acorns
  push();
  imageMode(CENTER);
  image(acorn1.image, acorn1.x, acorn1.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(acorn2.image, acorn2.x, acorn2.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(acorn3.image, acorn3.x, acorn3.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(acorn4.image, acorn4.x, acorn4.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(acorn5.image, acorn5.x, acorn5.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(acorn6.image, acorn6.x, acorn6.y, unit(30), unit(50));
  pop();

//display dogs

  push();
  imageMode(CENTER);
  image(dog1.image, dog1.x, dog1.y, unit(100), unit(86));
  pop();

  push();
  imageMode(CENTER);
  image(dog2.image, dog2.x, dog2.y, unit(100), unit(86));
  pop();

  push();
  imageMode(CENTER);
  image(dog3.image, dog3.x, dog3.y, unit(100), unit(86));
  pop();

  push();
  imageMode(CENTER);
  image(dog4.image, dog4.x, dog4.y, unit(100), unit(86));
  pop();

  push();
  imageMode(CENTER);
  image(dog5.image, dog5.x, dog5.y, unit(100), unit(86));
  pop();

}

function display2() { // squirrel, bread, antimaskers, acornbullets
  push();
  imageMode(CORNERS);
  background(bg2);
  pop();

//display squirrel
  push();
  imageMode(CENTER);
  image(squirrel.image, squirrel.x, squirrel.y, unit(80),unit(30));
  pop();

//display bread
  push();
  imageMode(CENTER);
  image(bread1.image, bread1.x, bread1.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(bread2.image, bread2.x, bread2.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(bread3.image, bread3.x, bread3.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(bread4.image, bread4.x, bread4.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(bread5.image, bread5.x, bread5.y, unit(30), unit(50));
  pop();

  push();
  imageMode(CENTER);
  image(bread6.image, bread6.x, bread6.y, unit(30), unit(50));
  pop();

//display antimaskers
  push();
  imageMode(CENTER);
  image(antiMasker1.image, antiMasker1.x, antiMasker1.y, unit(80), unit(150));
  pop();

  push();
  imageMode(CENTER);
  image(antiMasker2.image, antiMasker2.x, antiMasker2.y, unit(80), unit(150));
  pop();

  push();
  imageMode(CENTER);
  image(antiMasker3.image, antiMasker3.x, antiMasker3.y, unit(80), unit(150));
  pop();

  push();
  imageMode(CENTER);
  image(antiMasker4.image, antiMasker4.x, antiMasker4.y, unit(80), unit(150));
  pop();

  push();
  imageMode(CENTER);
  image(antiMasker5.image, antiMasker5.x, antiMasker5.y, unit(80), unit(150));
  pop();

  push();
  imageMode(CENTER);
  image(antiMasker6.image, antiMasker6.x, antiMasker6.y, unit(80), unit(150));
  pop();

//draw acornbullets when fired

  push();
  if (acornBullet1.fired) {
    imageMode(CENTER);
    image(acornBullet1.image, acornBullet1.x, acornBullet1.y, unit(10), unit(12));

  }
  if (acornBullet2.fired) {
    imageMode(CENTER);
    image(acornBullet2.image, acornBullet2.x, acornBullet2.y, unit(6), unit(10));
  }
  pop();

}

function display3() { //display white squirrel, black squirrel, wasps, acorn bullets
  push();
  imageMode(CORNERS);
  background(bg3);
  pop();
  //display squirrel
    push();
    imageMode(CENTER);
    image(squirrel.image, squirrel.x, squirrel.y, unit(80),unit(30));
    pop();

  //display black squirrel (squirrel2)
    push();
    imageMode(CENTER);
    image(squirrel2.image, squirrel2.x, squirrel2.y, unit(100), unit(50));
    pop();

  //display wasps
    push();
    imageMode(CENTER);
    image(wasp1.image, wasp1.x, wasp1.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp2.image, wasp2.x, wasp2.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp3.image, wasp3.x, wasp3.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp4.image, wasp4.x, wasp4.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp5.image, wasp5.x, wasp5.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp6.image, wasp6.x, wasp6.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp7.image, wasp7.x, wasp7.y, unit(80), unit(100));
    pop();

    push();
    imageMode(CENTER);
    image(wasp8.image, wasp8.x, wasp8.y, unit(80), unit(100));
    pop();

    push();
    if (acornBullet1.fired) {
      imageMode(CENTER);
      image(acornBullet1.image, acornBullet1.x, acornBullet1.y, unit(10), unit(12));

    }
    if (acornBullet2.fired) {
      imageMode(CENTER);
      image(acornBullet2.image, acornBullet2.x, acornBullet2.y, unit(6), unit(10));
    }
    pop();
}

function win1() {//white squirrel with acorns
  background(0);
  noLoop();
  imageMode(CENTER);
  image(squirrelWin.image, squirrelWin.x, squirrelWin.y, width/2, height/2);
}

function win2() { ///white squirrel with bread
  background(0);
  noLoop();
  imageMode(CENTER);
  image(squirrelWin2.image, squirrelWin2.x, squirrelWin2.y, width/2, height/2);
}
function win3() { //white and black squirrel win
  background(0);
  noLoop();
  imageMode(CENTER);
  image(squirrelBothWin.image, squirrelBothWin.x, squirrelBothWin.y, width/2, height/2);
}

function lose() { /// dead squirrel background
  push();
  imageMode(CORNERS);
  background(bgGameOver);
  noLoop();
  pop();
}

//clicking through instrucitons and levels, changing state
function mousePressed() {
  if (state === `enter`) {
    state = `title`;
    enterScreen.x = 10000;
    mainTheme.play();
    mainTheme.loop();
  } else if (state === `title`) {
    state = `instruction1Start`;
  } else if (state === `instruction1Start`) {
    state = `simulation1`;
  } else if (state === `win1`) {
    state = `instruction2Start`;
    loop();
    score -= 6; //restart scoreDots
  } else if (state === `instruction2Start`) {
    state = `simulation2`;
  } else if (state === `win2`) {
    state = `instruction3Start`;
    loop();
    score -= 6;//restart scoreDots
  } else if (state === `instruction3Start`) {
    loop();
    state = `simulation3`;
  } else if (state === `lose`) {
    location.reload(); // restart game after losing
    loop();
  } else if (state === 'win3') {
    location.reload();
    loop();
  }
}



//function to automatically run instruction 1
function checkTitleOffScreen() {
//check if the title has gone offscreen
if (isTitleOffScreen()) {
  state = `instruction1Start`;
}
}

function isTitleOffScreen() {
if (title.y < 0) {
  return true;
} else {
  return false;

}
}


//preload images for background and characters
function preload() {
  //music preload
  mainTheme = loadSound('assets/sounds/whiteSquirrel_mainTheme.wav');
  //backgrounds
  bg = loadImage('assets/images/park.jpg');//morning_gorlitzer
  bg2 = loadImage('assets/images/park1.jpg');//afternoon_mont royal
  bg3 = loadImage('assets/images/park2.jpg');//evening_trinity bellewoods
  bgGameOver = loadImage('assets/images/squirrel_dead.jpg');

  //win images
  squirrelWin.image = loadImage('assets/images/squirrel_youWin.png');
  squirrelWin2.image = loadImage('assets/images/squirrelWin2.png');
  squirrelBothWin.image = loadImage('assets/images/squirrelBothWin.png');//

  //squirrel characters
  squirrel.image = loadImage('assets/images/squirrel.png');
  squirrel2.image = loadImage('assets/images/squirrel2.png');//

  //level one, acorns to collet
  acorn1.image = loadImage('assets/images/acorn1.png');
  acorn2.image = loadImage('assets/images/acorn2.png');
  acorn3.image = loadImage('assets/images/acorn1.png');
  acorn4.image = loadImage('assets/images/acorn2.png');
  acorn5.image = loadImage('assets/images/acorn1.png');
  acorn6.image = loadImage('assets/images/acorn2.png');

  //level one, dogs attacking
  dog1.image = loadImage('assets/images/dog1.png');
  dog2.image = loadImage('assets/images/dog2.png');
  dog3.image = loadImage('assets/images/dog3.png');
  dog4.image = loadImage('assets/images/dog4.png');
  dog5.image = loadImage('assets/images/dog3.png');

  //level two, bread to collect
  bread1.image = loadImage('assets/images/bread.png');//
  bread2.image = loadImage('assets/images/bread.png');//
  bread3.image = loadImage('assets/images/bread.png');//
  bread4.image = loadImage('assets/images/bread.png');//
  bread5.image = loadImage('assets/images/bread.png');//
  bread6.image = loadImage('assets/images/bread.png');//


  //level two, anti-maskers
  antiMasker1.image = loadImage('assets/images/antiMasker1.png');//
  antiMasker2.image = loadImage('assets/images/antiMasker2.png');//
  antiMasker3.image = loadImage('assets/images/antiMasker3.png');//
  antiMasker4.image = loadImage('assets/images/antiMasker4.png');//
  antiMasker5.image = loadImage('assets/images/antiMasker2.png');//
  antiMasker6.image = loadImage('assets/images/antiMasker4.png');//

  //level three, WASPS
  wasp1.image = loadImage('assets/images/wasp.png');//
  wasp2.image = loadImage('assets/images/wasp.png');//
  wasp3.image = loadImage('assets/images/wasp.png');//
  wasp4.image = loadImage('assets/images/wasp.png');//
  wasp5.image = loadImage('assets/images/wasp.png');//
  wasp6.image = loadImage('assets/images/wasp.png');//
  wasp7.image = loadImage('assets/images/wasp.png');//
  wasp8.image = loadImage('assets/images/wasp.png');//

  //level three, acorns to throw
  acornBullet1.image = loadImage('assets/images/acorn1.png');
  acornBullet2.image = loadImage('assets/images/acorn2.png');

}

// group setup()

function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpEnterScreen();
  setUpTitle();
  setUpInstruction1();
  setUpInstruction2();
  setUpInstruction3();
  setUpAcornBullets();
  setUpSquirrelWin();
  setUpScoreDots();
  setUpSpawn();
  setUpDogs();
  setUpAcorns();
  setUpAntiMaskers();
  setUpCovid();
  setUpBread();
  setUpWasps();

}

// draw()

function draw() {
  enterStart();
  setUpSpawn();


  //constrain squirrel 1 and 2 movement inside canvas

  squirrel.x = constrain(squirrel.x, 0, width);
  squirrel.y = constrain(squirrel.y, 0, height);


  squirrel2.x = constrain(squirrel2.x, 0, width);
  squirrel2.y = constrain(squirrel2.y, 0, height);

  //STATES

  //different states: enter>title>level1>gameover>win>level2>level3
  if (state === `enter`) {
    enterStart();
  } else if (state === `title`) {
    titleStart();
  } else if (state === `instruction1Start`) {
    instruction1Start();
  } else if (state === `simulation1`) { //start level one
    simulation1();
  } else if (state === `win1`) {
    win1();
  } else if (state === `instruction2Start`) {
    instruction2Start();
  } else if (state === `simulation2`) { //start level two
    simulation2();
  } else if (state === `win2`) {
    win2();
  } else if (state === `instruction3Start`) {
    instruction3Start();
  } else if (state === `simulation3`) { //start level three
    simulation3();
  } else if (state === `win3`) {
      win3();
  } else if (state === `lose`) {
    lose();
  }



  //KEYBOARD CONTROLS

  //keyboard arrows controlling WHITE SQUIRREL and acorn bullet movement
  if (keyIsDown(LEFT_ARROW)) {
      squirrel.x -= keyboardControl.left;
    } else if (keyIsDown(RIGHT_ARROW)) {
      squirrel.x += keyboardControl.right;
    } else if (keyIsDown(UP_ARROW)) {
      squirrel.y -= keyboardControl.up;
    } else if (keyIsDown(DOWN_ARROW)) {
      squirrel.y += keyboardControl.down;
    } else if (keyIsDown(SHIFT)) {
      acornBullet1.fired = true;
      acornBullet1.x = squirrel.x;
      acornBullet1.y = squirrel.y;
      acornBullet1.vx = acornBullet1.speed;
    }

  //keyboard letters AWSD controlling BLACK SQUIRREL movement
  if (keyIsPressed) {
    if (key == 'a') {
    squirrel2.x -= keyboardControl.left;
    }
    else if (key == 'd') {
    squirrel2.x += keyboardControl.right;
    }
    else if (key == 'w') {
    squirrel2.y -= keyboardControl.up;
    }
    else if (key == 's') {
    squirrel2.y += keyboardControl.down;
    }
    else if (key == 'q') {
    acornBullet2.fired = true;
    acornBullet2.x = squirrel2.x;
    acornBullet2.y = squirrel2.y;
    acornBullet2.vx = acornBullet2.speed;
    }
  }
  ///

}
