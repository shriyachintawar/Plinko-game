class Plinko{
    constructor(x,y){
        var options = {
            isStatic :true,
            restitution: 0.2,
            density:1.2,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10);
       
    }
}