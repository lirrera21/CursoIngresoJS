/*Nombre: Luciana 
Apellido: Irrera
Division: G
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero = 0;
	//respuesta = "si";

	do
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado< numeroMinimo || (banderaDelPrimero == 0))
		{
			numeroMinimo = numeroIngresado;

		}
		if (numeroIngresado > numeroMaximo || (banderaDelPrimero == 0)) 
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = 1;
		}

		respuesta=confirm("¿Desea ingresar otro numero? ");

		
	}while(respuesta == true);
	//txtIdMaximo
	//txtIdMinimo
		document.getElementById("txtIdMaximo").value = numeroMaximo;
		document.getElementById("txtIdMinimo").value = numeroMinimo;
	

	
	/* codigo antes de la explicacion de bandera
	
	//declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//var contador; //
	//contador = 0;
	
	//iniciar variables
	banderaDelPrimero= 0; //"es el primero";
	respuesta="si";
	numeroMaximo = 0;
	numeroMinimo = 0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero !=0)
		{
			switch(true)
			{
				case numeroMaximo > numeroIngresado:
					numeroMaximo = numeroIngresado;
				break;
				case numeroMinimo < numeroIngresado:
					numeroMinimo = numeroIngresado;
				break;
			}
		}
		else
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1;
		}
	
		respuesta=prompt("¿Desea ingresar otro numero? si-no");
	}
	//txtIdMaximo
	//txtIdMinimo
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

 */
}//FIN DE LA FUNCIÓN
