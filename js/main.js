//to control the navigation bar with the upper right button
function toggl(){
  x=document.getElementById('div2');
  if (x.style.display == 'flex'){
    x.style.display="none";
  }
  else{
    x.style.display="flex";
  }
}
// ********************************************************
//to hide the horizontal navigation bar when size is large scree:
function checkWindowSize() {
  const element = document.getElementById('div2');
  if (window.innerWidth > 1024 && element) {
      element.style.display="none";
  }
}
// Listen for the resize event
window.addEventListener('resize', checkWindowSize);
//**************************************************
//for the modal:
// Get the modal:
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal:
var span = document.getElementsByClassName("close")[0];
//1st modal appears when the page is loaded:
window.onload = function() {
  modal.style.animation = "fadeIn 2s";
  modal.className="newModal";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// Handle ESC key (key code 27): when ESC is clicked, close modal
document.addEventListener('keyup', function(e) {
  if (e.keyCode == 27) {
    modal.style.display = "none";
}
});
// https://www.w3schools.com/howto/howto_css_modals.asp
// ***********************************************************

//modal for showing the certificates:
function openimage(certificate,button) {
  x=document.getElementById(certificate);
  y=document.getElementById(button);
  x.style.animation = "fadeIn 1s";
  x.style.display="block";
  x.className="newModalCert";
  y.classList.toggle('active');
}
//closing the modal:
function closeImage(certificate,button){
  certificate=document.getElementById(certificate);
  certificate.style.display='none';
  y=document.getElementById(button);
  y.classList.remove('active'); // Remove active state from button
}
// Handle ESC key (key code 27): when ESC is clicked, close certificates
document.addEventListener('keyup', function(e) {
  if (e.keyCode == 27) {
    x.style.display = "none";
    y.classList.remove('active'); // Remove active state from button
  }
});
