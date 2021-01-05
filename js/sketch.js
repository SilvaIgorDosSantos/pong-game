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
			this.y = gameHeight - this.height;
		}
	}
}

function renderText() {
	if(screenText !== '') {
		textSize(20);
		textAlign(CENTER);
		text(screenText, gameWidth/2, 40);
	}
}

function renderScore() {
	textSize(60);
	textAlign(CENTER);
	text(player1Score, (gameWidth)*0.25, 120);
	text(player2Score, (gameWidth)*0.75, 120);
}

let windowWidth, windowHeight;
let gameWidth, gameHeight;
let gameState;
let ball;
let player1Paddle, player2Paddle;
let paddleMaximumSpeed = 2.5;
let screenText;
let player1Score, player2Score;

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
    player1Paddle = new Paddle(10, gameHeight/2, 10, 50);
	player2Paddle = new Paddle(gameWidth - 20, gameHeight/2, 10, 50);
	player1Score = 0;
	player2Score = 0;
}

function draw() {
    background(0, 0, 0);

    if(gameState === 'start') {
		screenText = 'Welcome to Pong!\nPress Enter to begin';

    	player1Paddle.update();
      	player2Paddle.update();
	}
	else if(gameState === 'pause') {
		screenText = 'Game is paused\nPress Enter to resume';
	}
    else if(gameState === 'play') {
		screenText = '';

    	player1Paddle.update();
    	player2Paddle.update();

    	ball.update();
    }
    
    
	renderText();
	renderScore();
    ball.render();
    player1Paddle.render();
    player2Paddle.render();

    
}

function keyPressed() {
    switch(keyCode) {
		case UP_ARROW:
			player2Paddle.vy -= paddleMaximumSpeed;
			break;
		case DOWN_ARROW:
			player2Paddle.vy += paddleMaximumSpeed;
			break;
		case 87: // W
			player1Paddle.vy -= paddleMaximumSpeed;
			break;
		case 83: // S
			player1Paddle.vy += paddleMaximumSpeed;
			break;
		case ENTER:
			if(gameState === 'start' || gameState === 'pause') {
				gameState = 'play';
			}
			else if(gameState === 'play') {
				gameState = 'pause';
			}
		default:
			break;
    }

    return false;
}

function keyReleased() {
    switch(keyCode) {
    	case UP_ARROW:
			player2Paddle.vy += paddleMaximumSpeed;
			break;
		case DOWN_ARROW:
			player2Paddle.vy -= paddleMaximumSpeed;
			break;
		case 87: // W
			player1Paddle.vy += paddleMaximumSpeed;
			break;
		case 83: // S
			player1Paddle.vy -= paddleMaximumSpeed;
			break;
		default:
			break;
    }

    return false;
}