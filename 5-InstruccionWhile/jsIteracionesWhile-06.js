/*Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada 
y el promedio.
*/


function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0; 
	acumulador=0; 
	
	while(contador<5)
	{
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	contador++; //contador = contador + 1;
	acumulador =  acumulador + numeroIngresado;
	//console.log(contador);
	//console.log(acumulador);

	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = (acumulador / contador);
	//console.log (acumulador);
	//console.log (contador);
	

}//FIN DE LA FUNCIÓN