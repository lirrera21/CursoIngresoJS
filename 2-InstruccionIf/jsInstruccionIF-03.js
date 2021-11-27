/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:   
Al ingresar una edad debemos informar si la persona 
es mayor de edad, sino informar que es un menor de edad.
*/

//txtIdEdad
function mostrar()
{
	var edadIngresada;
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	 if(edadIngresada > 17)
	 {
		alert("Usted es mayor de edad");
	 } 
	 else
	 {
		alert("Usted no es mayor de edad");
	 }
		


}//FIN DE LA FUNCIÓN