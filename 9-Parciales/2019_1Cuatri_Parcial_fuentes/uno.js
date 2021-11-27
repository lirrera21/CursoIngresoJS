/*
Nombre y Apellido: Luciana Irrera Div G

Enunciado:
Realizar el algoritmo que pida los datos necesarios 
para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{

//el triangulo equilatero tiene los 3 lados iguales. Solo necesito cuanto mide un lado

var medidaLado;
var resultado;
var mensaje;

medidaLado =  prompt("Ingrese la medida de un lado del triángulo equilátero : ");
medidaLado = parseInt(medidaLado);

resultado = 3 * medidaLado;
mensaje = "El perímetro del triángulo es: " + resultado +"."
alert(mensaje);


}
