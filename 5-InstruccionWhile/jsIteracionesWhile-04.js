/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

//txtIdNumero
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("Ingrese un número entre 0 y 9.");

	while (numeroIngresado > 9 ) // > 10 hace valido el 10 tambien 
	{
		numeroIngresado = prompt ("Ese no fue un número valido.Ingrese un número entre 0 y 9. ")
		
	}

	document.getElementById("txtIdNumero").value = numeroIngresado ; // aca va a mostrar numeros de 0 al 9
	
}//FIN DE LA FUNCIÓN