/* Nombre y Apellido: Luciana Irrera Div G
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
----Modificado: el Math.floor(Math.radom)*11 puede traer tambien cero, utilizo
el Math.round que redondea para arriba y no para abajo como el Math.floor(). Al mensaje
le agrego el numero de la nota-----
*/


function mostrar()
{
	
	var nota;
	
	nota = Math.round(Math.random()* 9 + 1);

	if (nota > 4)
	{
		if (nota > 8)
		{
			alert("Excelente. Su nota es: " + nota);
		} else
		{
			alert("Aprobó. Su nota es: " + nota);
		}
	}
	else 
	{
		alert("Vamos, la próxima se puede. Su nota es: " + nota);
	}

	var nota;
	var mensaje;
	
	nota = Math.round(Math.random()* 9 + 1);

	if (nota > 4)
	{
		if (nota > 8)
		{
			mensaje = "Excelente. Su nota es: " + nota;
		} else
		{
			mensaje = "Aprobó. Su nota es: " + nota;
		}
	}
	else 
	{
		mensaje = "Vamos, la próxima se puede. Su nota es: " + nota;
	}

	alert(mensaje);
	
	/* numero = Math.floor(Math.random() * 11); //
	
	if(numero > 4)
	{
		if(numero == 9 || numero== 10)
		{
			alert("Excelente");
		}
		else
		{
			alert ("Aprobó");
		}
	}
	else
	{
		alert ("Vamos, la próxima se puede");
	}
	*/	

}//FIN DE LA FUNCIÓN



/* Return a random number between 0 (inclusive) and 1 (exclusive):

Math.random();
Math.floor(Math.random() * 10); aca muestra de 0 al 9 *11 muestra de 0 al 10

*/