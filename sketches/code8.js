// Variables globales ici.
var y8 = 0;

function setup_8() {
  // Ceci s’exécute une fois.
}

function draw_8() {
  // Ceci s’exécute à chaque frame.
  background8(0, 150, 0);
  textSize(30);
  text("Rect", width8 / 2, height8 / 2);

  fill(255);
  noStroke();
  rect(width8 / 2 - 25, y8, 50, 50);

  y8 += 2;

  if (y8 > height8) {
    y8 = -100;
  }
}

// N’oubliez pas d’utiliser la version numérotée des fonctions communes :
// width8 height8 mouseX8 mouseY8 background8()
