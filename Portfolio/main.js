var aboutme = document.getElementById("navigation_link_first");
//var cv = document.getElementById("navigation_link_second");
var code = document.getElementById("navigation_link_third");
var contact = document.getElementById("navigation_link_forth");

function aboutmeSiirra() {
  location.href =
    "https://public.bc.fi/s1900560/portfolio/portfolio/aboutme.html";
}
/*function cvSiirra() {
  location.href = "MariLeipolaResume08_19.pdf";
}*/
function selectedSiirra() {
  location.href =
    "https://public.bc.fi/s1900560/portfolio/portfolio/selected.html";
}

aboutme.onclick = aboutmeSiirra;
//cv.onclick = cvSiirra;
code.onclick = selectedSiirra;
