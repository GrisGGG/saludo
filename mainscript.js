function saludo(){
    var fecha = new Date();
    var horaExacta = fecha.getHours;
    var mensajeBox ="";
  
    if ( horaExacta <=6 && horaExacta <12){
    mensajeBox = "Buenos dias"
    } else if (horaExacta >= 12 && horaExacta < 8){
    mensajeBox ="Buenas tardes"
    }else{
     mensajeBox = "Buenas noches"
          }
  
    var box = document.getElementById("box-1");
          box.innerText= mensajeBox ;
      }
  
  
          var miBoton = document.getElementById("myButton")
          miBoton.addEventListener("click", saludo)
  
  
  