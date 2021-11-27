/*
Nombre: Luciana
Apellido: Irrera

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
-----------Modificado para que el resultado se muestre con dos decimales y agregue el simbolo ° en el mensaje de salida---------
*/
function FahrenheitCentigrados () 
{
	var temperatura;
    var resultado;

    // grado f = 180 
    //Fórmula (180 °F − 32) × 5/9 = 82.222 °C

    //txtIdTemperatura lo traigo con getElement

    temperatura = document.getElementById('txtIdTemperatura').value ;
    //temperatura =  parseInt(temperatura);

    resultado = (temperatura - 32) * (5/9);

        
    alert (temperatura + "° Fahrenheit son " + resultado.toFixed(2) + "° centígrados");
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var resultado;
    
    // grado celsius = 23
    //(23 °C × 9/5) + 32 = 73.4 °F 
    
    //txtIdTemperatura 

    temperatura = document.getElementById('txtIdTemperatura').value;

    resultado = temperatura * (9/5) + 32;

    alert (temperatura + "° centígrados son " + resultado.toFixed(2) + "° Fahrenheit " );


}
