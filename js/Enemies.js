let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d')

var x = 500
var dx = 12
var fromTop = 100
var diameter = 50
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath();
    c.fillRect(x, fromTop, diameter, 50)
    c.fillStyle = 'blue'
    c.stroke()
    if(x + diameter > innerWidth || x - diameter < -60){
        dx = -dx, fromTop += 20
    }
    x += dx
}
animate()

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
