const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,bird1;

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650,600,50,50);
    box2 = new Box(500,600,50,50);
    pig1 = new pig(575,600);
    log1 = new log(575,550,250,10,PI);
    box3 = new Box(650,540,50,50);
    box4 = new Box(500,540,50,50);
    pig2 = new pig(575,540);
    log2 = new log(575,490,250,10,PI);
    ground = new Ground(500,height,1000,20)
    box5 = new Box(585,480,50,50);
    log3 = new log(535,475,150,10,-PI/4);
    log4 = new log(615,475,150,10,PI/4);
    bird1= new bird(150,400)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}