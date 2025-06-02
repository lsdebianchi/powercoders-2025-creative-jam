let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  
  // Move the circle to the right
  x = x + 2;
  
  // Reset position when it goes off screen
  if (x > width) {
    x = 0;
  }
  
  // Draw the circle
  ellipse(200, x, 150, 150);
}

// N’oubliez pas d’utiliser la version numérotée des fonctions communes :
// width2 height2 mouseX2 mouseY2 background2()
