function Asteroid() {
let x = 0;
let y = 0;
let spawnOffset = 75;
if (floor(random(2)) == 0) {
 x = random(width/2 - spawnOffset);
}
else {
 x = random(width/2 + spawnOffset, width);
}  

if (floor(random(2)) == 0) {
 y = random(height/2 - spawnOffset);
}
else {
 y = random(height/2 + spawnOffset, height);
}  
this.pos = createVector(x, y);
this.vel = createVector(random(-2, 2),random(-2,2 ));
this.r = random( 30,50);
this.move = function() {
this.pos.add(this.vel);
}
  this.edge_loop =function(){
  if (this.pos.x > width+ this.r) {
    this.pos.x = -this.r ;
  }
  else if (this.pos.x < -this.r) {
    this.pos.x = width + this.r ;
  }
  if (this.pos.y > height+ this.r) {
    this.pos.y = -this.r ;
  }
  else  if (this.pos.y <  -this.r) {
    this.pos.y = height +this.r ;
  }
}
this.show = function() {
ellipse(this.pos.x,this.pos.y, this.r, this.r)
}
  this.hits = function(asteroid) {
  let d = dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y);
  if (d < this.r){
  return true;
  }
}
}
