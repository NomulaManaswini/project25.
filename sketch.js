
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
var dustbin,dustbinIMG;
var paper;


function setup() {
	var canvas=createCanvas(1600,700);
	
	engine = Engine.create();
	world = engine.world;
	paper  = new Paper(200,450,70);


	dustbin=new DustBin(1000,500);
	ground=new Ground(width/2,670,width,20)
	Engine.run(engine);
}
function draw() {
	background("yellow")
	Engine.update(engine);

  ground.display();
  paper.display();
  dustbin.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
	}
}
