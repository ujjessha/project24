var paper1,dustbin1,dustbin2,dustbin3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 
	 paper1=new Paper(250,650,5,5);
	 dustbin1=new Dustbin(500,650,20,200);
	 dustbin2=new Dustbin(500,550,200,20);
	 dustbin3=new Dustbin(700,550,200,20);
	 ground1=new Ground(400,657,800,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  
  
  
  drawSprites();
}

function keyPressed(){
	if (keyCode=== UP_ARROw){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}
 




