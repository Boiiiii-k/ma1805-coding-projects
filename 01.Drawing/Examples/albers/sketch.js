function setup() {
  createCanvas(640, 480); 
  background(230);    
  // noStroke();              
}

function draw(){
    fill(0); 
    stroke(255,0,0);
    strokeWeight(5);
    rect(0, 0, 100, 100); // x, y, w, h
    
    fill(64);
    stroke(255,255,0);
    strokeWeight(4);
		rect(50, 50, 100, 100); 

		fill(128)
    stroke(0,255,0);
    strokeWeight(3);
		rect(100, 100, 100, 100);
		
		fill(196);
    stroke(0,255,255);
    strokeWeight(2);
		rect(150, 150, 200, 200);

		fill(220);
    stroke(0,0,255);
    strokeWeight(1);
		rect(300, 300, 400, 400); 
}