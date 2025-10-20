function setup() {
  createCanvas(500, 500);
  frameRate(15); 
}

function draw() {
  background(255,100);
  let point_x = random(0,500);
  let point_y = random(0,500);
  let point_x2 = random(0,500);
  let point_y2 = random(0,500);
  
  for (let i=0; i<random(100,200); i=i+1){
  stroke(random(255),random(255),random(255));
  strokeWeight(2);
  line(point_x, point_y,point_x2, point_y2);
  point_x = point_x2;
  point_y = point_y2;
  point_x2 = random(0,500);
  point_y2 = random(0,500);

  stroke(0,0,0);
  square(200, 200, 100);

  textSize(random(5,15));
  strokeWeight(0.5);
  textAlign(CENTER, CENTER);
  text('everything is okay', random(245,255), random(250,255));
  }}
