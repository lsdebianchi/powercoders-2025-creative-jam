var width1 = 0;
var height1 = 0;
var mouseX1 = 0;
var mouseY1 = 0;

var width2 = 0;
var height2 = 0;
var mouseX2 = 0;
var mouseY2 = 0;

var width3 = 0;
var height3 = 0;
var mouseX3 = 0;
var mouseY3 = 0;

var width4 = 0;
var height4 = 0;
var mouseX4 = 0;
var mouseY4 = 0;

var width5 = 0;
var height5 = 0;
var mouseX5 = 0;
var mouseY5 = 0;

var width6 = 0;
var height6 = 0;
var mouseX6 = 0;
var mouseY6 = 0;

var width7 = 0;
var height7 = 0;
var mouseX7 = 0;
var mouseY7 = 0;

var width8 = 0;
var height8 = 0;
var mouseX8 = 0;
var mouseY8 = 0;

var width9 = 0;
var height9 = 0;
var mouseX9 = 0;
var mouseY9 = 0;

function background0(...a) {
  var step = width / 3;
  push();
  beginClip();
  rect(0, 0, step, step);
  endClip();
  background(...a);
  pop();
}
var background1 = background0;
var background2 = background0;
var background3 = background0;
var background4 = background0;
var background5 = background0;
var background6 = background0;
var background7 = background0;
var background8 = background0;
var background9 = background0;

function updateGlobalVariables() {
  var step = width / 3;

  width1 = step;
  width2 = step;
  width3 = step;
  width4 = step;
  width5 = step;
  width6 = step;
  width7 = step;
  width8 = step;
  width9 = step;

  height1 = step;
  height2 = step;
  height3 = step;
  height4 = step;
  height5 = step;
  height6 = step;
  height7 = step;
  height8 = step;
  height9 = step;

  mouseX1 = mouseX;
  mouseX2 = mouseX - step;
  mouseX3 = mouseX - step - step;
  mouseX4 = mouseX;
  mouseX5 = mouseX - step;
  mouseX6 = mouseX - step - step;
  mouseX7 = mouseX;
  mouseX8 = mouseX - step;
  mouseX9 = mouseX - step - step;

  mouseY1 = mouseY;
  mouseY2 = mouseY;
  mouseY3 = mouseY;
  mouseY4 = mouseY - step;
  mouseY5 = mouseY - step;
  mouseY6 = mouseY - step;
  mouseY7 = mouseY - step - step;
  mouseY8 = mouseY - step - step;
  mouseY9 = mouseY - step - step;
}

function changeCoordinates(index) {
  var step = width / 3;

  resetMatrix();
  if (index === 1) {
    translate(0, 0);
  } else if (index === 2) {
    translate(step, 0);
  } else if (index === 3) {
    translate(step * 2, 0);
  } else if (index === 4) {
    translate(0, step);
  } else if (index === 5) {
    translate(step, step);
  } else if (index === 6) {
    translate(step * 2, step);
  } else if (index === 7) {
    translate(0, step * 2);
  } else if (index === 8) {
    translate(step, step * 2);
  } else if (index === 9) {
    translate(step * 2, step * 2);
  }
}
