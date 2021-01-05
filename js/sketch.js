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
  }
}

let windowWidth, windowHeight;
let gameWidth, gameHeight;
let ball;

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

    ball = new Ball(gameWidth/2, gameHeight/2, 10, 10);


  }
  
  function draw() {
    background(0, 0, 0);

    ball.update();

    ball.render();

    
  }