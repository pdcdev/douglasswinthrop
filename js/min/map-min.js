jQuery(document).ready(function($){function e(){var e=[{featureType:"water",stylers:[{color:f},{visibility:"on"}]},{featureType:"landscape",stylers:[{color:"#eee"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#4a4a4a"},{weight:.4}]},{featureType:"poi",stylers:[{color:"#000000"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:f}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:p},{weight:0},{visibility:"off"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:p},{weight:4}]},{featureType:"road",elementType:"labels.text",stylers:[{color:"#000000"},{weight:.5}]},{elementType:"labels.text",stylers:[{color:"#444444"},{weight:.1}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"off"},{weight:.4},{color:"#f9f9f9"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:p}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"off"},{color:"#ffffff"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{color:"#636363"},{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}],y={scrollwheel:!1,zoom:16,center:s,streetViewControl:!1,draggable:!1,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,a]},mapTypeId:a},n=[{featureType:"water",stylers:[{color:f},{visibility:"on"}]},{featureType:"landscape",stylers:[{color:"#eee"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#4a4a4a"},{weight:.4}]},{featureType:"poi",stylers:[{color:"#000000"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:f}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:p},{weight:0},{visibility:"off"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:p},{weight:4}]},{featureType:"road",elementType:"labels.text",stylers:[{color:"#000000"},{weight:.5}]},{elementType:"labels.text",stylers:[{color:"#444444"},{weight:.1}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"on"},{weight:.4},{color:"#f9f9f9"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:p}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"administrative",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{color:"#636363"},{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}],m={scrollwheel:!1,zoom:16,center:i,streetViewControl:!1,draggable:!1,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,a]},mapTypeId:a},T=[{featureType:"water",stylers:[{color:f},{visibility:"on"}]},{featureType:"landscape",stylers:[{color:"#eee"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#4a4a4a"},{weight:.4}]},{featureType:"poi",stylers:[{color:"#b2b2b2"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:f}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:p},{weight:0},{visibility:"off"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:p},{weight:4}]},{featureType:"road",elementType:"labels.text",stylers:[{color:"#000000"},{weight:.5}]},{elementType:"labels.text",stylers:[{color:"#444444"},{weight:.1}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"off"},{weight:.4},{color:"#f9f9f9"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:p}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{color:"#636363"},{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}],g={scrollwheel:!1,zoom:16,center:r,streetViewControl:!1,draggable:!1,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,a]},mapTypeId:a};t=new google.maps.Map(document.getElementById("map-canvas"),y),l=new google.maps.Map(document.getElementById("map-canvas2"),m),o=new google.maps.Map(document.getElementById("map-canvas3"),g);var c={name:"Custom Style"},b={name:"Custom Style2"},d={name:"Custom Style3"},u=new google.maps.StyledMapType(e,c),u=new google.maps.StyledMapType(n,b),u=new google.maps.StyledMapType(T,d),w=new google.maps.Marker({position:s,url:"https://www.google.com/maps/place/535+5th+Ave,+New+York,+NY+10017/@40.7549469,-73.9795346,17z/data=!3m1!4b1!4m2!3m1!1s0x89c258fe2eb4f14f:0xd42764f3a3d7ff94",map:t,title:"Douglass Winthrop",icon:"http://roccopiscatello.com/douglasswinthrop/images/dw2.png"}),v=new google.maps.Marker({position:i,url:"https://www.google.com/maps/place/888+17th+St+NW+%23205,+Washington,+DC+20006/@38.9011035,-77.0396397,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7b7bbfbb76e45:0x75ff110aaae0d26d",map:l,title:"Douglass Winthrop",icon:"http://roccopiscatello.com/douglasswinthrop/images/dw2.png"}),h=new google.maps.Marker({position:r,url:"https://www.google.com/maps/place/121+Mt+Vernon+St,+Boston,+MA+02108/@42.3579214,-71.0707528,17z/data=!3m1!4b1!4m2!3m1!1s0x89e3709ee1df6781:0x3f69e428397bc2ce",map:o,title:"Douglass Winthrop",icon:"http://roccopiscatello.com/douglasswinthrop/images/dw2.png"});t.mapTypes.set(a,u),l.mapTypes.set(a,u),o.mapTypes.set(a,u),google.maps.event.addDomListener(window,"resize",function(){var e=t.getCenter();google.maps.event.trigger(t,"resize"),t.setCenter(e)}),google.maps.event.addDomListener(window,"resize",function(){var e=l.getCenter();google.maps.event.trigger(l,"resize"),l.setCenter(e)}),google.maps.event.addDomListener(window,"resize",function(){var e=o.getCenter();google.maps.event.trigger(o,"resize"),o.setCenter(e)}),google.maps.event.addListener(w,"click",function(){window.open(w.url)}),google.maps.event.addListener(v,"click",function(){window.open(v.url)}),google.maps.event.addListener(h,"click",function(){window.open(h.url)})}var t,l,o,s=new google.maps.LatLng(40.7549469,-73.9795346),i=new google.maps.LatLng(38.9011035,-77.0396397),r=new google.maps.LatLng(42.3579214,-71.0707528),a="custom_style",y="#eeeeee",p="#aaaaaa",n="#888888",f="#ffffff",m="#000000";google.maps.event.addDomListener(window,"load",e)});