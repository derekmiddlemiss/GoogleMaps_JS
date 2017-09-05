var MapWrapper = function( container, coords, zoom ){
  this.googleMap = new google.maps.Map( container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function( coords ) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  marker.info = new google.maps.InfoWindow({
    content: "This is at " + coords.lat + ", " + coords.lng
  })
  google.maps.event.addListener( marker, 'click', function(){
    marker.info.open( this.googleMap, marker );
  })

  this.markers.push( marker );
},

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener( this.googleMap, 'click', function(event){
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    this.addMarker( position );
  }.bind( this ) );
},

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach( function( marker ){ 
    marker.setAnimation( google.maps.Animation.BOUNCE );
  });
},

MapWrapper.prototype.centerAtAeroGraveyard = function(){
  var aeroGraveyardPosition = { lat: 32.152289 , lng: -110.837631 };
  this.googleMap.setCenter( aeroGraveyardPosition );
  this.googleMap.mapTypeId = google.maps.MapTypeId.SATELLITE
  this.googleMap.setZoom( 16 );
},

MapWrapper.prototype.whereNow = function(){
  if ( 'geolocation' in navigator ){

    navigator.geolocation.getCurrentPosition( function( position )  {
      var currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.googleMap.setCenter( currentPosition );
    }.bind( this ));

  } else {

    alert( "Current position not available" );

  }
}


