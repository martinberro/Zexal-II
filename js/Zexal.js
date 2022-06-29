function myFunction() {
          var x = document.getElementById("menu_bar");
          if (x.className === "") {
            x.className += " responsive";
          } else {
            x.className = "";
          }
        }