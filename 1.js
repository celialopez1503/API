
// const modulos = ["esri/map"]; 
// function pintaMapa (map)

// require(módulo, función)

require(["esri/map",'dojo/domReady!'], function(Map) {         //Mapa es un módulo , la clase mapa new Map(divId, options?) tiene obligatorio un divID y un options que es el basemap
    var myMap = new Map('divMap', {
        basemap: 'streets',
        center: [-6.96, 38.87],
        zoom: 14
    });
    
}); 

//dojo/domReady! se tiene que poner detras. Simplifica escribir JS. No hace falta importarlo porque esta en la API 3. 
//%20 espacio

//OPCIÓN DOS: 

