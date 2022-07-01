function mobil() {
  var x = document.getElementById("navegador");
    if (x.className === "menu") {
      x.className += " responsive";
    } 
    else {
      x.className = "menu";
    }
}