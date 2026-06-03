
// --------------------------------------------------
// SCREEN CONTROL
// --------------------------------------------------
let gameScreen = 1;

// --------------------------------------------------
// SETUP
// --------------------------------------------------
function setup() {
  createCanvas(800, 600);
}

// --------------------------------------------------
// DRAW
// --------------------------------------------------
function draw() {

  // SCREEN 1
  if (gameScreen === 1) {
    drawScreen1();
  }

  // SCREEN 3
  else if (gameScreen === 3) {
    drawScreen3();
  }

  // SCREEN 4
  else if (gameScreen === 4) {
    drawScreen4();
  }
}

// --------------------------------------------------
// SCREEN 1
// --------------------------------------------------
function drawScreen1() {

  // BACKGROUND
  background("green");

  // TITLE
  fill("white");
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(42);

  text("Pick an Option", width / 2, 120);

  // --------------------------------------------------
  // JUNGLE VINE BUTTON
  // --------------------------------------------------

  // Hover effect
  if (
    mouseX > 120 &&
    mouseX < 370 &&
    mouseY > 250 &&
    mouseY < 350
  ) {
    fill("yellow");
  } else {
    fill("white");
  }

  stroke("black");
  strokeWeight(3);

  rect(120, 250, 250, 100, 20);

  // Button text
  fill("black");
  noStroke();
  textSize(22);

  text(
    "Jungle Vine",
    245,
    300
  );

  // --------------------------------------------------
  // SAFARI CAR BUTTON
  // --------------------------------------------------

  // Hover effect
  if (
    mouseX > 430 &&
    mouseX < 680 &&
    mouseY > 250 &&
    mouseY < 350
  ) {
    fill("yellow");
  } else {
    fill("white");
  }

  stroke("black");
  strokeWeight(3);

  rect(430, 250, 250, 100, 20);

  // Button text
  fill("black");
  noStroke();
  textSize(22);

  text(
    "Safari Car",
    555,
    300
  );
}

// --------------------------------------------------
// MOUSE CLICKS
// --------------------------------------------------
function mousePressed() {

  // SCREEN 1 BUTTONS
  if (gameScreen === 1) {
    screen1MousePressed();
  }
}

// --------------------------------------------------
// SCREEN 1 BUTTON CLICKS
// --------------------------------------------------
function screen1MousePressed() {

  // JUNGLE VINE BUTTON
  if (
    mouseX > 120 &&
    mouseX < 370 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 3
    gameScreen = 3;
  }

  // SAFARI CAR BUTTON
  if (
    mouseX > 430 &&
    mouseX < 680 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 4
    gameScreen = 4;
  }
}
