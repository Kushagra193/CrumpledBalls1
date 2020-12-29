const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin,paper,ground;


function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

    dustbin = new Dustbin(720,390,100,10);
	paper = new Paper(100,300,10);
	ground = Bodies.rectangle(width/2,700,width,10,{isStatic:true});
	World.add(world,ground);

	
	boxPosition=width/2-100
	boxY=610;

   boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody)


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		
	}
}
