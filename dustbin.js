class DustBin {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=200;
        this.wallthickness=20;
        this.angle=0;
        this.image=loadImage("dustbingreen.png")
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.wallthickness,options);
       World.add(world,this.body);
    }
    display(){
   var pos=this.body.position;
   push()
   translate(pos.x,pos.y);
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height);
   pop()
    }
}