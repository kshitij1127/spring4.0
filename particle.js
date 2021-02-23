class Particle {
  constructor(x, y) {
    this.accelaration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.position = createVector(x, y);
    this.mass = 1;
    this.locked = false;
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.masss);
    this.accelaration.add(f);
  }

  update() {
    if (!this.locked) {
      this.velocity.mult(0.99);
      this.velocity.add(this.accelaration);
      this.position.add(this.velocity);
      this.accelaration.mult(0);
    }
  }

  show() {
    stroke(200);
    strokeWeight(2);
    fill(45, 197, 244);
    ellipse(this.position.x, this.position.y, 16);
  }
}
