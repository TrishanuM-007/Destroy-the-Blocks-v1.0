const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
     
     ball = new Ball(205,400,50,50);
     chain = new Chain(ball.body,{x: 230, y:400});
     wall1 = new Wall(950,500,600,10);
     wall2 = new Wall(650,430,10,150);
     wall3 = new Wall(950,750,600.5,100)
     wall4 = new Wall(650,725,10,225)
     wall5 = new Wall (950,150,400,10)
 target1 = new Target(950,395,60,60,);
 target2 = new Target(951,395,60,60);
 target3 = new Target(940,395,60,60);
 target4 = new Target(930,395,60,60);
 target5 = new Target(935,370,60,60);
 target6 = new Target(945,370,60,60);
 target7 = new Target(953,370,60,60);
 target8 = new Target(930,350,60,60);
 target9 = new Target(950,350,60,60);
 target10 = new Target(940,345,60,60);
 target11 = new Target(950,725,150,150);
 target12 = new Target(950,100,60,60);
target13 = new Target(950,50,40,40);


  
}

function draw(){
    background(225);
    Engine.update(engine);
   // strokeWeight(4);
    ball.display()
    chain.display()
    wall1.display()
    wall2.display()
    wall3.display()
    wall4.display()
    wall5.display()
    target1.display()
    target2.display()
    target3.display()
    target4.display()
    target5.display()
    target6.display()
    target7.display()
    target8.display()
    target9.display()
    target10.display()
    target11.display()
    target12.display()
    target13.display()
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x : mouseX,y: mouseY}) 
}
function mouseReleased(){
chain.fly()   
}
function keyPressed(){
    if(keyCode = 114){
        chain.attach(ball.body)
    }
}

