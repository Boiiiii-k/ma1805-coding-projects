function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(223,186,118);

  //pipe
  fill(121,120,120);
  rect(0,50,150,50);
  
  // greedy man
  fill(189,150,91);
  arc(400, 220, 150, 150, PI+ HALF_PI, PI, CHORD);
  circle(400, 380, 200);
  circle(400, 200, 50);

  fill(255,255,255);
  circle(390, 200, 20);

  fill(189,150,91);
  line(380, 180, 420, 170);
  ellipse(400, 330, 100, 40);
  ellipse(350, 330, 100, 40);
  ellipse(300,330, 70, 40);
  ellipse(290,350, 40, 70);

  triangle(400, 150, 400, 120, 430, 150);

  //chair0
  fill(212,175,55);
  rect(300, 350, 200, 150);

  // poor man
  fill(255,255,255);
  arc(50, 300, 50, 50, 0, PI + HALF_PI, PIE);
  line(50, 325, 50, 400);

  line(50, 400, 75, 375);
  line(75, 375, 90, 420);

  line(50, 400, 70, 365);
  line(70, 365, 100, 400);

  line(50,340, 30, 375);
  line(30,375, 30, 390);

  line(50,340, 70, 360);
  line(70,360, 90, 350);

  circle(40, 290, 20);
  circle(40, 285, 10);

  //water rushing to mouth
  fill(0,0,255);
  quad(150,100,150,60,375,170,330,215);

  // leak and droplets
  strokeWeight(1);
  line(60,90,55,80)
  line(55,95,60,90)
  line(55,95,60,100)
  strokeWeight(1);
  circle(60,150,10)
  circle(60,200,15)
  circle(60,250,20)

  }
