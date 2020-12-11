var r1,r2;
function setup() {
  createCanvas(800,400);
 r1=createSprite(400, 200, 50, 50);

  r2=createSprite(200, 400,150, 250);

}

function draw() {
  background("green");  

  r2.x=World.mouseX;
  r2.y=World.mouseY;
  console.log(r1.x-r2.x);
  if(r1.x-r2.x<100 && r2.x-r1.x<100 && r1.y-r2.y<100 && r2.y-r1.y<100){
    r2.shapeColor="red";
  }
  else {
    r2.shapeColor="blue";
  }
  drawSprites();
}