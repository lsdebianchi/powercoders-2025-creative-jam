// Variables globales ici.
var x = 0;
function setup_1() {
  // Ceci s’exécute une fois.
}

function draw_1() {
  // Ceci s’exécute à chaque frame.
  background1(0);
  circle(width1 / 2 + x, height1 / 2 + x, 50);
  x = x + 5;
}

// N’oubliez pas d’utiliser la version numérotée des fonctions communes :
// width1 height1 mouseX1 mouseY1 background1()
