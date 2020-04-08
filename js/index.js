function initMap() {
    var sydney = {
      lat: 34.063380, 
      lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
      center: sydney,
      zoom: 11,
      mapTypeId: 'roadmap',
      
    });
}

function initMap() {
  var myLatLng = {
    lat: 34.063380, 
    lng: -118.358080
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}