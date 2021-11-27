/*Nombre: Luciana
Apellido: Irrera
Enunciado

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/


function mostrar()
{
	//tomo la hora
	//txtIdHora

	var horaDelDia;
	var mensaje ;

	horaDelDia = document.getElementById("txtIdHora").value;

	switch(horaDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana";
			break;
		
		default:
			mensaje = "No es de mañana";
			break;
	}


	alert(mensaje);


	//Otra forma de validar el switch _1
	var horaDelDia;
	var mensaje ;
	var rangoDia;

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);

	rangoDia = [7 , 8 , 9, 10 ,11] ; 
	
	switch(rangoDia)
	{
		case rangoDia [0]: //valido por el orden en la lista que arme en la variable
		case rangoDia [1]:
		case rangoDia [2]:
		case rangoDia [3]:
		case rangoDia [4]:
			mensaje = "Es de mañana";
			break;
		default:
			mensaje = "No es de mañana";
			break;
	}

	alert(mensaje);
	// termina la otra formas 1

	//Otra prueba para que el Switch valida si la condicion es verdadera o false _2
	var horaDelDia;
	var mensaje ;
	
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia); //hay que parsearlos

	switch(true)
	{
			case (horaDelDia > 7 && horaDelDia < 11) :
			mensaje = "Es de mañana";
			break;
		
		default:
			mensaje = "No es de mañana";
			break;
	}

	alert(mensaje);
	// termina la otras formas 2
	
 //no comente las tres formas porque cuando pruebo valido que cambas resulten igual


}//FIN DE LA FUNCIÓN