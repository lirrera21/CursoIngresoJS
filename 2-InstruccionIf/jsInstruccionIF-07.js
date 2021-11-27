/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:   
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar 
el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

//txtIdEdad
//estadoCivil

function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18 && estadoCivil !== "Soltero")
	{
		alert('Es muy pequeño para NO ser soltero.');
	}


}//FIN DE LA FUNCIÓN