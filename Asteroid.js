function Asteroid() {
this.pos = createVector(random(width),random(height));
this.vel = createVector(random(-2, 2),random(-2,2 ));
this.r = random( 30,50);
this.move = function() {
this.pos.add(this.vel);
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
    this.pos.y = heght +this.l ;
  }
}
this.show = function() {
ellipse(this.pos.x,this.pos.y, this.r, this.r)
}
}
