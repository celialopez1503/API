require(["esri/map","esri/geometry/Extent","esri/layers/FeatureLayer","esri/layers/ArcGISDynamicMapServiceLayer","esri/toolbars/draw","esri/graphic", "esri/symbols/SimpleLineSymbol","esri/Color", "esri/symbols/SimpleFillSymbol", "esri/tasks/query",'dojo/domReady!'], function(Map, Extent, FeatureLayer,ArcGISDynamicMapServiceLayer, Draw,  Graphic, SimpleLineSymbol, Color,SimpleFillSymbol, Query ) {         
    var myMap = new Map('divMap', {
        basemap: 'topo',
        extent: new Extent(
            {
                xmax: -8270073.393,
                xmin: -13866326.834,
                ymax: 6352535.173,
                ymin: 3658902.118,
                spatialReference: {wkid: 102100} 
            }
        )
    });


    var Earthquakes = new FeatureLayer('https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0');
       myMap.addLayer(Earthquakes); 
       Earthquakes.setDefinitionExpression('MAGNITUDE >2')

    var Layers = new ArcGISDynamicMapServiceLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer");
        Layers.setOpacity(0.25)   
      myMap.addLayer(Layers);


    myMap.on('load', iniciarDraw);

    function iniciarDraw() {
        const toolbar = new Draw (myMap);
        toolbar.activate(Draw.POLYGON);


        toolbar.on('draw-end', addToMap);

    }; 

    function addToMap (params){
        console.log('he pintado', params);

        

        var sls = new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_DASH,
            new Color([255,0,0]),
            3);

        var geometryInput = evt.geometry; 

        var graphicPolygon = new Graphic(params.geometry, sls); 
        
       
        myMap.graphics.add(graphicPolygon);
    }  

     // Call the next function
    //  selectQuakes(Earthquakes);

    //  function selectQuakes(Earthquakes) {

    //     // Define symbol for selected features
    //     var symbolSelected = new SimpleMarkerSymbol({
    //         "type": "esriSMS",
    //         "style": "esriSMSCircle",
    //         "color": [255, 115, 0, 128],
    //         "size": 6,
    //         "outline": {
    //             "color": [255, 0, 0, 214],
    //             "width": 1
    //         }
    //     Earthquakes.setSelectionSymbol(symbolSelected); 
            
    //     });



    // Select Feature: 
    // var query = new Query ();        //establezco la variable de consulta
    // query.geometry = Earthquakes.geometry;  //llamo a la propiedad geometry porque quiero que se me guarde el poligono de consulta y lo guardo en la capa Earth

    // Earthquakes.selectFeatures(query,Earthquakes.SELECTION_NEW);
  
    

    });

