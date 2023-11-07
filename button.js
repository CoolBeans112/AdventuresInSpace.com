function Button(x, y, w, h, txt) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.text = txt;

  this.show = function() {
    fill(0);
    stroke(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    rectMode(CORNER);
    fill(255);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
  }
  
}
