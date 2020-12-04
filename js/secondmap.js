var secondmap = L.map('bmap').setView([40.680895,-73.930487], 11.84);


L.tileLayer('https://api.mapbox.com/styles/v1/vovargas2/ckianp7bm0pq319mt2d4lar4z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidm92YXJnYXMyIiwiYSI6ImNraTU2OTZ1djAyOXQydHBxOW5vc2l5czgifQ.1fAU48GVS_wYr6MM61F_Aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25
}).addTo(secondmap);


for (let i = 0; i < places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude ] ) .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>') .addTo(secondmap);
}
