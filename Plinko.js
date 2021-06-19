class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution: 1,
          friction: 0,
      }
      this.r = r;
      this.body = Bodies.circle(x,y,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate (pos.x,pos.y);
      rotate(this.body.angle)
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.r,this.r);
      pop();
    }
  }