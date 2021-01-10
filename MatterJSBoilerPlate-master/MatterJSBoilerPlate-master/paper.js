class Paper{
    constructor(x,y,r){
        let opts={
            restitution:0.7,
            isStatic:true,
            friction:0.4,
            density:1
        }

        this.x = x;
        this.y = y;
        this.r = r;


        this.radius = r;
        this.body = Bodies.circle(this.x,this.y,this.r,opts)
        World.add(world,this.body)
    }

    display(){
        let pos = this.body.position;
        fill("green");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}