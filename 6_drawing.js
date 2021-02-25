require(["esri/map","esri/geometry/Extent","esri/layers/FeatureLayer","esri/layers/ArcGISDynamicMapServiceLayer","esri/toolbars/draw","esri/graphic", "esri/symbols/SimpleLineSymbol","esri/Color",'dojo/domReady!'], function(Map, Extent, FeatureLayer,ArcGISDynamicMapServiceLayer, Draw,  Graphic, SimpleLineSymbol, Color ) {         
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
        toolbar.activate(Draw.POLYLINE);


        toolbar.on('draw-end', addToMap);

    }; 

    function addToMap (params){
        console.log('he pintado', params);

        

        var sls = new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_DASH,
            new Color([255,0,0]),
            3);

        var graphic = new Graphic(params.geometry, sls);
        
        myMap.graphics.add(graphic);
    }  

    });

  