/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque
<SELECT id="selecContinente">
 <OPTION >America</OPTION>
 <OPTION >África</OPTION>
 <OPTION >Asia</OPTION>
<OPTION >Europa</OPTION>
<OPTION >Oceania</OPTION>

<SELECT id="selecPago">
<OPTION >Débito</OPTION>
<OPTION >Crédito</OPTION>
<OPTION >Efectivo</OPTION>
<OPTION >MercadoPago</OPTION>
<OPTION >Cheque</OPTION>
<OPTION >Leliq</OPTION>

*/

function mostrar()
{
    function mostrar()
{
// id="Marca"

var continente;
var cantidadDias;
var valorDias;
var subTotal;
var metodoPago;
var valorPorcentaje; 
var total;


continente = document.getElementById("Marca").value;
cantidadDias = prompt("¿Cuantos dias desea viajar?");
cantidadDias = parseInt(cantidadDias);
metodoPago = prompt("¿Cual es el método de pago?");
valorDias = 100 ; 
subTotal = valorDias * cantidadDias ;

// hay que arrancar con los metodos de pago en lugar que con los continentes para poder cumplir
// con la ultima condicion

switch(continente)
{
    case "América": /*Si es América tiene un 50% de descuento y si ademas paga por 
    débito se le agrega un 10% mas de descuento
    */
        switch(metodoPago)
        {
            case "débito":
            case "debito": // la comparacion es doble literal tampoco va a entrar si se escribe en mayúscula
                valorPorcentaje = 60;
            break;
            default:
                valorPorcentaje = 50;
            break;
        }
    
    break;
    case "África":
        switch(metodoPago)
        {
            case "mercadoPago":
            case "efectivo":
                valorPorcentaje = 75 ;
            break;
            default:
                valorPorcentaje = 60 ;
            break;
        }
    
    break;
        /*Europa tiene un 20% de descuento 
        y si ademas paga por débito se le agrega un 15% , 
        por mercadoPago un 10% y cualquier otro medio 5% */
    case "Europa":
        switch(metodoPago)
        {
            case "debito":
               valorPorcentaje = 35;
            break;
            case "mercadopago":
                valorPorcentaje = 30;
            break;
            default:
                valorPorcentaje = 25;
            break;
        }
    break;
         
    /*cualquier otro continente tiene un recargo del 20%. */
    default:
        valorPorcentaje = -20 ; 
    break;

}


total = subTotal *((100 - valorPorcentaje) /100) ;  


alert( "El total a abonar es : " + total );


}

}
