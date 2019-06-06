// declaring ship variables 
let shipWidth = 100; 
let shipHeight = 20; 
let shipX = (canvas.width - shipWidth) / 2 //600; 
let shipY = canvas.height - shipHeight // 600; 


// ----------------------------------MOVE RIGHT AND LEFT----------------------------------
let rightPressed = false; 
let leftPressed = false; 

document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

function keyDownHandler (e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true; 
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true; 
    }
}

function keyUpHandler (e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false; 
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false; 
    }
}

// ----------------------------------DRAW SPACESHIP----------------------------------
function drawSpaceship () {
    canvas; 
    if(canvas.getContext) {
        c; 
        c.beginPath(); // // prevents from connecting path, starting a new path 
        c.fillStyle = "ivory"

        // x, y, width, height
        c.fillRect(shipX, shipY, shipWidth, shipHeight)
        c.fillRect(shipX + 25, shipY - 20, shipWidth - 50, shipHeight)
        c.closePath()
    }
}

function draw () {
    c.clearRect(0, 0, canvas.width, canvas.height)
    drawSpaceship(); 

    if (rightPressed && shipX < shipY) {
        shipX += 7 
         
    }
    else if (leftPressed && shipY > 0) {
        shipX -= 7; 
    }
}
setInterval(draw, 4); 















/*
// ----------------------------------ANIMATE--------------------------------------
// speed of our spaceship
lex x = 300; 
let dx = 6;  
let radius = 30; 
function animateSpaceship() {
    // use request Animation frame function , so it will create a loop for us
    requestAnimationFrame(animateSpaceship)

    // creates our spaceship and not draw on top of it 
    c.clearRect(0, 0, innerWidth, innerHeight) 

    // draw spaceship
    drawSpaceship(x); 
    c.strokeStyle = "red"; 
    c.stroke(); // animate
    
    // bouncing of the left / x - radius < 0 / and right / x + radius > innerWidth / screen 
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
    }
    x += dx;
}
animateSpaceship()
*/ 
