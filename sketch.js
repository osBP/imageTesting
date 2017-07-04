var home;
var plasma;
var triklits;
var holoDis;
var multiTouch;
var LEDWall;
var holoScreen;
var robo;
var sugar;
var fun;

function setup() {
  print("helloWorld");
  createCanvas(windowWidth,windowHeight);
  home = new Home();
  plasma = new PlasmaTubes();
  triklits = new Triklits();
  holoDis =  new HoloDisplay();
  multiTouch = new MultiTouchScreen();
  LEDWall = new InteractiveLEDWall();
  holoScreen = new HoloScreen();
  robo = new RoboLights();
  sugar = new SugarCubes();
  fun = new FunShot();
}

function draw() {
  if(home.boolHome){
    home.display();
  }
  if(home.boolPlasmaTubes){
    plasma.display();
  }
  if(home.boolTriklits){
    triklits.display();
  }
  if(home.boolHoloDisplay){
    holoDis.display();
  }
  if(home.boolMultitouchScreen){
    multiTouch.display();
  }
  if(home.boolInteractiveLEDWall){
    LEDWall.display();
  }
  if(home.boolHoloScreen){
    holoScreen.display();
  }
  if(home.boolRoboLights){
    robo.display();
  }
  if(home.boolSugarCubes){
    sugar.display();
  }
  if(home.boolFunshot){
    fun.display();
  }
}

function mousePressed(){
  print("mouseX: " + mouseX + "   mouseY: " + mouseY);
  if(home.boolHome){  
    home.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolPlasmaTubes){
    plasma.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolTriklits){
    triklits.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolHoloDisplay){
    holoDis.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolMultitouchScreen){
    multiTouch.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolInteractiveLEDWall){
    LEDWall.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolHoloScreen){
    holoScreen.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolRoboLights){
    robo.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolSugarCubes){
    sugar.checkMouseClick(mouseX,mouseY);
  }
  if(home.boolFunshot){
    fun.checkMouseClick(mouseX,mouseY);
  }
}