// Ball class encapsulates position, 2D velocity,
// rendering, edge handling, and color change on collision.
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

    // Current display color
    this.col = col;

    // Color-blind-friendly palette (Okabe–Ito palette)
    this.palette = [
      [0, 114, 178],   // Blue
      [213, 94, 0],    // Vermillion
      [0, 158, 115],   // Bluish green
      [204, 121, 167], // Reddish purple
      [230, 159, 0],   // Orange
      [86, 180, 233],  // Sky blue
      [240, 228, 66]   // Yellow
    ];

    // Tracks whether the ball is currently colliding with a wall
    this.isColliding = false;
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

  // Handle collision response and trigger color change once per collision event
  bounce() {
    const horizontal = this.checkHorizontalEdges();
    const vertical = this.checkVerticalEdges();

    const currentlyTouching = horizontal || vertical;

    if (currentlyTouching) {
      if (!this.isColliding) {
        // Reverse velocity based on which axis was hit
        if (horizontal) this.dx = -this.dx;
        if (vertical) this.dy = -this.dy;

        // Change color once per collision
        this.changeColor();

        this.isColliding = true;
      }
    } else {
      // Reset collision state once ball is no longer touching a wall
      this.isColliding = false;
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

  // Randomly select a new color from the palette
  changeColor() {
    const index = floor(random(this.palette.length));
    this.col = this.palette[index];
  }
}