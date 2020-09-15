function Laser(ship) {
  this.pos = createVector(ship.pos.x, ship.pos.y);
  this.vel = p5.Vector.fromAngle(ship.dir - radians(90));
  this.vel.mult(15)
  this.r = 10;
  this.update = function()  {
    this.pos.add(this.vel);

  }
  this.edge_loop =function(){
    if (this.pos.x > width+ this.r) {
      this.pos.x = -this.l ;
    }
    else if (this.pos.x < -this.r) {
      this.pos.x = width + this.l ;
    }
    if (this.pos.y > height+ this.r) {
      this.pos.y = -this.l ;
    }
  else  if (this.pos.y <  -this.r) {
      this.pos.y = height +this.l ;
    }
  }
  this.show = function() {
    push();
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    pop();
  }
}
