// Step One
// Set location of map and zoom level
var map = L.map('map').setView([34.069444, -118.445278], 11)

// Load basemap and required attribution
L.tileLayer(
  'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(map)

// Step Seven
// Load geojson file

var request = new XMLHttpRequest()
request.open('GET', 'json/california-wtdb.geojson', true)

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var geojsonData = JSON.parse(this.response)
    L.geoJson(geojsonData).addTo(map)
  } else {
    // We reached our target server, but it returned an error

  }
}

request.onerror = function() {
  // There was a connection error of some sort
}

request.send()

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
// for (var i=0; i<parks.length; i++) {
//   marker = new L.marker(parks[i]).addTo(map)
// }

// Step Six
// Add custom marker icon

var parkIcon = L.icon({
  iconUrl: 'icons/park.svg',
  className: 'svg-icon',
  iconAnchor: [10, 15],
  popupAnchor: [5, -15]
})

// Step Four
// Create unique marker for each coordinate
var markersArray = []

for (var i = 0; i < parks.length; i++) {
  markersArray[i] = new L.marker(parks[i], { icon: parkIcon }).addTo(map)
}

// Step Five
// Add image and text descriptions to popup and set size

var popup = L.popup({
  minWidth: 300,
  className: 'markerPopup'
}).setContent('<img src="img/sm-pier@2x.jpg"><h3><a href="https://en.wikipedia.org/wiki/Santa_Monica_Pier">Santa Monica Pier</a></h3><p>With an iconic entrance, the pier is popular with residents and visitors as a landmark that is over 100 years old.</p>')

markersArray[0].bindPopup(popup)

var popup = L.popup({
  minWidth: 300,
  className: 'markerPopup'
}).setContent('<img src="img/ucla@2x.jpg"><h3><a href="https://en.wikipedia.org/wiki/University_of_California,_Los_Angeles">UCLA</a></h3><p>UCLA is a public research university in the Westwood district of Los Angeles, United States.</p>')

markersArray[1].bindPopup(popup)

var popup = L.popup({
  minWidth: 300,
  className: 'markerPopup'
}).setContent('<img src="img/griffith-observatory@2x.jpg"><h3><a href="https://en.wikipedia.org/wiki/Griffith_Observatory">Griffith Park Observatory</a></h3><p>The Griffith Park Observatory commands a view of the Los Angeles Basin, including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest.</p>')

markersArray[2].bindPopup(popup)

var popup = L.popup({
  minWidth: 300,
  className: 'markerPopup'
}).setContent('<img src="img/getty@2x.jpg"><h3><a href="https://en.wikipedia.org/wiki/J._Paul_Getty_Museum">J. Paul Getty Museum</a></h3><p>The Getty Center, one of two Getty campuses, is an art museum located in Brentwood neighborhood of Los Angeles, on a hill top above the west side of the Sepulveda Pass and I-405 freeway. Its collection features Western art from the Middle Ages to the present.</p>')

markersArray[3].bindPopup(popup)

var popup = L.popup({
  minWidth: 300,
  className: 'markerPopup'
}).setContent('<img src="img/topanga-state-park@2x.jpg"><h3><a href="https://en.wikipedia.org/wiki/Topanga_State_Park">Topanga State Park</a></h3><p>Topanga State Park is a California state park located in the Santa Monica Mountains, within Los Angeles County, California. It is part of the Santa Monica Mountains National Recreation Area.</p>')

markersArray[4].bindPopup(popup)

var popup = L.popup({
  minWidth: 300,
  className: 'markerPopup'
}).setContent('<img src="img/dodger-stadium@2x.jpg"><h3><a href="https://en.wikipedia.org/wiki/Dodger_Stadium">Dodger Stadium</a></h3><p>Dodger Stadium, occasionally called by the metonym Chavez Ravine, is a baseball park located in the Elysian Park neighborhood of Los Angeles, California, the home field to the Los Angeles Dodgers, the city\'s National League franchise of Major League Baseball (MLB).</p>')

markersArray[5].bindPopup(popup)
