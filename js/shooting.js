let bullet = null;
let x = 1;
let score = 0;
document.getElementById('score').innerHTML = '0';
let animate;
bullet = document.getElementById('bullet');




function shoot(){
let random = Math.random();

while(parseInt(bullet.style.top) != 300){
bullet.style.left = parseInt(bullet.style.left) - 1 + 'px';
bullet.style.top = parseInt(bullet.style.top) - 1 + 'px';
animate = setTimeout(shootLeft,20);
}
if(random<0.3){
score = score + 1;
document.getElementById('score').innerHTML = score;
}
else{
document.getElementById('score').innerHTML = score;
}
x++;
if(x==10){
document.getElementById('gameover').innerHTML = "Game over! You got a score of " + score;
}
bullet.style.left = '300px';
bullet.style.top = '410px';
}
