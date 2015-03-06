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

  document.body.style.background = 'blue';
  document.getElementsByTagName('html')[0].style.background = 'red';

}
