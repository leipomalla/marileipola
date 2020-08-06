var aboutme = document.getElementById("navigation_link_first");
//var cv = document.getElementById("navigation_link_second");
var code = document.getElementById("navigation_link_third");
var contact = document.getElementById("navigation_link_fourth");

function aboutmeSiirra() {
  location.href = "aboutme.html";
}
/*function cvSiirra() {
  location.href = "MariLeipolaResume08_19.pdf";
}*/
function selectedSiirra() {
  location.href = "selected.html";
}
function contactSiirra() {
  location.href = "contact.html";
}

aboutme.onclick = aboutmeSiirra;
//cv.onclick = cvSiirra;
code.onclick = selectedSiirra;
contact.onclick = contactSiirra;
