/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:

al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/

function mostrar()
{
  	var numero ; // para contar 10 repeteciones
	var i;

	numero = 0;

	for(i=0;i<10;i++)
	{
		numero = numero + 1;
		document.write( "<br>"+ numero );
	}
	
	
	
	
	
	/*for(i=0;0>i<10;i++) NUNCA NUNCA NUNCA PERO NUNCA JAJAJAJA EL CONSOLE LOG LLEGO A 9999 antes que pudiera cerrar el chrome
	{
		console.log(i);	
	}*/ 

	/* for(i=0;i<10;i++)
	{
		alert(i);
	} */ // este muestra numeros asendentes del 0 al 9


	
}