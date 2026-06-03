// --------------------------------------------------
// SCREEN 4
// --------------------------------------------------
function drawScreen4() {

  // BACKGROUND
  background("pink");

  // --------------------------------------------------
  // TITLE
  // --------------------------------------------------
  fill("white");
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(42);

  text("Pick an Option", width / 2, 120);

  // --------------------------------------------------
  // WATERFALL BUTTON
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
    "Enter dark cave",
    245,
    300
  );

  // --------------------------------------------------
  // MONKEY BRIDGE BUTTON
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
    "Climb clifside",
    555,
    300
  );
}

// --------------------------------------------------
// SCREEN 3 BUTTON CLICKS
// --------------------------------------------------
function screen4MousePressed() {

  // --------------------------------------------------
  // DARK CAVE BUTTON
  // --------------------------------------------------
  if (
    mouseX > 120 &&
    mouseX < 370 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 7
    gameScreen = 7;
  }

  // --------------------------------------------------
  // CLIFSIDE BUTTON
  // --------------------------------------------------
  if (
    mouseX > 430 &&
    mouseX < 680 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 8
    gameScreen = 8;
  }
}

