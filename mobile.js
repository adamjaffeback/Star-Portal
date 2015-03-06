var userAgent = navigator.userAgent;
var isMobile = false;

(function () {
  var searchStrings = ['Android', 'iPhone', 'iPad', 'Mobile'];

  for (var i = 0; i < searchStrings.length; i++) {
    if( userAgent.match( searchStrings[i] ) !== null ) {
      isMobile = true;
      break;
    } 
  };
}());

if( isMobile ) {
  alert("I'm mobile!");
} else {
  alert("I'm not mobile!");
}
