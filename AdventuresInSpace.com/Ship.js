function Ship(){
  this.pos = createVector(width/2,height/2);
  this.vel = createVector(0,0);
  this.l=10
  this.dir = 0;
  this.rot = 0;
  this.is_boosting = false;
  this.boost = function() {
  let force = p5.Vector.fromAngle(this.dir - radians(90));
  force.mult(0.2);
  this.vel.add(force);
  }

  this.move = function(){
    if (this.is_boosting) {
    this.boost();

    }
  this.pos.add(this.vel);
  this.vel.mult(0.97);
}
this.turn = function() {
this.dir += this.rot

}
this.edge_loop =function(){
  if (this.pos.x > width+ this.l) {
    this.pos.x = -this.l ;
  }
  else if (this.pos.x < -this.l) {
    this.pos.x = width + this.l ;
  }
  if (this.pos.y > height+ this.l) {
    this.pos.y = -this.l ;
  }
else  if (this.pos.y <  -this.l) {
    this.pos.y = height +this.l ;
  }
}
this.show = function() {
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.dir);
  triangle(-this.l, this.l,this.l,this.l, 0,-this.l);
  pop();
}




}
