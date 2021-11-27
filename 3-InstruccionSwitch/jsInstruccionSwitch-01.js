/* Nombre: Luciana 
Apellido: Irrera
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */



function mostrar()
{
	var mesDelAnio;
	var mensaje;

	mesDelAnio= document.getElementById("txtIdMes").value; 

	switch(mesDelAnio)
	{	case "Enero":
			mensaje = "que comiences bien el año!!!";
			break;

		case "Marzo":
			mensaje = "a clases!!!";
			break;

		case "Julio":
			mensaje = "se vienen las vacaciones!!!";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!!!";
			break;

		default:
			mensaje ="No ingreso ni Enero, ni Marzo, ni Julio ni Diciembre";
			break;
	}

	alert(mensaje);

	/* tomo el mes
	if(mesDelAnio =="Enero") 
	{
		mensaje = "que comiences bien el año!!!.";
	}
	else
	{
		if(mesDelAnio=="Marzo")
		{
		mensaje = "a clases!!!.";
		}	
		else
		{
			if(mesDelAnio=="Julio")
			{
			mensaje = "se vienen las vacaciones!!!";
			}
			else
			{
				if(mesDelAnio=="Diciembre")
				{
				mensaje = "Felices fiestas!!!";
				}
			}
		}
	}// fin del if


*/
}