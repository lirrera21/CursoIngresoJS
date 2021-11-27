/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:   
Al ingresar una edad 
solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//estoy buscando 
	var edadIngresada;
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	/* if(edadIngresada<13 || edadIngresada>17)
	 {
		alert("Usted No es adolescente");
	 }
	 */

	if (edadIngresada > 13){
		 if (edadIngresada <17) {
			 alert("Es adolescente");
		 }
	 }
	
	


}//FIN DE LA FUNCIÓN