/*
Nombre Luciana
Apellido Irrera
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el nuevo sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//txtIdSueldo
	//Primero identificar los datos de entrada, necesito el sueldo

	var sueldo;
	var aumento;
	var porcentaje;
	var nuevoSueldo;

	// para calcular el nuevo sueldo debo sumarle al sueldo original el aumento
	//pido porcentaje
	
	sueldo = txtIdSueldo.value
	sueldo = parseInt(sueldo);
	porcentaje = prompt("Ingrese el porcentaje: ");
	//para calcular el porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100 

	aumento = sueldo * porcentaje /100;
	nuevoSueldo = sueldo + aumento ;
	//txtIdResultado
	txtIdResultado.value = nuevoSueldo;
	

}
