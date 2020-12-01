let words = [];
let wordFall = setInterval(makeWord, 100);
let letters = ['h', 'a', 'c', 'k', 'i', 'n', 'g', 'e', 'n']

function setup() {
  createCanvas(500, 500);
  textFont('Helvetica', 25);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 227, 238);
  fill(255,0,127);
  for (var i = words.length - 1; i >= 0; i--) {
    words[i].display();
    words[i].move();

    if (words[i].isOffScreen()) {
      words.splice(i, 1);
    }
  }

  if ((keyIsPressed == true) && (key == 'y')) {
    fill(255,0,127);
    text('y', 150, 400);
  }
  
  if ((keyIsPressed == true) && (key == 'a')) {
    fill(255,0,127);
    text('a', 175, 400);
  }
  
  if ((keyIsPressed == true) && (key == 's')) {
    fill(255,0,127);
    text('s', 200, 400);
    text('s', 225, 400);
  }
  
  if ((keyIsPressed == true) && (key == 'q')) {
    fill(255,0,127);
    text('q', 250, 400);
  }
  
  if ((keyIsPressed == true) && (key == 'u')) {
    fill(255,0,127);
    text('u', 275, 400);
  }
  
  if ((keyIsPressed == true) && (key == 'e')) {
    fill(255,0,127);
    text('e', 300, 400);
    text('e', 325, 400);
  }
  
  if ((keyIsPressed == true) && (key == 'n')) {
    fill(255,0,127);
    text('n', 350, 400);
  }
}

function makeWord() {
  words.push(new Word());
  console.log(words.length);
}

class Word {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = 1;
    this.l = random(letters);
    this.color = color(random(255),random(255),random(255));
  }

  move() {
    this.y += this.speed;
  }
  display() {

    fill(this.color);
    text(this.l, this.x, this.y);
  }
  // deletes letters offscreen
  isOffScreen() {
    if (this.y > height) {
      return true
    }
  }
}
//removes typed letters
function keyPressed() {
  removeLetter(key); 
}

function removeLetter(letter) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].l === letter) {
      print(words[i].l);
      words.splice(i, 1);
      i--; //needed to keep looping array correctly
    }
  }
}