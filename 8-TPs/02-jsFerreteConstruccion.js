/*
Nombre: Luciana
Apellido: Irrera
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 //txtIdLargo
 //txtIdAncho
 //(2 veces el largo+ 2 veces el Ancho )*3 porque se alambra con 3 hilos
    var largo;
    var ancho;
    var alambreSimple;
    var alambreTotal;

    largo = txtIdLargo.value;
    largo = parseInt(largo);
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    alambreSimple= (2*largo)+(2*ancho);

    alambreTotal= alambreSimple *3 ;

    alert("Cantidad de alambre: " + alambreTotal);

}
function Circulo () 
{
    //txtIdRadio
    //Radio es 2 por 3,14 por el radio
    var radio;
    var alambreSimple;
    var alambreTotal;

    radio = txtIdRadio.value;
    radio = parseInt(radio);

    alambreSimple = 2 * 3.14 * radio;

    alambreTotal = alambreSimple * 3;

    alert("Cantidad de alambre:" + alambreTotal);

}
function Materiales () 
{
    //por cada metro cuadrado uso 2 bolsas de cementos, y 3 de cal

    var largo;
    var ancho;
    var metroscuadrados;
    var cemento;
    var cal;

    largo = txtIdLargo.value;
    largo = parseInt(largo);
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    metroscuadrados= (2*largo)+(2*ancho);

    cemento = 2 * metroscuadrados;
    cal = 1 * metroscuadrados;

    alert("Cantidad de cemento: " + cemento + " Cantidad de cal: "+ cal);
	
}