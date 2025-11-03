function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(220);
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 15; j++) {
      let x = i * 60 - 210;
      let y = j * 35 - 230;
      push();
      translate(x, y);
      fill(255, 213, 3);
      ellipse(0, 0, 40, 40, 6);
      fill(239, 140, 1);
      ellipse(0, 0, 25, 25, 6);
      pop();
    }
  }
  for (let k = 0; k < 9; k++) {
    for (let l = 0; l < 15; l++) {
      let x = k * 60 - 240;
      let y = l * 35 - 250;
      push();
      translate(x, y);
      fill(255, 213, 3);
      ellipse(0, 0, 40, 40, 6);
      fill(239, 140, 1);
      ellipse(0, 0, 25, 25, 6);
      pop();
    }
  }
}