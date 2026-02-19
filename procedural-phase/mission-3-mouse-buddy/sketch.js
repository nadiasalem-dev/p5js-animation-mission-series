// Creates an circle that is located where the mouse is and toggles between red and blue based on mouse click
function setup() {
  createCanvas(200,500);
}
// State what color will be after click based on previous color
let flag = true;
let   col = [255, 0, 0];
// Changes color based on what state it is in
function changeColor(){
  if(flag){
  col = [0, 0, 255];
  } else {
    col = [255, 0, 0];
  }
  flag = !flag;
}
function mousePressed(){
  changeColor();
}
function draw() {
  background(244);
  fill(col[0], col[1], col[2]);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  
}
