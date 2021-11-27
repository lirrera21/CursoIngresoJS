/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según 
la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
--"txtIdEstacion"
"Invierno"
"Verano"
"Otoño"
"Primavera"
--"txtIdDestino"
"Bariloche"
"Cataratas"
"Mar del plata"
"Cordoba"
*/


//txtIdEstacion

function mostrar()
{
	var estacion;
	var destino;
	var mensaje;

	estacion = document.getElementById("txtIdEstacion").value ;
	destino = document.getElementById("txtIdDestino").value ;

	//en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "se viaja"
					break;
				default:
					mensaje = "no se viaja"	
					break;
			}	
			break;
	// en Verano: Se viaja a Mar del plata y Cataratas solamente	
		case "Verano":
			switch (destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "se viaja"
					break;
				default:
					mensaje = "no se viaja"
					break;
			}
			break;
	//primavera: solo no se viaja a Bariloche
		case "Primavera":
			switch(destino) 
			{
				case "Bariloche":
					mensaje = "se viaja"
					break;
				default:
					mensaje = "no se viaja"
					break;
			}
			break;

	// en Otoño: Se viaja a todos los destinos.
			default:
				mensaje = "se viaja"
				break;
	}

	alert("A " + destino + " " + mensaje + " en " + estacion + ".");

}//FIN DE LA FUNCIÓN