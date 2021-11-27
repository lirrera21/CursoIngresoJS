/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave."); //Pido el dato

	//la primera vez solo debe entrar al bucle si el dato es invalido 

	while (claveIngresada != "utn750" ) 
	{
		claveIngresada = prompt ("Clave invalida, vuelva a ingresar la clave: ");
	}
	alert ("Clave válida. Bienvenido");

	
}//FIN DE LA FUNCIÓN 


//la condicion() del while debe ser verdadera cuando el dato sea invalido
	//opcion 1 cuando el dato no sea valido (mi voto es negativo) ! = no / ! (claveIngresada = "utn750") --pongo la condicion que sea valido y lo niego
	//opcion 2 cuando el dato sea invalido (mi voto es no positivo) claveIngresada != "utn750"
	//cuando el dato es valido la idea es saltarlo al while
/* validaciones: 1ro pido el dato
una vez que lo pedi: valido el dato
si el dato es invalido: informo invalido y vuelvo a pedir el dato y luego lo vuelvo a validar (el flojo del programa
				no avance hasta cuando el dato es valido)
si el dato es valido: ya puedo utilizarlo
pedir la clave
validar si la clave es valida sino volver a pedirla y volver a validarla
y si es valida usarla, decir la clave es correcta */
