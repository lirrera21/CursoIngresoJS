/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
---Los destinos son:
<select id ="txtIdDestino">
<option value="Bariloche">Bariloche</option>
<option value="Cataratas">Cataratas</option>
<option value="Mar del plata">Mar del plata</option>
<option value="Ushuaia">Ushuaia</option>

*/

function mostrar()
{
	var destinoIngresado;
	var puntoCardinal;

	destinoIngresado = document.getElementById("txtIdDestino").value ;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			puntoCardinal = "Oeste";
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Mar del plata":
			puntoCardinal = "Este";
			break;
		default: // el valor que va a tomar destinoIngresado es acotado, sino son las anteriores es Ushuahia
			puntoCardinal = "Sur";	
			break;

	}

	alert("Su destino se encuentra en " + puntoCardinal)

}//FIN DE LA FUNCIÓN