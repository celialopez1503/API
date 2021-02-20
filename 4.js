require(["esri/map","esri/geometry/Extent","esri/layers/FeatureLayer","esri/layers/ArcGISDynamicMapServiceLayer","esri/dijit/BasemapToggle","esri/dijit/Legend",'dojo/domReady!'], function(Map, Extent, FeatureLayer,ArcGISDynamicMapServiceLayer, BasemapToggle, Legend) {         
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
     
    var toggle = new BasemapToggle({     //WIDGET
        map: myMap,                       
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();

    var Legend = new Legend({
        map: myMap
     }, "legendDiv");
        Legend.startup();

    });
    