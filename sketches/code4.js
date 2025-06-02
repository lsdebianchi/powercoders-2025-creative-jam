// Variables globales ici.

const { Circle } = require("@react-google-maps/api");

function setup_4() {
  // Ceci s’exécute une fois.
}

function draw_4() {
  // Ceci s’exécute à chaque frame.
  background4(255, 25, 255);
  textSize(40);
  Circle(mouseX, mouseY,50)
  text("ERKAN", width4 / 2, height4 / 2);
  text("FILIZ", width4 / 2, height4 / 2);
}

// N’oubliez pas d’utiliser la version numérotée des fonctions communes :
// width4 height4 mouseX4 mouseY4 background4()
