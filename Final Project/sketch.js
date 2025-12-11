let eyelocations = [];
let rooms = [];
let player;
let reachedGoal = false;
let currentRoom = 0;
let deathcounter = 0;
let currentdeathmessage = '';

let inSecretRoom = false;

//define rooms with eyeball positions
function roomMaker() {
  
  rooms.push({
    eyes: generateEyes(0,120)
  });

  rooms.push({
    eyes: generateEyes(0,120)
  });

  rooms.push({
    eyes: [[width/2,height/4,'vertical']]
  });
  
  rooms.push({
    eyes: [[width/2,height/2,'vertical']]
  });

  rooms.push({
    eyes: [[120,height/2,'vertical']]
  });

  rooms.push({
    eyes: [[width/2,height/4,'vertical'], [width/2,3*height/4,'vertical']]
  });

  rooms.push({
    eyes: [[width/2,height/4,'horizontal'], [width/2,3*height/4,'horizontal']]
  });

  rooms.push({
    eyes: generateEyes(2,120)
  });

  rooms.push({
    eyes: generateEyes(5,120)
  });

  rooms.push({
    eyes: generateEyes(10,120)
  });

  rooms.push({
    eyes: generateEyes(20,120)
  });

  rooms.push({
    eyes: generateEyes(40,120)
  }); 

  rooms.push({
    eyes: generateEyes(0,120)
  });

  rooms.push({
    eyes: generateEyes(0,120)
  });

}

function generateEyes(numEyes, minDist,orientation) {
  let arr = [];

  //loop for eye placement
  for (let i = 0; i < numEyes; i++) {
    let x, y;
    let valid = false;

    //randomly place eyes and makes sure they don't go over the borders
    while (!valid) {
      x = random(70, width - 70);
      y = random(70, height - 70);

      valid = true;
      
      //prevent ovelap of eyes by checking distance between the center of the eyes
      for (let e of arr) {
        let d = dist(x, y, e[0], e[1]);
        if (d < minDist) {
          valid = false; 
          break;
        }
      }
    }
    let orientation = random() < 0.5 ? 'vertical' : 'horizontal';
    arr.push([x, y,orientation]);
  }
  print(arr)
  return arr;

}

function loadlevel(roomIndex) {
  let room = rooms[roomIndex];

  //set eyeball locations for current room
  // map used to copy only the positions of the eyeballs
  eyelocations = room.eyes.map(e => [e[0], e[1], e[2]]);

  //intialize player
  player = new Player(0, height / 2, 30);

  reachedGoal = false;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  roomMaker();
  secretRoom = rooms.length-1; // set secret room index
  loadlevel(currentRoom);
}

class Player {
  //player properties
  constructor(x, y, size) {
    this.startX = x;
    this.startY = y;
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = 5;
  }

  //player movement
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
    //constrain player to canvas
    this.x = constrain(this.x, 0, width - this.size)
    this.y = constrain(this.y, 0, height - this.size)
  }

  //draw player
  show() {
    fill(0);
    square(this.x, this.y, this.size);
  }
  //reset player position when colliding with endpoint or eyeballs
  reset() {
    this.x = this.startX;
    this.y = this.startY;
  }
}


function CreateEye(eyeball_x,eyeball_y,target_x,target_y,orientation) {
  // Eye ball
  noStroke();
  fill(255);
  ellipse(eyeball_x, eyeball_y, 60);

  // add eye quad shape
  // allow for orientation changes

  if (orientation === 'vertical') {
    quad(eyeball_x-30, eyeball_y,eyeball_x,eyeball_y-60,eyeball_x+30,eyeball_y,eyeball_x,eyeball_y+60);}
  else if (orientation === 'horizontal') {
    quad(eyeball_x-60, eyeball_y,eyeball_x,eyeball_y-30,eyeball_x+60,eyeball_y,eyeball_x,eyeball_y+30);}

  let angle = atan2(target_y - eyeball_y,target_x - eyeball_x)
  let pupilRadius = 15

  //pupil tracking using players position and calculating angle between pupil and player
  let pupil_x = eyeball_x+cos(angle) * pupilRadius // checks horizontal distance
  let pupil_y = eyeball_y+sin(angle) * pupilRadius // checks vertical distance

  // Pupils
  fill(0);
  ellipse(pupil_x, pupil_y, 25);
}

function deathMessage(deathcounter) {
  let messages = [
    'The eyes have caught you!',
    'The eyes are always watching...',
    'Caught by the gaze of the eyes',
    'You cannot escape their watchful stare.',
    'The eyes see all, including your demise.',
    'Beware the eyes, for they never blink.',
    'The eyes have claimed another victim.',
    'You have fallen under the eyes\' scrutiny.',
    'The eyes are relentless in their pursuit.',
    'Your journey ends in the gaze of the eyes.',
    'The eyes see through your every move.'
  ];
  
  return messages[deathcounter];
}

