var parametro

document.getElementById("parametro").addEventListener("click", function(){
     parametro = document.getElementById("entrada").value;
    ejecutarFuncion(entrada);
});


function ejecutarFuncion() {
    var contenedor = document.getElementById("resultado");
    
  
    for (var i = 1; i <= parametro; i++) {
      var boton = document.createElement("button");
      boton.innerHTML = "Boton " + i;
      boton.className = "btn btn-secondary";
      boton.style.marginRight = "30px";
      boton.style.marginTop = "30px";
      boton.style.width = "150px";
      boton.style.marginRight = "10px";
      boton.style.float = "left";
      contenedor.appendChild(boton);
  
      
    }
  }
  
  
  
  function limpiar() {
    var contenedor = document.getElementById("resultado");
    var botones = contenedor.getElementsByTagName("button");
    var entrada = document.getElementById("entrada");
  
    while (botones.length > 0) {
      contenedor.removeChild(botones[0]);
    }
  
    entrada.value = "";
  }
  
  document.getElementById("limpiar").addEventListener("click", limpiar);