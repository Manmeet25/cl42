var iss,issImg;
var bg;
var spacecraft,craftImg;
var c2,c3,c4;
var jP1,jp2;
var hasDocked = false;
function preload(){
issImg = loadImage("iss.png")
bg = loadImage("spacebg.jpg")
craftImg = loadImage("spacecraft1.png")
c2 = loadImage("spacecraft2.png")
c3 = loadImage("spacecraft3.png")
c4 = loadImage("spacecraft4.png")

}
function setup() {
  createCanvas(1000,650);
  
  spacecraft = createSprite(300,550,50,50)
 spacecraft.addImage(craftImg);
 spacecraft.scale= 0.4
 iss = createSprite(500, 300, 50, 50);
 iss.addImage(issImg)
 c2.scale= 0.10
 
}

function draw() {
  background(bg);
  
 if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1);
  if(keyIsDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-4
    spacecraft.addImage(c2)
    c2.scale=0.10
    
  }
  if(keyIsDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y+4
    spacecraft.addImage(c2)
    c2.scale=0.10
  
  }

  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x+4
    spacecraft.addImage(c3)
    c3.scale = 0.10
    
  }
   
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x-4
    spacecraft.addImage(c4)
    c4.scale = 0.10
    
  }
  
}
  if(spacecraft.y<=(iss.y+167)&&spacecraft.x<=(iss.x-10)){
    hasDocked = true
    textSize(90)
    textFont("algerian")
    fill ("white")
    text("docking successful",40,550)
        
    
    
}
  
  drawSprites();
}


