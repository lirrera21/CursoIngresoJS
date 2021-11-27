/* Nombre: Luciana 
Apellido: Irrera
Div: G
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 
10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 
10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 
10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

***********Modificado le cambie el nombre a la variable porcentaje a valorPorcentaje
porque es el valor que tendra el porcentaje de aumento o de descuento.
Cuando no tiene ni descuento ni aumento el valor de esa variable sera cero**********

--"txtIdEstacion"
"Invierno"
"Verano"
"Otoño"
"Primavera"
--"txtIdDestino"
"Bariloche"
"Cataratas"
"Mar del plata"
"Cordoba"
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioBase;
	var valorPorcentaje; // le cambie el nombre a la varibale de porcentaje a valorPorcentaje 
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value ;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	precioBase = 15000;



	switch (estacionIngresada) 
	{		
		/*en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 
		10% Mar del plata tiene un descuento del 20% */

		case "Invierno":
			switch(destinoIngresado)
			{				
				case "Bariloche":
					valorPorcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					valorPorcentaje = 10;
					break;
				default: // lo que entra en el default es mdq
					valorPorcentaje = 20;
					break;
			}
			break;

		/*en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 
		10% Mar del plata tiene un aumento del 20% */
		
		case "Verano":
			switch(destinoIngresado) 
			{
				case "Bariloche":
					valorPorcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					valorPorcentaje = -10;
					break;
				default: //lo que queda es mdq
					valorPorcentaje = -20;
					break;
			}
			break;
		/*en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 
	    10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
			
		default: //Primavera y Otoño entran en el default
			switch(destinoIngresado)
			{		
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					valorPorcentaje = -10;
					break;
				default: // sin descuento Cordoba
					valorPorcentaje = 0;
					break;
			}
			break;
	}
	
	precioFinal = precioBase * (100-valorPorcentaje)/100 ;

	alert ("El valor total es " + precioFinal);

}//FIN DE LA FUNCIÓN