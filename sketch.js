
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree1,boy1,boy,mango1,mango2,mango3,mango4,slingShot;

function preload(){

	boy1 = loadImage("boy.png");
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(250,450,500,20);
	tree1 = new Tree(400,280,200,350);
	mango1 = new mango(400,200);
	mango2 = new mango(430,210);
	mango3 = new mango(450,250);
	mango4 = new mango(480,230);
	slingShot = new launcher(boy.Body,{x:200,y:100});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  ground.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  slingShot.display();
  image(boy1,100,200,100,200);
  
  
	
  
  drawSprites();
 
}



