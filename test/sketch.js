let eyelocations = [];
let player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let minDist = 120;

  for (let i = 0; i < 50; i++) {
    let x, y;
    let valid = false;

    while (!valid) {
      x = random(60, width - 60);
      y = random(60, height - 60);

      valid = true;

      for (let e of eyelocations) {
        let d = dist(x, y, e[0], e[1]);
        if (d < minDist) {
          valid = false; 
          break;
        }
      }
    }
    eyelocations.push([x, y]);
  }
    player = new Player(0, height / 2, 30);
}

class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = 5;
  }

  move() {
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }

    this.x = constrain(this.x, 0, width - this.size)
    this.y = constrain(this.y, 0, height - this.size)
  }

  show() {
    square(this.x, this.y, this.size);
  }
}

function CreateEye(eyeball_x, eyeball_y, target_x, target_y) {
  // Eyeball
  strokeWeight(2);
  fill(255);
  ellipse(eyeball_x, eyeball_y, 65);

  // The diamond shape you had
  strokeWeight(3);
  quad(
    eyeball_x - 30, eyeball_y,
    eyeball_x, eyeball_y - 60,
    eyeball_x + 30, eyeball_y,
    eyeball_x, eyeball_y + 60
  );

  // --- pupil tracking using atan2 ---
  let angle = atan2(target_y - eyeball_y, target_x - eyeball_x);

  // How far from center the pupil can move
  let pupilRadius = 15;

  // Offset from eye center
  let pupil_x = eyeball_x + cos(angle) * pupilRadius;
  let pupil_y = eyeball_y + sin(angle) * pupilRadius;

  // Draw pupil
  fill(0);
  ellipse(pupil_x, pupil_y, 25);
}


function draw() {
  background(220); 

  player.move();
  player.show();

  eyelocations.forEach(function(eye) {
    CreateEye(eye[0], eye[1],player.x,player.y); 
  });
  
}
