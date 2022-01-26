var fixedRect, movingRect,Gameobject1,Gameobject2,Gameobject3,Gmaeobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Gameobject1= createSprite(100,100,50,50);
  Gameobject1.shapeColor="blue";
  Gameobject2= createSprite(200,100,50,50);
  Gameobject2.shapeColor="white";
  Gameobject3= createSprite(300,100,50,50);
  Gameobject3.shapeColor="yellow";
  Gameobject4= createSprite(400,100,50,50);
  Gameobject4.shapeColor="orange";
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,Gameobject3)){
  movingRect.shapeColor = "red";
  Gameobject3.shapeColor = "red";
}
 else{
  movingRect.shapeColor = "green";
  Gameobject3.shapeColor = "green";
 }
  
  drawSprites();
}
function isTouching(O1,O2){
  if(O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y < O2.height/2 + O1.height/2) {
 
 return true
}
else {
  
  return false
}
}


