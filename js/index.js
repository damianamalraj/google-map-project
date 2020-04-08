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