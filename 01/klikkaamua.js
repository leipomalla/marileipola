<!doctype html>
<html lang="fi">
<head>
  <meta charset="utf-8">
  <title>Laskuri</title>
  <style>
    * { box-sizing: border-box; }

    main {
      text-align: center;
    }

    #laskuri {
      width: 300px;
      height: 300px;
      background-color: black;
      color: white;
      margin: 50px auto;
      font-size: 200px;
      padding: 30px 0px;
      border-radius: 50%;
      cursor: pointer;
    }
    #nollaus {
      width: 200px;
      height:100px;
      background-color: black;
      color: white;
      margin: 50px auto;
      font-size: 50px;
      padding: 20px 0px;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <main>
    <div id='laskuri'>0</div>
    <div id='nollaus'>Nollaa</div>
    <div id='aktiivinen'>Klikkaa mua!</div>
    
    <script>
      var laskuri = document.getElementById('laskuri');
      var arvo = parseInt(laskuri.innerHTML);
      var aktiivinen = document.getElementById('aktiivinen');
      

      function kasvata() {
        // kasvata laskurin arvoa ja päivitä se sivulle
        arvo = arvo + 1;
        laskuri.innerHTML = arvo;      
        asetaTaustaVari();
      }

      function asetaTaustaVari() {
        // aseta taustaväri laskurin arvon perusteella:
        // parillinen: sininen, pariton: punainen
        if (arvo % 2 == 0) {
          laskuri.style.backgroundColor = 'blue';
          } else {
            laskuri.style.backgroundColor = 'red';
          }
 }

 function nollaa () {
   // Nollaa-painiketta painaessa laskurin arvo palaa nollaksi
 arvo = 0;
 laskuri.innerHTML = arvo;
 laskuri.style.backgroundColor = 'red';
 }

 function klikkaus () {
     // Klikkaa mua -painikkeen teksti muuttuu muotoon Klikattu
     arvo = Klikattu;
     aktiivinen.innerHTML = arvo;
 }

 
      laskuri.onclick = kasvata;
      nollaus.onclick = nollaa;
      aktiivinen.onclick = klikkaus;
    </script>

    </main>
  </body>
  </html>

