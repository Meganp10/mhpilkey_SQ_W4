// --------------------------------------------------
// SCREEN 2
// --------------------------------------------------
function drawScreen2() {

  background("lightblue");

  // TITLE
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(42);

  text("Pick an Option", width / 2, 120);

  // --------------------------------------------------
  // WATERFALL BUTTON
  // --------------------------------------------------

  // hover effect
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

  fill("black");
  noStroke();

  textSize(22);

  text(
    "Climb Beside\nThe Waterfall",
    245,
    300
  );

  // --------------------------------------------------
  // MONKEY BRIDGE BUTTON
  // --------------------------------------------------

  // hover effect
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

  fill("black");
  noStroke();

  textSize(22);

  text(
    "Swim Across\nBroken Monkey Bridge",
    555,
    300
  );
}

// --------------------------------------------------
// SCREEN 2 BUTTON NAVIGATION
// --------------------------------------------------
function screen2MousePressed() {

  // WATERFALL BUTTON
  if (
    mouseX > 120 &&
    mouseX < 370 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 8
    gameScreen = 8;
  }

  // MONKEY BRIDGE BUTTON
  if (
    mouseX > 430 &&
    mouseX < 680 &&
    mouseY > 250 &&
    mouseY < 350
  ) {

    // GO TO SCREEN 9
    gameScreen = 9;
  }
}