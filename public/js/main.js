/*
Author: bigkevzs 
*/


var map;
var view = document.getElementsByClassName("details");

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'AuZTRcdNv_8_rFqQgk8uJfkPINqMSnpm44NcDbqolb-UrFaOOFPMpuUknYeA0crb',
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 10
    });
}


function displayMapDetails(){
var Detlist = document.createElement("ul");
var domString = "\
       <b>Map Center:</b><li>"+ map.getCenter() +"</li><br/>\
       <b>Map Bounds: </b><li>"+ map.getBounds() +"</li><br/>\
       <b> </b><li>"+ +"</li><br/>\
       <b> </b><li>"+ +"</li><br/>\
       <b> </b><li>"+ +"</li><br/>\
    ";
Detlist.innerHTML = domString;
view.appendChild(Detlist,view.lastChild);

}

onload = displayMapDetails();



























onload = function(){
    // @todo: only use for testing purpose requesting location onload is suspecious for the user. 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(){
            console.log("Requesting location permissions ");
        });
    }
}
