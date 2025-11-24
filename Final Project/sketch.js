//let eyeball = [
//    { x: 0,   y: -40 },
//    { x: 40,  y: 0 },
//    { x: 0,   y: 40 },
//    { x: -40, y: 0 }
//];
//let pupils = []

function setup() {
  createCanvas(400,400)
}

function CreateEye(xy) {
  // eye
  fill(255);
  circle(xy[0],xy[1],50);
  // eyeball
  fill(0);
  circle(xy[0],xy[1],10);
  //quad(eyeball[0].x,eyeball[0].y,
  //eyeball[1].x,eyeball[1].y,
  //eyeball[2].x,eyeball[2].y,
  //eyeball[3].x,eyeball[3].y,
  //)
}


function draw() {
  background(220); 
  let xy;

  // Left eye
  xy = [100, 100]; 
  CreateEye(xy);

  // Left eye
  xy = [200, 100]; 
  CreateEye(xy);

}