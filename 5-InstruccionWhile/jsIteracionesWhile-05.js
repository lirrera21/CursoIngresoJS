/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

//txtIdSexo
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLowerCase(); // es como parsear al numero si no es
	
	while (  sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Vuelva a ingresar valor, ingrese f ó m");
		sexoIngresado = sexoIngresado.toLowerCase();
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN
//this.value=this.value.toUpperCase();