class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.0,
            friction: 1.0,
            density: 1.2
        }
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        stroke("green");
        imageMode(CENTER);
        image(this.image,0, 0, this.radius, this.radius);
        pop();

    }
}