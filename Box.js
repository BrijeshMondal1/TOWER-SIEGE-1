class Box{

    constructor(x,y){

       var options = {
        
            restitution: 0,
            friction: 2.0,
            density: 2

       }

       this.body = Bodies.rectangle(x, y , 40, 40, options);
       World.add(world, this.body);

    }

    display(color){

      var pos = this.body.position;

      push();
      fill(color);
      rectMode(CENTER);
      rect(pos.x,pos.y,40,40);
      pop();

    }
}