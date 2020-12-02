class log{
    constructor(x,y,height,angle){
        this.body = Bodies.rectangle(x,y,20,height,{restitution : 0.5});
        Matter.body.setAngle(this.body,angle);
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        fill("white");
        angleMode(RADIANS);
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,20,this.height);
        pop();
    }
} 
