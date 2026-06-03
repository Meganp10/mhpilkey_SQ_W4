
// --------------------------------------------------
// SCREEN 3
// --------------------------------------------------
function drawScreen3() {

  // BACKGROUND
  background("purple");

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
    "Climb beside waterfall",
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
    "Monkey bridge",
    555,
    300
  );
}

// --------------------------------------------------
// SCREEN 3 BUTTON CLICKS
// --------------------------------------------------
function screen3MousePressed() {

  
  // --------------------------------------------------
  // WATERFALL BUTTON
  // --------------------------------------------------
  if (
    mouseX > 120 &&
    mouseX < 370 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 5
    gameScreen = 5;
  }

  // --------------------------------------------------
  // MONKEY BRIDGE BUTTON
  // --------------------------------------------------
  if (
    mouseX > 430 &&
    mouseX < 680 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 6
    gameScreen = 6;
  }
}

