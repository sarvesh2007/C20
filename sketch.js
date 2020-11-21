var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(300, 300, 50, 50);
  movingRect = createSprite(300, 300, 50, 50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  var distanceBetween1 = fixedRect.x - movingRect.x;
  var distanceBetween2 = movingRect.x -fixedRect.x;
  var maxDistanceBetween = fixedRect.width/2 + movingRect.width/2;
  var maxDistanceBetween2 = fixedRect.height/2 + movingRect.height/2;
  var distanceBetween3 = fixedRect.y - movingRect.y
  var distanceBetween4 = movingRect.y - fixedRect.y
  if(distanceBetween1 < maxDistanceBetween && distanceBetween2 <maxDistanceBetween && distanceBetween3 < maxDistanceBetween2 && distanceBetween4 < maxDistanceBetween2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red"
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"
  }
  drawSprites();
}