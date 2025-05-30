function setup() {
  createCanvas(900, 900);
  updateGlobalVariables();

  changeCoordinates(1);
  setup_1();

  changeCoordinates(2);
  setup_2();

  changeCoordinates(3);
  setup_3();

  changeCoordinates(4);
  setup_4();

  changeCoordinates(5);
  setup_5();

  changeCoordinates(6);
  setup_6();

  changeCoordinates(7);
  setup_7();

  changeCoordinates(8);
  setup_8();

  changeCoordinates(9);
  setup_9();
}

function draw() {
  updateGlobalVariables();

  changeCoordinates(1);
  draw_1();

  changeCoordinates(2);
  draw_2();

  changeCoordinates(3);
  draw_3();

  changeCoordinates(4);
  draw_4();

  changeCoordinates(5);
  draw_5();

  changeCoordinates(6);
  draw_6();

  changeCoordinates(7);
  draw_7();

  changeCoordinates(8);
  draw_8();

  changeCoordinates(9);
  draw_9();
}

// Permet de mettre l'animation en pause en appuyant sur la barre d'espacement
var paused = false;
function keyPressed() {
  if (key === " ") {
    if (paused) {
      paused = false;
      loop();
    } else {
      paused = true;
      noLoop();
    }
  }
}
