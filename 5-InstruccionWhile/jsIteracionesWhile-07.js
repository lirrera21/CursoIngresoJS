/*
Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si") 
	{
		numeroIngresado = prompt ("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		contador= contador + 1;
		acumulador =  acumulador + numeroIngresado;
		
		console.log(acumulador); // para testearlo y los valores que se fueron ingresando
		console.log(contador); // para testear y comprobar las iteraciones

		respuesta=prompt ("¿Desea continuar? Ingrese si o no");

	}


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/ contador;
	// Para validar el promedio
	console.log(acumulador);
	console.log(contador);
	//

}//FIN DE LA FUNCIÓN