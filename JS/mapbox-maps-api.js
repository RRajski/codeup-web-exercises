"Use Strict"

var accessToken = mapboxToken;

mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15,
    center: [-98.4916, 29.4252]
});

// var alamoInfo = {
//     address: "Hotel Valencia",
//     popupHTML: ("<p>Remember the Sunday Brunch!</p>")
// }

// var markerOptions = {
//     color: "#ff0000"
//
// }

// var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat([-98.4861, 29.4260])
//         // .setPopup(alamoInfo)
//         .addTo(map);

// var panderiaInfo = {
//     address: "301 E Houston St, San Antonio, TX 78205",
//     popupHTML: "<p>La Panderia: The Sweetest Breads!</p>"
// }

// var panderiaMarker = new mapboxgl.Marker()
//     .setLngLat([-98., 29.4260])
//     .addTo(map);

var panderiaPopup = new mapboxgl.Popup()
    .setHTML("<h2>La Panderia</h2>")
//     "<ul>Restaraunt type:  " +
// "" +
// "</ul>"
    // .addTo(map);

var panderiaMarker = new mapboxgl.Marker()
    .setLngLat([-98.489600, 29.426770])
    .addTo(map)
    .setPopup(panderiaPopup);

var inNOutPopup = new mapboxgl.Popup()
    .setHTML("<H2>In N Out Burger</H2>" +
        "<p>Not quite Danny Slam burgers</p>");

var inNOutmarker = new mapboxgl.Marker()
    .setLngLat([-98.39602, 29.51156])
    .setPopup(inNOutPopup)
    .addTo(map);

var txRoadHousePopup = new mapboxgl.Popup()
    .setHTML("<h2>Texas RoadHouse</h2> "+
        "<p>Rolls are out of this world!</p>");

var txRoadHousemarker = new mapboxgl.Marker()
    .setLngLat([-98.33567, 29.56465])
    .setPopup(txRoadHousePopup)
    .addTo(map);

// restArray.forEach(function) = ['panderiaPopup', 'inNOutPopup', 'txRoadHousePopup'];
// arr.forEach(element => {
//     console.log(element);
// });




// var txRoadHouseMarker = new mapboxgl.Marker()
//     .setLngLat([-98.33567, 29.56465])
//     .addTo(map);
//
//
// var txRoadHouseInfo = {
//     address: "13380 N. IH 35, Live Oak, TX  78233",
//     popupHTML: ("<p>Rolls are out of this world!</p>")

    // var txRoadHouseInfoPopup = new mapboxgl.Popup()
    //     .setHTML("<p>Rolls are out of this world</p>")
    //     .addTo(map)
    //
    // marker.setPopup(txRoadHouseInfoPopup)

// }








//
// // var inNOutInfo = {
// //     address: "Windcrest, Texas",
// //     popupHTML: "<p>so good you almost missed flights!</p>"
// // };
//
// var markerInNOut = new mapboxgl.Marker()
//     .setLngLat([-98.39642, 29.5114])
//     .addTo(map);
//


// }

// function placeMarkerAndPopup(info, token, map) {
//     geocode(info.address, token).then(function(coordinates) {
//         var popup = new mapboxgl.Popup()
//             .setHTML(info.popupHTML);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .setPopup(popup)
//             .addTo(map)
//     });
// }
//
// placeMarkerAndPopup(txRoadHousePopup, accessToken, map);
// placeMarkerAndPopup(panderiaPopup, accessToken, map);
// placeMarkerAndPopup(inNOutPopup, accessToken, map);

