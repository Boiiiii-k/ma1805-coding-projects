function setup() {
  createCanvas(500, 500);
  frameRate(15);
  
  
}

function draw() {
  background(255,255,255);
  let point_x = random(0,500);
  let point_y = random(0,500);
  let point_x2 = random(0,500);
  let point_y2 = random(0,500);
  
  for (let i=0; i<100; i=i+1){
  stroke(random(255),random(255),random(255));
  strokeWeight(4);
  line(point_x, point_y,point_x2, point_y2);
  point_x = point_x2;
  point_y = point_y2;
  point_x2 = random(0,500);
  point_y2 = random(0,500);

  stroke(0, 0, 0);
  square(200, 200, 100);

  textSize(10);
  strokeWeight(0.5);
  textAlign(CENTER, CENTER);
  text('everything is okay', width / 2, height / 2);

    
  }}
