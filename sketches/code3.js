// Variables globales ici.

function setup_3() {
  // Ceci s’exécute une fois.
}
var y3 = 0;

function draw_3() {
  // Ceci s’exécute à chaque frame.
  background3(100, 100, 255);
  fill(255);
  y3 = y3 + 1;
  rect(100, y3, 10, 20);
  if (y3 > 200) y3 = 0;
  //textSize(30);
  //text("salut", width3 / 2, height3 / 2);
}

// N’oubliez pas d’utiliser la version numérotée des fonctions communes :
// width3 height3 mouseX3 mouseY3 background3()
