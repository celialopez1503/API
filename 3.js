
require(["esri/map","esri/dijit/BasemapToggle",'dojo/domReady!'], function(Map, BasemapToggle) {         
    var myMap = new Map('divMap', {
        basemap: 'topo',
        center: [-6.96, 38.87],
        zoom: 14
    });
    var toggle = new BasemapToggle({
        map: myMap,                       //afecta a myMap (mapa que hice antes)  dijit=widget
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();

    });
    