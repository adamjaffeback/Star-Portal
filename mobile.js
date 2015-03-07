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
  document.body.style['-moz-animation'] = 0;
  document.body.style['-ms-animation'] = 0;
  document.body.style['-o-animation'] = 0;
  document.body.style['-webkit-animation'] = 0;
  document.body.style['animation'] = 0;

  // Move labels under constellations
  var labels = document.getElementsByTagName('p');
  for (var i = 0; i < labels.length; i++) {
    labels[i].style.top = '5em';
    labels[i].style.left = '7em';
  };

  var anchors = document.getElementsByTagName('p');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.fontSize = '1.1em';
  };
} else {
  // reveal button
  document.getElementById('reveal').style.top = '1.5em';
}

var toggleLines = function() {
  var glyph = document.getElementsByClassName('glyphicon glyphicon-eye-open') ;

  // if the glyphicon is eye-open
  if( glyph[0] !== undefined ) {
    // show the lines
    var lines = document.getElementsByClassName('lines');
    for (var i = 0; i < lines.length; i++) {
      lines[i].style.opacity = 1;
    };

    // change the glyph
    glyph[0].className = 'glyphicon glyphicon-eye-close'; 
  } else {
    // hide the lines
    var lines = document.getElementsByClassName('lines');
    for (var i = 0; i < lines.length; i++) {
      lines[i].style.opacity = 0;
    };

    // change the glyph
    document.getElementsByClassName('glyphicon glyphicon-eye-close')[0].className = 'glyphicon glyphicon-eye-open'; 
  }
};
