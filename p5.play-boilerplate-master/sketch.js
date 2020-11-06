var pendulum;

function setup() {
  createCanvas(800,400);
  pendulum = createSprite(400, 200, 10, 40);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}