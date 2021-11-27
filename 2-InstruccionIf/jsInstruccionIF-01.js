/*
Nombre y Apellido:Luciana Irrera Div G
Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	
	//tomo la edad
	// quiero preguntar quien es adolescente
	var edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value ;
	edadIngresada = parseInt(edadIngresada);
	
	//Cuando uno dos If que se cumplen los dos
	if (edadIngresada>12) 
	{
		if (edadIngresada<18)
		{
			alert("adolescente");
		}
		
	}

	// o de esta forma
	if (edadIngresada>12 && edadIngresada<18) 
	{
		alert("adolescente");
	}

	//mostrar quien no es adolescente
	// cuando uno dos If que son uno " o " el otro

	if(edadIngresada>19 || edadIngresada<13)
	{
		alert("no es adolescente");
	}

	if (edadIngresada<18 && edadIngresada>12)
	{
		alert ("es adolescente");
	}else 
	{
		alert("no es adolescente");
	}
	

	// o con if y el if negado

	if (edadIngresada<18 && edadIngresada>12)
	{
		alert ("es adolescente");
	}
	if (!(edadIngresada<18 && edadIngresada>12))
	{
		alert("no es adolescente");
	}

	//la negacion del y se transforma en un o con los simbolos invertidos

	if (edadIngresada>17 || edadIngresada<13)
	{
		alert("no es adolescente");
	}
	// esta ultima es la mejor para resolver los no adolescentes
	
}//FIN DE LA FUNCIÓN