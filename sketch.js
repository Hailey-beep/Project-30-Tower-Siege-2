const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform1, platform2;
var polygon, polygonImg;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    //making canvas
    var canvas = createCanvas(1200,600)
    //creating engine and applying the world to it.
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590,1200,20,rgb(204, 204, 0));
    platform1 = new Ground(350,300,300,20,rgb(204, 204, 0));
    platform2 = new Ground(750,450,300,20,rgb(204, 204, 0));

    //Level 1 for plat 1
    box1 = new Box(260,280,30,40,rgb(0, 0, 102));
    box2 = new Box(290,280,30,40,rgb(0, 0, 102));
    box3 = new Box(320,280,30,40,rgb(0, 0, 102));
    box4 = new Box(350,280,30,40,rgb(0, 0, 102));
    box5 = new Box(380,280,30,40,rgb(0, 0, 102));
    box6 = new Box(410,280,30,40,rgb(0, 0, 102));
    box7 = new Box(440,280,30,40,rgb(0, 0, 102));
    //Level 2 for plat 1
    box8 = new Box(290,240,30,40,rgb(0, 0, 179));
    box9 = new Box(320,240,30,40,rgb(0, 0, 179));
    box10 = new Box(350,240,30,40,rgb(0, 0, 179));
    box11 = new Box(380,240,30,40,rgb(0, 0, 179));
    box12 = new Box(410,240,30,40,rgb(0, 0, 179));
    //Level 3 for plat 1
    box13 = new Box(320,200,30,40,rgb(128, 128, 255));
    box14 = new Box(350,200,30,40,rgb(128, 128, 255));
    box15 = new Box(380,200,30,40,rgb(128, 128, 255));
    //Level 4 for plat 1
    box16 = new Box(350,160,30,40,rgb(153, 153, 255));

    //Level 1 for plat 2
    box17 = new Box(690,430,30,40,rgb(0, 0, 102));
    box18 = new Box(720,430,30,40,rgb(0, 0, 102));
    box19 = new Box(750,430,30,40,rgb(0, 0, 102));
    box20 = new Box(780,430,30,40,rgb(0, 0, 102));
    box21 = new Box(810,430,30,40,rgb(0, 0, 102));
    //Level 2 for plat 2
    box22 = new Box(720,420,30,40,rgb(0, 0, 255));
    box23 = new Box(750,420,30,40,rgb(0, 0, 255));
    box24 = new Box(780,420,30,40,rgb(0, 0, 255));
    //Level 3 for plat 2
    box25 = new Box(750,400,30,40,rgb(153, 153, 255));

    //Creating Polygon
    push();
    polygon = Bodies.circle(600,175,20, {'restitution':1.0, 'friction':0.8, 'density':1.2});
    World.add(world,this.polygon);
    pop();

    slingshot = new Slingshot(this.polygon, {x:600,y:175});
}

function draw() {
    background(rgb(172, 115, 57))
    //Updates the commands in the draw function 
    Engine.update(engine);

    //Creates text
    push();
    stroke("black")
    fill("white")
    textSize(22)
    text("Drag the hexagon and release it to launch it!",400,30);

    textSize(16)
    text("Press SPACE to have another go!", 490,50);
    pop();

    // Display for objects
    ground.display();
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

    slingshot.display();

    //Display for Polygon
    push();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,50,50);
    pop();
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    slingshot.Release();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.Attach(this.polygon);
    }
}