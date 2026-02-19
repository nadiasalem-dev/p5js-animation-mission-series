
let x, y, dir, r1, r2;
let col = [0, 0, 255];
function setup() {
  createCanvas(200,500);
  x = random(width);
  y = random(height);
  dir = 1;  
  r1 = 20;
  r2 = 30;
}

function draw() {
  background(244);
  fill(col[0], col[1], col[2]);
  noStroke();
  ellipse(x, y, r1, r2);
  x += dir;
  y += dir;
  let maxSpeed = 10;
  let hit = hitTheWall();
  if(hit){
    col[0] = random(255);
    col[1] = random(255);
    col[2] = random(255);
    dir *= -1;
    if(abs(dir) < maxSpeed){
      if(floor(random(2)) == 1)
        dir *= 2;
      else 
        dir /= 2;
  
      
    }
    dir = constrain(dir, -maxSpeed, maxSpeed);
    x = constrain(x, r1/2, width - r1/2);
    y =constrain(y, r2/2, height - r2/2);
  }
  if(isHalfWay() && !hit){
    dir = 2 * dir;
    col[0] = 255;
    col[1] = 0;
    col[2] = 255;
  }else if(!hit){
    if(dir > 4)
    dir = dir/2;
  }
}
function hitTheWall(){
  return x- r1/2 <=0 || x + r1/2 >= width || y - r2/2 <= 0 || y + r2/2 >= height;
}
function isHalfWay(){
  return x > width/2;
}