let windowWidth, windowHeight;
let gameWidth, gameHeight;

function setup() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    const windowsWidthPercentage = 0.6;
    const aspectRatio = 9/16;
    gameWidth = windowWidth*windowsWidthPercentage;
    gameHeight = gameWidth*aspectRatio;

    let canvas = createCanvas(gameWidth, gameHeight);
    canvas.position(windowWidth/2 - gameWidth/2,windowHeight/2 - gameHeight/2);
  }
  
  function draw() {
    background(0, 0, 0);
  }