
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ploygon , slingshot, platform1, platform2;

var box1;
var box2, box3, box4
var box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16;

var box17;
var box18, box19, box20;
var box21, box22, box23, box24, box25;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ploygon = new Ploygon(150,275);
	slingshot = new SlingShot(ploygon.body,{x:150,y:250});

	platform1 = new Platform(450,395,230,10);
	platform2 = new Platform(800,295,230,10);

	box1 = new Box(450,215);
	
	box2 = new Box(420,265);
	box3 = new Box(450,265);
	box4 = new Box(480,265);

	box5 = new Box(390,315);
	box6 = new Box(420,315);
	box7 = new Box(450,315);
	box8 = new Box(480,315);
	box9 = new Box(510,315);

	box10= new Box(360,365);
	box11= new Box(390,365);
	box12= new Box(420,365);
	box13= new Box(450,365);
	box14= new Box(480,365);
	box15= new Box(510,365);
	box16= new Box(540,365);


	box17= new Box(800,165);

	box18= new Box(770,215);
	box19= new Box(800,215);
	box20= new Box(830,215);

	box21= new Box(740,265);
	box22= new Box(770,265);
	box23= new Box(800,265);
	box24= new Box(830,265);
	box25= new Box(860,265);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ploygon.display(); 
  slingshot.display();

  platform1.display();
  platform2.display();

  box1.display();

  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();


  box17.display();
  
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ploygon.body,{x:mouseX,y:mouseY})
}
 
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(ploygon.body);
  }
}

