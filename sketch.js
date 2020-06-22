const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var rain;

var engine,world;




function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;
  //World.add(world,rain)

  

}

function draw() {
  background("black");  
  

  
if(frameCount%10 === 0){
  for (let i = 50; i < 400; i = i + 20) {
    
   var rain = createSprite(i,random(10,100),random(1,4),random(10,30))
   rain.shapeColor = " blue"
   rain.velocityY = 8
  }
 
 }
  drawSprites();
}