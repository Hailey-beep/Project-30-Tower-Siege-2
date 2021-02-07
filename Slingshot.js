class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    Release(){

        this.sling.bodyA = null;
    }

    Attach() {
        this.sling.bodyA = polygon;
    }

    display(){

        if(this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(3);
        stroke("orange");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}