function draw() {
  background(220); 

  // Secret Room Logic

  if (inSecretRoom) {
    fill(255,0,0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("You have discovered the secret room!", width / 2, height / 2);
    text("There are no eyes here.", width / 2, height / 2 + 40);
    text("It's a nice day today. Go outside and enjoy the freedom.", width / 2, height / 2 + 80);


    player.move();
    player.show();
    return; // Skip the rest of the draw function
  }

  // Regular Room Logic
  if (!inSecretRoom) {
    let r = rooms[currentRoom];
  }

  if (currentRoom === 0) {
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Use WASD or Arrow Keys to move the square.", width / 2, height / 2);
    text("Avoid the eyes.", width / 2, height / 2 + 40);
    text("Please advance to the next room.", width / 2, height / 2 + 80);
  }

  // death message display
  if (currentRoom === 1) {
    if (deathcounter > 0) {
    fill(255,0,0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(deathMessage(deathcounter), width / 2, height / 2);
    }else{
    fill(255,0,0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Don't be fooled", width / 2, height / 2);
    text("The eyes are still watching you.", width / 2, height / 2 + 40); // first message before any deaths
    }
  }

  //secret room collision detection
  if (currentRoom === 3) {
    let secretX = 50;
    let secretY = 50;
    let secretSize = 50;

    secretRoomCollision(secretX, secretY, secretSize);
      
  }

  // special end messages
  if (currentRoom === rooms.length - 2) {

    fill(255);
    ellipse(width/2, height/4, 250)
    fill(0);
    ellipse(width/2, height/4, 100)

    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Even though you escaped we will still be watchin you", width / 2, height / 2);
    text("The eyes never sleep.", width / 2, height / 2 + 40); 
  }

  if (currentRoom === rooms.length - 1) {
    fill(255,0,0);
    textSize(24);
    text("Theres a way to truly escape", width / 2, height / 2);
    text("Find the hidden exit", width/ 2, height / 2 + 40);
  }

  if (reachedGoal){
    currentRoom++;

    if (currentRoom >= rooms.length) {
      currentRoom= 0; // restart from first level (or stop)
    }
    loadlevel(currentRoom);
    return;
  }

  player.move();
  player.show();

  for (let eye of eyelocations) {
    CreateEye(eye[0], eye[1],player.x,player.y,eye[2]); 

    // eyeball hitbox
    let eyewidth = eye[2] === 'vertical' ? 30 : 120;
    let eyeheight = eye[2] === 'vertical' ? 120 : 30;
    let eyeleft = eye[0] - eyewidth / 2;
    let eyetop = eye[1] - eyeheight / 2;

    //collision detection between player and eyeballs
    // collision with the rectangular part of the eye
    if (rectCollision(player.x, player.y, player.size, player.size, eyeleft, eyetop, eyewidth, eyeheight)) {
      deathcounter++;
      currentRoom = 1;
      loadlevel(currentRoom);
      //player.reset(); // debugging tool instead of restarting level
      //return;
    }

    //collision with the circular part of the eye
    let radius = 30;
    if (circleRectCollision(eye[0], eye[1], radius, player.x, player.y, player.size, player.size)) {
      deathcounter++;
      currentRoom = 1;
      loadlevel(currentRoom);
      //player.reset(); // debugging tool instead of restarting level
      //return;
    }
}

  //endpoint rectangle
  let endpointX = width - 50;
  let endpointY = height / 2;
  let endpointSize = 50;
  fill(0, 0, 255);
  rect(endpointX, endpointY, endpointSize, endpointSize);

  //collision detection between player and endpoint
  
  if (rectCollision(player.x, player.y, player.size, player.size, endpointX, endpointY, endpointSize, endpointSize)) {
    reachedGoal = true;
  }
}

function rectCollision(x1, y1, w1, h1, x2, y2, w2, h2) {

//checks for overlap between two rectangles
  return !(x1 + w1 < x2 || // right edge of rect1 to left edge of rect2
           x1 > x2 + w2 || // left edge of rect1 to right edge of rect2
           y1 + h1 < y2 || // bottom edge of rect1 to top edge of rect2
           y1 > y2 + h2);  // top edge of rect1 to bottom edge of rect2
}

function secretRoomCollision(secretX, secretY, secretSize) {

  // checks for collision between player and secret room area
  if (rectCollision(player.x, player.y, player.size, player.size, secretX, secretY, secretSize, secretSize)) {
    
    inSecretRoom = true;

    player.reset();
    eyelocations = []; // Clear eyeballs in secret room
}
}

function circleRectCollision(cx, cy, radius, rx, ry, rw, rh) {
  // Find closest point on rectangle to the circle center
  let closestX = constrain(cx, rx, rx + rw);
  let closestY = constrain(cy, ry, ry + rh);

  // Distance between circle center and the closest point
  let d = dist(cx, cy, closestX, closestY);

  return d < radius;
}
