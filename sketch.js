const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var stone,stone2;
var rectangle;
var hammer;
var circle1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    stone = new Stone(350,320,70,70);
    stone2 = new Stone(400,320,50,50);
    rectangle = new Rectangle(500,210,200,PI/4);
    hammer = new Hammer(50,50);
    
}

function draw(){
    background(0);
    
    Engine.update(engine);

    ground.display();

    //object1
    stone.display();

    //object2
    rectangle.display();

    //hammer
    hammer.display();

    stone2.display();
}
