/*
Author: bigkevzs 
*/


var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'AuZTRcdNv_8_rFqQgk8uJfkPINqMSnpm44NcDbqolb-UrFaOOFPMpuUknYeA0crb'
    });
}

onload = function(){
    // @todo: only use for testing purpose requesting location onload is suspecious for the user. 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(){
            console.log("Requesting location permissions ");
        });
    }
}


