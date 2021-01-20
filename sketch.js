
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,ball;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	myworld = engine.world;
    
    ball = createSprite(200,600,30,30);

	basket1 = createSprite(730,600,10,70);
	basket2 = createSprite(620,600,10,70);
	basket3 = createSprite(675,630,120,10);
	World.add(myworld,basket1);
	World.add(myworld,basket2);
	World.add(myworld,basket3);
	World.add (myworld,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
  basket1.display();
  basket2.display();
  basket3.display();

}


function keyPressed(){
	if (keyCode === UP_ARROW) {
		//Matter.Body.applyForce(ball.body,ball.position,{x:85,y:-85});
		ball.y=600;
		ball.y=600;
	}
}
