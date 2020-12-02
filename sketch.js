const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,pig1;
var box1,box2;
var log1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

   box1 = new box(1050,780,100,100);
   box2 = new box(750,780,100,100);
   ground1 = new ground(600,790,1200,10);
   pig1 = new pig(900,780,100,100);
   log1 = new log(900,720,40,PI/2) 
}

function draw(){
    background("black");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
 
}