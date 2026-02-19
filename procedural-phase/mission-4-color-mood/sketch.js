// Changing the background color based on time passed
function setup() {
  createCanvas(200,500);

}
// Sets background color in global variable 
let col = [0,0,0];
function draw() {
  background(col[0], col[1], col[2]);
  // Changes the RBC based on if it lands on the max number
  if(col[0] < 255){
    col[0]+=1;
  } else if(col[1] < 255){
    col[1] += 1;
  } else if(col[2] < 255){
    col[2] += 1;
  } 
  // Resets color when its at col = [255,255,255]
  else{
    col = [0,0,0];
  }
  // Makes sure it doesn't go beyond the max using the min function
  col[0] = min(col[0], 255);
  col[1] = min(col[1], 255);
  col[2] = min(col[2], 255);

}