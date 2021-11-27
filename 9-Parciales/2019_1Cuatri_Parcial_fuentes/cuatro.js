/* Nombre y Apellido: Luciana Irrera Div G
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/


function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resta ;

    numeroUno = prompt ("Ingrese el primer número: ");
    numeroDos = prompt ("Ingrese el segundo número: ");

    if (numeroUno == numeroDos)
    {   
        mensaje = numeroUno + numeroDos;
    }else
    {
        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);

        if(numeroUno> numeroDos)
        {
          resta =  numeroUno - numeroDos ; 
            if(resta>10)
            {
                mensaje = ("la resta es " + resta + " y superó el 10.");
            }else
            {
                mensaje = resta;
            }
        }else
        {
          mensaje = numeroUno + numeroDos;
        }
    }
   
    alert(mensaje);

}
