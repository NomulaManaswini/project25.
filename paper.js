class Paper {
    constructor(x,y,r){
        var options={
           
            restitution:0.5,
            friction:0.3,
            density:1.2
        }
        this.r=r;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);

    }
    display(){
        var pos= this.body.position;
        push()
        translate(pos.x,pos.y);
        fill ("red");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r); 
        pop()
    }
}