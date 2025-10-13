let x = 0; 
let y = 0; 
let lines = 0; 
let ellipses = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}
 
function draw() {
  background(255,0,100); // What happends if you uncomment this... 
  // Draw a line - try replacing random() with -- OR ++ OR +=4 etc. 
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  let color = random(100, 255);
  stroke(color);
  strokeWeight(5);
  line(x1, y1, x2, y2); 
  fill(255, 255, 255, 20); // Sets transparency 
  ellipse(x1, y1, x2, y2); // Random  sized shape 
  
  // Write some text 
  let myText = "lines "+lines; 
  fill(0);
  stroke(255);
  strokeWeight(1);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText, width/2, height/2);
  lines++;

  let myText2 = "ellipses "+ellipses; 
  fill(255);
  stroke(0);
  strokeWeight(1);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text(myText2, width/2, height/2 + 50);
  ellipses++;
}