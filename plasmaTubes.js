function PlasmaTubes(){
  this.boolMain = true;
  this.boolQuotation = false;
  this.img1 = loadImage("assets/Graphic/plasmaTubes.png");
  this.display = function(){
    image(this.img1,0,0,windowWidth,windowHeight);
  }
  this.checkMouseClick = function(mX,mY){
    print("mouseX: " + mX + "   mouseY: " + mY);
    if( mX>=windowWidth*3/4 && mX<=windowWidth*4/4 && mY>=windowHeight*7/8 && mY<=windowHeight*8/8 ){
      
    }
  }
}