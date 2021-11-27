/* Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/



function mostrar()
{
  // creo las variables
  var respuesta;
  var tipoProducto;
  var cantidadProducto;
  var precioProducto;
  var contadorProductos;
  var acumuladorProductos;
  var total;
  var subTotal;
  var valorPorcentaje;
  var banderaMaximoPrecio;
  var banderaMaximaCantidad;
  var maximaCantidad;
  var tipoDelMasCantidad;
  var maximaPrecio;
  var tipoDelMasCaro;
  var mensajeA;
  var mensajeB;
  var mensajeD;
  var mensajeF;
 
 
  

  
  respuesta = true; 
  contadorProductos = 0;
  acumuladorProductos = 0;
  banderaMaximoPrecio = 0;
  banderaMaximaCantidad = 0;

  
  while ( respuesta == true) // 
  {
    
    tipoProducto = prompt("Ingrese un producto >>> arena-cal-cemento");
    tipoProducto = tipoProducto.toLowerCase();
    while(tipoProducto != "arena" && tipoProducto !="cal" && tipoProducto != "cemento")
    {
      tipoProducto= prompt("Dato inválido. Por favor ingrese un producto >>> arena , cal o cemento")
      tipoProducto = tipoProducto.toLowerCase();
    }
    
    
    cantidadProducto = prompt ("Ingrese la cantidad de bolsas");
    cantidadProducto = parseInt(cantidadProducto);
    while( isNaN(cantidadProducto))
    {
      cantidadProducto = prompt ("Dato no valido ingrese nuevamente. ");
      cantidadProducto = parseInt (cantidadProducto);
    }

    precioProducto =  prompt ("Ingrese el precio");
    precioProducto = parseInt (precioProducto);
    while ( precioProducto < 0  || precioProducto == 0  || isNaN(precioProducto))
    {
      precioProducto =  prompt ("Dato inválido. Ingrese el precio");
      precioProducto =  parseInt (precioProducto);
    }
      
   if (maximaCantidad < cantidadProducto || banderaMaximaCantidad == 0)
    {
      maximaCantidad =  cantidadProducto;
      tipoDelMasCantidad = tipoProducto;
      banderaMaximaCantidad = 1 ;
    }

    if (maximaPrecio < precioProducto || banderaMaximoPrecio == 0)
    {
      maximaPrecio = precioProducto; 
      tipoDelMasCaro = tipoProducto ;
      banderaMaximoPrecio = 1 ;
    }

    contadorProductos = contadorProductos + cantidadProducto;
    
    acumuladorProductos =  acumuladorProductos + (cantidadProducto*precioProducto);

    
    respuesta = confirm("¿Desea continuar?");
    
  }

 


  subTotal = acumuladorProductos;

  if( contadorProductos < 10) 
  {
    valorPorcentaje = 0;
   
  }
  else 
  {
    valorPorcentaje = 15;

    if (contadorProductos > 30)
    {
      valorPorcentaje = 25;
    }
  }

  total = subTotal * ( (100 - valorPorcentaje) /100);

  mensajeA = " a. El precio total a pagar sin descuento es: " + subTotal;
  // mensaje b.
  if ( total == subTotal)
  {
    mensajeB = "Usted no tuvo descuento";
  }
  else 
  {
    mensajeB = " b. El precio con descuento es: " + total ;
  }

  mensajeD = " d. El tipo de producto con mas cantidad de bolsas es: " + tipoDelMasCantidad ;

  mensajeF = " f. El nombre del producto mas caro es: " + tipoDelMasCaro ;

  document.write ("<br>"+ mensajeA + "<br>" + mensajeB +"<br>" + mensajeD + "<br>" + mensajeF);

}