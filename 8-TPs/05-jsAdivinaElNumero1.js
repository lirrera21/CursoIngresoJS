/*
Nombre: Luciana
Apellido: Irrera
Division: G

Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto 
o si “se pasó…”  del número secreto.
*******Modificado: modifique que el numero random aparezca en la funcion comenzar - cuando apretamos el 
boton comenzar. Y elimine la leyenda de la diferencia ya que el numero***********************
*/

var numeroSecreto; 
var numeroIngresado;
var cuentaIntentos;
var mensaje;

// txtIdNumero
function comenzar()
{
  numeroSecreto=Math.floor((Math.random() * 100) + 1);
  //numeroSecreto=Math.floor((Math.random() * 10) + 1);**Lo probe con numeros del 1 al 10**
	cuentaIntentos = 0
}
  

function verificar()
{
  
  numeroIngresado = parseInt(numeroIngresado);
  
  numeroIngresado = document.getElementById("txtIdNumero").value ;

  cuentaIntentos = cuentaIntentos + 1 ;
  
	if(numeroIngresado == numeroSecreto)
  {
    mensaje = ("Usted es un ganador!!! en " + cuentaIntentos + " intentos");
  }else 
  {
      if(numeroIngresado < numeroSecreto)
      {
        mensaje = "Faltan " ;
      }else
      {
        mensaje = "Te pasaste";
      }
  }

	alert(mensaje);
  document.getElementById("txtIdIntentos").value = cuentaIntentos ;
}