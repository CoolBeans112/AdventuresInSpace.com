let s;
let lasers = [];
let stars = [];
function setup() {
let clientHeight = document.getElementById('asteroids').clientHeight;
let clientWidth = document.getElementById('asteroids').clientWidth;
let c = createCanvas(clientWidth,clientHeight );
c.parent('asteroids')

for(let i = 0; i< 55; i++){
stars.push(createVector(random(width),random(height)));
}
s = new Ship ();
}
function draw() {
  background(0);
  for(let i = 0; i< stars.length; i++){
    ellipse(stars[i].x, stars[i].y, 4, 4);
  }
  s.move();
  s.turn();
  s.edge_loop();
  s.show();
for (let i =0; i <lasers.length; i++){
  lasers[i].update();
  lasers[i].show();
}

}
function keyPressed() {
if(key == 'w') {
 s.is_boosting = true;
}
if (key == 'a'){
  s.rot = -0.1;
}
if (key == 'd'){
  s.rot = 0.1;
}

}
function keyReleased() {
  if (key == 'w')
  {s.is_boosting = false;}
  if (key == 'a' || key == 'd'){
    s.rot = 0;  }
    if (key == " ") {
      lasers.push(new Laser(s));
    }
}
