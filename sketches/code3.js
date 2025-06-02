// Variables globales ici.

function setup_3() {
  // Ceci s’exécute une fois.
}
var y = 0

function draw_3() {
  // Ceci s’exécute à chaque frame.
  background3(100, 100, 255);
   y = y + 1;
  rect(100, y, 10, 20)
  if (y > 100) y = 0
  //textSize(30);
  //text("salut", width3 / 2, height3 / 2);
}

// N’oubliez pas d’utiliser la version numérotée des fonctions communes :
// width3 height3 mouseX3 mouseY3 background3()
