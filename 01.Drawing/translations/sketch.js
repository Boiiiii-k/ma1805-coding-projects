

function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(0);
}

function draw(){
  
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);

 
  push();
  rectMode(CENTER);
  translate(150, 150);
  fill(255, 0, 0);
  rect(0, 0, 100, 100);
  pop();
  
  push();
  rectMode(CENTER);
  translate(450, 150);
  rotate(radians(22));
  fill(0, 0, 255);
  rect(0, 0, 100, 100);
  pop();

  push();
  rectMode(CENTER);
  translate(150, 450);
  rotate(radians(45));
  fill(0, 255, 255);
  rect(0, 0, 100, 100);
  pop();

  push();
  rectMode(CENTER);
  translate(450, 450);
  rotate(radians(67));
  fill(255, 255, 0);
  rect(0, 0, 100, 100);
  pop();
}