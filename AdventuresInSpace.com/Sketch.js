let s;
let lasers = [];
let stars = [];
let asteroids = [];
let restartBtn;
let state = "game";
let startBtn;

function setup() {
  let clientHeight = document.getElementById('asteroids').clientHeight;
  let clientWidth = document.getElementById('asteroids').clientWidth;
  let c = createCanvas(clientWidth,clientHeight );
  c.parent('asteroids')
  textSize(20);
  for(let i = 0; i<100; i++){
    asteroids.push(new Asteroid());
    backround(0)
  }

  for(let i = 0; i< 55; i++){
    stars.push(createVector(random(width),random(height)));
  }
  s = new Ship ();
  restartBtn = new Button(width/2, height/2 + 70, 100, 50, "Restart");
  state = "start";
  startBtn = new Button(width 5, height 5, + 75 110 60, "Start");
}


function draw() {
  background(0);
  if (state == "start") {
   fill(225);
    textSize(40);
    textAlign(CENTER);
    text("space shooter", width/2, height/2 - 20);
  }
  else if (state == "game") {
    for(let i = 0; i< stars.length; i++){
        ellipse(stars[i].x, stars[i].y, 4, 4);
    }
  
    s.move();
    s.turn();
    s.edge_loop();
    s.show();

    for (let i =0; i <asteroids.length; i++){
      asteroids[i].move();
      asteroids[i].show();
      asteroids[i].edge_loop();
      if (asteroids[i].hits(s)) {
        state = "dead";
        break;
      }
    }

    for (let i = lasers.length-1; i>=0;i--){
      lasers[i].update();
      lasers[i].show();
      for (let JITWT = asteroids.length-1; JITWT >= 0; JITWT--){
        if (lasers[i].hits(asteroids[JITWT])){
          asteroids.splice(JITWT, 1);
          lasers.splice(i, 1);
          break;
        }
      }
    }
  } else if (state == "dead") {
    asteroids = [];
    stars = [];
    background(0);
    fill(255);
    text("You died", width/2, height/2);
    restartBtn.show();
  }
}

function mousePressed() {
  if(state == "start" && startBtn.collides(mouseX, mouseY)) {
  state = "game";
  }
  if(state == "dead" && restartBtn.collides(mouseX, mouseY)) {
    for(let i = 0; i<100; i++){
      asteroids.push(new Asteroid());
    }
  
    for(let i = 0; i< 55; i++){
      stars.push(createVector(random(width),random(height)));
    }
    s = new Ship();
    state = "game";
  }
  
}

function keyPressed() {
  if(key == ' ' && state == "start"){
  state = "game";} 
  else if(key == 'w') {
   s.is_boosting = true;
  }
else if (key == 'a'){
    s.rot = -0.1;
  }
else if (key == 'd'){
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
