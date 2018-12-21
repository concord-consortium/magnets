function BarMagnetField(_topFrame,_libraryPath,_codebasePath) {
  var _model = EJSS_CORE.createAnimation();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog
  };

  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  _model._play  = _play;
  _model._pause = _pause;
  _model._step  = _step;
  _model._reset = _reset;
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

  function _getStringProperty(propertyName) {
    var _value = _stringProperties[propertyName];
    if (_value===undefined) return propertyName;
    else return _value;
  }
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var intensityScale; // EjsS Model.Variables.Field Vars.intensityScale
  var nd; // EjsS Model.Variables.Field Vars.nd
  var dipoles; // EjsS Model.Variables.Field Vars.dipoles
  var fieldValue; // EjsS Model.Variables.Field Vars.fieldValue
  var m; // EjsS Model.Variables.Field Vars.m
  var xmin; // EjsS Model.Variables.Field Vars.xmin
  var xmax; // EjsS Model.Variables.Field Vars.xmax
  var ymin; // EjsS Model.Variables.Field Vars.ymin
  var ymax; // EjsS Model.Variables.Field Vars.ymax
  var nx; // EjsS Model.Variables.Field Vars.nx
  var ny; // EjsS Model.Variables.Field Vars.ny
  var xPos; // EjsS Model.Variables.Field Vars.xPos
  var yPos; // EjsS Model.Variables.Field Vars.yPos
  var data; // EjsS Model.Variables.Field Vars.data
  var vectorField; // EjsS Model.Variables.Field Vars.vectorField
  var fieldType; // EjsS Model.Variables.Field Vars.fieldType

  var showCurrent; // EjsS Model.Variables.Display Vars.showCurrent
  var showCompass; // EjsS Model.Variables.Display Vars.showCompass
  var hideField; // EjsS Model.Variables.Display Vars.hideField
  var width; // EjsS Model.Variables.Display Vars.width
  var height; // EjsS Model.Variables.Display Vars.height
  var xMarker; // EjsS Model.Variables.Display Vars.xMarker
  var yMarker; // EjsS Model.Variables.Display Vars.yMarker
  var xMagnet; // EjsS Model.Variables.Display Vars.xMagnet
  var yMagnet; // EjsS Model.Variables.Display Vars.yMagnet
  var xCompass; // EjsS Model.Variables.Display Vars.xCompass
  var yCompass; // EjsS Model.Variables.Display Vars.yCompass
  var equilibriumTheta; // EjsS Model.Variables.Display Vars.equilibriumTheta
  var needleSize; // EjsS Model.Variables.Display Vars.needleSize
  var barImg; // EjsS Model.Variables.Display Vars.barImg
  var barUrl; // EjsS Model.Variables.Display Vars.barUrl
  var circleImg; // EjsS Model.Variables.Display Vars.circleImg
  var circleUrl; // EjsS Model.Variables.Display Vars.circleUrl
  var shiftx; // EjsS Model.Variables.Display Vars.shiftx
  var shifty; // EjsS Model.Variables.Display Vars.shifty
  var fontSize; // EjsS Model.Variables.Display Vars.fontSize
  var fontOffset; // EjsS Model.Variables.Display Vars.fontOffset

  var k; // EjsS Model.Variables.ODE Vars.k
  var b; // EjsS Model.Variables.ODE Vars.b
  var theta; // EjsS Model.Variables.ODE Vars.theta
  var omega; // EjsS Model.Variables.ODE Vars.omega
  var t; // EjsS Model.Variables.ODE Vars.t
  var dt; // EjsS Model.Variables.ODE Vars.dt

  var _privateOdesList;
  var _ODEi_evolution1;

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      intensityScale : intensityScale,
      nd : nd,
      dipoles : dipoles,
      fieldValue : fieldValue,
      m : m,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      nx : nx,
      ny : ny,
      xPos : xPos,
      yPos : yPos,
      data : data,
      vectorField : vectorField,
      fieldType : fieldType,
      showCurrent : showCurrent,
      showCompass : showCompass,
      hideField : hideField,
      width : width,
      height : height,
      xMarker : xMarker,
      yMarker : yMarker,
      xMagnet : xMagnet,
      yMagnet : yMagnet,
      xCompass : xCompass,
      yCompass : yCompass,
      equilibriumTheta : equilibriumTheta,
      needleSize : needleSize,
      barImg : barImg,
      barUrl : barUrl,
      circleImg : circleImg,
      circleUrl : circleUrl,
      shiftx : shiftx,
      shifty : shifty,
      fontSize : fontSize,
      fontOffset : fontOffset,
      k : k,
      b : b,
      theta : theta,
      omega : omega,
      t : t,
      dt : dt
    };
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    if(typeof json.intensityScale != "undefined") intensityScale = json.intensityScale;
    if(typeof json.nd != "undefined") nd = json.nd;
    if(typeof json.dipoles != "undefined") dipoles = json.dipoles;
    if(typeof json.fieldValue != "undefined") fieldValue = json.fieldValue;
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.nx != "undefined") nx = json.nx;
    if(typeof json.ny != "undefined") ny = json.ny;
    if(typeof json.xPos != "undefined") xPos = json.xPos;
    if(typeof json.yPos != "undefined") yPos = json.yPos;
    if(typeof json.data != "undefined") data = json.data;
    if(typeof json.vectorField != "undefined") vectorField = json.vectorField;
    if(typeof json.fieldType != "undefined") fieldType = json.fieldType;
    if(typeof json.showCurrent != "undefined") showCurrent = json.showCurrent;
    if(typeof json.showCompass != "undefined") showCompass = json.showCompass;
    if(typeof json.hideField != "undefined") hideField = json.hideField;
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.xMarker != "undefined") xMarker = json.xMarker;
    if(typeof json.yMarker != "undefined") yMarker = json.yMarker;
    if(typeof json.xMagnet != "undefined") xMagnet = json.xMagnet;
    if(typeof json.yMagnet != "undefined") yMagnet = json.yMagnet;
    if(typeof json.xCompass != "undefined") xCompass = json.xCompass;
    if(typeof json.yCompass != "undefined") yCompass = json.yCompass;
    if(typeof json.equilibriumTheta != "undefined") equilibriumTheta = json.equilibriumTheta;
    if(typeof json.needleSize != "undefined") needleSize = json.needleSize;
    if(typeof json.barImg != "undefined") barImg = json.barImg;
    if(typeof json.barUrl != "undefined") barUrl = json.barUrl;
    if(typeof json.circleImg != "undefined") circleImg = json.circleImg;
    if(typeof json.circleUrl != "undefined") circleUrl = json.circleUrl;
    if(typeof json.shiftx != "undefined") shiftx = json.shiftx;
    if(typeof json.shifty != "undefined") shifty = json.shifty;
    if(typeof json.fontSize != "undefined") fontSize = json.fontSize;
    if(typeof json.fontOffset != "undefined") fontOffset = json.fontOffset;
    if(typeof json.k != "undefined") k = json.k;
    if(typeof json.b != "undefined") b = json.b;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["Evol Page"] = true;
    __pagesEnabled["Error handling code"] = true;
    __pagesEnabled["FixRel Page"] = true;
  });

  _model.addToReset(function() {
    intensityScale = false; // EjsS Model.Variables.Field Vars.intensityScale
    nd = 20; // EjsS Model.Variables.Field Vars.nd
    dipoles = new Array(nd); // EjsS Model.Variables.Field Vars.dipoles
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nd; _i0+=1) {  // EjsS Model.Variables.Field Vars.dipoles
        dipoles[_i0] = [];
        for (_i1=0; _i1<2; _i1+=1) {  // EjsS Model.Variables.Field Vars.dipoles
          dipoles[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.dipoles
        }
      }
    }());
    fieldValue = "0"; // EjsS Model.Variables.Field Vars.fieldValue
    m = 0.05; // EjsS Model.Variables.Field Vars.m
    xmin = -1.5; // EjsS Model.Variables.Field Vars.xmin
    xmax = 1.5; // EjsS Model.Variables.Field Vars.xmax
    ymin = -1.2; // EjsS Model.Variables.Field Vars.ymin
    ymax = 1.2; // EjsS Model.Variables.Field Vars.ymax
    nx = (_isMobile||_isEPub)?16:20; // EjsS Model.Variables.Field Vars.nx
    ny = (_isMobile||_isEPub)?16:20; // EjsS Model.Variables.Field Vars.ny
    xPos = new Array(0); // EjsS Model.Variables.Field Vars.xPos
    (function () {
      var _i0;
      for (_i0=0; _i0<0; _i0+=1) {  // EjsS Model.Variables.Field Vars.xPos
        xPos[_i0] = 0;  // EjsS Model.Variables.Field Vars.xPos
      }
    }());
    yPos = new Array(0); // EjsS Model.Variables.Field Vars.yPos
    (function () {
      var _i0;
      for (_i0=0; _i0<0; _i0+=1) {  // EjsS Model.Variables.Field Vars.yPos
        yPos[_i0] = 0;  // EjsS Model.Variables.Field Vars.yPos
      }
    }());
    data = new Array(2); // EjsS Model.Variables.Field Vars.data
    fieldType = 0; // EjsS Model.Variables.Field Vars.fieldType
  });

  _model.addToReset(function() {
    showCurrent = true; // EjsS Model.Variables.Display Vars.showCurrent
    showCompass = true; // EjsS Model.Variables.Display Vars.showCompass
    hideField = false; // EjsS Model.Variables.Display Vars.hideField
    width = (_isMobile||_isEPub)?400:600; // EjsS Model.Variables.Display Vars.width
    height = (_isMobile||_isEPub)?320:480; // EjsS Model.Variables.Display Vars.height
    xMarker = 0; // EjsS Model.Variables.Display Vars.xMarker
    yMarker = -0.2; // EjsS Model.Variables.Display Vars.yMarker
    xMagnet = 0; // EjsS Model.Variables.Display Vars.xMagnet
    yMagnet = -0.2; // EjsS Model.Variables.Display Vars.yMagnet
    xCompass = 0.4; // EjsS Model.Variables.Display Vars.xCompass
    yCompass = 0.4; // EjsS Model.Variables.Display Vars.yCompass
    equilibriumTheta = 0; // EjsS Model.Variables.Display Vars.equilibriumTheta
    needleSize = 4; // EjsS Model.Variables.Display Vars.needleSize
    barImg = undefined; // EjsS Model.Variables.Display Vars.barImg
    barUrl = "./MagneticBarField/magnet.gif"; // EjsS Model.Variables.Display Vars.barUrl
    circleImg = undefined; // EjsS Model.Variables.Display Vars.circleImg
    circleUrl = "./MagneticBarField/circle.gif"; // EjsS Model.Variables.Display Vars.circleUrl
    shiftx = 125.0; // EjsS Model.Variables.Display Vars.shiftx
    shifty = 25.0; // EjsS Model.Variables.Display Vars.shifty
    fontSize = (_isMobile||_isEPub)?"normal normal 14px":"normal normal 16px"; // EjsS Model.Variables.Display Vars.fontSize
    fontOffset = (_isMobile||_isEPub)?0.12:0; // EjsS Model.Variables.Display Vars.fontOffset
  });

  _model.addToReset(function() {
    k = 1; // EjsS Model.Variables.ODE Vars.k
    b = 0.2; // EjsS Model.Variables.ODE Vars.b
    theta = 0; // EjsS Model.Variables.ODE Vars.theta
    omega = 0; // EjsS Model.Variables.ODE Vars.omega
    t = 0; // EjsS Model.Variables.ODE Vars.t
    dt = 0.1; // EjsS Model.Variables.ODE Vars.dt
  });

  _model.addToReset(function() {
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(true);
    _model.setPauseOnPageExit(true);
    _model.setFPS(10);
    _model.setStepsPerDisplay(2);
  });

  function computeField () {  // > CustomCode.Compute Field:1
    var xField=data[0];  // > CustomCode.Compute Field:2
    var yField=data[1];  // > CustomCode.Compute Field:3
    for (var i=0; i<nx; i++) {  // > CustomCode.Compute Field:4
      for (var j=0; j<ny; j++) {  // > CustomCode.Compute Field:5
        var b=getB(xPos[i],yPos[j]);//  Gets the components and magnitude  // > CustomCode.Compute Field:6
        xField[i][j] = b[0];  // > CustomCode.Compute Field:7
        yField[i][j] = b[1];  // > CustomCode.Compute Field:8
        //magField[i][j]=intensityScale?b[2]:3;  // > CustomCode.Compute Field:9
      }  // > CustomCode.Compute Field:10
    }  // > CustomCode.Compute Field:11
  }  // > CustomCode.Compute Field:12
  function createDataGrid() {  // > CustomCode.Compute Field:13
    var newXData= [];  // > CustomCode.Compute Field:14
    var newYData= [];  // > CustomCode.Compute Field:15
    for(var i=0; i<nx; i++) {  // > CustomCode.Compute Field:16
      newXData.push([]);  // > CustomCode.Compute Field:17
      newYData.push([]);  // > CustomCode.Compute Field:18
      for (var j=0; j<ny; j++) {  // > CustomCode.Compute Field:19
        newXData[i].push(0); //adds the value to the data  // > CustomCode.Compute Field:20
        newYData[i].push(0); //adds the value to the data  // > CustomCode.Compute Field:21
      }  // > CustomCode.Compute Field:22
    }  // > CustomCode.Compute Field:23
    return [newXData,newYData]; //returns new component arrays  // > CustomCode.Compute Field:24
  }  // > CustomCode.Compute Field:25

  // computes magnetic field components and magnitude from dipoles  // > CustomCode.Get B Value:1
  function getB( x,  y) {  // > CustomCode.Get B Value:2
    var b=[0,0,0,0];  // > CustomCode.Get B Value:3
    for(var i=0; i<nd; i++) {  // > CustomCode.Get B Value:4
      var dx=x-dipoles[i][0]-xMagnet;  // > CustomCode.Get B Value:5
      var dy=y-dipoles[i][1]-yMagnet;  // > CustomCode.Get B Value:6
      var r2=dx*dx+dy*dy;  // > CustomCode.Get B Value:7
      var r=Math.sqrt(r2);  // > CustomCode.Get B Value:8
      var r3=r2*r+0.1;  // avoid f=0 singularity  // > CustomCode.Get B Value:9
      var cos=dx/r;  // > CustomCode.Get B Value:10
      var sin=dy/r;  // > CustomCode.Get B Value:11
      if(fieldType===2){  // > CustomCode.Get B Value:12
        b[0]+=m*3*sin*cos/r3;     //x component  // > CustomCode.Get B Value:13
        b[1]+=m*(3*sin*sin-1)/r3; //y component  // > CustomCode.Get B Value:14
      }else{  // > CustomCode.Get B Value:15
        b[0]+=m*(3*cos*cos-1)/r3; //x component  // > CustomCode.Get B Value:16
        b[1]+=m*3*sin*cos/r3;     //y component  // > CustomCode.Get B Value:17
      }  // > CustomCode.Get B Value:18
      if(r2===0) {  // > CustomCode.Get B Value:19
        b[0]=b[1]=0;  // > CustomCode.Get B Value:20
      }  // > CustomCode.Get B Value:21
    }  // > CustomCode.Get B Value:22
    b[2] = Math.sqrt(b[0]*b[0]+b[1]*b[1]);  // magnitude  // > CustomCode.Get B Value:23
    b[3] = Math.atan2(b[1],b[0]);  // angle  // > CustomCode.Get B Value:24
    return b;  // > CustomCode.Get B Value:25
  }  // > CustomCode.Get B Value:26

  function setRandomLocation () {  // > CustomCode.Random Location:1
    //move magnet to random location  // > CustomCode.Random Location:2
    xMagnet = (-xmax + 2*xmax*Math.random());  // > CustomCode.Random Location:3
    yMagnet = (-ymax + 2*ymax*Math.random());  // > CustomCode.Random Location:4
    computeField();  // > CustomCode.Random Location:5
  }  // > CustomCode.Random Location:6

  function drawVectorField(context,element) {  // > CustomCode.Draw Field:1
    var ospCanvas = new OSPCanvas(context,element, xmin,xmax,ymin,ymax);  // > CustomCode.Draw Field:2
    vectorField.updateData(data);  // > CustomCode.Draw Field:3
    ospCanvas.addDrawable(vectorField);  // > CustomCode.Draw Field:4
    ospCanvas.drawObjects();  // > CustomCode.Draw Field:5
      // > CustomCode.Draw Field:6
    var xbar=ospCanvas.xToPix(xMagnet);  // > CustomCode.Draw Field:7
    var ybar=ospCanvas.yToPix(yMagnet);  // > CustomCode.Draw Field:8
    var xcomp=ospCanvas.xToPix(xCompass);  // > CustomCode.Draw Field:9
    var ycomp=ospCanvas.yToPix(yCompass);  // > CustomCode.Draw Field:10
    try {  // > CustomCode.Draw Field:11
      context.drawImage(barImg,xbar-shiftx,ybar-shifty);  // > CustomCode.Draw Field:12
      context.drawImage(circleImg,xcomp-45.5,ycomp-46.5);  // > CustomCode.Draw Field:13
    } catch (e) {console.log("Image draw error");}  // > CustomCode.Draw Field:14
  }  // > CustomCode.Draw Field:15

  function barDipoles () {// init bar magnet dipoles  // > CustomCode.Position Dipoles:1
    var dx=1.0/(nd-1);    //set up dipoles under bar magnet  // > CustomCode.Position Dipoles:2
    for(var i=0; i<nd; i+=2) {  // > CustomCode.Position Dipoles:3
      dipoles[i][0]=-0.5+i*dx;   // x position  // > CustomCode.Position Dipoles:4
      dipoles[i][1]=-.04;         // y position  // > CustomCode.Position Dipoles:5
      dipoles[i+1][0]=-0.5+i*dx; // x position  // > CustomCode.Position Dipoles:6
      dipoles[i+1][1]=0.04;       // y position  // > CustomCode.Position Dipoles:7
    }  // > CustomCode.Position Dipoles:8
    m=0.05;  // > CustomCode.Position Dipoles:9
    shiftx=125.0;  // > CustomCode.Position Dipoles:10
    shifty=25.0;  // > CustomCode.Position Dipoles:11
    barUrl="./MagneticBarField/magnet.gif";  // > CustomCode.Position Dipoles:12
    fieldType=0;  // > CustomCode.Position Dipoles:13
    showCurrent=false;  // > CustomCode.Position Dipoles:14
  }  // > CustomCode.Position Dipoles:15
  function coilDipoles () { // init bar magnet dipoles  // > CustomCode.Position Dipoles:16
    var dy=0.75/(nd-1);    //set up dipoles under bar magnet  // > CustomCode.Position Dipoles:17
    for(var i=0; i<nd; i++) {  // > CustomCode.Position Dipoles:18
      dipoles[i][0]=0;      // x position  // > CustomCode.Position Dipoles:19
      dipoles[i][1]=-0.75+i*dy; // y position  // > CustomCode.Position Dipoles:20
    }  // > CustomCode.Position Dipoles:21
    shiftx= 80;  // > CustomCode.Position Dipoles:22
    shifty= 35;  // > CustomCode.Position Dipoles:23
    m=0.05;  // > CustomCode.Position Dipoles:24
    barUrl="./MagneticBarField/coilbattery.gif";  // > CustomCode.Position Dipoles:25
    fieldType=1;  // > CustomCode.Position Dipoles:26
    showCurrent=true;  // > CustomCode.Position Dipoles:27
  }  // > CustomCode.Position Dipoles:28
  function earthDipoles () {// init bar magnet dipoles  // > CustomCode.Position Dipoles:29
    var dy=1.0/(nd-1);    //set up dipoles under bar magnet  // > CustomCode.Position Dipoles:30
    for(var i=0; i<nd; i+=2) {  // > CustomCode.Position Dipoles:31
      dipoles[i][0]=-0.01;         // x position  // > CustomCode.Position Dipoles:32
      dipoles[i][1]= -0.5+i*dy;   // y position  // > CustomCode.Position Dipoles:33
      dipoles[i+1][0]=0.01;       // xposition  // > CustomCode.Position Dipoles:34
      dipoles[i+1][1]=  -0.5+i*dy; // y position  // > CustomCode.Position Dipoles:35
    }  // > CustomCode.Position Dipoles:36
    shiftx=140.0;  // > CustomCode.Position Dipoles:37
    shifty=125.0;  // > CustomCode.Position Dipoles:38
    m=-0.005;  // > CustomCode.Position Dipoles:39
    barUrl="./MagneticBarField/earth.png";  // > CustomCode.Position Dipoles:40
    fieldType=2;  // > CustomCode.Position Dipoles:41
    showCurrent=false;  // > CustomCode.Position Dipoles:42
  }  // > CustomCode.Position Dipoles:43

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    _view.custom.setFunction(drawVectorField);  // > Initialization.Init Page:1
    // init dipoles  // > Initialization.Init Page:2
    switch(fieldType){  // > Initialization.Init Page:3
      case 0:  // > Initialization.Init Page:4
        barDipoles ();  // > Initialization.Init Page:5
        break;  // > Initialization.Init Page:6
      case 1:  // > Initialization.Init Page:7
        coilDipoles ();  // > Initialization.Init Page:8
        break;  // > Initialization.Init Page:9
      case 2:  // > Initialization.Init Page:10
        earthDipoles ();  // > Initialization.Init Page:11
        break;  // > Initialization.Init Page:12
      default: barDipoles ();  // > Initialization.Init Page:13
    }  // > Initialization.Init Page:14
    // load images  // > Initialization.Init Page:15
    barImg = new Image();  // > Initialization.Init Page:16
    barImg.addEventListener("load", function() {  // > Initialization.Init Page:17
      _view._render();  // show changes in view  // > Initialization.Init Page:18
    }, false);  // > Initialization.Init Page:19
    barImg.src=_view._getResourcePath(barUrl);  // > Initialization.Init Page:20
    //barImg.src=barUrl;  // > Initialization.Init Page:21
    circleImg = new Image();  // > Initialization.Init Page:22
    circleImg.addEventListener("load", function() {  // > Initialization.Init Page:23
      _view._render();  // show changes in view  // > Initialization.Init Page:24
    }, false);  // > Initialization.Init Page:25
    circleImg.src=_view._getResourcePath(circleUrl);  // > Initialization.Init Page:26
    //circleImg.src=circleUrl;  // > Initialization.Init Page:27
    // init x and y grid-coordinates  // > Initialization.Init Page:28
    xPos= arrayCoordinates(xmin, xmax, nx); // returns array(nx);  // > Initialization.Init Page:29
    yPos= arrayCoordinates(ymin, ymax, ny); // returns array(nx);  // > Initialization.Init Page:30
    // init field grid  // > Initialization.Init Page:31
    data=createDataGrid();  // > Initialization.Init Page:32
    computeField();  // > Initialization.Init Page:33
    vectorField = new DirectionField(data, xmin,xmax,nx,ymin,ymax,ny);  // > Initialization.Init Page:34
    vectorField.setColor("red","grey");  // > Initialization.Init Page:35
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["FixRel Page"]) return;
    var b = getB(xCompass,yCompass);  //adjust compass values  // > FixedRelations.FixRel Page:1
    equilibriumTheta=b[3];  // > FixedRelations.FixRel Page:2
    fieldValue="|B|="+getB(xCompass, yCompass)[2].toFixed(2);  // > FixedRelations.FixRel Page:3
    if(omega>0)omega=Math.min(omega,Math.PI);  // keeps compass from spinning wildly  // > FixedRelations.FixRel Page:4
    else omega=Math.max(omega,-Math.PI);  // > FixedRelations.FixRel Page:5
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  function _initializeSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].initializeSolver();
  }

  function _automaticResetSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].automaticResetSolver();
  }

  _model.resetSolvers = function() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].resetSolver();
  };

  function _getODE(_odeName) {
    if (_odeName=="Evol Page") return _ODEi_evolution1;
    return null;
  }

  function _getEventSolver(_odeName) {
    var ode = _getODE(_odeName);
    if (ode===null) return null;
    return ode.getEventSolver();
  }

  function _setSolverClass(_odeName, _engine) {
    var ode = _getODE(_odeName);
    if (ode===null) return;
    if (!_engine.setODE) {
      var classname = _engine.toLowerCase();
      if      (classname.indexOf("boga")>=0)   _engine = EJSS_ODE_SOLVERS.bogackiShampine23;
      else if (classname.indexOf("cash")>=0)   _engine = EJSS_ODE_SOLVERS.cashKarp45;
      else if (classname.indexOf("dopri5")>=0) _engine = EJSS_ODE_SOLVERS.dopri5;
      else if (classname.indexOf("dopri8")>=0) _engine = EJSS_ODE_SOLVERS.dopri853;
      else if (classname.indexOf("richa")>=0)  _engine = EJSS_ODE_SOLVERS.eulerRichardson;
      else if (classname.indexOf("euler")>=0)  _engine = EJSS_ODE_SOLVERS.euler;
      else if (classname.indexOf("fehlberg87")>=0) _engine = EJSS_ODE_SOLVERS.fehlberg87;
      else if (classname.indexOf("fehlberg8")>=0)  _engine = EJSS_ODE_SOLVERS.fehlberg8;
      else if (classname.indexOf("radau")>=0)   _engine = EJSS_ODE_SOLVERS.radau5;
      else if (classname.indexOf("runge")>=0)  _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("rk4")>=0)    _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("verlet")>=0) _engine = EJSS_ODE_SOLVERS.velocityVerlet;
    }
    if (_engine) ode.setSolverClass(_engine);
  }

  function _ODE_evolution1() {
    var __odeSelf = {};
    var __eventSolver;
    var __solverClass = EJSS_ODE_SOLVERS.cashKarp45;
    var __state=[];
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf.setSolverClass = function(__aSolverClass) {
      __solverClass = __aSolverClass;
      __instantiateSolver();
    };

    function __instantiateSolver() {
      __state=[];
      __pushState();
      __eventSolver = EJSS_ODE_SOLVERS.interpolatorEventSolver(__solverClass(),__odeSelf);
      __mustInitialize = true;
    }

    __odeSelf.setEnabled = function(_enabled) { __isEnabled = _enabled; };

    __odeSelf.getIndependentVariableValue = function() { return __eventSolver.getIndependentVariableValue(); };

    __odeSelf.getInternalStepSize = function() { return __eventSolver.getInternalStepSize(); };

    __odeSelf.isAccelerationIndependentOfVelocity = function() { return false; };

    __odeSelf.initializeSolver = function() {
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); return; }
      __pushState();
      __eventSolver.initialize(dt);
      __eventSolver.setBestInterpolation(false);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.removeAllEvents();
      __eventSolver.setEstimateFirstStep(false);
      __eventSolver.setEnableExceptions(false);
      __eventSolver.setTolerances(0.00001,0.00001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[]
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=theta) __mustReinitialize = true;
        __state[__cIn++] = theta;
        if (__state[__cIn]!=omega) __mustReinitialize = true;
        __state[__cIn++] = omega;
        if (__state[__cIn]!=t) __mustReinitialize = true;
        __state[__cIn++] = t;
    }

    function __arraysChanged () {
      return false;
    }

    __odeSelf.getEventSolver = function() {
      return __eventSolver;
    };

    __odeSelf.resetSolver = function() {
      __mustUserReinitialize = true;
    };

    __odeSelf.automaticResetSolver = function() {
      __mustReinitialize = true;
    };

    function __errorAction () {
      // Make sure the solver is reinitialized;
      __mustReinitialize = true;
      var _errorCode = __eventSolver.getErrorCode();
      if (__pagesEnabled["Error handling code"]) {
        { // For any error:
        }
      }
    }

    __odeSelf.step = function() { return __privateStep(false); };

    __odeSelf.solverStep = function() { return __privateStep(true); };

    function __privateStep(__takeMaximumStep) {
      if (!__isEnabled) return 0;
      if (dt===0) return 0;
      if (__mustInitialize) __odeSelf.initializeSolver();
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); }
      __eventSolver.setStepSize(dt);
      __eventSolver.setInternalStepSize(dt);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.setTolerances(0.00001,0.00001);
      __pushState();
      if (__mustUserReinitialize) {
        __eventSolver.userReinitialize();
        __mustUserReinitialize = false;
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      else if (__mustReinitialize) {
        __eventSolver.reinitialize();
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      var __stepTaken = __takeMaximumStep ? __eventSolver.maxStep() : __eventSolver.step();
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        theta = __state[__cOut++];
        omega = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      _aRate[_aRate.length-1] = 0.0; // In case the prelim code returns
      var __index=-1; // so that it can be used in preliminary code
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var theta = _aState[__cOut++];
        var omega = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        var deltaTheta=theta-equilibriumTheta;  // > Preliminary code for ODE.Evol Page:1
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = omega; // Rate for ODE: Evol Page:theta
        _aRate[__cRate++] = -k*(Math.sin(deltaTheta))-b*omega; // Rate for ODE: Evol Page:omega
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_theta(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_omega(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

    _model._resized = function(_width,_height) {
      _view._resized(_width,_height);
  }; // end of _resized
    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new BarMagnetField_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.upperPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'upperPanel'
          _view.barRadio.linkProperty("Checked",  function() { return fieldType===0; } ); // HtmlView Page linking property 'Checked' for element 'barRadio'
          _view.barRadio.setAction("OnCheckOn", function() {
  barDipoles();
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'barRadio'
          _view.coilRadio.linkProperty("Checked",  function() { return fieldType===1; } ); // HtmlView Page linking property 'Checked' for element 'coilRadio'
          _view.coilRadio.setAction("OnCheckOn", function() {
  coilDipoles();
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'coilRadio'
          _view.earthRadio.linkProperty("Checked",  function() { return fieldType===2; } ); // HtmlView Page linking property 'Checked' for element 'earthRadio'
          _view.earthRadio.setAction("OnCheckOn", function() {
  earthDipoles();
  _initialize();

}); // HtmlView Page setting action 'OnCheckOn' for element 'earthRadio'
          _view.mainPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'mainPanel'
          _view.mainPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'mainPanel'
          _view.fieldDrawingPanel.linkProperty("Height",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Height' for element 'fieldDrawingPanel'
          _view.fieldDrawingPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'fieldDrawingPanel'
          _view.fieldDrawingPanel.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'fieldDrawingPanel'
          _view.fieldDrawingPanel.linkProperty("MinimumY",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'fieldDrawingPanel'
          _view.fieldDrawingPanel.linkProperty("MaximumY",  function() { return ymax; }, function(_v) { ymax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'fieldDrawingPanel'
          _view.fieldDrawingPanel.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'fieldDrawingPanel'
          _view.hotSpot.linkProperty("X",  function() { return xMagnet; }, function(_v) { xMagnet = _v; } ); // HtmlView Page linking property 'X' for element 'hotSpot'
          _view.hotSpot.linkProperty("Y",  function() { return yMagnet; }, function(_v) { yMagnet = _v; } ); // HtmlView Page linking property 'Y' for element 'hotSpot'
          _view.hotSpot.setAction("OnDrag", computeField); // HtmlView Page setting action 'OnDrag' for element 'hotSpot'
          _view.custom.linkProperty("SizeX",  function() { return xmax-xmin; } ); // HtmlView Page linking property 'SizeX' for element 'custom'
          _view.custom.linkProperty("X",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'X' for element 'custom'
          _view.custom.linkProperty("Y",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'Y' for element 'custom'
          _view.custom.linkProperty("SizeY",  function() { return ymax-ymin; } ); // HtmlView Page linking property 'SizeY' for element 'custom'
          _view.compassGroup.linkProperty("X",  function() { return xCompass; }, function(_v) { xCompass = _v; } ); // HtmlView Page linking property 'X' for element 'compassGroup'
          _view.compassGroup.linkProperty("Y",  function() { return yCompass; }, function(_v) { yCompass = _v; } ); // HtmlView Page linking property 'Y' for element 'compassGroup'
          _view.compassGroup.linkProperty("Visibility",  function() { return showCompass; }, function(_v) { showCompass = _v; } ); // HtmlView Page linking property 'Visibility' for element 'compassGroup'
          _view.compassArrowSN.linkProperty("Transformation",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'compassArrowSN'
          _view.textboxShape.linkProperty("Y",  function() { return -0.19-fontOffset; } ); // HtmlView Page linking property 'Y' for element 'textboxShape'
          _view.textboxShape.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'textboxShape'
          _view.fieldtext.linkProperty("Y",  function() { return -0.24-fontOffset; } ); // HtmlView Page linking property 'Y' for element 'fieldtext'
          _view.fieldtext.linkProperty("Text",  function() { return fieldValue; }, function(_v) { fieldValue = _v; } ); // HtmlView Page linking property 'Text' for element 'fieldtext'
          _view.fieldtext.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'fieldtext'
          _view.fieldtext.linkProperty("Font",  function() { return fontSize; }, function(_v) { fontSize = _v; } ); // HtmlView Page linking property 'Font' for element 'fieldtext'
          _view.DragmeMsg.linkProperty("X",  function() { return xMagnet; }, function(_v) { xMagnet = _v; } ); // HtmlView Page linking property 'X' for element 'DragmeMsg'
          _view.DragmeMsg.linkProperty("Y",  function() { return yMagnet; }, function(_v) { yMagnet = _v; } ); // HtmlView Page linking property 'Y' for element 'DragmeMsg'
          _view.controlPanel.linkProperty("Width",  function() { return width; }, function(_v) { width = _v; } ); // HtmlView Page linking property 'Width' for element 'controlPanel'
          _view.resetButton.setAction("OnClick", function() {
  _reset();

}); // HtmlView Page setting action 'OnClick' for element 'resetButton'
          _view.currentPanel.linkProperty("Display",  function() { return showCurrent?"inline-block":"none"; } ); // HtmlView Page linking property 'Display' for element 'currentPanel'
          _view.coilLable.linkProperty("Visibility",  function() { return showCurrent; }, function(_v) { showCurrent = _v; } ); // HtmlView Page linking property 'Visibility' for element 'coilLable'
          _view.fieldstrength.linkProperty("Value",  function() { return m; }, function(_v) { m = _v; } ); // HtmlView Page linking property 'Value' for element 'fieldstrength'
          _view.fieldstrength.setAction("OnChange", computeField); // HtmlView Page setting action 'OnChange' for element 'fieldstrength'
          _view.fieldstrength.linkProperty("Visibility",  function() { return showCurrent; }, function(_v) { showCurrent = _v; } ); // HtmlView Page linking property 'Visibility' for element 'fieldstrength'
          _view.current.linkProperty("Value",  function() { return m; }, function(_v) { m = _v; } ); // HtmlView Page linking property 'Value' for element 'current'
          _view.current.linkProperty("Visibility",  function() { return showCurrent; }, function(_v) { showCurrent = _v; } ); // HtmlView Page linking property 'Visibility' for element 'current'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(true);
  _model.setFPS(10);
  _model.setStepsPerDisplay(2);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}
function BarMagnetField_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = BarMagnetField_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function BarMagnetField_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"upperPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'upperPanel'
      .setProperty("BorderStyle","solid") // EJsS HtmlView.HtmlView Page: setting property 'BorderStyle' for element 'upperPanel'
      .setProperty("BorderColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'BorderColor' for element 'upperPanel'
      .setProperty("BorderWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'BorderWidth' for element 'upperPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"radioPanel", _view.upperPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'radioPanel'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"barRadio", _view.radioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'barRadio'
      .setProperty("Text","Bar") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'barRadio'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"coilRadio", _view.radioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'coilRadio'
      .setProperty("Text","Coil") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'coilRadio'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"earthRadio", _view.radioPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'earthRadio'
      .setProperty("Text","Earth") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'earthRadio'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"mainPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'mainPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'mainPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"fieldDrawingPanel", _view.mainPanel,"GRAPHICS2D_CANVAS") // EJsS HtmlView.HtmlView Page: declaration of element 'fieldDrawingPanel'
      .setProperty("Background","Gray") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'fieldDrawingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'fieldDrawingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'fieldDrawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'fieldDrawingPanel'
      .setProperty("GraphicsMode","Canvas") // EJsS HtmlView.HtmlView Page: setting property 'GraphicsMode' for element 'fieldDrawingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'fieldDrawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"hotSpot", _view.fieldDrawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'hotSpot'
      .setProperty("Sensitivity",0) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'hotSpot'
      .setProperty("SizeX",40) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'hotSpot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'hotSpot'
      .setProperty("SizeY",40) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'hotSpot'
      .setProperty("DrawLines",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'hotSpot'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'hotSpot'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'hotSpot'
      ;

    _view._addElement(EJSS_DRAWING2D.custom,"custom", _view.fieldDrawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'custom'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'custom'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'custom'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'custom'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'custom'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"compassGroup", _view.fieldDrawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'compassGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"backGroundShape", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'backGroundShape'
      .setProperty("FillColor","rgba(200,220,208,1)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'backGroundShape'
      .setProperty("SizeX",60) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'backGroundShape'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'backGroundShape'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'backGroundShape'
      .setProperty("SizeY",58) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'backGroundShape'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'backGroundShape'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"compassArrowSN", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'compassArrowSN'
      .setProperty("MarkStartColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'MarkStartColor' for element 'compassArrowSN'
      .setProperty("MarkMiddleHeight",0.1) // EJsS HtmlView.HtmlView Page: setting property 'MarkMiddleHeight' for element 'compassArrowSN'
      .setProperty("MarkStartHeight",8) // EJsS HtmlView.HtmlView Page: setting property 'MarkStartHeight' for element 'compassArrowSN'
      .setProperty("Offset","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'compassArrowSN'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'compassArrowSN'
      .setProperty("SizeX",0.15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'compassArrowSN'
      .setProperty("MarkStartWidth",8) // EJsS HtmlView.HtmlView Page: setting property 'MarkStartWidth' for element 'compassArrowSN'
      .setProperty("MarkMiddleWidth",0.1) // EJsS HtmlView.HtmlView Page: setting property 'MarkMiddleWidth' for element 'compassArrowSN'
      .setProperty("MarkEndHeight",40) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndHeight' for element 'compassArrowSN'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'compassArrowSN'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'compassArrowSN'
      .setProperty("MarkStart","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkStart' for element 'compassArrowSN'
      .setProperty("MarkEndColor","red") // EJsS HtmlView.HtmlView Page: setting property 'MarkEndColor' for element 'compassArrowSN'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'compassArrowSN'
      .setProperty("MarkEndWidth",40) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndWidth' for element 'compassArrowSN'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"compassPivotShape", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'compassPivotShape'
      .setProperty("Sensitivity",15) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'compassPivotShape'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'compassPivotShape'
      .setProperty("MovesGroup",true) // EJsS HtmlView.HtmlView Page: setting property 'MovesGroup' for element 'compassPivotShape'
      .setProperty("SizeX",0.028) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'compassPivotShape'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'compassPivotShape'
      .setProperty("LineColor","black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'compassPivotShape'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'compassPivotShape'
      .setProperty("SizeY",0.028) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'compassPivotShape'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'compassPivotShape'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"textboxShape", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'textboxShape'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'textboxShape'
      .setProperty("SizeX",0.5) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'textboxShape'
      .setProperty("RelativePosition","NORTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'textboxShape'
      .setProperty("ShapeType","ROUND_RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'textboxShape'
      .setProperty("X",-0.25) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'textboxShape'
      .setProperty("SizeY",0.12) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'textboxShape'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fieldtext", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fieldtext'
      .setProperty("FillColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fieldtext'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fieldtext'
      .setProperty("X",0.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'fieldtext'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fieldtext'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'fieldtext'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"DragmeMsg", _view.fieldDrawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'DragmeMsg'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'DragmeMsg'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'DragmeMsg'
      .setProperty("Text","Drag me") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'DragmeMsg'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'DragmeMsg'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      .setProperty("BorderStyle","solid") // EJsS HtmlView.HtmlView Page: setting property 'BorderStyle' for element 'controlPanel'
      .setProperty("BorderColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'BorderColor' for element 'controlPanel'
      .setProperty("BorderWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'BorderWidth' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'buttonPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttonPanel'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"currentPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'currentPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'currentPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"coilLable", _view.currentPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'coilLable'
      .setProperty("Text","Coil Current:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'coilLable'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"fieldstrength", _view.currentPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'fieldstrength'
      .setProperty("Minimum",-1.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'fieldstrength'
      .setProperty("Maximum",1.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'fieldstrength'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"current", _view.currentPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'current'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'current'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'current'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'current'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"narrativePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'narrativePanel'
      .setProperty("Html","<p>The Magnetic  Field Demo shows the field of a bar magnet, a coil, and Earth. It has a movable compass that reports the field magnitude (strength) and a grid of magnetic needles that show the field direction.  The magnetic field is modeled using magnetic dipoles underneath the image. Why is it reasonable to model a magnet using multiple dipoles? How may dipoles are there in an actual bar magnet? </p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'narrativePanel'
      ;

  };

  return _view;
}



      var _model;
      window.addEventListener('load',
        function () {
          _model =  new BarMagnetField("_topFrame","_ejs_library/",null);
          if (typeof _isApp !== "undefined") _model.setRunAlways(true);
          TextResizeDetector.TARGET_ELEMENT_ID = '_topFrame';
          TextResizeDetector.USER_INIT_FUNC = function () {
            var iBase = TextResizeDetector.addEventListener(function(e,args) {
              _model._fontResized(args[0].iBase,args[0].iSize,args[0].iDelta);
              },null);
            _model._fontResized(iBase);
          };
          _model.onload();
        }, false);
      var interval = setInterval(function() {
         if(document.readyState === 'complete') {
           window.addEventListener('resize', function () { if (_model._resized) _model._resized(window.innerWidth,window.innerHeight); }, false);
           window.addEventListener('scroll', function () { if (_model._resized) _model._resized(window.innerWidth,window.innerHeight); }, false);
           var startCaptureBut = document.getElementById('startCaptureBut');
           var stopCaptureBut = document.getElementById('stopCaptureBut');
           var resetCaptureBut = document.getElementById('resetCaptureBut');
           var playCaptureBut = document.getElementById('playCaptureBut');
           var stepCaptureBut = document.getElementById('stepCaptureBut');
           if (startCaptureBut) {
             startCaptureBut.onclick = function() {
               _model.startCapture();
             };
             stopCaptureBut.onclick = function() {
               _model.saveText('recording','rec',JSON.stringify(_model.stopCapture()));
             };
             resetCaptureBut.onclick = function() {
               _model.resetCapture();
             };
             playCaptureBut.onclick = function() {
               _model.readText(null,'.rec',function(content){
               _model.playCapture(JSON.parse(content),function(){startCaptureBut.disabled=false; playCaptureBut.disabled=false; stepCaptureBut.disabled=false; window.alert(end_reproduction_message);});               });
             };
             stepCaptureBut.onchange= function() {
               var stepCapt;
               if (stepCaptureBut.value >= 0) stepCapt =  stepCaptureBut.value + 1;
               else stepCapt = 1 + 1.8*stepCaptureBut.value/8;
               _model.changeCaptureStep(stepCapt);
             };
           }
           clearInterval(interval);
         };
      }, 200)
