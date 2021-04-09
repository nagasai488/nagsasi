var music,canvas,block1,block2,block3,block4,ball;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,500);

    block1 = createSprite(100,480,180,20)
    block1.shapeColor=("red")

    block2 = createSprite(300,480,180,20)
    block2.shapeColor=("orange")

    block3 = createSprite(500,480,180,20)
    block3.shapeColor=("green")

    block4= createSprite(700,480,180,20)
    block4.shapeColor=("blue")

    ball=createSprite(random(10,750),300,30,30)
    ball.shapeColor=("white")
    ball.velocityY=5
    ball.velocityX=5
}

function draw() {
    background("black");
    music.play()
    
    if(ball.x<0){
      ball.velocityX=3}
    
      else if(ball.x>800){
      ball.velocityX=-3}
    
    if(ball.y<0){
    ball.velocityY=3
  }
   if(ball.isTouching(block1) && ball.bounceOff(block1)){
      ball.shapeColor="red"
   }
   
   if(ball.isTouching(block2) && ball.bounceOff(block2)){
      ball.shapeColor="orange"
   }
   if(ball.isTouching(block3) && ball.bounceOff(block3)){
      ball.shapeColor="green"
   }
   if(ball.isTouching(block4) && ball.bounceOff(block4)){
      ball.shapeColor="blue"
   }

    

drawSprites()

}