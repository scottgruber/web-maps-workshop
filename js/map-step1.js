// Step One
// Set location of map and zoom level
var map = L.map('map').setView([34.069444, -118.445278], 11)

// Load basemap and required attribution
L.tileLayer(
  'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(map)
