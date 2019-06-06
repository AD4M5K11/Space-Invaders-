// let canvasEnemies = document.querySelector('canvas')

// canvasEnemies.width = window.innerWidth;
// canvasEnemies.height = window.innerHeight;

// let cgContext = canvasEnemies.getContext('2d')

let xEnemies = 500
let dxEnemies = 15
let fromTopEnemies = 0
let diameterEnemies = 50
function animateEnemies() {
    requestAnimationFrame(animateEnemies)
    // c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath();
    let Enemies = [
        // line1
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
    if(xEnemies + diameterEnemies > innerWidth-800 || xEnemies - diameterEnemies < 0){
        dxEnemies = -dxEnemies, fromTopEnemies += 20 
    }
    xEnemies += dxEnemies
}

animateEnemies()

// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(500, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(600, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(700, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(800, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(900, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(1000, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(1100, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(1200, 100, 50, 50)
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(1300, 100, 50, 50)

// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(450, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(550, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(650, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(750, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(850, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(950, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(1050, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(1150, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(1250, 200, 50, 50)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(1350, 200, 50, 50)

// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(500, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(600, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(700, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(800, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(900, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(1000, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(500, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(1100, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(1200, 300, 50, 50)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(1300, 300, 50, 50)

// console.log(canvas)
