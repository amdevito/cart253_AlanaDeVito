/**************************************************
Template p5 project
Alana DeVito
intermediate functions
**************************************************/
"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

// First food object
let food1;

// Second food object
let food2;

// Third food object
let food3;

// forth food object
let food4;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function createFood(x,y) {
  let food = {
    x: x,
    y: y,
    size: 50,
    eaten: false
  };
  return food;
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);

  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);

}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkFood(food)  {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}
//

// // CHANGING THE FUNCTIONS BELOW SO THAT ONLY ONE IS USED INSTEAD OF 1,2,3 ETC.
//WILL TAKE A PARAMETER INSTEAD.
//Checks if the user overlaps the food1 object and eats it if so
// function checkFood1() {
//   // We only want to check for an overlap if food1 hasn't been eaten yet
//   if (!food1.eaten) {
//     let d = dist(user.x, user.y, food1.x, food1.y);
//     if (d < user.size / 2 + food1.size / 2) {
//       food1.eaten = true;
//     }
//   }
// }
//
// // The same as above, but for food2
// function checkFood2() {
//   if (!food2.eaten) {
//     let d = dist(user.x, user.y, food2.x, food2.y);
//     if (d < user.size / 2 + food2.size / 2) {
//       food2.eaten = true;
//     }
//   }
// }
//
// function checkFood3() {
//   if (!food3.eaten) {
//     let d = dist(user.x, user.y, food3.x, food3.y);
//     if (d < user.size / 2 + food3.size / 2) {
//       food3.eaten = true;
//     }
//   }
// }
// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}


function displayFood(food) {
  if (!food.eaten) {
    push();
    fill(255, 100, 100);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}

// // CHANGING THE FUNCTIONS BELOW SO THAT ONLY ONE IS USED INSTEAD OF 1,2,3 ETC.
//WILL TAKE A PARAMETER INSTEAD.
//Draw food1 as a circle
// function displayFood1() {
//   // We don't want to display food1 if it's been eaten
//   if (!food1.eaten) {
//     push();
//     fill(255, 100, 100);
//     ellipse(food1.x, food1.y, food1.size);
//     pop();
//   }
// }
//
// // As above but for food2
// function displayFood2() {
//   if (!food2.eaten) {
//     push();
//     fill(255, 100, 100);
//     ellipse(food2.x, food2.y, food2.size);
//     pop();
//   }
// }
// // As above but for food3
// function displayFood3() {
//   if (!food3.eaten) {
//     push();
//     fill(255, 100, 100);
//     ellipse(food3.x, food3.y, food3.size);
//     pop();
//   }
// }