// to move across x's 
let x = 700; 
let radius = 30

// ----------------------------------DRAW SPACESHIP----------------------------------
function drawSpaceship(x) {
    canvas; 
    if(canvas.getContext) {
        c; 
        c.beginPath(); // // prevents from connecting path, starting a new path 
        c.fillStyle = "ivory"
        // x, y, width, height
        c.fillRect(x, 750, 100, 20)
        c.fillRect(x+25, 730, 50, 20)
    }
}
drawSpaceship(x); 

// ----------------------------------ANIMATE--------------------------------------
// speed of our spaceship
let dx = 6;  
function animateSpaceship() {
    // use request Animation frame function , so it will create a loop for us
    requestAnimationFrame(animateSpaceship)

    // creates our spaceship and not draw on top of it 
    c.clearRect(0, 0, innerWidth, innerHeight) 
    drawSpaceship(x); 
    c.strokeStyle = "red"; 
    c.stroke(); // animate
    
    // bouncing of the left /* x - radius < 0 */ and right /* x + radius > innerWidth */ screen 
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
    }
    x += dx;
}
animateSpaceship()


