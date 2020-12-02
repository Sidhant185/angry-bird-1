class ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic : true});
        World.add(world,this.body);
        this.height= height;
        this.width = width;
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    

    }
}