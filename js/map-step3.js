// Step One
// Set location of map and zoom level
var map = L.map('map').setView([34.069444, -118.445278], 11)

// Load basemap and required attribution
L.tileLayer(
  'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(map)

// Step Two
// Add marker for Santa Monica pier. Comment out when using an array.
// var marker = L.marker([34.008611, -118.498611]).addTo(map)

// Step Three
// set of marker coordinates
var parks = [
  [34.008611, -118.498611],
  [34.069444, -118.445278],
  [34.11856, -118.30037],
  [34.0775, -118.475],
  [34.095278, -118.548889],
  [34.073611, -118.24]
]
// Uncomment for Step Three and Comment Step Four
// for loop to iterate over the parks array
for (var i = 0; i < parks.length; i++) {
  marker = new L.marker(parks[i]).addTo(map)
}
