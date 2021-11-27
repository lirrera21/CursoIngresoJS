/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:   
Al ingresar una edad debemos informar si la 
persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	var edadIngresada;
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	 if(edadIngresada>12 && edadIngresada<18)
	 {
		alert("Usted es adolescente");
	 } 
	


}//FIN DE LA FUNCIÓN