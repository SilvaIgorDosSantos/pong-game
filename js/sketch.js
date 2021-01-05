class Ball {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.theta = random(0, 2*PI);
    this.v = 2;
  }

  reset(x, y) {
    this.x = x;
    this.y = y;

    this.theta = random(0, 2*PI);
    this.v = 2;
  }

  render() {
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.vx = this.v * cos(this.theta);
    this.vy = this.v * sin(this.theta);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y <= 0) {
      this.y = 0;
      this.theta *= -1;
    }
    
    if (this.y >= gameHeight - this.height) {
      this.y >= gameHeight - this.height;
      this.theta *= -1;
    }
  }
}

class Paddle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.vy = 0;
  }

  reset(x, y) {
    this.x = x;
    this.y = y;

    this.vy = 0;
  }

  render() {
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += this.vy;

    if (this.y <= 0) {
      this.y = 0;
    }
    
    if (this.y >= gameHeight - this.height) {
      this.y >= gameHeight - this.height;
    }
  }
}

let windowWidth, windowHeight;
let gameWidth, gameHeight;
let gameState;
let ball;
let player1Paddle, player2Paddle;

function setup() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    const windowsWidthPercentage = 0.6;
    const aspectRatio = 9/16;
    gameWidth = windowWidth*windowsWidthPercentage;
    gameHeight = gameWidth*aspectRatio;

    let canvas = createCanvas(gameWidth, gameHeight);
    canvas.position(windowWidth/2 - gameWidth/2,windowHeight/2 - gameHeight/2);

    noStroke();
    fill(255, 255, 255);

    gameState = 'start';

    ball = new Ball(gameWidth/2, gameHeight/2, 10, 10);
    player1Paddle = new Paddle(10, gameHeight/2, 10, 40);
    player2Paddle = new Paddle(gameWidth - 20, gameHeight/2, 10, 40);
  }
  
  function draw() {
    background(0, 0, 0);

    if(gameState === 'start') {
      player1Paddle.update();
      player2Paddle.update();
    }
    else if(gameState === 'play') {
      player1Paddle.update();
      player2Paddle.update();

      ball.update();
    }
    
    

    ball.render();
    player1Paddle.render();
    player2Paddle.render();

    
  }