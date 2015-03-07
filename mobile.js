var userAgent = navigator.userAgent;
var isMobile = false;

if ( userAgent.match( /Android|iPhone|iPad|Mobile/ ) !== null ) {
  isMobile = true;
}

if ( isMobile ) {

  // Makes lines show since users can't hover
  var lines = document.getElementsByClassName('lines');
  for (var i = 0; i < lines.length; i++) {
    lines[i].style.opacity = 1;
  };

  // Stop Twinkling

  // Move labels under constellations
}
