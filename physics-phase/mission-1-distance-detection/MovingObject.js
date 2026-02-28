class MovingObject{
   constructor(x, y, baseDx, baseDy, halfWidth, halfHeight) {
    this.x = x;
    this.y = y;
    this.baseDx = baseDx;
    this.baseDy = baseDy;
    this.halfWidth = halfWidth;
    this.halfHeight = halfHeight;
    this.speedMultiplier = 1;
    
  }
    move() {
    this.x += this.baseDx * this.speedMultiplier;
    this.y += this.baseDy * this.speedMultiplier;
  }
    bounce(boundaryWidth, boundaryHeight) {

    const hitRight  = this.x + this.halfWidth  >= boundaryWidth;
    const hitLeft   = this.x - this.halfWidth  <= 0;
    const hitBottom = this.y + this.halfHeight  >= boundaryHeight;
    const hitTop    = this.y - this.halfHeight  <= 0;
    let collide = false;


    // Flip ONLY if moving toward the wall (prevents jitter and corner lock)
    if (hitRight && this.baseDx > 0) {
      this.baseDx = -this.baseDx;
      this.x = boundaryWidth - this.halfWidth;
      collide = true;
    }

    if (hitLeft && this.baseDx < 0) {
      this.baseDx = -this.baseDx;
      this.x = this.halfWidth;
      collide = true;
    }

    if (hitBottom && this.baseDy > 0) {
      this.baseDy = -this.baseDy;
      this.y = boundaryHeight - this.halfHeight;
      collide = true;
    }

    if (hitTop && this.baseDy < 0) {
      this.baseDy = -this.baseDy;
      this.y = this.halfHeight;
      collide = true;
    }
    return collide;
  }
     
}