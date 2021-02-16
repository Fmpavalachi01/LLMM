const boton = document.getElementById("boton");
boton.onclick = insertarIcono();
function eliminarIcono(elemento){

     elemento.remove();
      }

 function modificarIcono(elemento){
     elemento.innerHTML = "🦈";
 }
 function insertarIcono(){

     //Creamos un nuevo elemento en el documento
const icono = document.createElement("div");
//Le añado al elemento la clase icono
icono.classList.add("icono");
//Añadir al contenido del elemento el icono
icono.innerHTML = "🦅";
//Le asigno una posicion aleatoria
icono.style.left = Math.random() * 100 + "vw";
//Le asigno a cada icono una duración aleatoria
icono.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3s, 5s, 7s

document.body.appendChild(icono);
//Se va a llamar una sola vez a la funcion eliminarIcono
//a los 4 segundos de crearse
//y le va a pasar como parámetro el elemento icono
setTimeout (eliminarIcono, 3000, icono);
setTimeout (modificarIcono, 1500,icono);

}

//Llamo a la funcion cada segundo
setInterval (insertarIcono, 1000);