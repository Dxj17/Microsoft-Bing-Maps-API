/*
Author: bigkevzs 
*/


var map;
var view = document.getElementsByClassName("details");

/**
 * @type {function} - display location data through dom injection
 */
function displayMapDetails(){

    var Detlist = document.createElement("ul");
    
    var domString = "\
        <li><b>Map Center:</b> "+ map.getCenter() +"</li><br/>\
        <li><b>Map Bounds: </b> "+ map.getBounds() +"</li><br/>\
        <li><b> </b> "+ +"</li><br/>\
        <li><b> </b> "+ +"</li><br/>\
        <li><b> </b> "+ +"</li><br/>\
        ";
    Detlist.innerHTML = domString;
    view[0].appendChild(Detlist,view.lastChild);

}

/**
 * @type {function} - loads the map 
 */
function loadMap() {


    /**
     * @param{Object} - Dom object element 
     * @param{Object} - Object option settions for the map
     */
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'AuZTRcdNv_8_rFqQgk8uJfkPINqMSnpm44NcDbqolb-UrFaOOFPMpuUknYeA0crb',
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 15
    });
    displayMapDetails();




}
