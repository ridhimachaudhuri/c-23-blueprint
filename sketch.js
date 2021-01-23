const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground,myEngine , myWorld,box1,box2

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  var option={
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,20,option)
  World.add(myWorld,ground)
 // console.log(ground)
 box1=new Box(400,340,50,50)
 box2 = new Box(420,200,50,70)

}

function draw() {
  background(0);  
  Engine.update(myEngine)
  fill("green")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  fill("blue")
  box1.display()
  box2.display()
}