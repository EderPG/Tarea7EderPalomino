function loadDocGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableGame(this);
    }
    xhttp.open("GET", "juegos.xml");
    xhttp.send();
  }
  function TableGame(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("game");
    let table="<tr><th>Juego</th><th>Año</th><th>Categoria</th><th>Valoracion</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("gamename")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue +
      "</td><tr>" ;
    }
    document.getElementById("demo").innerHTML = table;
  } //fin primera funcion
  
  function loadDocCells() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableCard(this);
    }
    xhttp.open("GET", "celulares.xml");
    xhttp.send();
  }
  function TableCard(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("phone");
    let table="<tr><th>Modelo</th><th>Año</th><th>Fabricante</th><th>Valoracion</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("phonename")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("developer")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue +
      "</td><tr>" ;
    }
    document.getElementById("demo").innerHTML = table;
    xhttp.close();
  } //fin segunda funcion