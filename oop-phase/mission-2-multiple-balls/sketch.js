// Mission 2 (OOP): Multiple Ball Objects
// Demonstrates instantiating and managing multiple objects using an array.

let balls = [];

function setup() {
  createCanvas(200, 500);

  const ballCount = 10;

  for (let i = 0; i < ballCount; i++) {
    // Generate controlled random speed and direction
    let speed = random(1, 5);
    if (floor(random(2)) === 1) {
      speed = -speed;
    }

    // Randomize size
    let xSize = ceil(random(50));
    let ySize = ceil(random(50));

    // Spawn within safe bounds based on object size
    let x = random(xSize / 2, width - xSize / 2);
    let y = random(ySize / 2, height - ySize / 2);

    balls.push(
      new Ball(
        x,
        y,
        speed,
        xSize,
        ySize,
        [random(255), random(255), random(255)]
      )
    );
  }
}

function draw() {
  background(244);

  // Update and render each Ball instance
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].bounce();
    balls[i].display();
  }
}