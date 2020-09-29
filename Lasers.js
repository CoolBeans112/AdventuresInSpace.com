function Laser(ship) {
  this.pos = createVector(ship.pos.x, ship.pos.y);
  this.vel = p5.Vector.fromAngle(ship.dir - radians(90));
  this.vel.mult(15)
  this.r = 10;
  this.update = function()  {
    this.pos.add(this.vel);
  }
this.hits = function(asteroid) {
  let d = dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y);
  if (d < asteroid.r){
  return true;
  }
  else{
    return false;
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
