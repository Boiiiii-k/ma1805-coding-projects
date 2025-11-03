let layers = ['bottom_layer','first_layer','second_layer','top_layer','last_layer','solved'];
let anglecounts = [7,4,4,8,4,6]

let images = [];
let stageindex = 0;
let angleindex = 0;

function preload() {
  for (let i = 0; i < layers.length; i++) {
    images[i] = [];
    for (let j = 0; j < anglecounts[i]; j++) {
      let imgPath = `images/${layers[i]}/${layers[i]}_${j}.jpg`;
      images[i][j] = loadImage(imgPath);
    }
  }
} 


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(images[stageindex][angleindex], 0, 0, width, height);
}

function mousePressed() {
  stageindex = (stageindex + 1) % layers.length;
  angleindex = 0;
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    let currentStage = layers[stageindex];
    angleindex = (angleindex + 1) % anglecounts[stageindex];
  }
  if (keyCode === LEFT_ARROW) {
    let currentStage = layers[stageindex];
    angleindex = (angleindex - 1 + anglecounts[stageindex]) % anglecounts[stageindex];
  }
}