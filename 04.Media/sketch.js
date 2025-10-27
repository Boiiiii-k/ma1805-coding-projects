let hum; 
let img; 

function preload(){
  hum = loadSound("humm.wav");
  img = loadImage('Antenna.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0, windowWidth, 500);
}

function mouseClicked(){
  hum.loop();
  hum.amp(0.2); 
  // IMPORTANT TO HAVE THIS!!
  // On many browsers, 
  // audio will only run after 
  // a user interaction (keypress, mouseclick etc.)
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}