// Ball class encapsulates position, movement, rendering, and edge behavior.
class Ball {
    constructor(x, y, dx, dy, r1, r2, col) {
        // Position
        this.x = x;
        this.y = y;

        // Direction / velocity (single value controls diagonal movement)
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

    // Update position based on current direction
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    // Reverse direction when the ball reaches canvas boundaries
    bounce() {
        if (this.checkHorizontalEdges())
            this.dx = -this.dx;
        if (this.checkVirticalEdges())
            this.dy = -this.dy;
    }


checkHorizontalEdges() {
    if (
        this.x + this.r1 / 2 >= width ||
        this.x - this.r1 / 2 <= 0
        )
    return true;
    return false;
}
checkVirticalEdges() {
    if (
        this.y + this.r2 / 2 >= height ||
            this.y - this.r2 / 2 <= 0
        )
    return true;
    return false;
}
}