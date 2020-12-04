var firstmap = L.map('tmap').setView([43.661262,-79.383497], 11.84);

L.tileLayer('https://api.mapbox.com/styles/v1/vovargas2/cki85amaq2u7r19pcdf33n818/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidm92YXJnYXMyIiwiYSI6ImNraTU2OTZ1djAyOXQydHBxOW5vc2l5czgifQ.1fAU48GVS_wYr6MM61F_Aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25
  }).addTo(firstmap);

//CN Tower
let marker1 = L.marker([43.64278733903088, -79.38704317211672]).addTo(firstmap);
marker1.bindPopup("<b>CN Tower</b><br>Landmark, over 553-metre tower featuring a glass floor & a revolving eatery with panoramic views.");

//Royal Ontario Museum
let marker2 = L.marker([43.66789258774584, -79.3934052059896]).addTo(firstmap);
marker2.bindPopup("<b>Royal Ontario Museum</b><br>Sprawling natural history & world cultures galleries, plus dinosaurs in the Libeskind crystal wing.").openPopup();

//High Park
let marker3 = L.marker([43.646578954022225, -79.46343280411692]).addTo(firstmap);
marker3.bindPopup("<b>High Park</b><br>Sprawling park with hiking trails, a zoo, sports fields & a large children's playground.");

//Allan Gardens
let marker4 = L.marker([43.662426282660334, -79.37266086038129]).addTo(firstmap);
marker4.bindPopup("<b>Allan Gardens</b><br>A collection of plants from around the world housed in a cast-iron & glass building dating to 1910.");
