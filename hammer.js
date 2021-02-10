class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 70, options);
      this.width = 20;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      strokeWeight(4);
      stroke("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };