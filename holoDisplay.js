function HoloDisplay(){
  this.boolMain = true;
  this.boolQuotation = false;
  this.img1 = loadImage("assets/Graphic/holoDisplay.png");
  this.img2 = loadImage("assets/Graphic/holoBoxQuotation.png");
  this.display = function(){
    if(this.boolMain){
      image(this.img1,0,0,windowWidth,windowHeight);
    }
    if(this.boolQuotation){
      image(this.img2,0,0,windowWidth,windowHeight);
    }
  }
  this.checkMouseClick = function(mX,mY){
    print("mouseX: " + mX + "   mouseY: " + mY);
    if( mX>=windowWidth*3/4 && mX<=windowWidth*4/4 && mY>=windowHeight*7/8 && mY<=windowHeight*8/8 ){
      this.boolMain = false;
      this.boolQuotation = true;;
    }
  }
}