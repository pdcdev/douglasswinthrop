jQuery(document).ready(function($) {


var map;

var myLatlngNYC = new google.maps.LatLng(40.7549469,-73.9795346);

var myLatlngDC = new google.maps.LatLng(38.9011035,-77.0396397);

var myLatlngBOS = new google.maps.LatLng(42.3579214,-71.0707528);

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


  var mapOptionsNYC = {
    scrollwheel: 0,
    streetViewControl: 0,
    draggable: true,
    zoom: 15,
    center: myLatlngNYC,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0,
    // mapTypeControlOptions: {
    //     mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    //   },
    //   mapTypeId: MY_MAPTYPE_ID
    };

  var mapOptionsDC = {
    scrollwheel: 0,
    streetViewControl: 0,
    draggable: true,
    zoom: 15,
    center: myLatlngDC,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0,
    // mapTypeControlOptions: {
    //     mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    //   },
    //   mapTypeId: MY_MAPTYPE_ID

    };

  var mapOptionsBOS = {
    scrollwheel: 0,
    streetViewControl: 0,
    draggable: true,
    zoom: 15,
    center: myLatlngBOS,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0,
    // mapTypeControlOptions: {
    //     mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    //   },
    //   mapTypeId: MY_MAPTYPE_ID

    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);


    var mapNYC = new google.maps.Map(document.getElementById('map-canvas-nyc'), mapOptionsNYC, 'Custom Style');

    var mapDC = new google.maps.Map(document.getElementById('map-canvas-dc'), mapOptionsDC, 'Custom Style');

    var mapBOS = new google.maps.Map(document.getElementById('map-canvas-boston'), mapOptionsBOS, 'Custom Style');

    var styledMapOptions = {
        name: 'Custom Style'
    };

  
      // Resize stuff...
      //   google.maps.event.addDomListener(window, "resize", function() {
      //      var center = map.getCenter();
      //      google.maps.event.trigger(map, "resize");
      //      map.setCenter(center); 
      //   });

  var markerNYC = new google.maps.Marker({

      position: myLatlngNYC,

      map: mapNYC,

      title:"douglass winthrop",
        icon: 'images/dw.png'

  });

  var markerDC = new google.maps.Marker({

      position: myLatlngDC,

      map: mapDC,

      title:"douglass winthrop",
        icon: 'images/dw.png'

  }); 


  var markerBOS = new google.maps.Marker({

      position: myLatlngBOS,

      map: mapBOS,

      title:"douglass winthrop",
        icon: 'images/dw.png'

  });

  
  // map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

  //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

 } // end function

   

    google.maps.event.addDomListener(window, 'load', initialize);

});