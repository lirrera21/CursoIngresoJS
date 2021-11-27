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

	for(i=10;i>0;i--)
	{
		numero = numero + 1;
		document.write( "<br>"+ numero );

	}

	// si quiero que aparezca del -1 al -10 numero = numero -1 ;
}