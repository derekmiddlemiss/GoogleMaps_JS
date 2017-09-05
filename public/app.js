var initialize = function(){
  var center = { lat: 51.507351, lng: -0.127758 };
  var mapDiv = document.getElementById( 'main-map' );
  var mainMap = new MapWrapper( mapDiv, center, 10 );
  mainMap.addMarker( center );
  mainMap.addClickEvent();
  var bounceButton = document.querySelector( '#button-bounce-markers' );
  bounceButton.addEventListener( 'click', mainMap.bounceMarkers.bind( mainMap ) );
  var aeroGraveyardButton = document.querySelector( '#button-aero-graveyard' );
  aeroGraveyardButton.addEventListener( 'click', mainMap.centerAtAeroGraveyard.bind( mainMap ) );
  var whereNowButton = document.querySelector( '#button-where-now' );
  whereNowButton.addEventListener( 'click', mainMap.whereNow.bind( mainMap ) );
}

window.addEventListener( 'load', initialize );