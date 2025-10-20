function setup() {
  createCanvas(400, 400);
  frameRate(15);
}

let words = ['hello', 'world', 'this', 'is', 'life']
let nums = [0 ,10, 20, 30, 40];
let k = 0;

function draw() {
  background(220);
    for(let i=0; i<=390; i=i+10){
      let r = random(0,50);
      fill(random(255), random(255), random(255));
  	  circle(i, i, r);
  }

  let j = 1;
  while(j<=400){
    let r2 = random(0,50);
    fill(random(255), random(255), random(255));
    circle(400 - j, j, r2);
    j = j + 10;
  } 

  textSize(60);
  textAlign(CENTER, CENTER);
  fill(0);
  text(words[k],nums[k]*10, nums[k]*10);
}

function mousePressed(){
  k++;
  if (k >= words.length){
    k = 0;
  }
}
