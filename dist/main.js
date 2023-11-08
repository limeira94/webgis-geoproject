// map class initialize
var map = L.map('map', {
    center: [-23.5489, -46.6388],
    zoom: 10
});
map.zoomControl.setPosition('topright');

// adding osm tilelayer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var stad = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
});
// adding osm marker
var singleMarker = L.marker([-23.5489, -46.6388])
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

//add map scale
L.control.scale().addTo(map);

//Map coordinate display
map.on('mousemove', function (e) {
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})

// Geojson load
var marker = L.markerClusterGroup();
var sampa = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
});
sampa.addTo(marker);
marker.addTo(map);

// Leaflet layer control
var baseMaps = {
    "OSM": osm,
    "Stadia": stad
}

var overlayerMaps = {
    'GeoJSON Markers': marker,
    'Single Marker': singleMarker,
}

L.control.layers(baseMaps, overlayerMaps, { collapsed: false, position: 'topleft' }).addTo(map);
