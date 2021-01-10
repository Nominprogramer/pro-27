class Bob {

    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 0,
            density: 7.8,
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);

        console.log(this.body);
    
    }
    
    display(){
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y ,10,10);
        pop();
    }
    
    }