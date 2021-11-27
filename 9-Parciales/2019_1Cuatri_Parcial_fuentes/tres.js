/*
Nombre y Apellido: Luciana Irrera Div G

Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
*/

function mostrar()
{

    var precio;
    var porcentaje;
    var descuento;
    var resultado;
    var mensaje; 

    precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);
    porcentaje = prompt("Ingrese porcentaje: ");
    porcentaje = parseInt(porcentaje);
    

    descuento = precio * porcentaje/100;
    resultado = precio - descuento;
    mensaje = "El precio final es: $ "+ resultado + ".-";
        
    //elPrecioFinal

    document.getElementById('elPrecioFinal').value = mensaje;



}
