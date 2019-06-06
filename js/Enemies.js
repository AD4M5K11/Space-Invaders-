let xEnemies = 500
let dxEnemies = 6
let fromTopEnemies = 50
let diameterEnemies = 50

// ----------------------------DRAW ENEMIES-----------------------------
function drawEnemies () {
    canvas; 
    if(canvas.getContext) {
        c; 
        c.beginPath();

        let Enemies = [
            c.fillRect(xEnemies, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+100, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+200, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+300, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+400, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+500, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+600, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+700, fromTopEnemies, diameterEnemies, 50),
            c.fillRect(xEnemies+800, fromTopEnemies, diameterEnemies, 50),
        
            c.fillRect(xEnemies+50, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+150, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+250, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+350, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+450, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+550, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+650, fromTopEnemies+100, diameterEnemies, 50),
            c.fillRect(xEnemies+750, fromTopEnemies+100, diameterEnemies, 50),
        
            c.fillRect(xEnemies, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+100, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+200, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+300, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+400, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+500, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+600, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+700, fromTopEnemies+200, diameterEnemies, 50),
            c.fillRect(xEnemies+800, fromTopEnemies+200, diameterEnemies, 50),
            ]
        
            c.fillStyle= 'white'
            c.stroke()
            c.closePath()
    }
}

// ----------------------------ANIMATE ENEMIES-----------------------------
function animateEnemies() {
    requestAnimationFrame(animateEnemies)
    
    drawEnemies(); 
    c.fillStyle= 'white'
    c.stroke()

    if(xEnemies + diameterEnemies > innerWidth-800 || xEnemies - diameterEnemies < 0){
        dxEnemies = -dxEnemies, fromTopEnemies += 20 
    }
    xEnemies += dxEnemies
}
animateEnemies()