/*Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{

	var repeticiones;
	var i;

	repeticiones = prompt("ingrese el número de repeticiones");


	for(i=0;i<repeticiones;i++)
	{
		document.write( "<br>"+ "Hola UTN FRA" );
	}


}//FIN DE LA FUNCIÓN