//Full screen map view
var mapId = document.getElementById('map');
function fullScreenView() {
    if(document.fullscreenElement){
        document.exitFullscreen()
    } else {
        mapId.requestFullscreen();
    }
    mapId.requestFullscreen();
}

// Leaflet browser print function
L.control.browserPrint({ position: 'topright'}).addTo(map);

//Leaflet search geocoder
L.Control.geocoder().addTo(map);

// Leaflet measure function
L.control.measure({
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meters',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map);

// Zoom to layer
$('.zoom-to-layer').click(function () {
    map.setView([-23.5489, -46.6388], 10)
})