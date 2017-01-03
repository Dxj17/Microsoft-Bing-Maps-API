/*
Author: bigkevzs 
*/


var map,
    view,
    coord,
    pushpin,
    directionsManager;



/**
 * @type {function} - display location data through dom injection
 */
function displayMapDetails(){
    
    view = document.getElementsByClassName("details");
    
    var Detlist = document.createElement("ul");
    
    var domString = "\
        <li><b>Map Center:</b> "+ map.getCenter() +"</li><br/>\
        <li><b>Map Bounds: </b> "+ map.getBounds() +"</li><br/>\
        ";
    
    Detlist.innerHTML = domString;

    view[0].appendChild(Detlist,view.lastChild);

}




/**
 * @type {function} - loads the map 
 */
function loadMap() {
    
    directionsManager = document.getElementById("directionsManager");



    /**
     * @param{Object} - Dom object element 
     * @param{Object} - Object option settions for the map
     */
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'blahblahblah',
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 15
    });

    
    displayMapDetails(); /// @todo: put at the bottom for consistency 


    /// Setting Map Options 
    map.setOptions({
        center:map.getCenter(),
        zoom:5,
        maxZoom:15,
        minZoom:5
    });



    /// @note: this service might require en enterprice key for geolocation accuracy which is valuable alot ! 
    /// New Geolocator instance 
    // var geolocator = new Microsoft.Maps.GeoLocationProvider(map);
    
    /// Get coordinates 
    // coord = geolocator.getCurrentPosition();


    /**
     * @param{Object} - coordinates to the location 
     * @param{Object} - pushpin settings 
     */
    pushpin = new Microsoft.Maps.Pushpin(map.getCenter() , {
        icon: "http://localhost:3000/img/locationPushpin.png",
        width:10,
        height:10,
        anchor:   new Microsoft.Maps.Point(12,25) /// @todo: replace prop value with the geolocation coords
    });




    /**
     * @param{Object} - Module namespace 
     * @param{Function} - Callback function 
     */
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function(){

        /// Instanciate the directionmanager 
        var directionMan  = new Microsoft.Maps.Directions.DirectionsManager(map);
        /// Set and Render the input directions controls 
        directionMan.setRenderOptions({itineraryContainer: directionsManager});
        directionMan.showInputPanel("directionsInputPanel");
    });







    map.entities.push(pushpin);


}
