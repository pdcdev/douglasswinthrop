jQuery(document).ready(function($){function e(){function e(){null!=c.getAnimation()?c.setAnimation(null):c.setAnimation(google.maps.Animation.BOUNCE)}var i=[{featureType:"water",stylers:[{color:r},{visibility:"on"}]},{featureType:"landscape",stylers:[{color:"#eee"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#4a4a4a"},{weight:.4}]},{featureType:"poi",stylers:[{color:p}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:r}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:p},{weight:0},{visibility:"off"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:p},{weight:4}]},{featureType:"road",elementType:"labels.text",stylers:[{color:"#000000"},{weight:.5}]},{elementType:"labels.text",stylers:[{color:"#444444"},{weight:.1}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"off"},{weight:.4},{color:"#f9f9f9"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:p}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{color:"#636363"},{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}],n={scrollwheel:!1,zoom:16,center:o,streetViewControl:!1,draggable:!0,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,s]},mapTypeId:s},y={scrollwheel:!1,zoom:16,center:a,streetViewControl:!1,draggable:!0,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,s]},mapTypeId:s},m={scrollwheel:!1,zoom:16,center:l,streetViewControl:!1,draggable:!0,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,s]},mapTypeId:s};map1=new google.maps.Map(document.getElementById("map-canvas-nyc"),n),map2=new google.maps.Map(document.getElementById("map-canvas-dc"),y),map3=new google.maps.Map(document.getElementById("map-canvas-boston"),m);var g={name:"Custom Style"},f=new google.maps.StyledMapType(i,g),c=new google.maps.Marker({position:loc,map:t,title:"PBDW Architects",animation:google.maps.Animation.DROP,icon:"../wp-content/themes/pbdw/images/pbdwpin.png"});google.maps.event.addListener(c,"click",function(){window.open("https://www.google.com/maps/place/PBDW+Architects/@40.751512,-73.985486,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259a38659c76d:0xbf6bd067e5fa6151")}),t.mapTypes.set(s,f)}var t,o=new google.maps.LatLng(40.7549469,-73.9795346),a=new google.maps.LatLng(38.9011035,-77.0396397),l=new google.maps.LatLng(42.3579214,-71.0707528),s="custom_style",i="#eeeeee",p="#aaaaaa",n="#888888",r="#ffffff",y="#ff8b00";google.maps.event.addDomListener(window,"load",e),google.maps.event.addDomListener(window,"resize",function(){var e=t.getCenter();google.maps.event.trigger(t,"resize"),t.setCenter(e)})});