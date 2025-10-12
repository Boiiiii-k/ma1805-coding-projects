function setup() {
  createCanvas(500, 500);
  frameRate(15);
  
  
}

function draw() {
  background(255,255,255);
  rect(0,50,150,50);
    
  arc(350, 250, 100, 100, PI+ HALF_PI, PI, CHORD);
  circle(350, 400, 200);


  arc(50, 300, 50, 50, 0, PI + HALF_PI, PIE);
  line(50, 325, 50, 400);

  bezier(150,100,150,100,300,300,250,250);

  }
