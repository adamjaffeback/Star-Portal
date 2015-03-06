var userAgent = navigator.userAgent;
var isMobile = false;

if ( userAgent.match( /Android|iPhone|iPad|Mobile/ ) !== null ) {
  isMobile = true;
}

if ( isMobile ) {

  document.body.style.background = 'transparent';
  document.getElementsByTagName('html')[0].style.background = 'red';

}
