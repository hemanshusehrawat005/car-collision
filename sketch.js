var car, wall
var speed, hight



function setup() {
  
 createCanvas(1600,400);
 Car1=createSprite(50,200,50,50,);
 Car2=createSprite(55,100,50,50);
 Car3=createSprite(60,300,50,50,);
 Car4=createSprite(65,400,50,50);

wall=createSprite(1500,400,50,2000);

  speed=random(5,9);
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();

Car1.velocityX=speed
Car2.velocityX=speed
Car3.velocityX=speed
Car4.velocityX=speed
}