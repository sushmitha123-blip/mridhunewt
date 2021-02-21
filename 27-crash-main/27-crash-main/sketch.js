
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

//	Engine.run(engine);
	

  	roof = new Ground(500,100,300,30);
    Bob1 = new bob(400,600,25);
    Bob2 = new bob(450,600,20);
    Bob3 = new bob(500,600,20);
    Bob4 = new bob(550,600,20);
    Bob5 = new bob(600,600,20);
    chain1 = new chain(Bob1.body,{x:400,y:100});
    chain2 = new chain(Bob2.body,{x:450,y:100});
    chain3 = new chain(Bob3.body,{x:500,y:100});
    chain4 = new chain(Bob4.body,{x:550,y:100});
    chain5 = new chain(Bob5.body,{x:600,y:100});

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
	}
	  });
  
	 
	 Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background("gray");
  roof.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-45,y:-75})
	}
}