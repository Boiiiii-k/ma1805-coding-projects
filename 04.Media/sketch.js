let unsolved;
let first_layer;
let second_layer;
let third_layer;
let solved;
let listofimg = [];
let index = 0;

function preload() {
  unsolved = loadImage('IMG_3021.jpg')
  first_layer = loadImage('IMG_3022.jpg')
  second_layer = loadImage('IMG_3023.jpg')
  third_layer = loadImage('IMG_3024.jpg')
  solved = loadImage('IMG_3025.jpg')
}

function setup() {
  createCanvas(800, 800);
  listofimg = [unsolved, first_layer, second_layer, third_layer, solved];
}
function draw() {
  background(220);
  image(listofimg[index], 0, 0, width, height);
}

function mousePressed() {
index++;
if (index >= listofimg.length) {
  index = 0;
}
}