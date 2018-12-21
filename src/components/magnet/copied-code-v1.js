

/* _inputParameters: an object with different values for the model parameters */
function MagneticBarFieldsecondmagnet06(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
  var _model = EJSS_CORE.createAnimationLMS();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog,
    downloadText: EJSS_TOOLS.File.downloadText,
    uploadText: function(action) { EJSS_TOOLS.File.uploadText(_model,action); }
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

  var print; // EjsS Model.Variables.Field Vars.print
  var fontb; // EjsS Model.Variables.Field Vars.fontb
  var font; // EjsS Model.Variables.Field Vars.font
  var nd; // EjsS Model.Variables.Field Vars.nd
  var nd2; // EjsS Model.Variables.Field Vars.nd2
  var dx; // EjsS Model.Variables.Field Vars.dx
  var dipoles; // EjsS Model.Variables.Field Vars.dipoles
  var dipolesearth; // EjsS Model.Variables.Field Vars.dipolesearth
  var fieldValue; // EjsS Model.Variables.Field Vars.fieldValue
  var fieldValueBx; // EjsS Model.Variables.Field Vars.fieldValueBx
  var fieldValueBy; // EjsS Model.Variables.Field Vars.fieldValueBy
  var fieldValueBx1; // EjsS Model.Variables.Field Vars.fieldValueBx1
  var fieldValueBy1; // EjsS Model.Variables.Field Vars.fieldValueBy1
  var fieldValueAngle; // EjsS Model.Variables.Field Vars.fieldValueAngle
  var angledeg; // EjsS Model.Variables.Field Vars.angledeg
  var angledeg1; // EjsS Model.Variables.Field Vars.angledeg1
  var fieldValueAngledeg; // EjsS Model.Variables.Field Vars.fieldValueAngledeg
  var fieldValueAngledeg1; // EjsS Model.Variables.Field Vars.fieldValueAngledeg1
  var m; // EjsS Model.Variables.Field Vars.m
  var xmax; // EjsS Model.Variables.Field Vars.xmax
  var ymax; // EjsS Model.Variables.Field Vars.ymax
  var nx; // EjsS Model.Variables.Field Vars.nx
  var ny; // EjsS Model.Variables.Field Vars.ny
  var B; // EjsS Model.Variables.Field Vars.B
  var xField; // EjsS Model.Variables.Field Vars.xField
  var yField; // EjsS Model.Variables.Field Vars.yField
  var magField; // EjsS Model.Variables.Field Vars.magField
  var negativexField; // EjsS Model.Variables.Field Vars.negativexField
  var negativeyField; // EjsS Model.Variables.Field Vars.negativeyField
  var R; // EjsS Model.Variables.Field Vars.R

  var direction; // EjsS Model.Variables.Display Vars.direction
  var netForce; // EjsS Model.Variables.Display Vars.netForce
  var massMagnet; // EjsS Model.Variables.Display Vars.massMagnet
  var vxMagnet; // EjsS Model.Variables.Display Vars.vxMagnet
  var xMagnet; // EjsS Model.Variables.Display Vars.xMagnet
  var yMagnet; // EjsS Model.Variables.Display Vars.yMagnet
  var xMagnetDrag; // EjsS Model.Variables.Display Vars.xMagnetDrag
  var yMagnetDrag; // EjsS Model.Variables.Display Vars.yMagnetDrag
  var xMagnettransform; // EjsS Model.Variables.Display Vars.xMagnettransform
  var yMagnettransform; // EjsS Model.Variables.Display Vars.yMagnettransform
  var store; // EjsS Model.Variables.Display Vars.store
  var counter; // EjsS Model.Variables.Display Vars.counter
  var xCompass; // EjsS Model.Variables.Display Vars.xCompass
  var xCompassstore; // EjsS Model.Variables.Display Vars.xCompassstore
  var yCompass; // EjsS Model.Variables.Display Vars.yCompass
  var yCompassstore; // EjsS Model.Variables.Display Vars.yCompassstore
  var xCompasstransform; // EjsS Model.Variables.Display Vars.xCompasstransform
  var yCompasstransform; // EjsS Model.Variables.Display Vars.yCompasstransform
  var xCompasstransform1; // EjsS Model.Variables.Display Vars.xCompasstransform1
  var yCompasstransform1; // EjsS Model.Variables.Display Vars.yCompasstransform1
  var Magnetsizex; // EjsS Model.Variables.Display Vars.Magnetsizex
  var Magnetsizey; // EjsS Model.Variables.Display Vars.Magnetsizey
  var equilibriumTheta; // EjsS Model.Variables.Display Vars.equilibriumTheta
  var hideField; // EjsS Model.Variables.Display Vars.hideField
  var randomMagnetLocation; // EjsS Model.Variables.Display Vars.randomMagnetLocation
  var vectorfieldmax; // EjsS Model.Variables.Display Vars.vectorfieldmax
  var vectorfieldmaxopposite; // EjsS Model.Variables.Display Vars.vectorfieldmaxopposite
  var insidemagnet; // EjsS Model.Variables.Display Vars.insidemagnet
  var magnetNS; // EjsS Model.Variables.Display Vars.magnetNS
  var flipmagnet; // EjsS Model.Variables.Display Vars.flipmagnet
  var showCompass; // EjsS Model.Variables.Display Vars.showCompass
  var test; // EjsS Model.Variables.Display Vars.test

  var k; // EjsS Model.Variables.ODE Vars.k
  var damp; // EjsS Model.Variables.ODE Vars.damp
  var theta; // EjsS Model.Variables.ODE Vars.theta
  var thetastore; // EjsS Model.Variables.ODE Vars.thetastore
  var deltaTheta; // EjsS Model.Variables.ODE Vars.deltaTheta
  var deltaThetastore; // EjsS Model.Variables.ODE Vars.deltaThetastore
  var omega; // EjsS Model.Variables.ODE Vars.omega
  var omegastore; // EjsS Model.Variables.ODE Vars.omegastore
  var t; // EjsS Model.Variables.ODE Vars.t
  var dt; // EjsS Model.Variables.ODE Vars.dt
  var pi; // EjsS Model.Variables.ODE Vars.pi

  var earth; // EjsS Model.Variables.earth.earth
  var cta; // EjsS Model.Variables.earth.cta
  var cs; // EjsS Model.Variables.earth.cs
  var sc; // EjsS Model.Variables.earth.sc
  var cs1; // EjsS Model.Variables.earth.cs1
  var sc1; // EjsS Model.Variables.earth.sc1
  var ca; // EjsS Model.Variables.earth.ca
  var a2c; // EjsS Model.Variables.earth.a2c

  var magnet1; // EjsS Model.Variables.2ndmagnet.magnet1
  var magnet2; // EjsS Model.Variables.2ndmagnet.magnet2
  var dipoles2; // EjsS Model.Variables.2ndmagnet.dipoles2
  var massMagnet2; // EjsS Model.Variables.2ndmagnet.massMagnet2
  var vxMagnet2; // EjsS Model.Variables.2ndmagnet.vxMagnet2
  var xMagnet2; // EjsS Model.Variables.2ndmagnet.xMagnet2
  var yMagnet2; // EjsS Model.Variables.2ndmagnet.yMagnet2
  var xMagnet2Drag; // EjsS Model.Variables.2ndmagnet.xMagnet2Drag
  var yMagnet2Drag; // EjsS Model.Variables.2ndmagnet.yMagnet2Drag
  var Magnetsizex2; // EjsS Model.Variables.2ndmagnet.Magnetsizex2
  var Magnetsizey2; // EjsS Model.Variables.2ndmagnet.Magnetsizey2
  var cta2; // EjsS Model.Variables.2ndmagnet.cta2
  var ca2; // EjsS Model.Variables.2ndmagnet.ca2
  var cs2; // EjsS Model.Variables.2ndmagnet.cs2
  var sc2; // EjsS Model.Variables.2ndmagnet.sc2
  var cs3; // EjsS Model.Variables.2ndmagnet.cs3
  var sc3; // EjsS Model.Variables.2ndmagnet.sc3
  var xMagnettransform2; // EjsS Model.Variables.2ndmagnet.xMagnettransform2
  var yMagnettransform2; // EjsS Model.Variables.2ndmagnet.yMagnettransform2
  var xCompasstransform2; // EjsS Model.Variables.2ndmagnet.xCompasstransform2
  var yCompasstransform2; // EjsS Model.Variables.2ndmagnet.yCompasstransform2
  var xCompasstransform3; // EjsS Model.Variables.2ndmagnet.xCompasstransform3
  var yCompasstransform3; // EjsS Model.Variables.2ndmagnet.yCompasstransform3
  var randomMagnetLocation2; // EjsS Model.Variables.2ndmagnet.randomMagnetLocation2
  var bf1; // EjsS Model.Variables.2ndmagnet.bf1
  var bf2; // EjsS Model.Variables.2ndmagnet.bf2
  var lcst; // EjsS Model.Variables.2ndmagnet.lcst
  var rcst; // EjsS Model.Variables.2ndmagnet.rcst
  var scale; // EjsS Model.Variables.2ndmagnet.scale
  var bxField; // EjsS Model.Variables.2ndmagnet.bxField
  var byField; // EjsS Model.Variables.2ndmagnet.byField

  var textt; // EjsS Model.Variables.layout.textt
  var Width; // EjsS Model.Variables.layout.Width
  var Height; // EjsS Model.Variables.layout.Height
  var Width1; // EjsS Model.Variables.layout.Width1
  var Width2; // EjsS Model.Variables.layout.Width2
  var Width3; // EjsS Model.Variables.layout.Width3
  var Width4; // EjsS Model.Variables.layout.Width4
  var Height1; // EjsS Model.Variables.layout.Height1
  var graph; // EjsS Model.Variables.layout.graph
  var world; // EjsS Model.Variables.layout.world
  var disabledworld; // EjsS Model.Variables.layout.disabledworld
  var disabled; // EjsS Model.Variables.layout.disabled
  var isAndroid; // EjsS Model.Variables.layout.isAndroid
  var iOS; // EjsS Model.Variables.layout.iOS
  var iPad; // EjsS Model.Variables.layout.iPad
  var iPhone; // EjsS Model.Variables.layout.iPhone
  var Android; // EjsS Model.Variables.layout.Android

  var inside; // EjsS Model.Variables.Fieldlines.inside
  var selected; // EjsS Model.Variables.Fieldlines.selected
  var selected2; // EjsS Model.Variables.Fieldlines.selected2
  var selected3; // EjsS Model.Variables.Fieldlines.selected3
  var vectorIndex; // EjsS Model.Variables.Fieldlines.vectorIndex
  var FieldFlag; // EjsS Model.Variables.Fieldlines.FieldFlag
  var nVectors; // EjsS Model.Variables.Fieldlines.nVectors
  var nVectorsMax; // EjsS Model.Variables.Fieldlines.nVectorsMax
  var nVectorsSq; // EjsS Model.Variables.Fieldlines.nVectorsSq
  var Vectorx; // EjsS Model.Variables.Fieldlines.Vectorx
  var Vectory; // EjsS Model.Variables.Fieldlines.Vectory
  var Fieldx; // EjsS Model.Variables.Fieldlines.Fieldx
  var Fieldy; // EjsS Model.Variables.Fieldlines.Fieldy
  var BF1; // EjsS Model.Variables.Fieldlines.BF1
  var BF2; // EjsS Model.Variables.Fieldlines.BF2
  var posx; // EjsS Model.Variables.Fieldlines.posx
  var posy; // EjsS Model.Variables.Fieldlines.posy
  var textSetx; // EjsS Model.Variables.Fieldlines.textSetx
  var textSety; // EjsS Model.Variables.Fieldlines.textSety
  var textSetthetaField; // EjsS Model.Variables.Fieldlines.textSetthetaField
  var thetaField; // EjsS Model.Variables.Fieldlines.thetaField

  var _privateOdesList;
  var _ODEi_evolution1;
  var userEvents1=[];

  _model.getOdes = function() { return [_ODEi_evolution1]; };

  _model.removeEvents = function(){
    userEvents1=[];
  };

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      print : print,
      fontb : fontb,
      font : font,
      nd : nd,
      nd2 : nd2,
      dx : dx,
      dipoles : dipoles,
      dipolesearth : dipolesearth,
      fieldValue : fieldValue,
      fieldValueBx : fieldValueBx,
      fieldValueBy : fieldValueBy,
      fieldValueBx1 : fieldValueBx1,
      fieldValueBy1 : fieldValueBy1,
      fieldValueAngle : fieldValueAngle,
      angledeg : angledeg,
      angledeg1 : angledeg1,
      fieldValueAngledeg : fieldValueAngledeg,
      fieldValueAngledeg1 : fieldValueAngledeg1,
      m : m,
      xmax : xmax,
      ymax : ymax,
      nx : nx,
      ny : ny,
      B : B,
      xField : xField,
      yField : yField,
      magField : magField,
      negativexField : negativexField,
      negativeyField : negativeyField,
      R : R,
      direction : direction,
      netForce : netForce,
      massMagnet : massMagnet,
      vxMagnet : vxMagnet,
      xMagnet : xMagnet,
      yMagnet : yMagnet,
      xMagnetDrag : xMagnetDrag,
      yMagnetDrag : yMagnetDrag,
      xMagnettransform : xMagnettransform,
      yMagnettransform : yMagnettransform,
      store : store,
      counter : counter,
      xCompass : xCompass,
      xCompassstore : xCompassstore,
      yCompass : yCompass,
      yCompassstore : yCompassstore,
      xCompasstransform : xCompasstransform,
      yCompasstransform : yCompasstransform,
      xCompasstransform1 : xCompasstransform1,
      yCompasstransform1 : yCompasstransform1,
      Magnetsizex : Magnetsizex,
      Magnetsizey : Magnetsizey,
      equilibriumTheta : equilibriumTheta,
      hideField : hideField,
      randomMagnetLocation : randomMagnetLocation,
      vectorfieldmax : vectorfieldmax,
      vectorfieldmaxopposite : vectorfieldmaxopposite,
      insidemagnet : insidemagnet,
      magnetNS : magnetNS,
      flipmagnet : flipmagnet,
      showCompass : showCompass,
      test : test,
      k : k,
      damp : damp,
      theta : theta,
      thetastore : thetastore,
      deltaTheta : deltaTheta,
      deltaThetastore : deltaThetastore,
      omega : omega,
      omegastore : omegastore,
      t : t,
      dt : dt,
      pi : pi,
      earth : earth,
      cta : cta,
      cs : cs,
      sc : sc,
      cs1 : cs1,
      sc1 : sc1,
      ca : ca,
      a2c : a2c,
      magnet1 : magnet1,
      magnet2 : magnet2,
      dipoles2 : dipoles2,
      massMagnet2 : massMagnet2,
      vxMagnet2 : vxMagnet2,
      xMagnet2 : xMagnet2,
      yMagnet2 : yMagnet2,
      xMagnet2Drag : xMagnet2Drag,
      yMagnet2Drag : yMagnet2Drag,
      Magnetsizex2 : Magnetsizex2,
      Magnetsizey2 : Magnetsizey2,
      cta2 : cta2,
      ca2 : ca2,
      cs2 : cs2,
      sc2 : sc2,
      cs3 : cs3,
      sc3 : sc3,
      xMagnettransform2 : xMagnettransform2,
      yMagnettransform2 : yMagnettransform2,
      xCompasstransform2 : xCompasstransform2,
      yCompasstransform2 : yCompasstransform2,
      xCompasstransform3 : xCompasstransform3,
      yCompasstransform3 : yCompasstransform3,
      randomMagnetLocation2 : randomMagnetLocation2,
      bf1 : bf1,
      bf2 : bf2,
      lcst : lcst,
      rcst : rcst,
      scale : scale,
      bxField : bxField,
      byField : byField,
      textt : textt,
      Width : Width,
      Height : Height,
      Width1 : Width1,
      Width2 : Width2,
      Width3 : Width3,
      Width4 : Width4,
      Height1 : Height1,
      graph : graph,
      world : world,
      disabledworld : disabledworld,
      disabled : disabled,
      isAndroid : isAndroid,
      iOS : iOS,
      iPad : iPad,
      iPhone : iPhone,
      Android : Android,
      inside : inside,
      selected : selected,
      selected2 : selected2,
      selected3 : selected3,
      vectorIndex : vectorIndex,
      FieldFlag : FieldFlag,
      nVectors : nVectors,
      nVectorsMax : nVectorsMax,
      nVectorsSq : nVectorsSq,
      Vectorx : Vectorx,
      Vectory : Vectory,
      Fieldx : Fieldx,
      Fieldy : Fieldy,
      BF1 : BF1,
      BF2 : BF2,
      posx : posx,
      posy : posy,
      textSetx : textSetx,
      textSety : textSety,
      textSetthetaField : textSetthetaField,
      thetaField : thetaField
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.print != "undefined") print = json.print;
    if(typeof json.fontb != "undefined") fontb = json.fontb;
    if(typeof json.font != "undefined") font = json.font;
    if(typeof json.nd != "undefined") nd = json.nd;
    if(typeof json.nd2 != "undefined") nd2 = json.nd2;
    if(typeof json.dx != "undefined") dx = json.dx;
    if(typeof json.dipoles != "undefined") dipoles = json.dipoles;
    if(typeof json.dipolesearth != "undefined") dipolesearth = json.dipolesearth;
    if(typeof json.fieldValue != "undefined") fieldValue = json.fieldValue;
    if(typeof json.fieldValueBx != "undefined") fieldValueBx = json.fieldValueBx;
    if(typeof json.fieldValueBy != "undefined") fieldValueBy = json.fieldValueBy;
    if(typeof json.fieldValueBx1 != "undefined") fieldValueBx1 = json.fieldValueBx1;
    if(typeof json.fieldValueBy1 != "undefined") fieldValueBy1 = json.fieldValueBy1;
    if(typeof json.fieldValueAngle != "undefined") fieldValueAngle = json.fieldValueAngle;
    if(typeof json.angledeg != "undefined") angledeg = json.angledeg;
    if(typeof json.angledeg1 != "undefined") angledeg1 = json.angledeg1;
    if(typeof json.fieldValueAngledeg != "undefined") fieldValueAngledeg = json.fieldValueAngledeg;
    if(typeof json.fieldValueAngledeg1 != "undefined") fieldValueAngledeg1 = json.fieldValueAngledeg1;
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.nx != "undefined") nx = json.nx;
    if(typeof json.ny != "undefined") ny = json.ny;
    if(typeof json.B != "undefined") B = json.B;
    if(typeof json.xField != "undefined") xField = json.xField;
    if(typeof json.yField != "undefined") yField = json.yField;
    if(typeof json.magField != "undefined") magField = json.magField;
    if(typeof json.negativexField != "undefined") negativexField = json.negativexField;
    if(typeof json.negativeyField != "undefined") negativeyField = json.negativeyField;
    if(typeof json.R != "undefined") R = json.R;
    if(typeof json.direction != "undefined") direction = json.direction;
    if(typeof json.netForce != "undefined") netForce = json.netForce;
    if(typeof json.massMagnet != "undefined") massMagnet = json.massMagnet;
    if(typeof json.vxMagnet != "undefined") vxMagnet = json.vxMagnet;
    if(typeof json.xMagnet != "undefined") xMagnet = json.xMagnet;
    if(typeof json.yMagnet != "undefined") yMagnet = json.yMagnet;
    if(typeof json.xMagnetDrag != "undefined") xMagnetDrag = json.xMagnetDrag;
    if(typeof json.yMagnetDrag != "undefined") yMagnetDrag = json.yMagnetDrag;
    if(typeof json.xMagnettransform != "undefined") xMagnettransform = json.xMagnettransform;
    if(typeof json.yMagnettransform != "undefined") yMagnettransform = json.yMagnettransform;
    if(typeof json.store != "undefined") store = json.store;
    if(typeof json.counter != "undefined") counter = json.counter;
    if(typeof json.xCompass != "undefined") xCompass = json.xCompass;
    if(typeof json.xCompassstore != "undefined") xCompassstore = json.xCompassstore;
    if(typeof json.yCompass != "undefined") yCompass = json.yCompass;
    if(typeof json.yCompassstore != "undefined") yCompassstore = json.yCompassstore;
    if(typeof json.xCompasstransform != "undefined") xCompasstransform = json.xCompasstransform;
    if(typeof json.yCompasstransform != "undefined") yCompasstransform = json.yCompasstransform;
    if(typeof json.xCompasstransform1 != "undefined") xCompasstransform1 = json.xCompasstransform1;
    if(typeof json.yCompasstransform1 != "undefined") yCompasstransform1 = json.yCompasstransform1;
    if(typeof json.Magnetsizex != "undefined") Magnetsizex = json.Magnetsizex;
    if(typeof json.Magnetsizey != "undefined") Magnetsizey = json.Magnetsizey;
    if(typeof json.equilibriumTheta != "undefined") equilibriumTheta = json.equilibriumTheta;
    if(typeof json.hideField != "undefined") hideField = json.hideField;
    if(typeof json.randomMagnetLocation != "undefined") randomMagnetLocation = json.randomMagnetLocation;
    if(typeof json.vectorfieldmax != "undefined") vectorfieldmax = json.vectorfieldmax;
    if(typeof json.vectorfieldmaxopposite != "undefined") vectorfieldmaxopposite = json.vectorfieldmaxopposite;
    if(typeof json.insidemagnet != "undefined") insidemagnet = json.insidemagnet;
    if(typeof json.magnetNS != "undefined") magnetNS = json.magnetNS;
    if(typeof json.flipmagnet != "undefined") flipmagnet = json.flipmagnet;
    if(typeof json.showCompass != "undefined") showCompass = json.showCompass;
    if(typeof json.test != "undefined") test = json.test;
    if(typeof json.k != "undefined") k = json.k;
    if(typeof json.damp != "undefined") damp = json.damp;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.thetastore != "undefined") thetastore = json.thetastore;
    if(typeof json.deltaTheta != "undefined") deltaTheta = json.deltaTheta;
    if(typeof json.deltaThetastore != "undefined") deltaThetastore = json.deltaThetastore;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.omegastore != "undefined") omegastore = json.omegastore;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.earth != "undefined") earth = json.earth;
    if(typeof json.cta != "undefined") cta = json.cta;
    if(typeof json.cs != "undefined") cs = json.cs;
    if(typeof json.sc != "undefined") sc = json.sc;
    if(typeof json.cs1 != "undefined") cs1 = json.cs1;
    if(typeof json.sc1 != "undefined") sc1 = json.sc1;
    if(typeof json.ca != "undefined") ca = json.ca;
    if(typeof json.a2c != "undefined") a2c = json.a2c;
    if(typeof json.magnet1 != "undefined") magnet1 = json.magnet1;
    if(typeof json.magnet2 != "undefined") magnet2 = json.magnet2;
    if(typeof json.dipoles2 != "undefined") dipoles2 = json.dipoles2;
    if(typeof json.massMagnet2 != "undefined") massMagnet2 = json.massMagnet2;
    if(typeof json.vxMagnet2 != "undefined") vxMagnet2 = json.vxMagnet2;
    if(typeof json.xMagnet2 != "undefined") xMagnet2 = json.xMagnet2;
    if(typeof json.yMagnet2 != "undefined") yMagnet2 = json.yMagnet2;
    if(typeof json.xMagnet2Drag != "undefined") xMagnet2Drag = json.xMagnet2Drag;
    if(typeof json.yMagnet2Drag != "undefined") yMagnet2Drag = json.yMagnet2Drag;
    if(typeof json.Magnetsizex2 != "undefined") Magnetsizex2 = json.Magnetsizex2;
    if(typeof json.Magnetsizey2 != "undefined") Magnetsizey2 = json.Magnetsizey2;
    if(typeof json.cta2 != "undefined") cta2 = json.cta2;
    if(typeof json.ca2 != "undefined") ca2 = json.ca2;
    if(typeof json.cs2 != "undefined") cs2 = json.cs2;
    if(typeof json.sc2 != "undefined") sc2 = json.sc2;
    if(typeof json.cs3 != "undefined") cs3 = json.cs3;
    if(typeof json.sc3 != "undefined") sc3 = json.sc3;
    if(typeof json.xMagnettransform2 != "undefined") xMagnettransform2 = json.xMagnettransform2;
    if(typeof json.yMagnettransform2 != "undefined") yMagnettransform2 = json.yMagnettransform2;
    if(typeof json.xCompasstransform2 != "undefined") xCompasstransform2 = json.xCompasstransform2;
    if(typeof json.yCompasstransform2 != "undefined") yCompasstransform2 = json.yCompasstransform2;
    if(typeof json.xCompasstransform3 != "undefined") xCompasstransform3 = json.xCompasstransform3;
    if(typeof json.yCompasstransform3 != "undefined") yCompasstransform3 = json.yCompasstransform3;
    if(typeof json.randomMagnetLocation2 != "undefined") randomMagnetLocation2 = json.randomMagnetLocation2;
    if(typeof json.bf1 != "undefined") bf1 = json.bf1;
    if(typeof json.bf2 != "undefined") bf2 = json.bf2;
    if(typeof json.lcst != "undefined") lcst = json.lcst;
    if(typeof json.rcst != "undefined") rcst = json.rcst;
    if(typeof json.scale != "undefined") scale = json.scale;
    if(typeof json.bxField != "undefined") bxField = json.bxField;
    if(typeof json.byField != "undefined") byField = json.byField;
    if(typeof json.textt != "undefined") textt = json.textt;
    if(typeof json.Width != "undefined") Width = json.Width;
    if(typeof json.Height != "undefined") Height = json.Height;
    if(typeof json.Width1 != "undefined") Width1 = json.Width1;
    if(typeof json.Width2 != "undefined") Width2 = json.Width2;
    if(typeof json.Width3 != "undefined") Width3 = json.Width3;
    if(typeof json.Width4 != "undefined") Width4 = json.Width4;
    if(typeof json.Height1 != "undefined") Height1 = json.Height1;
    if(typeof json.graph != "undefined") graph = json.graph;
    if(typeof json.world != "undefined") world = json.world;
    if(typeof json.disabledworld != "undefined") disabledworld = json.disabledworld;
    if(typeof json.disabled != "undefined") disabled = json.disabled;
    if(typeof json.isAndroid != "undefined") isAndroid = json.isAndroid;
    if(typeof json.iOS != "undefined") iOS = json.iOS;
    if(typeof json.iPad != "undefined") iPad = json.iPad;
    if(typeof json.iPhone != "undefined") iPhone = json.iPhone;
    if(typeof json.Android != "undefined") Android = json.Android;
    if(typeof json.inside != "undefined") inside = json.inside;
    if(typeof json.selected != "undefined") selected = json.selected;
    if(typeof json.selected2 != "undefined") selected2 = json.selected2;
    if(typeof json.selected3 != "undefined") selected3 = json.selected3;
    if(typeof json.vectorIndex != "undefined") vectorIndex = json.vectorIndex;
    if(typeof json.FieldFlag != "undefined") FieldFlag = json.FieldFlag;
    if(typeof json.nVectors != "undefined") nVectors = json.nVectors;
    if(typeof json.nVectorsMax != "undefined") nVectorsMax = json.nVectorsMax;
    if(typeof json.nVectorsSq != "undefined") nVectorsSq = json.nVectorsSq;
    if(typeof json.Vectorx != "undefined") Vectorx = json.Vectorx;
    if(typeof json.Vectory != "undefined") Vectory = json.Vectory;
    if(typeof json.Fieldx != "undefined") Fieldx = json.Fieldx;
    if(typeof json.Fieldy != "undefined") Fieldy = json.Fieldy;
    if(typeof json.BF1 != "undefined") BF1 = json.BF1;
    if(typeof json.BF2 != "undefined") BF2 = json.BF2;
    if(typeof json.posx != "undefined") posx = json.posx;
    if(typeof json.posy != "undefined") posy = json.posy;
    if(typeof json.textSetx != "undefined") textSetx = json.textSetx;
    if(typeof json.textSety != "undefined") textSety = json.textSety;
    if(typeof json.textSetthetaField != "undefined") textSetthetaField = json.textSetthetaField;
    if(typeof json.thetaField != "undefined") thetaField = json.thetaField;
  };

  _model._inputAndPublicParameters = ["print",  "fontb",  "font",  "nd",  "nd2",  "dx",  "dipoles",  "dipolesearth",  "fieldValue",  "fieldValueBx",  "fieldValueBy",  "fieldValueBx1",  "fieldValueBy1",  "fieldValueAngle",  "angledeg",  "angledeg1",  "fieldValueAngledeg",  "fieldValueAngledeg1",  "m",  "xmax",  "ymax",  "nx",  "ny",  "B",  "xField",  "yField",  "magField",  "negativexField",  "negativeyField",  "R",  "direction",  "netForce",  "massMagnet",  "vxMagnet",  "xMagnet",  "yMagnet",  "xMagnetDrag",  "yMagnetDrag",  "xMagnettransform",  "yMagnettransform",  "store",  "counter",  "xCompass",  "xCompassstore",  "yCompass",  "yCompassstore",  "xCompasstransform",  "yCompasstransform",  "xCompasstransform1",  "yCompasstransform1",  "Magnetsizex",  "Magnetsizey",  "equilibriumTheta",  "hideField",  "randomMagnetLocation",  "vectorfieldmax",  "vectorfieldmaxopposite",  "insidemagnet",  "magnetNS",  "flipmagnet",  "showCompass",  "test",  "k",  "damp",  "theta",  "thetastore",  "deltaTheta",  "deltaThetastore",  "omega",  "omegastore",  "t",  "dt",  "pi",  "earth",  "cta",  "cs",  "sc",  "cs1",  "sc1",  "ca",  "a2c",  "magnet1",  "magnet2",  "dipoles2",  "massMagnet2",  "vxMagnet2",  "xMagnet2",  "yMagnet2",  "xMagnet2Drag",  "yMagnet2Drag",  "Magnetsizex2",  "Magnetsizey2",  "cta2",  "ca2",  "cs2",  "sc2",  "cs3",  "sc3",  "xMagnettransform2",  "yMagnettransform2",  "xCompasstransform2",  "yCompasstransform2",  "xCompasstransform3",  "yCompasstransform3",  "randomMagnetLocation2",  "bf1",  "bf2",  "lcst",  "rcst",  "scale",  "bxField",  "byField",  "textt",  "Width",  "Height",  "Width1",  "Width2",  "Width3",  "Width4",  "Height1",  "graph",  "world",  "disabledworld",  "disabled",  "isAndroid",  "iOS",  "iPad",  "iPhone",  "Android",  "inside",  "selected",  "selected2",  "selected3",  "vectorIndex",  "FieldFlag",  "nVectors",  "nVectorsMax",  "nVectorsSq",  "Vectorx",  "Vectory",  "Fieldx",  "Fieldy",  "BF1",  "BF2",  "posx",  "posy",  "textSetx",  "textSety",  "textSetthetaField",  "thetaField"];

  _model._outputAndPublicParameters = ["print",  "fontb",  "font",  "nd",  "nd2",  "dx",  "dipoles",  "dipolesearth",  "fieldValue",  "fieldValueBx",  "fieldValueBy",  "fieldValueBx1",  "fieldValueBy1",  "fieldValueAngle",  "angledeg",  "angledeg1",  "fieldValueAngledeg",  "fieldValueAngledeg1",  "m",  "xmax",  "ymax",  "nx",  "ny",  "B",  "xField",  "yField",  "magField",  "negativexField",  "negativeyField",  "R",  "direction",  "netForce",  "massMagnet",  "vxMagnet",  "xMagnet",  "yMagnet",  "xMagnetDrag",  "yMagnetDrag",  "xMagnettransform",  "yMagnettransform",  "store",  "counter",  "xCompass",  "xCompassstore",  "yCompass",  "yCompassstore",  "xCompasstransform",  "yCompasstransform",  "xCompasstransform1",  "yCompasstransform1",  "Magnetsizex",  "Magnetsizey",  "equilibriumTheta",  "hideField",  "randomMagnetLocation",  "vectorfieldmax",  "vectorfieldmaxopposite",  "insidemagnet",  "magnetNS",  "flipmagnet",  "showCompass",  "test",  "k",  "damp",  "theta",  "thetastore",  "deltaTheta",  "deltaThetastore",  "omega",  "omegastore",  "t",  "dt",  "pi",  "earth",  "cta",  "cs",  "sc",  "cs1",  "sc1",  "ca",  "a2c",  "magnet1",  "magnet2",  "dipoles2",  "massMagnet2",  "vxMagnet2",  "xMagnet2",  "yMagnet2",  "xMagnet2Drag",  "yMagnet2Drag",  "Magnetsizex2",  "Magnetsizey2",  "cta2",  "ca2",  "cs2",  "sc2",  "cs3",  "sc3",  "xMagnettransform2",  "yMagnettransform2",  "xCompasstransform2",  "yCompasstransform2",  "xCompasstransform3",  "yCompasstransform3",  "randomMagnetLocation2",  "bf1",  "bf2",  "lcst",  "rcst",  "scale",  "bxField",  "byField",  "textt",  "Width",  "Height",  "Width1",  "Width2",  "Width3",  "Width4",  "Height1",  "graph",  "world",  "disabledworld",  "disabled",  "isAndroid",  "iOS",  "iPad",  "iPhone",  "Android",  "inside",  "selected",  "selected2",  "selected3",  "vectorIndex",  "FieldFlag",  "nVectors",  "nVectorsMax",  "nVectorsSq",  "Vectorx",  "Vectory",  "Fieldx",  "Fieldy",  "BF1",  "BF2",  "posx",  "posy",  "textSetx",  "textSety",  "textSetthetaField",  "thetaField"];

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["Init Page 2"] = true;
    __pagesEnabled["laytwo magnets"] = true;
    __pagesEnabled["Evol Page"] = true;
    __pagesEnabled["Error handling code"] = true;
    __pagesEnabled["FixRel Page 2"] = true;
    __pagesEnabled["fieldlines"] = true;
  });

  _model.addToReset(function() {
    print = false; // EjsS Model.Variables.Field Vars.print
    fontb = "normal bold 2vw "; // EjsS Model.Variables.Field Vars.fontb
    font = "normal normal 2vw "; // EjsS Model.Variables.Field Vars.font
    nd = 22; // EjsS Model.Variables.Field Vars.nd
    nd2 = nd+2; // EjsS Model.Variables.Field Vars.nd2
    dx = 1.0/(nd-1); // EjsS Model.Variables.Field Vars.dx
    dipoles = new Array(nd+2); // EjsS Model.Variables.Field Vars.dipoles
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nd+2; _i0+=1) {  // EjsS Model.Variables.Field Vars.dipoles
        dipoles[_i0] = [];
        for (_i1=0; _i1<2; _i1+=1) {  // EjsS Model.Variables.Field Vars.dipoles
          dipoles[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.dipoles
        }
      }
    }());
    dipolesearth = new Array(2); // EjsS Model.Variables.Field Vars.dipolesearth
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<2; _i0+=1) {  // EjsS Model.Variables.Field Vars.dipolesearth
        dipolesearth[_i0] = [];
        for (_i1=0; _i1<nd; _i1+=1) {  // EjsS Model.Variables.Field Vars.dipolesearth
          dipolesearth[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.dipolesearth
        }
      }
    }());
    fieldValue = "0"; // EjsS Model.Variables.Field Vars.fieldValue
    fieldValueBx = "0"; // EjsS Model.Variables.Field Vars.fieldValueBx
    fieldValueBy = "0"; // EjsS Model.Variables.Field Vars.fieldValueBy
    fieldValueBx1 = ""; // EjsS Model.Variables.Field Vars.fieldValueBx1
    fieldValueBy1 = ""; // EjsS Model.Variables.Field Vars.fieldValueBy1
    fieldValueAngle = "0"; // EjsS Model.Variables.Field Vars.fieldValueAngle
    angledeg1 = 0; // EjsS Model.Variables.Field Vars.angledeg1
    fieldValueAngledeg = "0"; // EjsS Model.Variables.Field Vars.fieldValueAngledeg
    fieldValueAngledeg1 = ""; // EjsS Model.Variables.Field Vars.fieldValueAngledeg1
    m = 0.05; // EjsS Model.Variables.Field Vars.m
    xmax = 1.5; // EjsS Model.Variables.Field Vars.xmax
    ymax = 1; // EjsS Model.Variables.Field Vars.ymax
    nx = 41; // EjsS Model.Variables.Field Vars.nx
    ny = 41; // EjsS Model.Variables.Field Vars.ny
    B = new Array(4); // EjsS Model.Variables.Field Vars.B
    xField = new Array(nx); // EjsS Model.Variables.Field Vars.xField
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nx; _i0+=1) {  // EjsS Model.Variables.Field Vars.xField
        xField[_i0] = [];
        for (_i1=0; _i1<ny; _i1+=1) {  // EjsS Model.Variables.Field Vars.xField
          xField[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.xField
        }
      }
    }());
    yField = new Array(nx); // EjsS Model.Variables.Field Vars.yField
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nx; _i0+=1) {  // EjsS Model.Variables.Field Vars.yField
        yField[_i0] = [];
        for (_i1=0; _i1<ny; _i1+=1) {  // EjsS Model.Variables.Field Vars.yField
          yField[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.yField
        }
      }
    }());
    magField = new Array(nx); // EjsS Model.Variables.Field Vars.magField
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nx; _i0+=1) {  // EjsS Model.Variables.Field Vars.magField
        magField[_i0] = [];
        for (_i1=0; _i1<ny; _i1+=1) {  // EjsS Model.Variables.Field Vars.magField
          magField[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.magField
        }
      }
    }());
    negativexField = new Array(nx); // EjsS Model.Variables.Field Vars.negativexField
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nx; _i0+=1) {  // EjsS Model.Variables.Field Vars.negativexField
        negativexField[_i0] = [];
        for (_i1=0; _i1<ny; _i1+=1) {  // EjsS Model.Variables.Field Vars.negativexField
          negativexField[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.negativexField
        }
      }
    }());
    negativeyField = new Array(nx); // EjsS Model.Variables.Field Vars.negativeyField
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nx; _i0+=1) {  // EjsS Model.Variables.Field Vars.negativeyField
        negativeyField[_i0] = [];
        for (_i1=0; _i1<ny; _i1+=1) {  // EjsS Model.Variables.Field Vars.negativeyField
          negativeyField[_i0][_i1] = 0;  // EjsS Model.Variables.Field Vars.negativeyField
        }
      }
    }());
    R = 2; // EjsS Model.Variables.Field Vars.R
  });

  _model.addToReset(function() {
    direction = 0; // EjsS Model.Variables.Display Vars.direction
    netForce = 0; // EjsS Model.Variables.Display Vars.netForce
    massMagnet = 1; // EjsS Model.Variables.Display Vars.massMagnet
    vxMagnet = 0; // EjsS Model.Variables.Display Vars.vxMagnet
    xMagnet = 0; // EjsS Model.Variables.Display Vars.xMagnet
    yMagnet = 0; // EjsS Model.Variables.Display Vars.yMagnet
    xMagnetDrag = yMagnet+1; // EjsS Model.Variables.Display Vars.xMagnetDrag
    yMagnetDrag = yMagnet; // EjsS Model.Variables.Display Vars.yMagnetDrag
    xMagnettransform = 0; // EjsS Model.Variables.Display Vars.xMagnettransform
    yMagnettransform = 0; // EjsS Model.Variables.Display Vars.yMagnettransform
    store = 41; // EjsS Model.Variables.Display Vars.store
    counter = 0; // EjsS Model.Variables.Display Vars.counter
    xCompass = 0.7; // EjsS Model.Variables.Display Vars.xCompass
    xCompassstore = new Array(store); // EjsS Model.Variables.Display Vars.xCompassstore
    (function () {
      var _i0;
      for (_i0=0; _i0<store; _i0+=1) {  // EjsS Model.Variables.Display Vars.xCompassstore
        xCompassstore[_i0] = -xmax-1;  // EjsS Model.Variables.Display Vars.xCompassstore
      }
    }());
    yCompass = 0.01501501501501501; // EjsS Model.Variables.Display Vars.yCompass
    yCompassstore = new Array(store); // EjsS Model.Variables.Display Vars.yCompassstore
    (function () {
      var _i0;
      for (_i0=0; _i0<store; _i0+=1) {  // EjsS Model.Variables.Display Vars.yCompassstore
        yCompassstore[_i0] = -ymax-1;  // EjsS Model.Variables.Display Vars.yCompassstore
      }
    }());
    xCompasstransform = 0; // EjsS Model.Variables.Display Vars.xCompasstransform
    yCompasstransform = 0; // EjsS Model.Variables.Display Vars.yCompasstransform
    xCompasstransform1 = 0; // EjsS Model.Variables.Display Vars.xCompasstransform1
    yCompasstransform1 = 0; // EjsS Model.Variables.Display Vars.yCompasstransform1
    Magnetsizex = 1.12; // EjsS Model.Variables.Display Vars.Magnetsizex
    Magnetsizey = 0.22; // EjsS Model.Variables.Display Vars.Magnetsizey
    equilibriumTheta = 0; // EjsS Model.Variables.Display Vars.equilibriumTheta
    hideField = false; // EjsS Model.Variables.Display Vars.hideField
    randomMagnetLocation = false; // EjsS Model.Variables.Display Vars.randomMagnetLocation
    vectorfieldmax = 0; // EjsS Model.Variables.Display Vars.vectorfieldmax
    vectorfieldmaxopposite = 100; // EjsS Model.Variables.Display Vars.vectorfieldmaxopposite
    magnetNS = false; // EjsS Model.Variables.Display Vars.magnetNS
  });

  _model.addToReset(function() {
    k = 1; // EjsS Model.Variables.ODE Vars.k
    damp = 2; // EjsS Model.Variables.ODE Vars.damp
    theta = 0; // EjsS Model.Variables.ODE Vars.theta
    thetastore = new Array(store); // EjsS Model.Variables.ODE Vars.thetastore
    (function () {
      var _i0;
      for (_i0=0; _i0<store; _i0+=1) {  // EjsS Model.Variables.ODE Vars.thetastore
        thetastore[_i0] = 0;  // EjsS Model.Variables.ODE Vars.thetastore
      }
    }());
    deltaThetastore = new Array(store); // EjsS Model.Variables.ODE Vars.deltaThetastore
    omega = 0; // EjsS Model.Variables.ODE Vars.omega
    omegastore = new Array(store); // EjsS Model.Variables.ODE Vars.omegastore
    (function () {
      var _i0;
      for (_i0=0; _i0<store; _i0+=1) {  // EjsS Model.Variables.ODE Vars.omegastore
        omegastore[_i0] = 0;  // EjsS Model.Variables.ODE Vars.omegastore
      }
    }());
    t = 0; // EjsS Model.Variables.ODE Vars.t
    dt = 0.1; // EjsS Model.Variables.ODE Vars.dt
    pi = Math.PI; // EjsS Model.Variables.ODE Vars.pi
  });

  _model.addToReset(function() {
    earth = false; // EjsS Model.Variables.earth.earth
    cta = 0; // EjsS Model.Variables.earth.cta
    cs = Math.cos(cta); // EjsS Model.Variables.earth.cs
    sc = Math.sin(cta); // EjsS Model.Variables.earth.sc
    cs1 = Math.cos(-cta); // EjsS Model.Variables.earth.cs1
    sc1 = Math.sin(-cta); // EjsS Model.Variables.earth.sc1
    ca = 0; // EjsS Model.Variables.earth.ca
    a2c = pi/180; // EjsS Model.Variables.earth.a2c
  });

  _model.addToReset(function() {
    magnet1 = true; // EjsS Model.Variables.2ndmagnet.magnet1
    magnet2 = false; // EjsS Model.Variables.2ndmagnet.magnet2
    dipoles2 = new Array(nd+2); // EjsS Model.Variables.2ndmagnet.dipoles2
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<nd+2; _i0+=1) {  // EjsS Model.Variables.2ndmagnet.dipoles2
        dipoles2[_i0] = [];
        for (_i1=0; _i1<2; _i1+=1) {  // EjsS Model.Variables.2ndmagnet.dipoles2
          dipoles2[_i0][_i1] = 0;  // EjsS Model.Variables.2ndmagnet.dipoles2
        }
      }
    }());
    massMagnet2 = 1; // EjsS Model.Variables.2ndmagnet.massMagnet2
    vxMagnet2 = 0; // EjsS Model.Variables.2ndmagnet.vxMagnet2
    xMagnet2 = 0.6532091097308488; // EjsS Model.Variables.2ndmagnet.xMagnet2
    yMagnet2 = -0.07660455486542439; // EjsS Model.Variables.2ndmagnet.yMagnet2
    xMagnet2Drag = xMagnet2+0.7; // EjsS Model.Variables.2ndmagnet.xMagnet2Drag
    yMagnet2Drag = yMagnet2; // EjsS Model.Variables.2ndmagnet.yMagnet2Drag
    Magnetsizex2 = 1.12; // EjsS Model.Variables.2ndmagnet.Magnetsizex2
    Magnetsizey2 = 0.22; // EjsS Model.Variables.2ndmagnet.Magnetsizey2
    ca2 = 0; // EjsS Model.Variables.2ndmagnet.ca2
    bf1 = new Array(2); // EjsS Model.Variables.2ndmagnet.bf1
    (function () {
      var _i0;
      for (_i0=0; _i0<2; _i0+=1) {  // EjsS Model.Variables.2ndmagnet.bf1
        bf1[_i0] = 0;  // EjsS Model.Variables.2ndmagnet.bf1
      }
    }());
    bf2 = new Array(2); // EjsS Model.Variables.2ndmagnet.bf2
    (function () {
      var _i0;
      for (_i0=0; _i0<2; _i0+=1) {  // EjsS Model.Variables.2ndmagnet.bf2
        bf2[_i0] = 0;  // EjsS Model.Variables.2ndmagnet.bf2
      }
    }());
    lcst = 1; // EjsS Model.Variables.2ndmagnet.lcst
    rcst = 0; // EjsS Model.Variables.2ndmagnet.rcst
    scale = 1; // EjsS Model.Variables.2ndmagnet.scale
    bxField = 0.0; // EjsS Model.Variables.2ndmagnet.bxField
    byField = 0.0; // EjsS Model.Variables.2ndmagnet.byField
  });

  _model.addToReset(function() {
    textt = "select the different position of RED and Blue dots and click play"; // EjsS Model.Variables.layout.textt
    Width = (_isEPub)?"400":"100%"; // EjsS Model.Variables.layout.Width
    Height = (_isEPub)?"500":"100%"; // EjsS Model.Variables.layout.Height
    Width1 = "100%"; // EjsS Model.Variables.layout.Width1
    Width2 = "0%"; // EjsS Model.Variables.layout.Width2
    Width3 = "0%"; // EjsS Model.Variables.layout.Width3
    Width4 = "0%"; // EjsS Model.Variables.layout.Width4
    Height1 = "15"; // EjsS Model.Variables.layout.Height1
    graph = true; // EjsS Model.Variables.layout.graph
    world = true; // EjsS Model.Variables.layout.world
    disabledworld = false; // EjsS Model.Variables.layout.disabledworld
    disabled = false; // EjsS Model.Variables.layout.disabled
    isAndroid = checkAndroid(); // EjsS Model.Variables.layout.isAndroid
    iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // EjsS Model.Variables.layout.iOS
    iPad = /iPad/.test(navigator.userAgent) && !window.MSStream; // EjsS Model.Variables.layout.iPad
    iPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // EjsS Model.Variables.layout.iPhone
    Android = /Android|android/i.test(navigator.userAgent); // EjsS Model.Variables.layout.Android
  });

  _model.addToReset(function() {
    inside = ""; // EjsS Model.Variables.Fieldlines.inside
    selected = new Array(1); // EjsS Model.Variables.Fieldlines.selected
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Fieldlines.selected
        selected[_i0] = "magnet 1 on";  // EjsS Model.Variables.Fieldlines.selected
      }
    }());
    selected2 = new Array(1); // EjsS Model.Variables.Fieldlines.selected2
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Fieldlines.selected2
        selected2[_i0] = "magnet 2 on";  // EjsS Model.Variables.Fieldlines.selected2
      }
    }());
    selected3 = new Array(1); // EjsS Model.Variables.Fieldlines.selected3
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Fieldlines.selected3
        selected3[_i0] = "one magnet point right";  // EjsS Model.Variables.Fieldlines.selected3
      }
    }());
    vectorIndex = 0; // EjsS Model.Variables.Fieldlines.vectorIndex
    FieldFlag = true; // EjsS Model.Variables.Fieldlines.FieldFlag
    nVectors = 15; // EjsS Model.Variables.Fieldlines.nVectors
    nVectorsMax = 15; // EjsS Model.Variables.Fieldlines.nVectorsMax
    nVectorsSq = nVectors*nVectors; // EjsS Model.Variables.Fieldlines.nVectorsSq
    Vectorx = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.Vectorx
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.Vectorx
        Vectorx[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.Vectorx
      }
    }());
    Vectory = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.Vectory
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.Vectory
        Vectory[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.Vectory
      }
    }());
    Fieldx = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.Fieldx
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.Fieldx
        Fieldx[_i0] = 0.000001;  // EjsS Model.Variables.Fieldlines.Fieldx
      }
    }());
    Fieldy = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.Fieldy
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.Fieldy
        Fieldy[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.Fieldy
      }
    }());
    BF1 = new Array(2); // EjsS Model.Variables.Fieldlines.BF1
    (function () {
      var _i0;
      for (_i0=0; _i0<2; _i0+=1) {  // EjsS Model.Variables.Fieldlines.BF1
        BF1[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.BF1
      }
    }());
    BF2 = new Array(2); // EjsS Model.Variables.Fieldlines.BF2
    (function () {
      var _i0;
      for (_i0=0; _i0<2; _i0+=1) {  // EjsS Model.Variables.Fieldlines.BF2
        BF2[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.BF2
      }
    }());
    posx = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.posx
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.posx
        posx[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.posx
      }
    }());
    posy = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.posy
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.posy
        posy[_i0] = 0.0;  // EjsS Model.Variables.Fieldlines.posy
      }
    }());
    textSetx = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.textSetx
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.textSetx
        textSetx[_i0] = "";  // EjsS Model.Variables.Fieldlines.textSetx
      }
    }());
    textSety = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.textSety
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.textSety
        textSety[_i0] = "";  // EjsS Model.Variables.Fieldlines.textSety
      }
    }());
    textSetthetaField = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.textSetthetaField
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.textSetthetaField
        textSetthetaField[_i0] = "";  // EjsS Model.Variables.Fieldlines.textSetthetaField
      }
    }());
    thetaField = new Array(nVectorsSq); // EjsS Model.Variables.Fieldlines.thetaField
    (function () {
      var _i0;
      for (_i0=0; _i0<nVectorsSq; _i0+=1) {  // EjsS Model.Variables.Fieldlines.thetaField
        thetaField[_i0] = 0;  // EjsS Model.Variables.Fieldlines.thetaField
      }
    }());
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(true);
    _model.setPauseOnPageExit(true);
    _model.setFPS(100);
    _model.setStepsPerDisplay(1);
  });

  //20151110 TT: note that the x and y are commented at this moment because   // > CustomCode.ComputeField2magnets:1
  //             there is not vectorField2d equivalent object in EJSS  // > CustomCode.ComputeField2magnets:2
  //             to be uncommented once such object is made available in future versions of EJSS.  // > CustomCode.ComputeField2magnets:3
  function computeField () {  // > CustomCode.ComputeField2magnets:4
    var x, y;  // > CustomCode.ComputeField2magnets:5
    for (var i=0; i<nx; i++) {  // > CustomCode.ComputeField2magnets:6
      //TT   var x=_view.vectorField2D.indexToX(i);  // > CustomCode.ComputeField2magnets:7
      x=1;  // > CustomCode.ComputeField2magnets:8
      for (var j=0; j<ny; j++) {  // > CustomCode.ComputeField2magnets:9
        //TT       var y=_view.vectorField2D.indexToY(j);  // > CustomCode.ComputeField2magnets:10
        y=1;  // > CustomCode.ComputeField2magnets:11
        bf1=getBcomputeField((x-xMagnet)*cs+(y-yMagnet)*sc,-(x-xMagnet)*sc+(y-yMagnet)*cs);//FKH  // > CustomCode.ComputeField2magnets:12
        bf2=getBcomputeField((x-xMagnet2)*cs2+(y-yMagnet2)*sc2,-(x-xMagnet2)*sc2+(y-yMagnet2)*cs2);//FKH  // > CustomCode.ComputeField2magnets:13
          // > CustomCode.ComputeField2magnets:14
        xField[i][j] = lcst*(bf1[0]*cs-bf1[1]*sc)+rcst*(bf2[0]*cs2-bf2[1]*sc2);//FKH  // > CustomCode.ComputeField2magnets:15
        yField[i][j] = lcst*(bf1[0]*sc+bf1[1]*cs)+rcst*(bf2[0]*sc2+bf2[1]*cs2);//FKH  // > CustomCode.ComputeField2magnets:16
        magField[i][j]= Math.sqrt(xField[i][j]*xField[i][j]+yField[i][j]*yField[i][j]);  // > CustomCode.ComputeField2magnets:17
      }  // > CustomCode.ComputeField2magnets:18
    }  // > CustomCode.ComputeField2magnets:19
  }  // > CustomCode.ComputeField2magnets:20

  // computes magnetic field components and magnitude from dipoles  // > CustomCode.GetBComputeField:1
  // rename this getB to getBcomputeField because need to separate the calculation of Field from Compass  // > CustomCode.GetBComputeField:2
  function getBcomputeField(xm, ym) {  // > CustomCode.GetBComputeField:3
    var b=[0,0]; //In JS you don't need to initialize the length of the array. It grows dynamically.    // > CustomCode.GetBComputeField:4
    var dx,dy,r2,r,r3,cos,sin;  // > CustomCode.GetBComputeField:5
      // > CustomCode.GetBComputeField:6
    for(var i=0; i<=nd; i++) { // lookang change i<nd to i<=nd to account for the 11 dipoles each horizontal row  // > CustomCode.GetBComputeField:7
      dx=xm-dipoles[i][0];////(xMagnet*cs+yMagnet*sc);//FKH  // > CustomCode.GetBComputeField:8
      dy=ym-dipoles[i][1];//(-xMagnet*sc+yMagnet*cs);//FKH  // > CustomCode.GetBComputeField:9
      r2=dx*dx+dy*dy;  // > CustomCode.GetBComputeField:10
      r=Math.sqrt(r2);  // > CustomCode.GetBComputeField:11
      r3=r2*r;  // > CustomCode.GetBComputeField:12
      cos=dx/r;  // > CustomCode.GetBComputeField:13
      sin=dy/r;  // > CustomCode.GetBComputeField:14
      // taken from http://en.wikipedia.org/wiki/Magnetic_moment  // > CustomCode.GetBComputeField:15
      b[0]+=m*(3*cos*cos-1)/r3;   //x component  // > CustomCode.GetBComputeField:16
      b[1]+=m*3*sin*cos/r3;   //y component  // > CustomCode.GetBComputeField:17
      if(r2===0) {  // > CustomCode.GetBComputeField:18
        b[0]=b[1]=0;  // > CustomCode.GetBComputeField:19
      }  // > CustomCode.GetBComputeField:20
    }  // > CustomCode.GetBComputeField:21
    return b;  // > CustomCode.GetBComputeField:22
  }  // > CustomCode.GetBComputeField:23

  // computes magnetic field components and magnitude from dipoles  // > CustomCode.GetBvalueCompass:1
  // rename this getB to getBcomputeField because need to separate the calculation of Field from Compass  // > CustomCode.GetBvalueCompass:2
  function getB(xm, ym) {  // > CustomCode.GetBvalueCompass:3
    var b=[0,0]; //In JS you don't need to initialize the length of the array. It grows dynamically.  // > CustomCode.GetBvalueCompass:4
    var dx,dy,r2,r,r3,cos,sin;  // > CustomCode.GetBvalueCompass:5
    for(var i=0; i<=nd; i++) { // lookang change i<nd to i<=nd to account for the 11 dipoles each horizontal row  // > CustomCode.GetBvalueCompass:6
      dx=xm-dipoles[i][0];//-xm;////(xMagnet*cs+yMagnet*sc);//FKH  // > CustomCode.GetBvalueCompass:7
      dy=ym-dipoles[i][1];//-ym;//(-xMagnet*sc+yMagnet*cs);//FKH  // > CustomCode.GetBvalueCompass:8
     // > CustomCode.GetBvalueCompass:9
      r2=dx*dx+dy*dy;  // > CustomCode.GetBvalueCompass:10
      r=Math.sqrt(r2);  // > CustomCode.GetBvalueCompass:11
      r3=r2*r;  // > CustomCode.GetBvalueCompass:12
      cos=dx/r;  // > CustomCode.GetBvalueCompass:13
      sin=dy/r;  // > CustomCode.GetBvalueCompass:14
      b[0]+=m*(3*cos*cos-1)/r3*vectorfieldmaxopposite/100;   //x component  // > CustomCode.GetBvalueCompass:15
      b[1]+=m*3*sin*cos/r3*vectorfieldmaxopposite/100; //y component  // > CustomCode.GetBvalueCompass:16
      if(r2===0) {  // > CustomCode.GetBvalueCompass:17
        b[0]=b[1]=0;  // > CustomCode.GetBvalueCompass:18
      }  // > CustomCode.GetBvalueCompass:19
    }  // > CustomCode.GetBvalueCompass:20
    return b;  // > CustomCode.GetBvalueCompass:21
  }  // > CustomCode.GetBvalueCompass:22

  function setLocation () {  // > CustomCode.Random Location:1
    //move magnet to random location  // > CustomCode.Random Location:2
    if(randomMagnetLocation===true){      // > CustomCode.Random Location:3
      xMagnet = (-xmax + 2*xmax*Math.random());  // > CustomCode.Random Location:4
      yMagnet = (-ymax + 2*ymax*Math.random());  // > CustomCode.Random Location:5
      randomMagnetLocation=false;  // > CustomCode.Random Location:6
    }  // > CustomCode.Random Location:7
   else if (randomMagnetLocation2===true){      // > CustomCode.Random Location:8
      xMagnet2 = (-xmax + 2*xmax*Math.random());  // > CustomCode.Random Location:9
      yMagnet2 = (-ymax + 2*ymax*Math.random());  // > CustomCode.Random Location:10
      randomMagnetLocation2=false;  // > CustomCode.Random Location:11
    }  // > CustomCode.Random Location:12
  computeField();  // > CustomCode.Random Location:13
  }  // > CustomCode.Random Location:14

  //https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode  // > CustomCode.fullscreen:1
  // does not work for iOS   // > CustomCode.fullscreen:2
  /*jslint browser:true */  // > CustomCode.fullscreen:3
  function toggleFullScreen() {  // > CustomCode.fullscreen:4
    if (!document.fullscreenElement &&    // alternative standard method  // > CustomCode.fullscreen:5
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods  // > CustomCode.fullscreen:6
      if (document.documentElement.requestFullscreen) {  // > CustomCode.fullscreen:7
        document.documentElement.requestFullscreen();  // > CustomCode.fullscreen:8
      } else if (document.documentElement.msRequestFullscreen) {  // > CustomCode.fullscreen:9
        document.documentElement.msRequestFullscreen();  // > CustomCode.fullscreen:10
      } else if (document.documentElement.mozRequestFullScreen) {  // > CustomCode.fullscreen:11
        document.documentElement.mozRequestFullScreen();  // > CustomCode.fullscreen:12
      } else if (document.documentElement.webkitRequestFullscreen) {  // > CustomCode.fullscreen:13
        document.documentElement.webkitRequestFullscreen();  // > CustomCode.fullscreen:14
      }  // > CustomCode.fullscreen:15
    } else {  // > CustomCode.fullscreen:16
      if (document.exitFullscreen) {  // > CustomCode.fullscreen:17
        document.exitFullscreen();  // > CustomCode.fullscreen:18
      } else if (document.msExitFullscreen) {  // > CustomCode.fullscreen:19
        document.msExitFullscreen();  // > CustomCode.fullscreen:20
      } else if (document.mozCancelFullScreen) {  // > CustomCode.fullscreen:21
        document.mozCancelFullScreen();  // > CustomCode.fullscreen:22
      } else if (document.webkitExitFullscreen) {  // > CustomCode.fullscreen:23
        document.webkitExitFullscreen();  // > CustomCode.fullscreen:24
      }  // > CustomCode.fullscreen:25
    }  // > CustomCode.fullscreen:26
  }  // > CustomCode.fullscreen:27

  //code reference: http://davidwalsh.name/detect-android  // > CustomCode.checkAndroid:1
  function checkAndroid() {  // > CustomCode.checkAndroid:2
    var ua = navigator.userAgent.toLowerCase();  // > CustomCode.checkAndroid:3
    return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");  // > CustomCode.checkAndroid:4
  }  // > CustomCode.checkAndroid:5

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    // spacing done by lookang to achieve perfectly symmetry of B  // > Initialization.Init Page:1
    // need nd =22 because from x =-0.5 to 0.5 put 11 each row  // > Initialization.Init Page:2
    // 2 rows so nd = 11*2 =22  // > Initialization.Init Page:3
    var dx=1.0/(nd-2);    //set up dipoles under bar magnet  // > Initialization.Init Page:4
    for(var i=0; i<=(nd-1); i++) {  // > Initialization.Init Page:5
      dipoles[i][0]=-0.5+i*dx;   // x position of first line of dipoles bottom  // > Initialization.Init Page:6
      dipoles[i][1]=-0.04;         // y position move down by -0.04 of first line of dipoles bottom  // > Initialization.Init Page:7
      dipoles[i+1][0]=-0.5+i*dx; // x position of 2nd line of dipoles top  // > Initialization.Init Page:8
      dipoles[i+1][1]=0.04;       // y position move up by +0.04 of top line of dipoles bottom  // > Initialization.Init Page:9
      i++;  // > Initialization.Init Page:10
    }  // > Initialization.Init Page:11
    //magnet1=true;  // > Initialization.Init Page:12
    //magnet2=true;  // > Initialization.Init Page:13
    computeField();  // > Initialization.Init Page:14
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page 2"]) return;
    for (var i = 0; i < nVectors; i++)  // > Initialization.Init Page 2:1
    {  // > Initialization.Init Page 2:2
      for (var j = 0; j < nVectors; j++)  // > Initialization.Init Page 2:3
      {  // > Initialization.Init Page 2:4
        vectorIndex = i+nVectors*j;  // > Initialization.Init Page 2:5
          // > Initialization.Init Page 2:6
        Vectorx[vectorIndex] = -xmax*scale+i/5;  // > Initialization.Init Page 2:7
        Vectory[vectorIndex] = -ymax*scale+j/5;  // > Initialization.Init Page 2:8
       posx[vectorIndex]=Vectorx[vectorIndex]-0.5*Fieldx[vectorIndex];  // > Initialization.Init Page 2:9
       posy[vectorIndex]=Vectory[vectorIndex]-0.5*Fieldy[vectorIndex];  // > Initialization.Init Page 2:10
      }  // > Initialization.Init Page 2:11
    }  // > Initialization.Init Page 2:12
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["laytwo magnets"]) return;
    xMagnet = -1;  // > Initialization.laytwo magnets:1
    yMagnet = 0;  // > Initialization.laytwo magnets:2
    xMagnet2 = 1-0.2;  // > Initialization.laytwo magnets:3
    yMagnet2 = 0;  // > Initialization.laytwo magnets:4
    selected[0]="θ₁ =0°";  // > Initialization.laytwo magnets:5
    selected2[0]="θ₂ =0°";  // > Initialization.laytwo magnets:6
    ca = 0;  // > Initialization.laytwo magnets:7
      cta=ca*a2c;  // > Initialization.laytwo magnets:8
    cs=Math.cos(cta);  // > Initialization.laytwo magnets:9
    sc=Math.sin(cta);  // > Initialization.laytwo magnets:10
    //  // > Initialization.laytwo magnets:11
    ca2 = -0;  // > Initialization.laytwo magnets:12
      cta=ca2*a2c;  // > Initialization.laytwo magnets:13
    cs=Math.cos(cta);  // > Initialization.laytwo magnets:14
    sc=Math.sin(cta);  // > Initialization.laytwo magnets:15
    magnet1=true;  // > Initialization.laytwo magnets:16
     if(magnet1)lcst=1;  // > Initialization.laytwo magnets:17
    else lcst=0;  // > Initialization.laytwo magnets:18
    //computeField ();  // > Initialization.laytwo magnets:19
    magnet2=true;  // > Initialization.laytwo magnets:20
     if(magnet2)rcst=1;  // > Initialization.laytwo magnets:21
    else rcst=0;  // > Initialization.laytwo magnets:22
    computeField ();  // > Initialization.laytwo magnets:23
    xMagnetDrag = xMagnet+0.7; //force rotate unicode to follow magnet  // > Initialization.laytwo magnets:24
    yMagnetDrag = yMagnet;  // > Initialization.laytwo magnets:25
    xMagnet2Drag = xMagnet2+0.7; //force rotate unicode to follow magnet  // > Initialization.laytwo magnets:26
    yMagnet2Drag = yMagnet2;  // > Initialization.laytwo magnets:27
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
    if (!__pagesEnabled["FixRel Page 2"]) return;
    cta = ca*a2c; // use to allow slider ca to control cta   // > FixedRelations.FixRel Page 2:1
    cs=Math.cos(cta);//FKH  // > FixedRelations.FixRel Page 2:2
    sc=Math.sin(cta);//FKH  // > FixedRelations.FixRel Page 2:3
    cs1=Math.cos(-cta); // use to rotate from magnet axes to universal axes  // > FixedRelations.FixRel Page 2:4
    sc1=Math.sin(-cta); // use to rotate from magnet axes to universal axes  // > FixedRelations.FixRel Page 2:5
    // required for compass in magnet to work to 255   // > FixedRelations.FixRel Page 2:6
    xMagnettransform = xMagnet*cs+yMagnet*sc; // transform to magnet axes  // > FixedRelations.FixRel Page 2:7
    yMagnettransform = -xMagnet*sc+yMagnet*cs; // transform to magnet axes  // > FixedRelations.FixRel Page 2:8
    xCompasstransform = xCompass*cs+yCompass*sc; // transform to magnet axes  // > FixedRelations.FixRel Page 2:9
    yCompasstransform = -xCompass*sc+yCompass*cs; // transform to magnet axes  // > FixedRelations.FixRel Page 2:10
    xCompasstransform1 = xCompasstransform*cs1+yCompasstransform*sc1; // transform to universal axes  // > FixedRelations.FixRel Page 2:11
    yCompasstransform1 = -xCompasstransform*sc1+yCompasstransform*cs1; // transform to universal axes  // > FixedRelations.FixRel Page 2:12
    // for 2nd magnet  // > FixedRelations.FixRel Page 2:13
    cta2 = ca2*a2c; // use to allow slider ca to control cta   // > FixedRelations.FixRel Page 2:14
    cs2=Math.cos(cta2);//FKH  // > FixedRelations.FixRel Page 2:15
    sc2=Math.sin(cta2);//FKH  // > FixedRelations.FixRel Page 2:16
    cs3=Math.cos(-cta2); // use to rotate from magnet axes to universal axes  // > FixedRelations.FixRel Page 2:17
    sc3=Math.sin(-cta2); // use to rotate from magnet axes to universal axes  // > FixedRelations.FixRel Page 2:18
    xMagnettransform2 = xMagnet2*cs2+yMagnet2*sc2; // transform to magnet axes  // > FixedRelations.FixRel Page 2:19
    yMagnettransform2 = -xMagnet2*sc2+yMagnet2*cs2; // transform to magnet axes  // > FixedRelations.FixRel Page 2:20
    xCompasstransform2 = xCompass*cs2+yCompass*sc2; // transform to magnet axes  // > FixedRelations.FixRel Page 2:21
    yCompasstransform2 = -xCompass*sc2+yCompass*cs2; // transform to magnet axes  // > FixedRelations.FixRel Page 2:22
    xCompasstransform3 = xCompasstransform2*cs3+yCompasstransform2*sc3; // transform to universal axes  // > FixedRelations.FixRel Page 2:23
    yCompasstransform3 = -xCompasstransform2*sc3+yCompasstransform2*cs3;   // > FixedRelations.FixRel Page 2:24
    bf1=getB((xCompass-xMagnet)*cs+(yCompass-yMagnet)*sc,-(xCompass-xMagnet)*sc+(yCompass-yMagnet)*cs);//FKH  // > FixedRelations.FixRel Page 2:25
    bf2=getB((xCompass-xMagnet2)*cs2+(yCompass-yMagnet2)*sc2,-(xCompass-xMagnet2)*sc2+(yCompass-yMagnet2)*cs2);//FKH  // > FixedRelations.FixRel Page 2:26
    //https://www.kirupa.com/forum/showthread.php?336745-Mathematically-check-if-a-point-is-inside-a-rotated-rectangle  // > FixedRelations.FixRel Page 2:27
       // > FixedRelations.FixRel Page 2:28
    var dx =  xCompass-xMagnet;  // > FixedRelations.FixRel Page 2:29
    var dy =  yCompass-yMagnet;  // > FixedRelations.FixRel Page 2:30
    var currA = Math.atan2(dy,dx);  // > FixedRelations.FixRel Page 2:31
    var newA = currA - cta;  // > FixedRelations.FixRel Page 2:32
    var h1 = Math.sqrt(dx*dx+dy*dy);  // > FixedRelations.FixRel Page 2:33
    var x2 =Math.cos(newA) * h1;  // > FixedRelations.FixRel Page 2:34
    var y2 = Math.sin(newA) * h1;  // > FixedRelations.FixRel Page 2:35
    var dx2 =  xCompass-xMagnet2;  // > FixedRelations.FixRel Page 2:36
    var dy2 =  yCompass-yMagnet2;  // > FixedRelations.FixRel Page 2:37
    var currA2 = Math.atan2(dy2,dx2);  // > FixedRelations.FixRel Page 2:38
    var newA2 = currA2 - cta2;  // > FixedRelations.FixRel Page 2:39
    var h2 = Math.sqrt(dx2*dx2+dy2*dy2);  // > FixedRelations.FixRel Page 2:40
    var x22 =Math.cos(newA2) * h2;  // > FixedRelations.FixRel Page 2:41
    var y22 = Math.sin(newA2) * h2;  // > FixedRelations.FixRel Page 2:42
      //inside magnet1  // > FixedRelations.FixRel Page 2:43
      if (magnet1===true&&(x2 > - 0.5 * Magnetsizex && x2 < 0.5 * Magnetsizex && y2 > - 0.5 * Magnetsizey && y2 < 0.5 * Magnetsizey))  // > FixedRelations.FixRel Page 2:44
    // if (xCompass<(xMagnet+Magnetsizex/2) && xCompass>(xMagnet-(Magnetsizex/2)) && yCompass<(yMagnet+Magnetsizey/2) && yCompass>(yMagnet-Magnetsizey/2))  // > FixedRelations.FixRel Page 2:45
    {  // > FixedRelations.FixRel Page 2:46
    theta= cta;  // > FixedRelations.FixRel Page 2:47
    fieldValue="B= 225 T";  // > FixedRelations.FixRel Page 2:48
    fieldValueBx1="Bx= " +_view._format(225*Math.cos(theta),"0.")+ " T";    // > FixedRelations.FixRel Page 2:49
    fieldValueBy1="By= "+_view._format(225*Math.sin(theta),"0.")+ " T";  // > FixedRelations.FixRel Page 2:50
    fieldValueAngledeg1 = theta*180/pi;  // > FixedRelations.FixRel Page 2:51
    }  // > FixedRelations.FixRel Page 2:52
      //inside magnet2  // > FixedRelations.FixRel Page 2:53
      else if (magnet2===true&&(x22 > - 0.5 * Magnetsizex2 && x22 < 0.5 * Magnetsizex2 && y22 > - 0.5 * Magnetsizey2 && y22 < 0.5 * Magnetsizey2))  // > FixedRelations.FixRel Page 2:54
    // if (xCompass<(xMagnet+Magnetsizex/2) && xCompass>(xMagnet-(Magnetsizex/2)) && yCompass<(yMagnet+Magnetsizey/2) && yCompass>(yMagnet-Magnetsizey/2))  // > FixedRelations.FixRel Page 2:55
    {  // > FixedRelations.FixRel Page 2:56
    theta= cta2;  // > FixedRelations.FixRel Page 2:57
    fieldValue="B= 225 T";  // > FixedRelations.FixRel Page 2:58
    fieldValueBx1="Bx= " +_view._format(225*Math.cos(theta),"0.")+ " T";    // > FixedRelations.FixRel Page 2:59
    fieldValueBy1="By= "+_view._format(225*Math.sin(theta),"0.")+ " T";  // > FixedRelations.FixRel Page 2:60
    fieldValueAngledeg1 = theta*180/pi;  // > FixedRelations.FixRel Page 2:61
    }  // > FixedRelations.FixRel Page 2:62
       // > FixedRelations.FixRel Page 2:63
    else{ // catch all  // > FixedRelations.FixRel Page 2:64
    bxField = lcst*(bf1[0]*cs-bf1[1]*sc)+rcst*(bf2[0]*cs2-bf2[1]*sc2);//FKH  // > FixedRelations.FixRel Page 2:65
      byField = lcst*(bf1[0]*sc+bf1[1]*cs)+rcst*(bf2[0]*sc2+bf2[1]*cs2);//FKH  // > FixedRelations.FixRel Page 2:66
    equilibriumTheta=Math.atan2(byField,bxField);//b[3];  // > FixedRelations.FixRel Page 2:67
    fieldValue="B="+_view._format(Math.sqrt(bxField*bxField+byField*byField),"0.0")+ " T";  // > FixedRelations.FixRel Page 2:68
    // display as x and y  // > FixedRelations.FixRel Page 2:69
    fieldValueBx1="Bx= " +_view._format(bxField,"0.0")+ " T";    // > FixedRelations.FixRel Page 2:70
    fieldValueBy1="By= "+_view._format(byField,"0.0")+ " T";  // > FixedRelations.FixRel Page 2:71
    // new angle after rotate cta of magnet with universal x and y  // > FixedRelations.FixRel Page 2:72
    angledeg1 = Math.atan2(byField,bxField)*180/Math.PI;  // > FixedRelations.FixRel Page 2:73
    fieldValueAngledeg1 = "θ = "+ _view._format(angledeg1,"0.0") + "°";  // > FixedRelations.FixRel Page 2:74
    if(omega>0)omega=Math.min(omega,Math.PI);  // keeps compass from spinning wildly  // > FixedRelations.FixRel Page 2:75
    else omega=Math.max(omega,-Math.PI);  // > FixedRelations.FixRel Page 2:76
    // to make the strength slider 0 min and 100 max by weelk  // > FixedRelations.FixRel Page 2:77
    vectorfieldmax=100-vectorfieldmaxopposite;  // > FixedRelations.FixRel Page 2:78
    //  // > FixedRelations.FixRel Page 2:79
    //cs= Math.cos(cta);  // > FixedRelations.FixRel Page 2:80
    //sc=Math.sin(cta);  // > FixedRelations.FixRel Page 2:81
    //cta = ca*a2c;  // > FixedRelations.FixRel Page 2:82
    // prelim code moved to fix  // > FixedRelations.FixRel Page 2:83
    deltaTheta=theta-equilibriumTheta;  // > FixedRelations.FixRel Page 2:84
    }  // > FixedRelations.FixRel Page 2:85
  });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["fieldlines"]) return;
    // Field for the vectors  // > FixedRelations.fieldlines:1
    for (i = 0; i < nVectors; i++)  // > FixedRelations.fieldlines:2
    {  // > FixedRelations.fieldlines:3
      for (j = 0; j < nVectors; j++)  // > FixedRelations.fieldlines:4
      {  // > FixedRelations.fieldlines:5
        vectorIndex = i+nVectors*j;  // > FixedRelations.fieldlines:6
    //    bf1=getB((xCompass-xMagnet)*cs+(yCompass-yMagnet)*sc,-(xCompass-xMagnet)*sc+(yCompass-yMagnet)*cs);//FKH  // > FixedRelations.fieldlines:7
    //bf2=getB((xCompass-xMagnet2)*cs2+(yCompass-yMagnet2)*sc2,-(xCompass-xMagnet2)*sc2+(yCompass-yMagnet2)*cs2);//FKH  // > FixedRelations.fieldlines:8
        BF1 = getBcomputeField((posx[vectorIndex]-xMagnet)*cs+(posy[vectorIndex]-yMagnet)*sc,-(posx[vectorIndex]-xMagnet)*sc+(posy[vectorIndex]-yMagnet)*cs);//FKH;  // > FixedRelations.fieldlines:9
        BF2 =getBcomputeField((posx[vectorIndex]-xMagnet2)*cs2+(posy[vectorIndex]-yMagnet2)*sc2,-(posx[vectorIndex]-xMagnet2)*sc2+(posy[vectorIndex]-yMagnet2)*cs2);//FKH  // > FixedRelations.fieldlines:10
       Fieldx[vectorIndex] = lcst*(BF1[0]*cs-BF1[1]*sc)+rcst*(BF2[0]*cs2-BF2[1]*sc2);//FKH  // > FixedRelations.fieldlines:11
       Fieldy[vectorIndex] = lcst*(BF1[0]*sc+BF1[1]*cs)+rcst*(BF2[0]*sc2+BF2[1]*cs2);//FKH  // > FixedRelations.fieldlines:12
        thetaField[vectorIndex]= Math.atan2(Fieldy[vectorIndex],Fieldx[vectorIndex]+0.00000001); //need a small amount to force answers to be correct  // > FixedRelations.fieldlines:13
     //https://www.kirupa.com/forum/showthread.php?336745-Mathematically-check-if-a-point-is-inside-a-rotated-rectangle  // > FixedRelations.fieldlines:14
       // > FixedRelations.fieldlines:15
    var dx =  posx[vectorIndex]-xMagnet;  // > FixedRelations.fieldlines:16
    var dy =  posy[vectorIndex]-yMagnet;  // > FixedRelations.fieldlines:17
    var currA = Math.atan2(dy,dx);  // > FixedRelations.fieldlines:18
    var newA = currA - cta;  // > FixedRelations.fieldlines:19
    var h1 = Math.sqrt(dx*dx+dy*dy);  // > FixedRelations.fieldlines:20
    var x2 =Math.cos(newA) * h1;  // > FixedRelations.fieldlines:21
    var y2 = Math.sin(newA) * h1;  // > FixedRelations.fieldlines:22
      //inside magnet1  // > FixedRelations.fieldlines:23
      if (magnet1===true&&(x2 > - 0.5 * Magnetsizex && x2 < 0.5 * Magnetsizex && y2 > - 0.5 * Magnetsizey && y2 < 0.5 * Magnetsizey))  // > FixedRelations.fieldlines:24
    // if (posx[vectorIndex]<(xMagnet+Magnetsizex/2) && posx[vectorIndex]>(xMagnet-(Magnetsizex/2)) && posy[vectorIndex]<(yMagnet+Magnetsizey/2) && posy[vectorIndex]>(yMagnet-Magnetsizey/2))  // > FixedRelations.fieldlines:25
    {  // > FixedRelations.fieldlines:26
    thetaField[vectorIndex]= cta;  // > FixedRelations.fieldlines:27
    }  // > FixedRelations.fieldlines:28
    var dx2 =  posx[vectorIndex]-xMagnet2;  // > FixedRelations.fieldlines:29
    var dy2 =  posy[vectorIndex]-yMagnet2;  // > FixedRelations.fieldlines:30
    var currA2 = Math.atan2(dy2,dx2);  // > FixedRelations.fieldlines:31
    var newA2 = currA2 - cta2;  // > FixedRelations.fieldlines:32
    var h2 = Math.sqrt(dx2*dx2+dy2*dy2);  // > FixedRelations.fieldlines:33
    var x22 =Math.cos(newA2) * h2;  // > FixedRelations.fieldlines:34
    var y22 = Math.sin(newA2) * h2;  // > FixedRelations.fieldlines:35
      //inside magnet2  // > FixedRelations.fieldlines:36
      if (magnet2===true&&(x22 > - 0.5 * Magnetsizex2 && x22 < 0.5 * Magnetsizex2 && y22 > - 0.5 * Magnetsizey2 && y22 < 0.5 * Magnetsizey2))  // > FixedRelations.fieldlines:37
    // if (posx[vectorIndex]<(xMagnet+Magnetsizex/2) && posx[vectorIndex]>(xMagnet-(Magnetsizex/2)) && posy[vectorIndex]<(yMagnet+Magnetsizey/2) && posy[vectorIndex]>(yMagnet-Magnetsizey/2))  // > FixedRelations.fieldlines:38
    {  // > FixedRelations.fieldlines:39
    thetaField[vectorIndex]= cta2;  // > FixedRelations.fieldlines:40
    }  // > FixedRelations.fieldlines:41
     textSetx[vectorIndex] = "Fieldx"+[vectorIndex]+"="+_view._format(Fieldx[vectorIndex],"0.00");  // > FixedRelations.fieldlines:42
      textSety[vectorIndex] = "Fieldy"+[vectorIndex]+"="+_view._format(Fieldy[vectorIndex],"0.00");  // > FixedRelations.fieldlines:43
     // inside[vectorIndex] ="0";  // > FixedRelations.fieldlines:44
      textSetthetaField[vectorIndex] = [vectorIndex]+"="+_view._format(thetaField[vectorIndex],"0.00");  // > FixedRelations.fieldlines:45
        // > FixedRelations.fieldlines:46
      }  // > FixedRelations.fieldlines:47
    }  // > FixedRelations.fieldlines:48
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

  _getODE = function (_odeName) {
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


    __odeSelf._getOdeVars = function (){ return["theta","omega","xMagnet","xMagnet2","vxMagnet","vxMagnet2","t"]};

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
      for(k in userEvents1){__eventSolver.addEvent(userEvents1[k]);}
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
        if (__state[__cIn]!=xMagnet) __mustReinitialize = true;
        __state[__cIn++] = xMagnet;
        if (__state[__cIn]!=xMagnet2) __mustReinitialize = true;
        __state[__cIn++] = xMagnet2;
        if (__state[__cIn]!=vxMagnet) __mustReinitialize = true;
        __state[__cIn++] = vxMagnet;
        if (__state[__cIn]!=vxMagnet2) __mustReinitialize = true;
        __state[__cIn++] = vxMagnet2;
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
        xMagnet = __state[__cOut++];
        xMagnet2 = __state[__cOut++];
        vxMagnet = __state[__cOut++];
        vxMagnet2 = __state[__cOut++];
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
        var xMagnet = _aState[__cOut++];
        var xMagnet2 = _aState[__cOut++];
        var vxMagnet = _aState[__cOut++];
        var vxMagnet2 = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        var deltaTheta=theta-equilibriumTheta;  // > Preliminary code for ODE.Evol Page:1
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = omega; // Rate for ODE: Evol Page:theta
        _aRate[__cRate++] = -k*Math.sqrt(bxField*bxField+byField*byField)*(Math.sin(deltaTheta))-damp*omega; // Rate for ODE: Evol Page:omega
        _aRate[__cRate++] = vxMagnet; // Rate for ODE: Evol Page:xMagnet
        _aRate[__cRate++] = vxMagnet2; // Rate for ODE: Evol Page:xMagnet2
        _aRate[__cRate++] = netForce/(massMagnet); // Rate for ODE: Evol Page:vxMagnet
        _aRate[__cRate++] = netForce/(massMagnet2); // Rate for ODE: Evol Page:vxMagnet2
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    __odeSelf._addEvent = function(userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent){
    var User_Event = function (userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent) {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return eventType; };

      _eventSelf.getRootFindingMethod = function() { return eventMethod; };

      _eventSelf.getMaxIterations = function() { return maxIter; };

      _eventSelf.getTolerance = function() { return eventTolerance; };

      _eventSelf.evaluate = function(_aState) {
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var theta = _aState[__cOut++];
        var omega = _aState[__cOut++];
        var xMagnet = _aState[__cOut++];
        var xMagnet2 = _aState[__cOut++];
        var vxMagnet = _aState[__cOut++];
        var vxMagnet2 = _aState[__cOut++];
        var t = _aState[__cOut++];
      return eval(userCondition);
      };

      _eventSelf.action = function() {
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        theta = __state[__cOut++];
        omega = __state[__cOut++];
        xMagnet = __state[__cOut++];
        xMagnet2 = __state[__cOut++];
        vxMagnet = __state[__cOut++];
        vxMagnet2 = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[]
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = theta;
        __state[__cIn++] = omega;
        __state[__cIn++] = xMagnet;
        __state[__cIn++] = xMagnet2;
        __state[__cIn++] = vxMagnet;
        __state[__cIn++] = vxMagnet2;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        if (undefined != functions) eval(functions.toString());
        eval(userAction);
        return endAtEvent;
      }

      return _eventSelf;
    }; // End of event

   userEvents1.push(User_Event(userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent));
   }

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

  function _historic_xMagnet(__time) {
    var __index = 0 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_xMagnet2(__time) {
    var __index = 0 + 1 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_vxMagnet(__time) {
    var __index = 0 + 1 + 1 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_vxMagnet2(__time) {
    var __index = 0 + 1 + 1 + 1 + 1 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

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
    _view = new MagneticBarFieldsecondmagnet06_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.fullscreen.linkProperty("Width",  function() { return Width; }, function(_v) { Width = _v; } ); // HtmlView Page linking property 'Width' for element 'fullscreen'
          _view.displayPanel.linkProperty("Width",  function() { return Width; }, function(_v) { Width = _v; } ); // HtmlView Page linking property 'Width' for element 'displayPanel'
          _view.vectorFieldplottingPanel.linkProperty("Width",  function() { return Width1; }, function(_v) { Width1 = _v; } ); // HtmlView Page linking property 'Width' for element 'vectorFieldplottingPanel'
          _view.vectorFieldplottingPanel.linkProperty("XFixedTick",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'XFixedTick' for element 'vectorFieldplottingPanel'
          _view.vectorFieldplottingPanel.setAction("OnDoubleClick", function(_data,_info) {
  _pause();
  toggleFullScreen();

}); // HtmlView Page setting action 'OnDoubleClick' for element 'vectorFieldplottingPanel'
          _view.vectorFieldplottingPanel.linkProperty("MaximumY",  function() { return ymax*scale; } ); // HtmlView Page linking property 'MaximumY' for element 'vectorFieldplottingPanel'
          _view.vectorFieldplottingPanel.linkProperty("MaximumX",  function() { return xmax*scale; } ); // HtmlView Page linking property 'MaximumX' for element 'vectorFieldplottingPanel'
          _view.vectorFieldplottingPanel.linkProperty("MinimumX",  function() { return -xmax*scale; } ); // HtmlView Page linking property 'MinimumX' for element 'vectorFieldplottingPanel'
          _view.vectorFieldplottingPanel.linkProperty("MinimumY",  function() { return -ymax*scale; } ); // HtmlView Page linking property 'MinimumY' for element 'vectorFieldplottingPanel'
          _view.arrowSet.linkProperty("NumberOfElements",  function() { return store; }, function(_v) { store = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'arrowSet'
          _view.arrowSet.linkProperty("Transformation",  function() { return thetastore; }, function(_v) { thetastore = _v; } ); // HtmlView Page linking property 'Transformation' for element 'arrowSet'
          _view.arrowSet.linkProperty("X",  function() { return xCompassstore; }, function(_v) { xCompassstore = _v; } ); // HtmlView Page linking property 'X' for element 'arrowSet'
          _view.arrowSet.linkProperty("Y",  function() { return yCompassstore; }, function(_v) { yCompassstore = _v; } ); // HtmlView Page linking property 'Y' for element 'arrowSet'
          _view.markerGroup_hidefield_not_triggered.linkProperty("Transformation",  function() { return cta; }, function(_v) { cta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'markerGroup_hidefield_not_triggered'
          _view.markerGroup_hidefield_not_triggered.linkProperty("X",  function() { return xMagnet; }, function(_v) { xMagnet = _v; } ); // HtmlView Page linking property 'X' for element 'markerGroup_hidefield_not_triggered'
          _view.markerGroup_hidefield_not_triggered.linkProperty("Y",  function() { return yMagnet; }, function(_v) { yMagnet = _v; } ); // HtmlView Page linking property 'Y' for element 'markerGroup_hidefield_not_triggered'
          _view.markerGroup_hidefield_not_triggered.linkProperty("Visibility",  function() { return hideField; }, function(_v) { hideField = _v; } ); // HtmlView Page linking property 'Visibility' for element 'markerGroup_hidefield_not_triggered'
          _view.leftMarker.linkProperty("Visibility",  function() { return hideField; }, function(_v) { hideField = _v; } ); // HtmlView Page linking property 'Visibility' for element 'leftMarker'
          _view.rightMarker.linkProperty("Visibility",  function() { return hideField; }, function(_v) { hideField = _v; } ); // HtmlView Page linking property 'Visibility' for element 'rightMarker'
          _view.leftMarker2.linkProperty("Visibility",  function() { return hideField&&magnetNS===true; } ); // HtmlView Page linking property 'Visibility' for element 'leftMarker2'
          _view.rightMarker2.linkProperty("Visibility",  function() { return hideField&&magnetNS===true; } ); // HtmlView Page linking property 'Visibility' for element 'rightMarker2'
          _view.middleMarker.linkProperty("Visibility",  function() { return hideField; }, function(_v) { hideField = _v; } ); // HtmlView Page linking property 'Visibility' for element 'middleMarker'
          _view.dragMe.linkProperty("Visibility",  function() { return hideField; }, function(_v) { hideField = _v; } ); // HtmlView Page linking property 'Visibility' for element 'dragMe'
          _view.toMagnetPosition.linkProperty("Visibility",  function() { return hideField; }, function(_v) { hideField = _v; } ); // HtmlView Page linking property 'Visibility' for element 'toMagnetPosition'
          _view.magnet1Group.linkProperty("Visibility",  function() { return magnet1; }, function(_v) { magnet1 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'magnet1Group'
          _view.imageMagnet1SN.linkProperty("Transformation",  function() { return cta; }, function(_v) { cta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'imageMagnet1SN'
          _view.imageMagnet1SN.linkProperty("SizeX",  function() { return Magnetsizex; }, function(_v) { Magnetsizex = _v; } ); // HtmlView Page linking property 'SizeX' for element 'imageMagnet1SN'
          _view.imageMagnet1SN.linkProperty("X",  function() { return xMagnet; }, function(_v) { xMagnet = _v; } ); // HtmlView Page linking property 'X' for element 'imageMagnet1SN'
          _view.imageMagnet1SN.linkProperty("Y",  function() { return yMagnet; }, function(_v) { yMagnet = _v; } ); // HtmlView Page linking property 'Y' for element 'imageMagnet1SN'
          _view.imageMagnet1SN.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'imageMagnet1SN'
          _view.imageMagnet1SN.linkProperty("SizeY",  function() { return Magnetsizey; }, function(_v) { Magnetsizey = _v; } ); // HtmlView Page linking property 'SizeY' for element 'imageMagnet1SN'
          _view.imageMagnet1SN.setAction("OnDrag", function(_data,_info) {
  computeField();
  selected3[0]="user_defined";
  xMagnetDrag = xMagnet+0.7; //force rotate unicode to follow magnet
  yMagnetDrag = yMagnet;

}); // HtmlView Page setting action 'OnDrag' for element 'imageMagnet1SN'
          _view.text.linkProperty("X",  function() { return xMagnetDrag; }, function(_v) { xMagnetDrag = _v; } ); // HtmlView Page linking property 'X' for element 'text'
          _view.text.linkProperty("Y",  function() { return yMagnetDrag; }, function(_v) { yMagnetDrag = _v; } ); // HtmlView Page linking property 'Y' for element 'text'
          _view.rotate.linkProperty("X",  function() { return xMagnetDrag; }, function(_v) { xMagnetDrag = _v; } ); // HtmlView Page linking property 'X' for element 'rotate'
          _view.rotate.linkProperty("Y",  function() { return yMagnetDrag; }, function(_v) { yMagnetDrag = _v; } ); // HtmlView Page linking property 'Y' for element 'rotate'
          _view.rotate.setAction("OnDrag", function(_data,_info) {
  cta = Math.round(Math.atan2(yMagnetDrag-yMagnet,xMagnetDrag-xMagnet)*180/pi/10)/180*pi*10;
  ca = cta/a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();

}); // HtmlView Page setting action 'OnDrag' for element 'rotate'
          _view.magnet2Group.linkProperty("Visibility",  function() { return magnet2; }, function(_v) { magnet2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'magnet2Group'
          _view.imageMagnet2SN.linkProperty("Transformation",  function() { return cta2; }, function(_v) { cta2 = _v; } ); // HtmlView Page linking property 'Transformation' for element 'imageMagnet2SN'
          _view.imageMagnet2SN.linkProperty("SizeX",  function() { return Magnetsizex2; }, function(_v) { Magnetsizex2 = _v; } ); // HtmlView Page linking property 'SizeX' for element 'imageMagnet2SN'
          _view.imageMagnet2SN.linkProperty("X",  function() { return xMagnet2; }, function(_v) { xMagnet2 = _v; } ); // HtmlView Page linking property 'X' for element 'imageMagnet2SN'
          _view.imageMagnet2SN.linkProperty("Y",  function() { return yMagnet2; }, function(_v) { yMagnet2 = _v; } ); // HtmlView Page linking property 'Y' for element 'imageMagnet2SN'
          _view.imageMagnet2SN.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'imageMagnet2SN'
          _view.imageMagnet2SN.linkProperty("SizeY",  function() { return Magnetsizey2; }, function(_v) { Magnetsizey2 = _v; } ); // HtmlView Page linking property 'SizeY' for element 'imageMagnet2SN'
          _view.imageMagnet2SN.setAction("OnDrag", function(_data,_info) {
  computeField();
  selected3[0]="user_defined";
  xMagnet2Drag = xMagnet2+0.7; //force rotate unicode to follow magnet
  yMagnet2Drag = yMagnet2;

}); // HtmlView Page setting action 'OnDrag' for element 'imageMagnet2SN'
          _view.text2.linkProperty("X",  function() { return xMagnet2Drag; }, function(_v) { xMagnet2Drag = _v; } ); // HtmlView Page linking property 'X' for element 'text2'
          _view.text2.linkProperty("Y",  function() { return yMagnet2Drag; }, function(_v) { yMagnet2Drag = _v; } ); // HtmlView Page linking property 'Y' for element 'text2'
          _view.rotate2.linkProperty("X",  function() { return xMagnet2Drag; }, function(_v) { xMagnet2Drag = _v; } ); // HtmlView Page linking property 'X' for element 'rotate2'
          _view.rotate2.linkProperty("Y",  function() { return yMagnet2Drag; }, function(_v) { yMagnet2Drag = _v; } ); // HtmlView Page linking property 'Y' for element 'rotate2'
          _view.rotate2.setAction("OnDrag", function(_data,_info) {
  cta2 = Math.round(Math.atan2(yMagnet2Drag-yMagnet2,xMagnet2Drag-xMagnet2)*180/pi/10)/180*pi*10;
  ca2 = cta2/a2c;
  cs2=Math.cos(cta2);
  sc2=Math.sin(cta2);
  computeField();

}); // HtmlView Page setting action 'OnDrag' for element 'rotate2'
          _view.compassGroup.linkProperty("X",  function() { return xCompass; }, function(_v) { xCompass = _v; } ); // HtmlView Page linking property 'X' for element 'compassGroup'
          _view.compassGroup.linkProperty("Y",  function() { return yCompass; }, function(_v) { yCompass = _v; } ); // HtmlView Page linking property 'Y' for element 'compassGroup'
          _view.compassGroup.linkProperty("Visibility",  function() { return showCompass; }, function(_v) { showCompass = _v; } ); // HtmlView Page linking property 'Visibility' for element 'compassGroup'
          _view.compassArrowSN.linkProperty("Transformation",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'compassArrowSN'
          _view.textboxShape.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'textboxShape'
          _view.fieldtext.linkProperty("Text",  function() { return fieldValue; }, function(_v) { fieldValue = _v; } ); // HtmlView Page linking property 'Text' for element 'fieldtext'
          _view.fieldtext.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'fieldtext'
          _view.fieldtextBx2.linkProperty("Text",  function() { return fieldValueBx1; }, function(_v) { fieldValueBx1 = _v; } ); // HtmlView Page linking property 'Text' for element 'fieldtextBx2'
          _view.fieldtextBx2.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'fieldtextBx2'
          _view.fieldtextBy2.linkProperty("Text",  function() { return fieldValueBy1; }, function(_v) { fieldValueBy1 = _v; } ); // HtmlView Page linking property 'Text' for element 'fieldtextBy2'
          _view.fieldtextBy2.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'fieldtextBy2'
          _view.fieldTextangle2.linkProperty("Text",  function() { return fieldValueAngledeg1; }, function(_v) { fieldValueAngledeg1 = _v; } ); // HtmlView Page linking property 'Text' for element 'fieldTextangle2'
          _view.fieldTextangle2.linkProperty("Visibility",  function() { return !hideField; } ); // HtmlView Page linking property 'Visibility' for element 'fieldTextangle2'
          _view.shapeSet.linkProperty("NumberOfElements",  function() { return nVectorsSq; }, function(_v) { nVectorsSq = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'shapeSet'
          _view.shapeSet.linkProperty("X",  function() { return posx; }, function(_v) { posx = _v; } ); // HtmlView Page linking property 'X' for element 'shapeSet'
          _view.shapeSet.linkProperty("Y",  function() { return posy; }, function(_v) { posy = _v; } ); // HtmlView Page linking property 'Y' for element 'shapeSet'
          _view.arrowSet2.linkProperty("NumberOfElements",  function() { return nVectorsSq; }, function(_v) { nVectorsSq = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'arrowSet2'
          _view.arrowSet2.linkProperty("Rotate",  function() { return thetaField; }, function(_v) { thetaField = _v; } ); // HtmlView Page linking property 'Rotate' for element 'arrowSet2'
          _view.arrowSet2.linkProperty("X",  function() { return posx; }, function(_v) { posx = _v; } ); // HtmlView Page linking property 'X' for element 'arrowSet2'
          _view.arrowSet2.linkProperty("Y",  function() { return posy; }, function(_v) { posy = _v; } ); // HtmlView Page linking property 'Y' for element 'arrowSet2'
          _view.textSet22.linkProperty("NumberOfElements",  function() { return nVectorsSq; }, function(_v) { nVectorsSq = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'textSet22'
          _view.textSet22.linkProperty("X",  function() { return posx; }, function(_v) { posx = _v; } ); // HtmlView Page linking property 'X' for element 'textSet22'
          _view.textSet22.linkProperty("Y",  function() { return posy; }, function(_v) { posy = _v; } ); // HtmlView Page linking property 'Y' for element 'textSet22'
          _view.textSet22.linkProperty("Text",  function() { return textSetthetaField; }, function(_v) { textSetthetaField = _v; } ); // HtmlView Page linking property 'Text' for element 'textSet22'
          _view.textSet2.linkProperty("NumberOfElements",  function() { return nVectorsSq; }, function(_v) { nVectorsSq = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'textSet2'
          _view.textSet2.linkProperty("X",  function() { return posx; }, function(_v) { posx = _v; } ); // HtmlView Page linking property 'X' for element 'textSet2'
          _view.textSet2.linkProperty("Y",  function() { return posy; }, function(_v) { posy = _v; } ); // HtmlView Page linking property 'Y' for element 'textSet2'
          _view.textSet2.linkProperty("Text",  function() { return textSety; }, function(_v) { textSety = _v; } ); // HtmlView Page linking property 'Text' for element 'textSet2'
          _view.textSet.linkProperty("NumberOfElements",  function() { return nVectorsSq; }, function(_v) { nVectorsSq = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'textSet'
          _view.textSet.linkProperty("X",  function() { return posx; }, function(_v) { posx = _v; } ); // HtmlView Page linking property 'X' for element 'textSet'
          _view.textSet.linkProperty("Y",  function() { return posy; }, function(_v) { posy = _v; } ); // HtmlView Page linking property 'Y' for element 'textSet'
          _view.textSet.linkProperty("Text",  function() { return textSetx; }, function(_v) { textSetx = _v; } ); // HtmlView Page linking property 'Text' for element 'textSet'
          _view.dipoles.linkProperty("NumberOfElements",  function() { return nd; }, function(_v) { nd = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'dipoles'
          _view.dipoles.linkProperty("Position",  function() { return dipoles; }, function(_v) { dipoles = _v; } ); // HtmlView Page linking property 'Position' for element 'dipoles'
          _view.Dragme1SN.linkProperty("Transformation",  function() { return cta; }, function(_v) { cta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'Dragme1SN'
          _view.Dragme1SN.linkProperty("X",  function() { return xMagnet; }, function(_v) { xMagnet = _v; } ); // HtmlView Page linking property 'X' for element 'Dragme1SN'
          _view.Dragme1SN.linkProperty("Y",  function() { return yMagnet; }, function(_v) { yMagnet = _v; } ); // HtmlView Page linking property 'Y' for element 'Dragme1SN'
          _view.Dragme1SN.linkProperty("Visibility",  function() { return !hideField&&magnet1; } ); // HtmlView Page linking property 'Visibility' for element 'Dragme1SN'
          _view.Dragme2SN.linkProperty("Transformation",  function() { return cta2; }, function(_v) { cta2 = _v; } ); // HtmlView Page linking property 'Transformation' for element 'Dragme2SN'
          _view.Dragme2SN.linkProperty("X",  function() { return xMagnet2; }, function(_v) { xMagnet2 = _v; } ); // HtmlView Page linking property 'X' for element 'Dragme2SN'
          _view.Dragme2SN.linkProperty("Y",  function() { return yMagnet2; }, function(_v) { yMagnet2 = _v; } ); // HtmlView Page linking property 'Y' for element 'Dragme2SN'
          _view.Dragme2SN.linkProperty("Visibility",  function() { return !hideField&&magnet2; } ); // HtmlView Page linking property 'Visibility' for element 'Dragme2SN'
          _view.controlPanel.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'controlPanel'
          _view.controlPanel.linkProperty("Display",  function() { return print?"none":"inline-flex"; } ); // HtmlView Page linking property 'Display' for element 'controlPanel'
          _view.comboBox.linkProperty("Options",  function() { return ["NS unlike pole magnets LR","SN unlike pole magnets LR","two magnets point up","NN like pole magnets LR","SS like pole magnets LR","two magnets point down","compass show","compass off","user_defined"]; } ); // HtmlView Page linking property 'Options' for element 'comboBox'
          _view.comboBox.setAction("OnChange", function(_data,_info) {
  var option = _view.comboBox.getProperty("SelectedOptions");
  //alert(option);
  if ( option=="user_defined"){

    }
  else if ( option=="one magnet point right"){
  xMagnet = 0;
  yMagnet = 0;
  selected[0]="θ₁ =0°";
  ca = 0;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  selected2[0]="magnet 2 off";
  magnet2=false;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
   else if ( option=="one magnet point up"){
  xMagnet = 0;
  yMagnet = 0;
  selected[0]="θ₁ =90°";
  ca = 90;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  selected2[0]="magnet 2 off";
  magnet2=false;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
  else if ( option=="one magnet point left"){
  xMagnet = 0;
  yMagnet = 0;
  selected[0]="θ₁ =180°";
  ca = 180;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  selected2[0]="magnet 2 off";
  magnet2=false;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
  else if ( option=="one magnet point down"){
  xMagnet = 0;
  yMagnet = 0;
  selected[0]="θ₁ =-90°";
  ca = -90;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  selected2[0]="magnet 2 off";
  magnet2=false;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
  else if ( option=="NS unlike pole magnets LR"){
  xMagnet = -1;
  yMagnet = 0;
  xMagnet2 = 1-0.2;
  yMagnet2 = 0;
  selected[0]="θ₁ =0°";
  selected2[0]="θ₂ =0°";
  ca = 0;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  ca2 = -0;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
   //new
   else if ( option=="SN unlike pole magnets LR"){
  xMagnet = -1;
  yMagnet = 0;
  xMagnet2 = 1-0.2;
  yMagnet2 = 0;
  selected[0]="θ₁ =180°";
  selected2[0]="θ₂ =180°";
  ca = 180;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  ca2 = -180;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
  else if ( option=="two magnets point up"){
  xMagnet = -0.7;
  yMagnet = 0;
  xMagnet2 = 0.5;
  yMagnet2 = 0;
  selected[0]="θ₁ =90°";
  selected2[0]="θ₂ =90°";
  ca = 90;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  ca2 = 90;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
   else if ( option=="SS like pole magnets LR"){
  xMagnet = -1;
  yMagnet = 0;
  xMagnet2 = 1-0.2;
  yMagnet2 = 0;
  selected[0]="θ₁ =180°";
  selected2[0]="θ₂ =0°";
  ca = 180;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  ca2 = 0;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
   else if ( option=="NN like pole magnets LR"){
  xMagnet = -1;
  yMagnet = 0;
  xMagnet2 = 1-0.2;
  yMagnet2 = 0;
  selected[0]="θ₁ =0°";
  selected2[0]="θ₂ =180°";
  ca = 0;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  ca2 = 180;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }


  else if ( option=="two magnets point down"){
  xMagnet = -0.7;
  yMagnet = 0;
  xMagnet2 = 0.5;
  yMagnet2 = 0;
  selected[0]="θ₁ =-90°";
  selected2[0]="θ₂ =-90°";
  ca = -90;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  //
  ca2 = -90;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  //computeField ();
  magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
   }
  else if ( option=="compass show"){
  showCompass=true;
  _play();
    }
    else if ( option=="compass off"){
  showCompass=false;
    }
   else if ( option=="data store"){
   //for ( counter=0; counter<store /* Iterations */ ; counter++) {
    xCompassstore[counter] = xCompass;
     yCompassstore[counter] = yCompass;
      thetastore[counter] = theta;
  //}
  counter = counter+1;
  }
  else if ( option=="data store2"){
   //for ( counter=0; counter<store /* Iterations */ ; counter++) {
    xCompassstore[counter] = xCompass;
     yCompassstore[counter] = yCompass;
      thetastore[counter] = theta;
  //}
  counter = counter+1;
  }
  xMagnetDrag = xMagnet+0.7; //force rotate unicode to follow magnet
  yMagnetDrag = yMagnet;
  xMagnet2Drag = xMagnet2+0.7; //force rotate unicode to follow magnet
  yMagnet2Drag = yMagnet2;

}); // HtmlView Page setting action 'OnChange' for element 'comboBox'
          _view.comboBox.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'comboBox'
          _view.comboBox2.linkProperty("Options",  function() { return ["magnet 1 show","magnet 1 off","θ₁ =-180°","θ₁ =-170°","θ₁ =-160°","θ₁ =-150°","θ₁ =-140°","θ₁ =-130°","θ₁ =-120°","θ₁ =-110°","θ₁ =-100°","θ₁ =-90°","θ₁ =-80°","θ₁ =-70°","θ₁ =-60°","θ₁ =-50°","θ₁ =-40°","θ₁ =-30°","θ₁ =-20°","θ₁ =-10°","θ₁ =0°","θ₁ =10°","θ₁ =20°","θ₁ =30°","θ₁ =40°","θ₁ =50°","θ₁ =60°","θ₁ =70°","θ₁ =80°","θ₁ =90°","θ₁ =100°","θ₁ =110°","θ₁ =120°","θ₁ =130°","θ₁ =140°","θ₁ =150°","θ₁ =160°","θ₁ =170°","θ₁ =180°"]; } ); // HtmlView Page linking property 'Options' for element 'comboBox2'
          _view.comboBox2.setAction("OnChange", function(_data,_info) {
  var option = _view.comboBox2.getProperty("SelectedOptions");
  //alert(option);
  if ( option=="user_defined"){

    }
  else if ( option=="magnet 1 show"){
   magnet1=true;
   if(magnet1)lcst=1;
  else lcst=0;
  computeField ();
    }
    else if ( option=="magnet 1 off"){
   magnet1=false;
   if(magnet1)lcst=1;
  else lcst=0;
  computeField ();
    }
    else if ( option=="θ₁ =-180°"){
    ca = -180;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =-170°"){
    ca = -170;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =-160°"){
    ca = -160;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =-150°"){
    ca = -150;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =-140°"){
    ca = -140;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =-130°"){
    ca = -130;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =-120°"){
    ca = -120;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =-110°"){
    ca = -110;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =-100°"){
    ca = -100;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =-90°"){
    ca = -90;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-80°"){
    ca = -80;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-70°"){
    ca = -70;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
   else if ( option=="θ₁ =-60°"){
    ca = -60;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-50°"){
    ca = -50;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-40°"){
    ca = -40;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-30°"){
    ca = -30;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-20°"){
    ca = -20;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =-10°"){
    ca = -10;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =0°"){
    ca = -0;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =180°"){
    ca = 180;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =170°"){
    ca = 170;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =160°"){
    ca = 160;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =150°"){
    ca = 150;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =140°"){
    ca = 140;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =130°"){
    ca = 130;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₁ =120°"){
    ca = 120;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =110°"){
    ca = 110;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =100°"){
    ca = 100;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₁ =90°"){
    ca = 90;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =80°"){
    ca = 80;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =70°"){
    ca = 70;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
   else if ( option=="θ₁ =60°"){
    ca = 60;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =50°"){
    ca = 50;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =40°"){
    ca = 40;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =30°"){
    ca = 30;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =20°"){
    ca = 20;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₁ =10°"){
    ca = 10;
    cta=ca*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }

}); // HtmlView Page setting action 'OnChange' for element 'comboBox2'
          _view.comboBox2.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'comboBox2'
          _view.comboBox3.linkProperty("Options",  function() { return ["magnet 2 show","magnet 2 off","θ₂ =-180°","θ₂ =-170°","θ₂ =-160°","θ₂ =-150°","θ₂ =-140°","θ₂ =-130°","θ₂ =-120°","θ₂ =-110°","θ₂ =-100°","θ₂ =-90°","θ₂ =-80°","θ₂ =-70°","θ₂ =-60°","θ₂ =-50°","θ₂ =-40°","θ₂ =-30°","θ₂ =-20°","θ₂ =-10°","θ₂ =0°","θ₂ =10°","θ₂ =20°","θ₂ =30°","θ₂ =40°","θ₂ =50°","θ₂ =60°","θ₂ =70°","θ₂ =80°","θ₂ =90°","θ₂ =100°","θ₂ =110°","θ₂ =120°","θ₂ =130°","θ₂ =140°","θ₂ =150°","θ₂ =160°","θ₂ =170°","θ₂ =180°"]; } ); // HtmlView Page linking property 'Options' for element 'comboBox3'
          _view.comboBox3.setAction("OnChange", function(_data,_info) {
  var option = _view.comboBox3.getProperty("SelectedOptions");
  //alert(option);
  if ( option=="user_defined"){

    }
  else if ( option=="magnet 2 show"){
   magnet2=true;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
    }
    else if ( option=="magnet 2 off"){
   magnet2=false;
   if(magnet2)rcst=1;
  else rcst=0;
  computeField ();
    }
    else if ( option=="θ₂ =-180°"){
    ca2 = -180;
    cta2=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =-170°"){
    ca2 = -170;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =-160°"){
    ca2 = -160;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =-150°"){
    ca2 = -150;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =-140°"){
    ca2 = -140;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =-130°"){
    ca2 = -130;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =-120°"){
    ca2 = -120;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =-110°"){
    ca2 = -110;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =-100°"){
    ca2 = -100;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =-90°"){
    ca2 = -90;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-80°"){
    ca2 = -80;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-70°"){
    ca2 = -70;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
   else if ( option=="θ₂ =-60°"){
    ca2 = -60;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-50°"){
    ca2 = -50;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-40°"){
    ca2 = -40;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-30°"){
    ca2 = -30;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-20°"){
    ca2 = -20;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =-10°"){
    ca2 = -10;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =0°"){
    ca2 = -0;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =180°"){
    ca2 = 180;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =170°"){
    ca2 = 170;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =160°"){
    ca2 = 160;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =150°"){
    ca2 = 150;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =140°"){
    ca2 = 140;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =130°"){
    ca2 = 130;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  else if ( option=="θ₂ =120°"){
    ca2 = 120;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =110°"){
    ca2 = 110;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =100°"){
    ca2 = 100;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
      else if ( option=="θ₂ =90°"){
    ca2 = 90;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =80°"){
    ca2 = 80;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =70°"){
    ca2 = 70;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
   else if ( option=="θ₂ =60°"){
    ca2 = 60;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =50°"){
    ca2 = 50;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =40°"){
    ca2 = 40;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =30°"){
    ca2 = 30;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =20°"){
    ca2 = 20;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
       else if ( option=="θ₂ =10°"){
    ca2 = 10;
    cta=ca2*a2c;
  cs=Math.cos(cta);
  sc=Math.sin(cta);
  computeField();
      }
  //option="user_defined";

}); // HtmlView Page setting action 'OnChange' for element 'comboBox3'
          _view.comboBox3.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'comboBox3'
          _view.resetButton.setAction("OnRelease", function(_data,_info) {
  _reset();

}); // HtmlView Page setting action 'OnRelease' for element 'resetButton'
          _view.resetButton.linkProperty("Font",  function() { return fontb; }, function(_v) { fontb = _v; } ); // HtmlView Page linking property 'Font' for element 'resetButton'
          _view.print.setAction("OnPress", function(_data,_info) {
  print = true;

}); // HtmlView Page setting action 'OnPress' for element 'print'
          _view.print.linkProperty("Font",  function() { return fontb; }, function(_v) { fontb = _v; } ); // HtmlView Page linking property 'Font' for element 'print'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(true);
  _model.setFPS(100);
  _model.setStepsPerDisplay(1);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}

function MagneticBarFieldsecondmagnet06_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = MagneticBarFieldsecondmagnet06_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);

  _view._addDescriptionPage('Magnetic Bar Field','./MagneticBarField/TwoBarMagnetsandCompass.html');

  return _view;
} // end of main function

function MagneticBarFieldsecondmagnet06_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"fullscreen", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'fullscreen'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"displayPanel", _view.fullscreen) // EJsS HtmlView.HtmlView Page: declaration of element 'displayPanel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'displayPanel'
      .setProperty("CSS",{   "position" : "absolute",   "bottom" : "0px",    "margin-left":"0px",    "left":"0%" }) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'displayPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"vectorFieldplottingPanel", _view.displayPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vectorFieldplottingPanel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'vectorFieldplottingPanel'
      .setProperty("Gutters",[0,0,0,0]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'vectorFieldplottingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'vectorFieldplottingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'vectorFieldplottingPanel'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'vectorFieldplottingPanel'
      .setProperty("YAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'YAutoTicks' for element 'vectorFieldplottingPanel'
      .setProperty("GridYShow",false) // EJsS HtmlView.HtmlView Page: setting property 'GridYShow' for element 'vectorFieldplottingPanel'
      .setProperty("XTickStep",0.2) // EJsS HtmlView.HtmlView Page: setting property 'XTickStep' for element 'vectorFieldplottingPanel'
      .setProperty("YTickStep",0.2) // EJsS HtmlView.HtmlView Page: setting property 'YTickStep' for element 'vectorFieldplottingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'vectorFieldplottingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'vectorFieldplottingPanel'
      .setProperty("MarginX",10) // EJsS HtmlView.HtmlView Page: setting property 'MarginX' for element 'vectorFieldplottingPanel'
      .setProperty("MarginY",10) // EJsS HtmlView.HtmlView Page: setting property 'MarginY' for element 'vectorFieldplottingPanel'
      .setProperty("XAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'XAutoTicks' for element 'vectorFieldplottingPanel'
      .setProperty("GridXShow",false) // EJsS HtmlView.HtmlView Page: setting property 'GridXShow' for element 'vectorFieldplottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.arrowSet,"arrowSet", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'arrowSet'
      .setProperty("MarkStartColor","RED") // EJsS HtmlView.HtmlView Page: setting property 'MarkStartColor' for element 'arrowSet'
      .setProperty("MarkMiddleHeight",0.1) // EJsS HtmlView.HtmlView Page: setting property 'MarkMiddleHeight' for element 'arrowSet'
      .setProperty("Offset","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'arrowSet'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'arrowSet'
      .setProperty("SizeX",0.1) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'arrowSet'
      .setProperty("MarkMiddleWidth",0.1) // EJsS HtmlView.HtmlView Page: setting property 'MarkMiddleWidth' for element 'arrowSet'
      .setProperty("MarkEndColor","CYAN") // EJsS HtmlView.HtmlView Page: setting property 'MarkEndColor' for element 'arrowSet'
      .setProperty("MarkStart","NONE") // EJsS HtmlView.HtmlView Page: setting property 'MarkStart' for element 'arrowSet'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'arrowSet'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"markerGroup_hidefield_not_triggered", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'markerGroup_hidefield_not_triggered'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftMarker", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'leftMarker'
      .setProperty("FillColor","CYAN") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftMarker'
      .setProperty("SizeX",0.56) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'leftMarker'
      .setProperty("ShapeType","ROUND_RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftMarker'
      .setProperty("X",-0.28) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'leftMarker'
      .setProperty("LineColor","GRAY") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'leftMarker'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftMarker'
      .setProperty("SizeY",0.22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftMarker'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'leftMarker'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightMarker", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'rightMarker'
      .setProperty("FillColor","MAGENTA") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightMarker'
      .setProperty("SizeX",0.56) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'rightMarker'
      .setProperty("ShapeType","ROUND_RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightMarker'
      .setProperty("X",0.28) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rightMarker'
      .setProperty("LineColor","GRAY") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'rightMarker'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightMarker'
      .setProperty("SizeY",0.22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightMarker'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'rightMarker'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftMarker2", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'leftMarker2'
      .setProperty("FillColor","MAGENTA") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftMarker2'
      .setProperty("SizeX",0.56) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'leftMarker2'
      .setProperty("ShapeType","ROUND_RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftMarker2'
      .setProperty("X",-0.28) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'leftMarker2'
      .setProperty("LineColor","GRAY") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'leftMarker2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftMarker2'
      .setProperty("SizeY",0.22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftMarker2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'leftMarker2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightMarker2", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'rightMarker2'
      .setProperty("FillColor","CYAN") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightMarker2'
      .setProperty("SizeX",0.56) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'rightMarker2'
      .setProperty("ShapeType","ROUND_RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightMarker2'
      .setProperty("X",0.28) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rightMarker2'
      .setProperty("LineColor","GRAY") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'rightMarker2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightMarker2'
      .setProperty("SizeY",0.22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightMarker2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'rightMarker2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"middleMarker", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'middleMarker'
      .setProperty("Sensitivity",0) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'middleMarker'
      .setProperty("FillColor","GRAY") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'middleMarker'
      .setProperty("MovesGroup",true) // EJsS HtmlView.HtmlView Page: setting property 'MovesGroup' for element 'middleMarker'
      .setProperty("SizeX",0.56) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'middleMarker'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'middleMarker'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'middleMarker'
      .setProperty("LineColor","GRAY") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'middleMarker'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'middleMarker'
      .setProperty("SizeY",0.22) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'middleMarker'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'middleMarker'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'middleMarker'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"dragMe", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'dragMe'
      .setProperty("FillColor","YELLOW") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'dragMe'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'dragMe'
      .setProperty("LineColor","YELLOW") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'dragMe'
      .setProperty("Text","Drag Me") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'dragMe'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'dragMe'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"toMagnetPosition", _view.markerGroup_hidefield_not_triggered) // EJsS HtmlView.HtmlView Page: declaration of element 'toMagnetPosition'
      .setProperty("FillColor","YELLOW") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'toMagnetPosition'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'toMagnetPosition'
      .setProperty("LineColor","YELLOW") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'toMagnetPosition'
      .setProperty("Text","(To Magnet Location)") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'toMagnetPosition'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'toMagnetPosition'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"magnet1Group", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'magnet1Group'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"imageMagnet1SN", _view.magnet1Group) // EJsS HtmlView.HtmlView Page: declaration of element 'imageMagnet1SN'
      .setProperty("Sensitivity",0) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'imageMagnet1SN'
      .setProperty("ImageUrl","./MagneticBarField/barMagnet.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'imageMagnet1SN'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'imageMagnet1SN'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text", _view.magnet1Group) // EJsS HtmlView.HtmlView Page: declaration of element 'text'
      .setProperty("Text","↺") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'text'
      .setProperty("Font","normal normal 7vw ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'text'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rotate", _view.magnet1Group) // EJsS HtmlView.HtmlView Page: declaration of element 'rotate'
      .setProperty("Sensitivity",0) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'rotate'
      .setProperty("SizeX",30) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'rotate'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rotate'
      .setProperty("SizeY",30) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rotate'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'rotate'
      .setProperty("DrawLines",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'rotate'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'rotate'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'rotate'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"magnet2Group", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'magnet2Group'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"imageMagnet2SN", _view.magnet2Group) // EJsS HtmlView.HtmlView Page: declaration of element 'imageMagnet2SN'
      .setProperty("Sensitivity",0) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'imageMagnet2SN'
      .setProperty("ImageUrl","./MagneticBarField/barMagnet.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'imageMagnet2SN'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'imageMagnet2SN'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text2", _view.magnet2Group) // EJsS HtmlView.HtmlView Page: declaration of element 'text2'
      .setProperty("Text","↺") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'text2'
      .setProperty("Font","normal normal 7vw ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'text2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rotate2", _view.magnet2Group) // EJsS HtmlView.HtmlView Page: declaration of element 'rotate2'
      .setProperty("Sensitivity",0) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'rotate2'
      .setProperty("SizeX",30) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'rotate2'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rotate2'
      .setProperty("SizeY",30) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rotate2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'rotate2'
      .setProperty("DrawLines",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'rotate2'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'rotate2'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'rotate2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"compassGroup", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'compassGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"backGroundShape", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'backGroundShape'
      .setProperty("FillColor","rgba(0,255,255,0.5)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'backGroundShape'
      .setProperty("SizeX",0.35) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'backGroundShape'
      .setProperty("SizeY",0.35) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'backGroundShape'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"compassArrowSN", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'compassArrowSN'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'compassArrowSN'
      .setProperty("SizeX",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'compassArrowSN'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'compassArrowSN'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'compassArrowSN'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'compassArrowSN'
      .setProperty("MarkEndColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'MarkEndColor' for element 'compassArrowSN'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'compassArrowSN'
      .setProperty("LineWidth",4) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'compassArrowSN'
      .setProperty("Offset","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'compassArrowSN'
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
      .setProperty("X",-0.2) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'textboxShape'
      .setProperty("Y",-0.17) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'textboxShape'
      .setProperty("SizeY",0.5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'textboxShape'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"imagecircle", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'imagecircle'
      .setProperty("SizeX",0.4) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'imagecircle'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'imagecircle'
      .setProperty("ImageUrl","./MagneticBarField/circle.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'imagecircle'
      .setProperty("SizeY",0.4) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'imagecircle'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fieldtext", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fieldtext'
      .setProperty("FillColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fieldtext'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fieldtext'
      .setProperty("X",0.05) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'fieldtext'
      .setProperty("LineColor","blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fieldtext'
      .setProperty("Y",-0.22) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'fieldtext'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'fieldtext'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fieldtextBx2", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fieldtextBx2'
      .setProperty("FillColor","BLUE") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fieldtextBx2'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fieldtextBx2'
      .setProperty("LineColor","BLUE") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fieldtextBx2'
      .setProperty("X",0.05) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'fieldtextBx2'
      .setProperty("Y",-0.33) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'fieldtextBx2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'fieldtextBx2'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'fieldtextBx2'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fieldtextBy2", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fieldtextBy2'
      .setProperty("FillColor","BLUE") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fieldtextBy2'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fieldtextBy2'
      .setProperty("LineColor","BLUE") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fieldtextBy2'
      .setProperty("X",0.05) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'fieldtextBy2'
      .setProperty("Y",-0.44) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'fieldtextBy2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'fieldtextBy2'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"fieldTextangle2", _view.compassGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fieldTextangle2'
      .setProperty("FillColor","BLUE") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'fieldTextangle2'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'fieldTextangle2'
      .setProperty("LineColor","BLUE") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fieldTextangle2'
      .setProperty("X",0.05) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'fieldTextangle2'
      .setProperty("Y",-0.55) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'fieldTextangle2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'fieldTextangle2'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"shapeSet", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shapeSet'
      .setProperty("SizeX",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'shapeSet'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'shapeSet'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'shapeSet'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'shapeSet'
      ;

    _view._addElement(EJSS_DRAWING2D.arrowSet,"arrowSet2", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'arrowSet2'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'arrowSet2'
      .setProperty("FillColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'arrowSet2'
      .setProperty("SizeX",0.1) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'arrowSet2'
      .setProperty("LineColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrowSet2'
      .setProperty("MarkEndColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'MarkEndColor' for element 'arrowSet2'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'arrowSet2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'arrowSet2'
      .setProperty("Offset","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'arrowSet2'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"textSet22", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'textSet22'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'textSet22'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'textSet22'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"textSet2", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'textSet2'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'textSet2'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'textSet2'
      ;

    _view._addElement(EJSS_DRAWING2D.textSet,"textSet", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'textSet'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'textSet'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'textSet'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"dipoles", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dipoles'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'dipoles'
      .setProperty("SizeX",20) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'dipoles'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'dipoles'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'dipoles'
      .setProperty("SizeY",20) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'dipoles'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'dipoles'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"Dragme1SN", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Dragme1SN'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'Dragme1SN'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'Dragme1SN'
      .setProperty("Text","Drag me 1") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Dragme1SN'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'Dragme1SN'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"Dragme2SN", _view.vectorFieldplottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Dragme2SN'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'Dragme2SN'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'Dragme2SN'
      .setProperty("Text","Drag me 2") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Dragme2SN'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'Dragme2SN'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.fullscreen) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'controlPanel'
      .setProperty("CSS",{   "position" : "absolute",   "top" : "2%",    "margin-left":"0px",    "left":"0%" }) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox'
      .setProperty("Tooltip","select user_defined and drag the mass") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'comboBox'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox2", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox2'
      .setProperty("Tooltip","select user_defined and drag the mass") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'comboBox2'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'comboBox2'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox3", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox3'
      .setProperty("Tooltip","select user_defined and drag the mass") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'comboBox3'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'comboBox3'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Tooltip","Reset button.") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetButton'
      .setProperty("Text","↻") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"print", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'print'
      .setProperty("Tooltip","Print") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'print'
      .setProperty("Text","🖶") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'print'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'print'
      ;

  };

  return _view;
}

