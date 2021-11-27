/*
Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares. 
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	var numeroIngresado ; 
	var respuestaSeguir ; // para preguntar si ingresa o no
	var contadorPositivos; //los contadores 
	var contadorNegativos;
	var contadorCeros;
	var contadorPares; 
	var acumuladorPositivos ; //va a sumar los positivos
	var acumuladorNegativos ; //va a sumar los negativos
	//var resto ; // para saber cuales son pares

	var promedioNegativos;
	var promedioPositivos;
	var diferencia;

	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	//respuestaSeguir = "si";
	
	do
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if( numeroIngresado < 0) 
		{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado; // 1° suma de negativos
			contadorNegativos = contadorNegativos + 1; // 3° cantidad de positivos			
		}
		else 
		{
			if ( numeroIngresado == 0) 
			{
				contadorCeros = contadorCeros + 1; // 5° cantidad de ceros
			}

			acumuladorPositivos = acumuladorPositivos + numeroIngresado; // 2° suma de positivos
			contadorPositivos = contadorPositivos + 1; // 4° cantidad de positivos

		}

		//6. si el resto numeroIngresado%2 es igual a cero es par, y excluyo el cero
		if (numeroIngresado %2 == 0 && numeroIngresado != 0)
		{
			contadorPares = contadorPares + 1;
		}

		respuestaSeguir=confirm("¿Desea ingresar otro numero?");

	}while(respuestaSeguir== true);

	// despues del bucle los promedios y la suma de los numeros obtenidos en el bucle.
	
	//antes de hacer una division tengo que asegurarme que el divisor no sea cero y sea mayor
	if (contadorPositivos != 0 )
	{
		promedioPositivos = acumuladorPositivos / contadorPositivos; // 7.
	} 
	

	if (contadorNegativos != 0 )
	{
		promedioNegativos = acumuladorNegativos / contadorNegativos; // 8.
	} 
	else 
	{
		promedioNegativos = 0; 
	} 
	
	diferencia = acumuladorNegativos - acumuladorPositivos; //9.

	
	// mostrar resultados
	
	/*alert(
		"1-Suma de los negativos:" + + "2-Suma de los positivos."+ +"3-Cantidad de positivos." + +"4-Cantidad de negativos: "+ + "5-Cantidad de ceros: " + +"6-Cantidad de números pares: " + +"7-Promedio de positivos." + +"8-Promedios de negativos:" + +"9-Diferencia entre positivos y negativos, (positvos-negativos): " + +); /*
	*/	
		console.log ("1-Suma de los negativos: " + acumuladorNegativos);
		console.log ("2-Suma de los positivos: " + acumuladorPositivos);
		console.log ("3-Cantidad de positivos: " + contadorPares );
		console.log ("4-Cantidad de negativos:" + contadorNegativos);
		console.log ("5-Cantidad de ceros: " + contadorCeros );
		console.log ("6-Cantidad de números pares: " + contadorPares );
		console.log ("7-Promedio de positivos: " + promedioPositivos );
		console.log ("8-Promedios de negativos: " + promedioNegativos);
		console.log ("9-Diferencia entre positivos y negativos: " + diferencia );
		



 



	/*
	
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	
	var sumaNumeros;
	var resto;
	var promedioNegativos;
	var promedioPositivos;
	

	respuesta="si";
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0 ;
	contadorPares = 0 ;
	

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingresar número: ");
		numeroIngresado = parseInt(numeroIngresado);
		

		if (numeroIngresado < 0) //Punto 1 negativos
		{
			sumaNegativos = sumaNegativos + numeroIngresado;

			contadorNegativos = contadorNegativos +1;//Punto 4
			//promedio suma/ cantidad

			if (numeroIngresado == 0) //Punto 5
			{
				contadorCeros = contadorCeros + 1;
			}
		}
		else // positivos: en el else entran los numeros que no son menores a 0
		{
			//suma de positivos
			sumaPositivos = sumaPositivos + numeroIngresado; //Punto 2
			//cantidad de positivos
			contadorPositivos = contadorPositivos +1; //Punto 3
			//promedio suma/cantidad ? aca o afuera 
		}

		resto = numeroIngresado%2;
		if(numeroIngresado !=0 && resto ==0)
		{
			contadorPares = contadorPares+1;
		}

		respuesta=prompt("¿Desea ingresar otro numero? si-no");

	}//fin del while
	// tratar de resolver de a uno.... 

	if (contadorPositivos != 0 && contadorNegativos!=0) 
	{
		sumaNumeros = (sumaPositivos - sumaNegativos);
		promedioNegativos = (sumaPositivos /contadorPositivos);
		promedioPositivos = (sumaNegativos / contadorNegativos);
	}
	else 
	{
		promedioPositivos = "No ingresaste positivos";
		promedioNegativos = "No ingresaste negativos";
		
	}
	
	console.log(sumaNegativos);
	console.log(sumaPositivos);
	console.log(sumaNumeros);
	console.log(contadorCeros);
	console.log(promedioNegativos);
	console.log(promedioPositivos);
	console.log(contadorPares);

	// 
  //alert( "1-Suma de los negativos." + sumaNegativos +" 2-Suma de los positivos." + sumaPositivos +)
	/* document.write(
		"1-Suma de los negativos." + sumaNegativos +" 2-Suma de los positivos." + sumaPositivos +" 3-Cantidad de positivos." + contadorPositivos+" 4-Cantidad de negativos." + contadorNegativos+" 5-Cantidad de ceros." + contadorCeros+" 6-Cantidad de números pares."+" 7-Promedio de positivos." + (sumaPositivos /contadorPositivos)+" 8-Promedios de negativos." + (sumaNegativos / contadorNegativos) +" 9-Diferencia entre positivos y negativos, (positvos-negativos)" );
*/

	}//FIN DE LA FUNCIÓN