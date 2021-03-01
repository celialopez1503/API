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
    var geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
});