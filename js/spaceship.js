function spaceShip() {
    this.x = width/2; // located in a center 

    this.show = function() {
        fill(255); 
        rect(this.x, height-20, 20, 20)
    }
    
}