var localStorageOtsikko = JSON.parse(localStorage.getItem("varastoOtsikko"));
document.getElementById("otsikko").innerHTML = localStorageOtsikko;

var ending = JSON.parse(localStorage.getItem("varastoDateTime"));
console.log(ending);
var end = ending.join(" ");
var end = Date.parse(end);
console.log(end);


//luodaan ajastin-funktio, asetetaan alku ja loppu 
var x = setInterval(function () {
  var start = new Date().getTime();
  var distance = end - start;
  console.log(distance);


  document.getElementById("d").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("h").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("m").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("s").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);


  if (distance < 0) { //kun timerin aika on lopussa 
    clearInterval(x);//timer pysähtyy 
    var localStorageMessage = JSON.parse(localStorage.getItem("varastoViesti")); document.getElementById("laskuri").innerHTML = localStorageMessage;
  }
  1000;
});


/*
document.getElementById("otsikko").style.visibility = "hidden";
//alkuperäisessä laskurissa otsikko piiloutui
*/











