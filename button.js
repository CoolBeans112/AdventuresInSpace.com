function Button(x, y, w, h, txt) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.txt = txt;

  this.show = function() {
    fill(0);
    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    rectMode(CORNER);
    fill(255);
    textAlign(CENTER);
    text(this.txt, this.x, this.y);
  }
  
  this.collides = function(x, y) {
    return x > this.x - this.w/2 && x < this.x + this.w/2 && y > this.y - this.h/2 && y < this.y + this.h/2;
  }
}
