// Creating a circle that crosses the screen and back; d controls direction
let x, y, d;
function setup() {
  createCanvas(200,500);
  x = width/2;
  y = height/2;
  d = 1;
}

function draw() {
  background(244);
  ellipse(x, y, 20, 20);
// Update position based on current direction
  x = x+ d;
  y = y + d;
// Check if the circle hits an edge; if so, reverse direction
  if(x > width || y > height || x < 0 || y < 0){
    turnaround();
  }

}
// Switch direction regardless of which side of the canvas is hit
function turnaround(){
  d = d*-1;
}