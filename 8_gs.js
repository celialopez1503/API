var tb
require(["dojo/dom",

        "dojo/_base/array",
        "dojo/parser",
        "dojo/query",
        "dojo/on",

        "esri/Color",
        "esri/config",
        "esri/map",
        "esri/graphic",

        "esri/geometry/normalizeUtils",
        "esri/tasks/GeometryService",
        "esri/tasks/BufferParameters",
  
        "esri/toolbars/draw",
  
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dijit/form/Button", "dojo/domReady!"
        ],
    function(dom, array, parser, query, on, Color, esriConfig, Map, Graphic, normalizeUtils, GeometryService, BufferParameters, Draw, SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol){

        parser.parse();


    //evento boton: 
    const element = document.getElementById("clearGraphics");
    element.addEventListener('click', boton );

    function boton () {
        if(map){
            map.graphics.clear();
          }
    }; 


    //declaro una query:



    query(".tool").on("click", function(evt){
        if(tb){
         tb.activate(evt.target.id);
        }
      });

    //declaro variable mapa: 

    var map = new Map ("map", {
        basemap: "streets",
        center: [-111.5, 39.541],
        zoom: 7
      });
    //   map.on("load", );

    //Dibujo

    
    var dibujo = new Draw(map);
    dibujo.on("draw-end", Buffer);
    dibujo.activate(Draw.POLYLINE);

    function Buffer (evt) {
        map.graphics.clear
        var linea = new SimpleLineSymbol(
         SimpleLineSymbol.STYLE_DASH,
         new Color ([255, 0, 0])
        ,5);

     var graphic = new Graphic(evt.geometry.linea);
     map.graphics.add(graphic);

      //Geometry service tiene un método que es el buffer: 
     var geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
    
     
    // //buffer params   aplico las propiedades del buffer: 

    var params = new BufferParameters();
    params.distances = [10];
    params.outSpatialReference = map.spatialReference;
    params.unit = GeometryService.UNIT_KILOMETER;
    params.geometries = [evt.geometry]


     geometryService.buffer(params, showBuffer);   //geometryService.on('buffer-complete', showbuffer)

     function showBuffer(bufferedGeometries) {
        var symbol = new SimpleFillSymbol(
          SimpleFillSymbol.STYLE_SOLID,
          new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([255,0,0,0.65]), 2),
          new Color([255,0,0,0.35])
        );

        array.forEach(bufferedGeometries, function(geometry) {
            var graphic = new Graphic(geometry, symbol);
            map.graphics.add(graphic);
          });

        }
 
    }
      

    

   


    // //declaro las líneas

   

   



    


});