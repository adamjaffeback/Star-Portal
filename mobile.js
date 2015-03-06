var userAgent = navigator.userAgent;
var isMobile = false;

if ( userAgent.match( /Android|iPhone|iPad|Mobile/ ) !== null ) {
  isMobile = true;
}

if ( isMobile ) {

  var lines = document.getElementsByClassName('lines');

  console.log('lines', lines);

  for (var i = 0; i < lines.length; i++) {
    lines[i].style.opacity = 1;
  };

}
