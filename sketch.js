const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var trashcan1, trashcan2, trashcan3;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,630,width,40);
	trashcan1 = new Trashcan(1200,510,20,200);
	trashcan2 = new Trashcan(1000,510,20,200);
	trashcan3 = new Trashcan(1100,600,200,20);

	trashcan1.debug = true;
	trashcan2.debug = true;
	trashcan3.debug = true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
 
  
  paper.display();
  ground.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}




