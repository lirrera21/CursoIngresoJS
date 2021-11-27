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
  var maximaCantidad;
  var maximaPrecio;
  var tipoDelMasCaro; 
  var tipoDelMasCantidad;
  var banderaDelPrimero;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  

  // inicializo las variables necesarias 
  respuesta = true; //respuesta = "si"; // cambio para probar lo que vimos hoy
  contadorProductos = 0;
  acumuladorProductos = 0;
  banderaDelPrimero = 0; 

  
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
    
    contadorProductos = contadorProductos + cantidadProducto;
    
    acumuladorProductos =  acumuladorProductos + (cantidadProducto*precioProducto);

    banderaDelPrimero = 1 ;
    respuesta = confirm("¿Desea continuar?");
    
  }

  subTotal = acumuladorProductos;
  valorPorcentaje = 0;
  total = subTotal * ( (100 - valorPorcentaje) /100);

  mensajeA = " a. El precio total a pagar sin descuento es: " + subTotal;
  

  document.write ("<br>"+mensajeA );
  
  


  
  /*
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
  var maximaCantidad;
  var maximaPrecio;
  var nombreDelMasCaro; // tipoDelMasCaro
  var nombreDelMasCantidad;
  var banderaDelPrimero;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  

  // inicializo las variables necesarias 
  respuesta = true; //respuesta = "si"; // cambio para probar lo que vimos hoy
  contadorProductos = 0;
  acumuladorProductos = 0;
  banderaDelPrimero = 0; 

  // while con respuesta
  while ( respuesta == true) // 
  {
    // adentro un while de calidacion de validacion de dato tipo de producto
    tipoProducto = prompt("Ingrese un producto >>> arena-cal-cemento");
    tipoProducto = tipoProducto.toLowerCase();

    while(tipoProducto != "arena" && tipoProducto !="cal" && tipoProducto != "cemento")
    {
      tipoProducto= prompt("Dato inválido. Por favor ingrese un producto >>> arena , cal o cemento")
      tipoProducto = tipoProducto.toLowerCase();
    }
    
    // cantidad de bolsas, parsein y validacion de isNaN?

    cantidadProducto = prompt ("Ingrese la cantidad de bolsas");
    cantidadProducto = parseInt(cantidadProducto);
    while( isNaN(cantidadProducto))
    {
      cantidadProducto = prompt ("Dato no valido ingrese nuevamente. ");
      cantidadProducto = parseInt (cantidadProducto);
    }


    contadorProductos = contadorProductos + cantidadProducto;

    if (maximaCantidad < cantidadProducto || banderaDelPrimero == 0)
    {
      maximaCantidad =  cantidadProducto;
      nombreDelMasCantidad = tipoProducto;

    }

  // precio por bolsa mayor a 0 + isNaN
    precioProducto =  prompt ("Ingrese el precio");
    precioProducto = parseInt (precioProducto);

    while ( precioProducto < 0  || precioProducto == 0  || isNaN(precioProducto))
    {
      precioProducto =  prompt ("Dato inválido. Ingrese el precio");
      precioProducto =  parseInt (precioProducto);
    }

    if (maximaPrecio < precioProducto || banderaDelPrimero == 0)
    {
      maximaPrecio = precioProducto; // igual no me pido el precio maximo 
      nombreDelMasCaro = tipoProducto ;

    }
    
    
    acumuladorProductos =  acumuladorProductos + (cantidadProducto*precioProducto);

    banderaDelPrimero = 1 ;
    respuesta = confirm("¿Desea continuar?");
    //respuesta =  prompt("Desea continuar? si-no");
    //respuesta = respuesta.toLowerCase();

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
  if ( total == subTotal)
  {
    mensajeB = "Usted no tuvo descuento";
  }
  else 
  {
    mensajeB = " b. El precio con descuento es: " + total ;
  }
  
  mensajeC = " d. El tipo de producto con mas cantidad de bolsas es: " + nombreDelMasCantidad ;

  mensajeD = " f. El nombre del producto mas caro es: " + nombreDelMasCaro;

  console.log(mensajeA + mensajeB + mensajeC + mensajeD);
  
 */ 
}
