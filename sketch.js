
var backgroundN;
var PlayB

var gameState=0;
var ghost;
var Iclimber,climber;
var Igroup;
function preload(){
    
     backgroundNImg=loadImage("Background.jpg")
     PlayBImg=loadImage("PlayB.jpg")
     HelpBImg=loadImage("HelpB.jpg")
     OnImg=loadImage("SoundOn.png")
     OffImg=loadImage("SoundOff.png")

     gS=loadImage("ghost-standing.png")
}
 



function setup() {

  createCanvas(displayWidth,displayHeight);

 

  

  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(backgroundNImg)

  
  ghost=createSprite(displayWidth-1200,displayHeight/2);
  //  ghost.addImage(gS);
    ghost.scale=0.5;
    
    

  PlayB = createSprite(displayWidth/2,displayHeight/2,50,20);

  soundB=createSprite(displayWidth-100,displayHeight-100)
  helpB=createSprite(displayWidth/2, displayHeight/2+30,50,10)  

  Igroup=new Group();
}

function draw() {

  
  background(backgroundNImg);
  
   var edges = createEdgeSprites();

  if(ghost.collide(edges)){
    ghost.velocityY=0
  }


if(mousePressedOver(PlayB)){
   gameState=1;
}

  if(gameState===1){

    PlayB.visible =false;
    helpB.visible =false;
    soundB.visible =false;
    ghost.visible=true;
    bg.velocityX=-5

    if(bg.x < 400){
      bg.x=displayWidth/2
    }
    //upward velocity
    if(keyDown("space") && touches){
      ghost.velocityY=-3;
    }
  //gravity
    ghost.velocityY+=0.8;
  if (frameCount % 60 === 5) {
     
     var   climber=createSprite(1800,Math.round(random(displayHeight/2,displayHeight/2-100)),150,20)
     var  Iclimber=createSprite(climber.x,climber.y-20,150,10)
     // Iclimber.visible=false;
 climber.velocityX=-5;
     Iclimber.velocityX=-5;
Igroup.add(Iclimber)
 if(Igroup.collide(ghost)){
  ghost.velocityY=0;
  ghost.velocityX=0;
}
   
     console.log("climber",Iclimber.y)
     console.log("ghost",ghost.y)
//detect(ghost,Igroup)
    }
  }

  drawSprites();

  if(gameState===0){
  
    textSize(48);
   text("ᴡᴇʟᴄᴏᴍᴇ",displayWidth/2-150,displayHeight-600)
  text("𝔾𝕙𝕠𝕤𝕥 ℍ𝕦𝕟𝕥𝕖𝕣",displayWidth/2-150,displayHeight-550)

  ghost.visible=false;
  
  }
}

function detect(a,b){
if(a.x-b.x<a.width/2+b.width/2 &&
  b.x-a.x<a.width/2+b.width/2 &&
  a.y-b.y<a.height/+b.height/2 &&
  b.y-a.y <a.height/2+b.height/2){
a.velocityY=0;
a.velocityX=0;
  }  
}