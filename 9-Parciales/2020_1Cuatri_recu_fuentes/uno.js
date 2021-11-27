/*Nombre:Luciana
Apellido: Irrera
Division: G
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
***MODIFICADO: CAMBIE LAS VUELTAS QUE LO HABIA PUESTO EN 2 PARA TESTEAR Y ELIMINE UNA CONDICION EN EL IF DE EL QUE TIENE MAS UNIDADES"
*/
function mostrar()
{
	var productoIngresado;
	var precioIngresado;
	var cantidadUnidades;
	var marcaIngresado;
	var fabricanteIngresado;
	var precioMasCaroJabon;
	var cantidadMasCaroJabon;
	var fabricanteMasCaroJabon;
	var banderaDelPrimero;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var tipoConMasCantidad;
	var acumuladorJabon;
	var acumuladorBarbijo;
	var acumuladorAlcohol;
	var promedioCompra;
	


	banderaDelPrimero = 0;
	acumuladorJabon=0;
	acumuladorBarbijo=0;
	acumuladorAlcohol=0;
	
		
	for(i=0;i<5;i++)
	{
		productoIngresado = prompt("Ingrese nombre de producto >>> barbijo - jabon - alcohol"); //validar por nombre
		productoIngresado = productoIngresado.toLowerCase();
		while ( productoIngresado != "barbijo" && productoIngresado !="jabon" && productoIngresado !="alcohol")
		{
			productoIngresado = prompt(" Dato inválido. Ingrese nombre de producto >>> barbijo - jabon - alcohol");
			productoIngresado = productoIngresado.toLowerCase();
		}
		
		precioIngresado = prompt("Ingrese el precio del producto: "); //validar el precio (validar entre 100 y 300)
		precioIngresado = parseInt(precioIngresado);
		while ( precioIngresado< 100 || precioIngresado>300 || isNaN(precioIngresado) )
		{
			precioIngresado = prompt("Dato inválido. Ingrese el precio del producto: "); 
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de Unidades: "); //(no puede ser 0 o negativo y no debe superar las 1000 unidades)
		cantidadUnidades = parseInt(cantidadUnidades);
		while (cantidadUnidades <= 0 || cantidadUnidades>1000 || isNaN(cantidadUnidades))
		{
			cantidadUnidades = prompt("Dato inválido. Ingrese la cantidad de Unidades: "); //(no puede ser 0 o negativo y no debe superar las 1000 unidades)
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marcaIngresado = prompt("Ingrese la marca: ");
		while(isNaN(marcaIngresado)==false)
		{
			marcaIngresado = prompt("Dato inválido. Ingrese la marca: ");
		}

		fabricanteIngresado = prompt ("Ingrese el fabricante: ");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado = prompt("Dato inválido. Ingrese la marca: ");
		}

		switch (productoIngresado)
		{
			case "jabon":
				if (precioMasCaroJabon < precioIngresado || banderaDelPrimero == 0 )
				{
					precioMasCaroJabon = precioIngresado;
					cantidadMasCaroJabon = cantidadUnidades;
					fabricanteMasCaroJabon = fabricanteIngresado;
					
					acumuladorJabon = acumuladorJabon + cantidadUnidades;
					totalJabon = precioIngresado *cantidadUnidades;
					banderaDelPrimero = 1;
				}
			break;

			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades;
				totalBarbijo = precioIngresado * cantidadUnidades;
			break;

			default: 
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				totalAlcohol = precioIngresado * cantidadUnidades;
			break;
		}

		
	}


	
	if (acumuladorAlcohol>=acumuladorBarbijo && acumuladorAlcohol>=acumuladorJabon) 
   {
      tipoConMasCantidad = "alcohol";
      promedioCompra = totalAlcohol / acumuladorAlcohol; 

   }
   else
   {  
      if (acumuladorBarbijo>acumuladorJabon) // && acumuladorBarbijo> acumuladorAlcohol)
      {
         tipoConMasCantidad = "barbijo";
         promedioCompra = totalBarbijo / acumuladorBarbijo;
         
      } 
      else 
      {
         tipoConMasCantidad = "jabon";
         promedioCompra = totalJabon / acumuladorJabon;
         
      }

   }

	mensajeA = "a. Del más caro de los jabones, la cantidad de unidades es: " + cantidadMasCaroJabon + " y el fabricante es : " + fabricanteMasCaroJabon; 
	mensajeB = " b. El promedio de compra del producto " + tipoConMasCantidad + " tiene un promedio de: " + promedioCompra ;
   	mensajeC = " c. La unidades de barbijo que se compraron fueron: " + acumuladorBarbijo; 
	   
	document.write ("<br>" + mensajeA + "<br>"+ mensajeB + "<br>"+ mensajeC );
}
