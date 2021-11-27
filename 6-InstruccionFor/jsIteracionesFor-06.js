/*Nombre: Luciana 
Apellido: Irrera
Div: G


Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var i;
	var numeroIngresado;
	var contadorPares;
	var numerosParesEncontrados;
	

	contadorPares = 0;
	numeroIngresado = prompt ("Ingrese un número: ");

	for (i=0;i<numeroIngresado;i++)
	{
		if (i%2 == 0 && i !== 0)
		{
			numerosParesEncontrados = i; // creo otra variable para dejar claro que va a contener i
			document.write("<br>" + numerosParesEncontrados );
			contadorPares = contadorPares +1;	
		}		
	}

	document.write ( "<br>" + "Cantidad de números pares: " contadorPares);

}//FIN DE LA FUNCIÓN