// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.1975, -97.6664], 4);

// We create the tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// // Get data from cities.js
// let cityData = cities;

// //  Add a marker to the map for multiple cities
// let marker = cityData.forEach(function(city){
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color: 'orange',
//         fillColor: '#ffb366',
//         fillOpacity: 0.5
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: '10, 10',
    fillOpacity: 0.5,
    weight: 4
  }).addTo(map);

