function RoboLights(){
  this.boolMain = true;
  this.boolQuotation = false;
  this.img1 = loadImage("assets/Graphic/RoboLights.png");
  this.display = function(){
    if(this.boolMain){
      image(this.img1,0,0,windowWidth,windowHeight);
    }
    if(this.boolQuotation){
      
    }
  }
  this.checkMouseClick = function(mX,mY){
    print("mouseX: " + mX + "   mouseY: " + mY);
  }
}