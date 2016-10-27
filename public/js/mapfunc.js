var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 25.7742700, lng: -80.1936600},
    zoom: 8
  });
}

$(document).ready(function() {

  $.ajax({
      url: "https://api.simplyrets.com/properties?limit=500&lastId=0",
      type: 'GET',
      dataType: 'json',
      beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa('jeanc_5ruk2905:7ck54he2rcw05433'));
      },
      success: function (res) {
          var markers = [];

          for (var i=0; i<res.length; i++) {
            var latLong = new google.maps.LatLng(parseFloat(res[i]["geo"]["lat"]), parseFloat(res[i]["geo"]["lng"]))
            var marker = new google.maps.Marker({
              position: latLong,
              map: map
            });
            markers.push(marker);
          }

          var markerCluster = new MarkerClusterer(map, markers,
                      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
  });
});
