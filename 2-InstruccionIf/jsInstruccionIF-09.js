/* Nombre y Apellido: Luciana Irrera Div G
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

/*
Return a random number between 0 (inclusive) and 1 (exclusive):
Math.random();
Math.floor(Math.random() * 10); aca muestra de 0 al 9 *11 muestra de 0 al 10
*11 + 1 = muestra numeros del 1 al 10
----Modificado para traer valores random del 0 al 100 y solo mostrar
si son del 1 al 10-------
*/ 


function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero;
	
	//numero = Math.floor(Math.random() * 11);
	
	//numero = Math.floor(Math.random()); da cero

	//numero = Math.floor(Math.random() * 11 + 1);
	
	numero = Math.round(Math.random()*100);
	if (numero > 0 && numero <11)
	{
		alert(numero);
	}else
	{
		alert("No es un numero del 1 al 10");
	}

			

}//FIN DE LA FUNCIÓN