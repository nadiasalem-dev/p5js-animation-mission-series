// Ball class encapsulates position, 2D velocity,
// rendering, and edge-handling behavior.
class Ball {
  constructor(x, y, dx, dy, r1, r2, col) {
    // Position
    this.x = x;
    this.y = y;

    // Independent horizontal and vertical velocities
    this.dx = dx;
    this.dy = dy;

    // Dimensions (ellipse width and height)
    this.r1 = r1;
    this.r2 = r2;

    // Color stored as RGB array
    this.col = col;
  }

  // Render the ball on the canvas
  display() {
    fill(this.col[0], this.col[1], this.col[2]);
    noStroke();
    ellipse(this.x, this.y, this.r1, this.r2);
  }

  // Update position using current velocity
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  // Collision response: reverse velocity when edges are reached
  bounce() {
    if (this.checkHorizontalEdges()) {
      this.dx = -this.dx;
    }

    if (this.checkVerticalEdges()) {
      this.dy = -this.dy;
    }
  }

  // Detect collision with left or right boundaries
  checkHorizontalEdges() {
    return (
      this.x + this.r1 / 2 >= width ||
      this.x - this.r1 / 2 <= 0
    );
  }

  // Detect collision with top or bottom boundaries
  checkVerticalEdges() {
    return (
      this.y + this.r2 / 2 >= height ||
      this.y - this.r2 / 2 <= 0
    );
  }
}