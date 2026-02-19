// Creating a circle that crosses the screen and back; d controls direction
let ball;
function setup() {
  createCanvas(200, 500);
  ball = new Ball(width / 2, height / 2, 5, 20, 20, [255, 0, 255]);
}

function draw() {
  background(244);

  ball.display();
  // Update position based on current direction
  ball.move();
  // Check if the circle hits an edge; if so, reverse direction
  ball.bounce();
}
