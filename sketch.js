
var sea,seaImage;
var ship,shipImage;

function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(0,150,200,100);
  sea.addImage(seaImage);

  ship = createSprite(100,300,100,100);
  ship.addAnimation("Ship Moving", shipImage);
  ship.scale = 0.25;

}

function draw() {

sea.x-=2;
if(sea.x<=0){
sea.x = sea.width/2;
}

  background("blue");
 drawSprites();
}