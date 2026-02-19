// Creating a circle that crosses the screen and back; d controls direction
let x, y, d;
function setup() {
  createCanvas(200,500);
  x = random(width);
  y = random(height);
  
}

function draw() {
  background(244);
  ellipse(x, y, random(20), (random(20)));
// Update position based on current direction
  x = random(width);
  y = random(height);
}
