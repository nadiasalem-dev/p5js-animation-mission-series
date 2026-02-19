// Testing offline p5.js by creating an ellipse that scales with the canvas height and width
function setup() {
  createCanvas(300,500);
}

function draw() {
  background(244);
  ellipse(width/2, height/2, width/4, height/4);
}
