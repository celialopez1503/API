var map;
var tb;
require(["esri/map",
    "dojo/on",

    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "dijit/layout/BorderContainer",
    "dojo/domReady!"],
    function(
      Map,
      on

    ) {


    on(dojo.byId("progButtonNode"),"click",fQueryEstados);
    
    function fQueryEstados(){
     alert("Evento del botón Seleccionar ciudades");
    }

    map = new Map("map", {
      basemap: "topo",
      center: [-122.45,37.75], // long, lat
      zoom: 13,
      sliderStyle: "small"
    });

    map.on("load",function(evt){
      map.resize();
      map.reposition();

    });

  });