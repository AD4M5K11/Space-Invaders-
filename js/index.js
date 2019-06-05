let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d')

c.fillStyle = "rgba(255, 0, 0, 0.5)"
c.fillRect(100, 100, 40, 70)
c.fillStyle = "rgba(0, 255, 0, 0.5)"
c.fillRect(250, 100, 50, 10)
c.fillStyle = "rgba(0, 0, 255, 0.5)"
c.fillRect(350, 100, 50, 10)
c.fillStyle = "rgba(0, 0, 200, 0.5)"
c.fillRect(450, 100, 100, 10)

console.log(canvas)