let player;
let room = [];
let currentRoom = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
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

function draw() {
  background(220); 
  
  player.move();
  player.show();

  rect(100,100,50,50);

  if (player.x + player.size > 100 && player.x < 150 && player.y + player.size > 100 && player.y < 150) {
    fill(0,255,0);
  } else {
    fill(255,0,0);
  }
}
