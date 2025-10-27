let img; // Declare variable 'img'.
let hum;
let video;
let playing = false;

function preload() {
  img = loadImage('Antenna.jpg'); // Load image
  hum = loadSound('humm.wav');
  video = createVideo('TheSea.mov');
  video.hide(); // Required to hide HTML  vid
  video.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
  hum.amp(0.1);
  //video.amp(0.1);
}

function draw() {
  image(img, 0, 100, img.width/2, 400);
  image(video, 0, 500, 450, 300);
}

function mousePressed() {
    if (playing) {
      video.pause();
      hum.pause();
    } else {
      video.loop();
      hum.loop(); 
    }
    playing = !playing;
}