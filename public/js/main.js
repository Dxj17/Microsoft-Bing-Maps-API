/*
Author: bigkevzs 
*/


var map;
var view = document.getElementsByClassName("details");


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
    view.appendChild(Detlist,view.lastChild);

}


function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'AuZTRcdNv_8_rFqQgk8uJfkPINqMSnpm44NcDbqolb-UrFaOOFPMpuUknYeA0crb',
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 10
    });
    displayMapDetails();
}




























onload = function(){
    // @todo: only use for testing purpose requesting location onload is suspecious for the user. 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(){
            console.log("Requesting location permissions ");
        });
    }
}
