/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	/* como creo una variable? var por ahora no usar let
	la sintaxis de crear es var elNombre ; 
	*/
	var mensajeBienvenida; // declaro la variable
	var numero;
	var boolean;

	alert(mensajeBienvenida); //muestro la variable sin nada guardado
	//se asigna lo que esta del lado derecho es el valor de lo que le asigno lo que esta a la izquierda
	mensajeBienvenida = "Bienvenido al curso de ingreso";  // texto string
	numero = 2; // entero
	boolean = true; //boolean 

	alert(mensajeBienvenida); //muestro la variable ya iniciada
	alert(numero);
	alert(boolean);
	alert("Esto funciona de maravilla"); // el alert de la consigna
	
}

