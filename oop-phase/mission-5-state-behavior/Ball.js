// Ball class encapsulates:
// - Position
// - Base directional velocity
// - State-driven speed control
// - Direction-aware collision handling
// - Color change on collision events
// - Simple state machine (normal → fast → stun → normal)
class Ball {
  constructor(x, y, baseDx, baseDy, r1, r2, col) {
    // Current position (center of ellipse)
    this.x = x;
    this.y = y;

    // Base directional velocity (magnitude preserved across states)
    // Direction flips on collision; magnitude remains stable.
    this.baseDx = baseDx;
    this.baseDy = baseDy;

    // Multiplier controlled by state:
    // normal = 1, fast = 2, stun = 0
    this.speedMultiplier = 1;

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

    // Collision gate to prevent repeated collision events
    this.isColliding = false;

    // State machine:
    // "normal" → "fast" → "stun" → "normal"
    this.state = "normal";

    // Counts valid collision events
    this.bounceCount = 0;

    // Frame counter used while in "stun" state
    this.stunTimer = 0;
  }

  // Render the ball on the canvas
  display() {
    fill(this.col[0], this.col[1], this.col[2]);
    noStroke();
    ellipse(this.x, this.y, this.r1, this.r2);
  }

  // Apply movement each frame.
  // Movement is controlled entirely by base velocity and speedMultiplier.
  // In "stun" state, movement is paused for a fixed number of frames.
  move() {
    if (this.state === "stun") {
      this.stunTimer++;
      if (this.stunTimer >= 10) {
        this.changeState("normal");
      }
      return;
    }

    this.x += this.baseDx * this.speedMultiplier;
    this.y += this.baseDy * this.speedMultiplier;
  }

  // Handle collision detection and response.
  // Uses direction-aware boundary checks to prevent corner locking.
  // Collision events trigger:
  // - Direction reversal
  // - Color change
  // - Bounce counter increment
  // - Possible state transition
  bounce() {
    if (this.state === "stun") return;

    const hitRight  = this.x + this.r1 / 2 >= width;
    const hitLeft   = this.x - this.r1 / 2 <= 0;
    const hitBottom = this.y + this.r2 / 2 >= height;
    const hitTop    = this.y - this.r2 / 2 <= 0;

    // Flip ONLY if moving toward the wall (prevents jitter and corner lock)
    if (hitRight && this.baseDx > 0) {
      this.baseDx = -this.baseDx;
      this.x = width - this.r1 / 2;
    }

    if (hitLeft && this.baseDx < 0) {
      this.baseDx = -this.baseDx;
      this.x = this.r1 / 2;
    }

    if (hitBottom && this.baseDy > 0) {
      this.baseDy = -this.baseDy;
      this.y = height - this.r2 / 2;
    }

    if (hitTop && this.baseDy < 0) {
      this.baseDy = -this.baseDy;
      this.y = this.r2 / 2;
    }

    const collided = hitRight || hitLeft || hitTop || hitBottom;

    if (collided && !this.isColliding) {
      this.changeColor();
      this.isColliding = true;
      this.bounceCount++;

      // State transitions based on bounce thresholds
      if (this.state === "normal" && this.bounceCount >= 10) {
        this.changeState("fast");
      } else if (this.state === "fast" && this.bounceCount >= 10) {
        this.changeState("stun");
      }

    } else if (!collided) {
      // Reset collision gate once fully separated from boundary
      this.isColliding = false;
    }
  }

  // Horizontal boundary detection
  checkHorizontalEdges() {
    return (
      this.x + this.r1 / 2 >= width ||
      this.x - this.r1 / 2 <= 0
    );
  }

  // Vertical boundary detection
  checkVerticalEdges() {
    return (
      this.y + this.r2 / 2 >= height ||
      this.y - this.r2 / 2 <= 0
    );
  }

  // Select a new color randomly from the accessible palette
  changeColor() {
    const index = floor(random(this.palette.length));
    this.col = this.palette[index];
  }

  // Centralized state transition handler.
  // Resets counters and applies correct speed multiplier.
  changeState(state) {
    this.state = state;
    this.bounceCount = 0;
    this.stunTimer = 0;
    this.isColliding = false;

    if (state === "normal") {
      this.speedMultiplier = 1;
    } else if (state === "fast") {
      this.speedMultiplier = 2;
    } else if (state === "stun") {
      this.speedMultiplier = 0;
    }
  }
}