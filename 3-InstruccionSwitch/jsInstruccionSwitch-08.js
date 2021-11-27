/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
Al selecionar un destino , 
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
---Los destinos son:
<select id ="txtIdDestino">
<option value="Bariloche">Bariloche</option>
<option value="Cataratas">Cataratas</option>
<option value="Mar del plata">Mar del plata</option>
<option value="Ushuaia">Ushuaia</option>
*/




function mostrar()
{
	//txtIdDestino
	var destinoIngresado = document.getElementById("txtIdDestino").value ;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frio."
			break;
		default:
			mensaje = "Hace calor."	 //Cataratas + Mar del plata
			break;
		
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
