//const Constraint=Matter.Constraint;

class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            //bodyB:null,
            pointB:pointB,
            stiffness:0.5,
            length:5

        }
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
    }
    fly(){
        this.constraint.bodyA= null;
    }
    attach(body){
        this.constraint.bodyA=body;
    }
    display(){
        var pointA=this.constraint.bodyA.position;
        var pointBx=this.constraint.bodyB.position.x+this.constraint.pointB.x;
        var pointBy=this.constraint.bodyB.position.y+this.constraint.pointB.y;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointBx,pointBy);
    }
}