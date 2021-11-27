/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:   
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edadIngresada;
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	if(edadIngresada < 17)
	{ 
		if(edadIngresada >13 && edadIngresada <17)
		{
			alert("Adolescente");
		}else
		{
			alert("Niño");
		}
	} 
	else
	{
		alert("Mayor de edad");
	}
		



}//FIN DE LA FUNCIÓN