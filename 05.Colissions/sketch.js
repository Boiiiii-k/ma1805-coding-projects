let x = 0;
let y = 100;
let size = 50; 
let speed = 2;
let score = 0;
let result = true

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(150, 0, 255);
  circle(x, y, size);
  x= x % width;
  x += speed;
  
  fill(255);
  circle(mouseX, mouseY, size/2);

  textSize(16);
  fill(0);
  text("Score: " + score, 10, 20);
}

function mouseClicked() {
  let d = dist(mouseX, mouseY, x, y);
  if (d <= size/2) {
    score++;
    x = random(size/2, width - size/2);
    y = random(size/2, height - size/2);
  }
}
