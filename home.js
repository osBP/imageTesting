function Home(){
  this.boolHome = true;
  this.boolPlasmaTubes = false;
  this.boolTriklits = false;
  this.boolHoloDisplay = false;
  this.boolMultitouchScreen = false;
  this.boolInteractiveLEDWall = false;
  this.boolHoloScreen = false;
  this.boolRoboLights = false;
  this.boolSugarCubes = false;
  this.boolFunshot = false; 
  
  this.img1 = loadImage("assets/Graphic/allProducts.png");
  this.display = function(){
    if(this.boolHome){
      image( this.img1,0,0,windowWidth,windowHeight);
    }
  }
  this.checkMouseClick = function (mX,mY){
    if( mX>=0 && mX<=windowWidth/3 && mY>=windowHeight/4 && mY<=windowHeight*2/4 ){
      this.boolHome = false;
      this.boolPlasmaTubes = true;
      if(this.boolPlasmaTubes){
        print("PlasmaTubes pressed");
      }
    }
    if( mX>=0 && mX<=windowWidth/3 && mY>=windowHeight*2/4 && mY<=windowHeight*3/4 ){
      this.boolHome = false;
      this.boolTriklits = true;
      if(this.boolTriklits){
        print("Triklits pressed");
      }
    }
    if( mX>=0 && mX<=windowWidth/3 && mY>=windowHeight*3/4 && mY<=windowHeight*4/4 ){
      this.boolHome = false;
      this.boolHoloDisplay = true;
      if(this.boolHoloDisplay){
        print("HoloDisplay pressed");
      }
    }
    if( mX>=windowWidth/3 && mX<=windowWidth*2/3 && mY>=windowHeight/4 && mY<=windowHeight*2/4 ){
      this.boolHome = false;
      this.boolMultitouchScreen = true;
      if(this.boolPlasmaTubes){
        print("MultitouchScreen pressed");
      }
    }
    if( mX>=windowWidth/3 && mX<=windowWidth*2/3 && mY>=windowHeight*2/4 && mY<=windowHeight*3/4 ){
      this.boolHome = false;
      this.boolInteractiveLEDWall = true;
      if(this.boolInteractiveLEDWall){
        print("InteractiveLEDWall pressed");
      }
    }
    if( mX>=windowWidth/3 && mX<=windowWidth*2/3 && mY>=windowHeight*3/4 && mY<=windowHeight*4/4 ){
      this.boolHome = false;
      this.boolHoloScreen = true;
      if(this.boolHoloScreen){
        print("HoloScreen pressed");
      }
    }
    if( mX>=windowWidth*2/3 && mX<=windowWidth*3/3 && mY>=windowHeight/4 && mY<=windowHeight*2/4 ){
      this.boolHome = false;
      this.boolRoboLights = true;
      if(this.boolRoboLights){
        print("RoboLights pressed");
      }
    }
    if( mX>=windowWidth*2/3 && mX<=windowWidth*3/3 && mY>=windowHeight*2/4 && mY<=windowHeight*3/4 ){
      this.boolHome = false;
      this.boolSugarCubes = true;
      if(this.boolSugarCubes){
        print("SugarCubes pressed");
      }
    }
    if( mX>=windowWidth*2/3 && mX<=windowWidth*3/3 && mY>=windowHeight*3/4 && mY<=windowHeight*4/4 ){
      this.boolHome = false;
      this.boolFunshot = true;
      if(this.boolFunshot){
        print("Funshot pressed");
      }
    }
  }
}