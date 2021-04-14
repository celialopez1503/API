require(["esri/map","esri/geometry/Extent","esri/layers/FeatureLayer","esri/layers/ArcGISDynamicMapServiceLayer",'dojo/domReady!'], function(Map, Extent, FeatureLayer,ArcGISDynamicMapServiceLayer) {         
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

    var tiendas = new FeatureLayer('https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0');
    myMap.addLayer(tiendas); 
    var almacenes = new FeatureLayer('https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0');
    myMap.addLayer(almacenes); 
    var aoi = new FeatureLayer('https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0');
    myMap.addLayer(aoi); 
       
    });