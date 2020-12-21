var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor="green"
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0,0,0);  // r,g,b => 0-255
  console.log(movingRect.x - fixedRect.x)
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
    
    if(fixedRect.y -movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
    {
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }

  drawSprites();
}