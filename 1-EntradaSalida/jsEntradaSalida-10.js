/*
Nombre Luciana
Apellido Irrera
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importe;
	var descuento;
	var porcentaje;
	var importecondesc;
	//txtIdImporte
	importe = txtIdImporte.value;
	importe = parseInt(importe);
	porcentaje = prompt("Ingrese el porcentaje: ")
	//porcentaje = parseInt(porcentaje);

	descuento = importe * (porcentaje /100);

	importecondesc = importe - descuento;
	//txtIdResultado

	txtIdResultado.value = importecondesc;


}
