function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  arc(200, 200, 150, 150, 0, PI , PIE);

  noFill();
  circle(200, 200, 300);

  noFill();
  ellipse(200, 200, 200, 150);

  line(0, 0, 400, 400);
  line(400, 0, 0, 400);

  strokeWeight(10);
  point(200, 200);

  noFill();
  strokeWeight(1);
  quad(100, 50, 300, 50, 350, 150, 50, 150);

  noFill();
  strokeWeight(1);
  rect(50, 250, 300, 100);

  noFill();
  strokeWeight(1);
  square(150, 250, 100);

  noFill();
  strokeWeight(1);
  triangle(200, 50, 250, 150, 150, 150);
}
