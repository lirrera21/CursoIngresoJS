/*Nombre: Luciana
Apellido: Irrera
Enunciado
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/

function mostrar()
{
	//tomo el mes
	var mesDelAnio;
	var mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value; 

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "el mes de " + mesDelAnio + " tiene 28 días";
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje ="el mes de " + mesDelAnio + " tiene 31 días";
			break;
		default:
			mensaje ="el mes de " + mesDelAnio + " tiene 30 días";
			break;
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN