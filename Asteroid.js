function Asteroid() {
this.pos = createVector(random(width),random(height));
this.vel = createVector(random(-2, 2),random(-2,2 ));
this.r = random( 30,50);
this.move = function() {
this.pos.add(this.vel);
}
this.show = function() {
ellipse(this.pos.x,this.pos.y, this.r, this.r)
}
}
