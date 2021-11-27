/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	/*
	1- La inicializacion en funcion de la lógica
	2- lógica correcta 
	3- modificar lógica correctamente
	*/
	// esta estructura cuando no se la cantidad de vueltas y le doy cuando terminar con el ingrese si 
	/* var respuesta;
	respuesta= "si"; //1

	while(respuesta== "si")  //2 en el parcial cuando no se la cantidad de veces que iterara
	{
		altura = prompt ("Ingrese altura");
		altura = parseInt(altura);

		respuesta = prompt ("ingrese si para continuar") //3
	}
	*/





	/* esta estructura cuando se cuantas vueltas 
	var altura; 

	var contadorDeVueltas;  // me va a permitir iterar y pedir la cantidad que yo quiero
	contadorDeVueltas = 0; // 1- o empieza en cero o termina en cero

	while (contadorDeVueltas <3) //2
	{
		altura = prompt ("Ingrese altura");
		altura = parseInt(altura);

		contadorDeVueltas= contadorDeVueltas + 1; //3
		console.log(contadorDeVueltas);
	}
	console.log ("el contador finaliza: " + contadorDeVueltas)
	*/

	/*var password;
	
	password=prompt ("Ingrese su clave"); //1

	while (password != "Hola Mundo") //2
	{
		password = prompt("Error, reingrese clave"); //3
	}
	
	console.log ("la clave ingresada es: " + password);
	alert ("Bienvenido");
	/*

	//no se cuantas veces va a mostrar el mensaje de error, puede que ni una si ingresa de una correcta

	// password aca password tiene Hola, Mundo sino nunca hubiera salido del while

	// while termina arriba y preguntamos por distinto 
	//y el if termina al final preguntamos por igual igual
	*/
	
	// resultado del ejercicio

	var contador;
	contador = 0; // 1ro la inicializo con un valor que me asegure que ingresa en el while

	while ( contador < 10) // 2do le pongo la cantidad de iteraciones que deseo que haga
	{
		contador = contador + 1; // 3ro aumento el contador para asegurarme de salir del bucle
		console.log (contador);
	}
	
	
	
	
	
	
	
	
	/* var numeroIngresado;
	var contador;
	var suma; // acumulador le cambio el nombre a suma
	var numeroIngresado;
	var promedio;

	contador = 0; 
	suma = 0;

	while(contador < 3)
	{
		alert("estoy adentro del while");
		contador=contador +1;
		numeroIngresado = prompt("ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		suma =  suma + numeroIngresado;
		alert(suma);

		//el acumulador necesita esta definido en cero y es quien puede guardar los valores que ingreso

	}
	
	alert('estoy afuera del while');
	// la cuenta del promedio es afuera del while porque sino la hace por cada vuelta
	// promedio = suma/ 3; // porque se que va a ingresar 3 numeros o
	promedio = suma / contador ; // si le cambio la condicion de las vueltas con / contador sirve para todos

	alert (promedio); */

  /* clave con while
	var clave;
	var claveSecreta;

	claveSecreta = "1234";
	//clave = "1234"; // el problema es que habia inicializado clave con cero, funciono cuando la inicialice con 1234, pero es mejor no inicializarla
	
	
	clave = prompt("ingrese la clave")
	
	while (clave != claveSecreta )
	{
		clave = prompt("error reingrese la clave");
	}
		alert ("Bienvenido");
/*
// cantidad n de numeros ingresados:

	var numeroIngresado;
	var contador;
	var suma; // acumulador
	var promedio;
	var respuesta;

	contador = 0; // el contador ya no lo usamos para ingresar o mantenernos en el while
	respuesta = "s"; // 1ra la respuesta = s para asegurarme de entrar en el bucle while
	suma = 0; // acumulador

	while(respuesta == "s") // 2da parte me asguro el ingreso
	{
		numeroIngresado = prompt("ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		suma = suma + numeroIngresado;

		contador = contador + 1;
		respuesta= prompt ("ingrese s para continuar o n para salir. ") // 3ra parte modifico el valor para salir
	}
	promedio = suma/contador;
	alert (promedio);
*/

}//FIN DE LA FUNCIÓN