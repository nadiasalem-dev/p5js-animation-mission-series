// Mission 5 (OOP): State-Based Behavior
// Extends previous missions by introducing a simple state machine.
// Each Ball instance independently transitions through:
// normal → fast → stun → normal
// based on collision counts and frame timing.

let balls = [];

function setup() {
  createCanvas(200, 500);

  const ballCount = 10;

  for (let i = 0; i < ballCount; i++) {

    // Generate independent base velocities for both axes
    let xSpeed = random(1, 5);
    let ySpeed = random(1, 5);

    // Randomly assign direction to horizontal velocity
    if (floor(random(2)) === 1) {
      xSpeed = -xSpeed;
    }

    // Randomly assign direction to vertical velocity
    if (floor(random(2)) === 1) {
      ySpeed = -ySpeed;
    }

    // Randomize dimensions
    let xSize = ceil(random(50));
    let ySize = ceil(random(50));

    // Spawn within safe bounds based on object size
    let x = random(xSize / 2, width - xSize / 2);
    let y = random(ySize / 2, height - ySize / 2);

    // Create Ball instance with base velocity and size
    balls.push(
      new Ball(
        x,
        y,
        xSpeed,
        ySpeed,
        xSize,
        xSize,
        [random(255), random(255), random(255)]
      )
    );
  }
}

function draw() {
  background(244);

  // Update and render each Ball instance
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();     // Apply state-controlled movement
    balls[i].bounce();   // Perform direction-aware collision handling
    balls[i].display();  // Render to canvas
  }
  // Collision detection for circles.
  // Later missions will change it to ellipses
  for(let i = 0; i < balls.length; i++){
    for(let j = i+ 1; j < balls.length; j++){
      const a = balls[i];
      const b = balls[j];
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      if((dx * dx + dy * dy) < (a.halfWidth + b.halfWidth) * (a.halfWidth + b.halfWidth)){
        a.changeColor();
        b.changeColor();
      }
    }
  }
}