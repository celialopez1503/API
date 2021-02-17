//OPCIÓN DOS: 

//De esta manera llamo al objeto y al llamar al objeto me da las propiedades de la clase en la consola del navegador. AMBITO GLOBAL

var myMap; 

require(["esri/map", "esri/geometry/Extent",'dojo/domReady!'], function(Map, Extent) {         //Mapa es un módulo , la clase mapa new Map(divId, options?) tiene obligatorio un divID y un options que es el basemap
    myMap = new Map('divMap', {
        basemap: 'osm',
        extent: new Extent(
            {
                xmax: 2074046.51,
                xmin: 1943644.94,
                ymax: 8331840.41,
                ymin: 8183705.45,
                spatialReference: {wkid: 102100} 
            }
        )
        });
    
}); 