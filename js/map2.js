jQuery(document).ready(function($) {

var map;
    
var myLatlngNYC = new google.maps.LatLng(40.7549469,-73.9795346);

var myLatlngDC = new google.maps.LatLng(38.9011035,-77.0396397);

var myLatlngBOS = new google.maps.LatLng(42.3579214,-71.0707528);

// var map;
// var loc = new google.maps.LatLng(40.751512,-73.985486);

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

  var mapOptionsnyc = {
    scrollwheel: false,
    zoom: 16,
    center: myLatlngNYC,
    streetViewControl: false,
    draggable: true,
    mapTypeControl:false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  var mapOptionsdc = {
    scrollwheel: false,
    zoom: 16,
    center: myLatlngDC,
    streetViewControl: false,
    draggable: true,
    mapTypeControl:false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  var mapOptionsboston = {
    scrollwheel: false,
    zoom: 16,
    center: myLatlngBOS,
    streetViewControl: false,
    draggable: true,
    mapTypeControl:false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map1 = new google.maps.Map(document.getElementById('map-canvas-nyc'),mapOptionsnyc);

  map2 = new google.maps.Map(document.getElementById('map-canvas-dc'),mapOptionsdc);

  map3 = new google.maps.Map(document.getElementById('map-canvas-boston'),mapOptionsboston);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  var marker = new google.maps.Marker({
      position: loc,
      map: map,
      title:"PBDW Architects",
      animation: google.maps.Animation.DROP,
      icon: '../wp-content/themes/pbdw/images/pbdwpin.png'
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    window.open('https://www.google.com/maps/place/PBDW+Architects/@40.751512,-73.985486,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259a38659c76d:0xbf6bd067e5fa6151');
  });

  function toggleBounce() {
    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
 
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();

    google.maps.event.trigger(map, "resize");

    map.setCenter(center);

  });
});