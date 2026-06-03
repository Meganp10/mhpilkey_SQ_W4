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

  // SHOW SCREEN 1
  if (gameScreen === 1) {
    drawStartScreen();
  }

  // SHOW SCREEN 2
  else if (gameScreen === 2) {
    drawScreen2();
  }

  // SHOW SCREEN 8
  else if (gameScreen === 8) {
    drawScreen8();
  }

  // SHOW SCREEN 9
  else if (gameScreen === 9) {
    drawScreen9();
  }
}

// --------------------------------------------------
// START SCREEN
// --------------------------------------------------
function drawStartScreen() {

  background("pink");

  fill("white");
  textAlign(CENTER, CENTER);

  textSize(45);
  text("Jungle Over It", width / 2, 150);

  textSize(22);

  text(
    "Press START to begin",
    width / 2,
    220
  );

  // START BUTTON
  if (
    mouseX > 300 &&
    mouseX < 500 &&
    mouseY > 350 &&
    mouseY < 420
  ) {
    fill("lightgreen");
  } else {
    fill("white");
  }

  stroke("black");
  strokeWeight(3);

  rect(300, 350, 200, 70, 20);

  fill("black");
  noStroke();

  textSize(30);

  text("START", 400, 385);
}

// --------------------------------------------------
// BUTTON CLICKS
// --------------------------------------------------
function mousePressed() {

  // START BUTTON
  if (
    gameScreen === 1 &&
    mouseX > 300 &&
    mouseX < 500 &&
    mouseY > 350 &&
    mouseY < 420
  ) {

    // GO TO SCREEN 2
    gameScreen = 2;
  }

  // SCREEN 2 BUTTONS
  if (gameScreen === 2) {
    screen2MousePressed();
  }
}