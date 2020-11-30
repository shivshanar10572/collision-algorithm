var fixedRect,movingRect;

function setup() {
  
  createCanvas(800,400);
fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor="blue";
fixedRect.debug=true;

movingRect = createSprite(300, 100, 50, 50);
movingRect.shapeColor="blue";
movingRect.debug=true;

}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){

  movingRect.shapeColor="red"; 
  fixedRect.shapeColor="red";

  }

else{

movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";




}


  drawSprites();
}