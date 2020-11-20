
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse =	Matter.Mouse;

var ground, mango1, mango2, mango3,mango4,mango5;
var stone;


var canvas, mouse, mconstraint;
function preload() {
	boyImage = loadImage("images/boy.png");
	treeImage = loadImage("images/tree.png");
}

function setup() {
	canvas = createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	// mouse = Mouse.create(canvas.elt);
	// mouse.pixelRatio = pixelDensity();
	// var options = {
	// 	mouse:mouse
	// }
	// mconstraint = MouseConstraint.create(engine, options);
	// World.add(world, mconstraint)

	stone = new Ball(50,200,20);
	ground = new Ground(width/2, height-20,width,40);
	sling  = new Chain(stone.body, {x:65,y:height-85});

	mango1 = new Mango(width*3/4,height-500,30,03);
	mango2 = new Mango(width*3/4+50,height-550,30,03);
	mango3 = new Mango(width*3/4-50,height-400,30,03);
	mango4 = new Mango(width*3/4-100,height-450,30,03);
	mango5 = new Mango(width*3/4+100,height-400,30,03);
}


function draw() {
	rectMode(CENTER);

	background(150);

	Engine.update(engine);
	imageMode(CENTER);
	
	ground.display();
	
	image(boyImage, width*1/8, height-65,100,100);
	image(treeImage, width*3/4, height-300,400,600);
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	//sling.display();
	stone.display();;
	detectCollision(stone.body,mango1.body);
	detectCollision(stone.body,mango2.body);
	detectCollision(stone.body,mango3.body);
	detectCollision(stone.body,mango4.body);
	detectCollision(stone.body,mango5.body);
}
function keyPressed(){
	if(keyCode===32){
		Body.setPosition(stone.body, {x:65,y:height-85});
		sling.attach(stone.body);
	}
}

function mouseDragged(){
	Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(body1,body2){
	if(dist(body1.position.x,body1.position.y,body2.position.x, body2.position.y)<body2.radius+body1.radius){
		Body.setStatic(body2,false);
	}
}