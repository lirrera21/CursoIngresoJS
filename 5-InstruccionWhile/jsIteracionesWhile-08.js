/*Nombre: Luciana 
Apellido: Irrera
Division: G
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	//var contador;
	var numero;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	//contador=0;
	sumaPositivos=0; //acumulador de positivos
	multiplicacionNegativos=1; //acumulador de negativos porque como es multiplicacion inicio con 1 para que no me de cero
	respuesta="si";


	while( respuesta == "si")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if (numero > 0) 
		//  positivos
		{
			sumaPositivos = sumaPositivos + numero ; 
			console.log ("positivo");
		}else // negativos
		{
			multiplicacionNegativos = multiplicacionNegativos * numero ;
			console.log("negativo");
		}
			
		respuesta = prompt ("¿Desea ingresar otro numero? si-no")
		respuesta = respuesta.toLowerCase();
	}

// aca voy a mostrar la suma de los positivos
	document.getElementById("txtIdSuma").value = sumaPositivos;
// aca voy a mostrar la multiplicacion de los Negativos
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN