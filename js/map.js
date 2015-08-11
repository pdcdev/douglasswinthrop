jQuery(document).ready(function($) {
        
  var map;
  var map2;
  var map3;
  
  var loc = new google.maps.LatLng(40.7549469,-73.9795346);
  var loc2 = new google.maps.LatLng(38.9011035,-77.0396397);
  var loc3 = new google.maps.LatLng(42.3579214,-71.0707528);

  var MY_MAPTYPE_ID = 'custom_style';

  var lightgray = "#eeeeee";
  var mediumgray = "#aaaaaa";
  var darkgray = "#888888";
  var white = "#ffffff";
  var black = "#000000";

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
                    color: "#000000"
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
                    visibility: "off"
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
                    visibility: "off"
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
      draggable: false,
      mapTypeControl:false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    // map 2 ///////////////////////

    var featureOpts2 = [{
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
                    color: "#000000"
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
                    visibility: "on"
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
                    visibility: "on"
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
                    visibility: "off"
                }]
            }, {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }];

    var mapOptions2 = {
      scrollwheel: false,
      zoom: 16,
      center: loc2,
      streetViewControl: false,
      draggable: false,
      mapTypeControl:false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    // map 3 ///////////////////////

    var featureOpts3 = [{
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
                    color: "#b2b2b2"
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
                    visibility: "off"
                }]
            }, {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }];

    var mapOptions3 = {
      scrollwheel: false,
      zoom: 16,
      center: loc3,
      streetViewControl: false,
      draggable: false,
      mapTypeControl:false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    map2 = new google.maps.Map(document.getElementById('map-canvas2'),mapOptions2);
    map3 = new google.maps.Map(document.getElementById('map-canvas3'),mapOptions3);

    var styledMapOptions = {
      name: 'Custom Style'
    };
    var styledMapOptions2 = {
      name: 'Custom Style2'
    };
    var styledMapOptions3 = {
      name: 'Custom Style3'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    var customMapType = new google.maps.StyledMapType(featureOpts2, styledMapOptions2);
    var customMapType = new google.maps.StyledMapType(featureOpts3, styledMapOptions3);

    var marker1 = new google.maps.Marker({
        position: loc,
        url: "https://www.google.com/maps/place/535+5th+Ave,+New+York,+NY+10017/@40.7549469,-73.9795346,17z/data=!3m1!4b1!4m2!3m1!1s0x89c258fe2eb4f14f:0xd42764f3a3d7ff94",
        map: map,
        title:"Douglass Winthrop",
        icon: 'http://i.imgur.com/HI1UiKn.png'
    });

    var marker2 = new google.maps.Marker({
        position: loc2,
        url: "https://www.google.com/maps/place/888+17th+St+NW+%23205,+Washington,+DC+20006/@38.9011035,-77.0396397,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7b7bbfbb76e45:0x75ff110aaae0d26d",
        map: map2,
        title:"Douglass Winthrop",
        icon: 'http://i.imgur.com/HI1UiKn.png'
    });

    var marker3 = new google.maps.Marker({
        position: loc3,
        url: "https://www.google.com/maps/place/121+Mt+Vernon+St,+Boston,+MA+02108/@42.3579214,-71.0707528,17z/data=!3m1!4b1!4m2!3m1!1s0x89e3709ee1df6781:0x3f69e428397bc2ce",
        map: map3,
        title:"Douglass Winthrop",
        icon: 'http://i.imgur.com/HI1UiKn.png'
    });

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    map2.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    map3.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

        //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map2.getCenter();
            google.maps.event.trigger(map2, "resize");
            map2.setCenter(center);
        });

        //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map3.getCenter();
            google.maps.event.trigger(map3, "resize");
            map3.setCenter(center);
        });

        google.maps.event.addListener(marker1, 'click', function() {
            window.open(marker1.url);
        });

        google.maps.event.addListener(marker2, 'click', function() {
            window.open(marker2.url);
        });

        google.maps.event.addListener(marker3, 'click', function() {
            window.open(marker3.url);
        });


  }

  google.maps.event.addDomListener(window, 'load', initialize);

});



