class Box {
  constructor(x, y, width, height, color) {

      var options = {
        'restitution':0.8,
        'friction':0.6,
        'density':1.2
      }
      
      //Makes blocks visible
      this.visible = 255;

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }
    
    display() {

      if(this.body.speed <= 3) {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(this.color);
        strokeWeight(1.5)
        stroke(0)
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      } 
      else {
        //Remove the block from the world and disappear
        World.remove(world, this.body);
        push()
        this.visible = this.visible - 255;
        tint(255, this.visible);
        pop();
      }

    }

}