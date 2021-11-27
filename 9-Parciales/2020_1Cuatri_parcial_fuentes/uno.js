/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

//La suma acumulada. txtIdSuma.value=acumulador;
//Promedio: txtIdPromedio.value=acumulador/contador;

function mostrar()
{
   // variables
   // contador de productos
   // acumulador precio (productos por precio)
   var tipo ;
   var precio;
   var cantidad;
   var marca;
   var fabricante;
   //tengo que ingresar 5 productos
   var vueltas;

   // van a contar cuantos productos // no necesito usar estos si uso cantidad es por cada iteracion
   var contadorBarjijo; 
   var contadorAlcohol;
   var contadorJabon;
   // va a totalizar cada tipo de producto ingresado por el precio ingresado para ser utilizado en el promedio
   var subtotal;
   var totalBarbijo;
   var totalAlcohol;
   var totalJabon;
   // CAMBIAR LO DEL totales el acumulador de cada producto podria ser cantidad por precio.
   //a.
   var precioAlchoholBarato;
   var cantidadAlchoholBarato;
   var fabricanteAlcoholBarato;
   var mensajePuntoA;
   //b.
   var promedioCompra; // del producto con compra de mas unidades
   var tipoMasCantidad;
   var mensajePuntoB;
   //c.
   var mensajePuntoC;
   


   contadorBarjijo = 0;
   contadorJabon = 0;
   contadorAlcohol = 0;
   tipoMasCantidad = 0;
  
   totalBarbijo = 0;
   totalAlcohol = 0;
   totalJabon= 0;

   precioAlchoholBarato = 1001; //lo inicializo con el valor mayor posible
   cantidadAlchoholBarato = 0;
   fabricanteAlcoholBarato = 0;

   //a. creo un bucle for para pedir los primeros 5 productos
 
   
   for (vueltas=0;vueltas<5;vueltas=vueltas+1)
   {
   //pido el tipo de producto
      tipo = prompt ("Ingrese tipo de producto: barbijo - jabon -alcohol");
      //valido que sean barbijo, jabon o alchohol
      while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
      {
         tipo = prompt("Ingresado invalido. Ingrese tipo de producto: barbijo - jabon -alcohol");
      }
      
   //pido la cantidad
      cantidad = prompt ("Ingrese la cantidad maxima 1000: ");
      cantidad = parseInt(cantidad);
      //valido la cantidad
      while (IsNaN(cantidad) || cantidad > 1000)
      {
         cantidad = prompt("Ingrese una cantidad valida. Maximo 1000");
      }

   //pido el precio
      precio = prompt("Ingrese el precio (desde 100 hasta 300): ");
      precio= parseInt(precio);
      //while (precio < 100 || precio > 300 || isNaN(precio))
      //valido que sea valido
      while (precio < 99 || precio > 301)  // aca excluyo los menores a 100 y los mayores a 300
      {
         precio = prompt("Ingrese un valor valido(desde 100 hasta 300)");
      }
      
   //pido marca
      marca = prompt("Ingrese la marca: ");
   //pido fabricante
      fabricante = prompt ("Ingrese el fabricante");

   //armo un switch para depende del tipo de producto
      switch(tipo)
      {
         case "alcohol":

            contadorAlcohol = contadorAlcohol + cantidad;
            
            if (precio < precioAlchoholBarato) // es como encontrar un maximo y un minino
            {
               precioAlchoholBarato = precio; // cuando encuentra el minimo precio actualiza los datos del alcohol mas barato cantidad y fabricante
               cantidadAlchoholBarato = cantidad;
               fabricanteAlcoholBarato = fabricante;
            }

            subtotal = precio * cantidad;
            totalAlcohol = subtotal + totalAlcohol;
            mensajePuntoA = ("Del mas barato de los alcoholes, la cantidad es: "+ cantidadAlchoholBarato + "y el fabricante es: " + fabricanteAlcoholBarato );
         
         break;

         case "barbijo":
            
            contadorBarjijo = contadorAlcohol + cantidad;
            subtotal = precio * cantidad;
            totalBarbijo = totalBarbijo + subtotal;

         break;

         default: // aca va a ser jabon
// c. Mostrar cantidad de jabones 
            contadorJabon = contadorJabon + cantidad;
            subtotal = precio * cantidad;
            totalJabon = subtotal + totalJabon;

            mensajePuntoC = ("Cantidad de jabon: "+ contadorJabon);
         break;
      }
    
   }  
// b. del tipo con mas unidades el promedio de compra
   if (contadorAlcohol>contadorBarjijo && contadorAlcohol>contadorJabon) 
   {
      //alcohol mayor
      tipoMasCantidad = "alcohol";
      promedioCompra = totalAlcohol / contadorAlcohol;
     

   }else
   {  
      if (contadorBarjijo>contadorJabon && contadorBarjijo > contadorAlcohol)
      {
         tipoMasCantidad = "barbijo";
         promedioCompra = totalBarbijo / contadorBarjijo;
         
      } 
      else 
      {
         tipoMasCantidad = "jabon";
         promedioCompra = totalJabon / contadorJabon;
         
      }

   }
   mensajePuntoB = ("El tipo de producto con mas unidades es : " + tipoMasCantidad +  " Y el promedio de compra es: " + promedioCompra);

/*
  switch (true) 
   {
      case contadorAlcohol> contadorBarjijo && contadorAlcohol > contadorJabon:
         alert("el mayor es alcohol");
         break;
      case contadorBarjijo > contadorAlcohol && contadorBarjijo > contadorJabon:
         alert("el mayor es barbijo");
         break;
      case contadorJabon > contadorAlcohol && contadorJabon > contadorBarjijo:
         alert("el mayor es jabon");
         break;
      default:
         break;
   }
*/
   alert( " a." + mensajePuntoA + " b." + mensajePuntoB + " c." + mensajePuntoC ) ;

   // Analizar el caso
   //la primera parte pedir los datos y validarlos
   // "Debemos realizar la carga de 5(cinco) productos " tengo que generar un bucle que se repita 5 veces
   // De esos 5 productos necesito tipo, precio, cantidad, marca, fabricante) valido todo segun corresponda
   // eligo for porque se cuantas son las iteraciones. cantidad de repeticiones
   
   
// informar
   //a. tengo que reconocer si el producto es alcochol, y recordar el precio, la cantidad y el fabricante del mas barato (el que tiene el menor precio)

   //b. del tipo con mas unidades (las unidades mas grandes ) el promedio por compra: el acumulador de barbijos dividido en las unidades de compre
   //acumular las cantidad de unidades de cada tipo, y del acumulador mayor, calcular el promedio por compra
   
   //c. cuantas unidades de jabon en total? me tengo que vijar el contador de unidades de productos


   




	
}
