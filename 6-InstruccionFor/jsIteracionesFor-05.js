/*Nombre: Luciana 
Apellido: Irrera
Div: G


Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	var numeroIngresado;
	var i;

	
	
	for(i=0; numeroIngresado !== 9 ;i++) 
	{
		numeroIngresado = prompt("Ingrese un numero distinto de 9 si desea continuar y 9 si desea cortar");
		numeroIngresado = parseInt(numeroIngresado);
		
	}
	document.write( "<br> cantidad de veces" + i);


	/*var repeticiones;
	var i;

	
	
	for(i=0; i !== 10 ;i++) // tengo que poner != 10 porque va de izquierda a derecha
	{
		i = prompt("Ingrese un numero distinto de 9 si desea continuar y 9 si desea cortar");
		i = parseInt(i);
		
	}
	
	*/
	


}//FIN DE LA FUNCIÓN