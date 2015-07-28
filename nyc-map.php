<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Douglass Winthrop</title>
<style>
#map-canvas {
    min-height: 640px;
    width: 100%;
}
/* below css prevents map navigator from displaying incorrectly */
.gmnoprint img {
    max-width: none;
}

</style>
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
  <script>
        
  var map;
  var loc = new google.maps.LatLng(40.7549469,-73.9795346);

  var MY_MAPTYPE_ID = 'custom_style';

  var lightgray = "#eeeeee";
  var mediumgray = "#aaaaaa";
  var darkgray = "#888888";
  var white = "#ffffff";
  var black = "#ff8b00";

  function initialize() {

            var featureOpts = [{
                featureType: "water",
                stylers: [{
                    color: white
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "landscape",
                stylers: [{
                    color: "#eee"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#4a4a4a"
                }, {
                    weight: 0.4
                }]
            }, {
                featureType: "poi",
                stylers: [{
                    color: mediumgray
                }]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{
                    color: white
                }]
            }, {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                    color: mediumgray
                }, {
                    weight: 0
                }, {
                    visibility: "off"
                }]
            }, {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: mediumgray
                }, {
                    weight: 4
                }]
            }, {
                featureType: "road",
                elementType: "labels.text",
                stylers: [{
                    color: "#000000"
                }, {
                    weight: 0.5
                }]
            }, {
                elementType: "labels.text",
                stylers: [{
                    color: "#444444"
                }, {
                    weight: .1
                }]
            }, {
                featureType: "administrative",
                elementType: "labels.text",
                stylers: [{
                    visibility: "off"
                }, {
                    weight: 0.4
                }, {
                    color: "#f9f9f9"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: mediumgray
                }]
            }, {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }]
            }, {
                featureType: "poi.medical",
                elementType: "labels",
                stylers: [{
                    color: "#636363"
                }, {
                    visibility: "off"
                }]
            }, {
                featureType: "poi.place_of_worship",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "poi.attraction",
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }];

    var mapOptions = {
      scrollwheel: false,
      zoom: 16,
      center: loc,
      streetViewControl: false,
      draggable: true,
      mapTypeControl:false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title:"douglass winthrop",
        icon: ''
    });

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
   

    </script>       
</head>
<body>
<div id="map-canvas"></div>
</body>
</html>
