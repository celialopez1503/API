
require([
    "esri/map",
    "esri/arcgis/utils",
    "esri/dijit/Search",
    "esri/tasks/locator",
    "dojo/domReady!"
   ],
function (Map, 
    arcgisUtils,
    Search, Locator){
        var myMap = new Map('divMap', {
        });
    
    arcgisUtils.createMap("d957997ccee7408287a963600a77f61f", "divMap").then(function (response) {
       const mapMain = response.map;

    
    }); 
    var search = new Search({
        map: myMap
      }, "ui-dijit-search");
      search.startup();
}); 