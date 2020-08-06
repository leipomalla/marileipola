//var data = {};
function aseta() {  //html:ssä on onclick-elementti, joka kutsuu tätä funktiota
    event.preventDefault() //TÄMÄ estää sivun uudelleen lataamisen

    var title = document.getElementById("otsikkoconfig").value;// lomakkeen data talteen muuttuja kerrallaan
    var titleJSON = JSON.stringify(title);//muutetaan JSONiksi
    localStorage.setItem("varastoOtsikko", "titleJSON"); //talletetaan localStorageen
    //console.log(localStorage.getItem("otsikko"));
    

    var date = document.getElementById("dateconfig").value;
    var dateJSON = JSON.stringify(date);
    localStorage.setItem("varastoDate", "dateJSON");

    var time = document.getElementById("timeconfig").value;
    console.log(time);
    var timeJSON = JSON.stringify(time);
    localStorage.setItem("varastoTime", "timeJSON");

    var viesti = document.getElementById("viesticonfig").value;
    var messageJSON = JSON.stringify(viesti);
    localStorage.setItem("varastoViesti", "messageJSON");


}





