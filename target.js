class Target{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
            'friction':100.0,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red")
        stroke("purple")
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}