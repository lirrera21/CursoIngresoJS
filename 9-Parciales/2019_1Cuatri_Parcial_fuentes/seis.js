/*
Nombre: Luciana
Apellido : Irrera 
Division: G
Enunciado:
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
*/
//laHora

function mostrar()
{
    var laHora;
    var mensaje;

    laHora = document.getElementById("laHora").value ;
    laHora = parseInt (laHora);
  // PARCIAL 2018 EJ 6 - uso el if para excluir las horas no validas
 // PARCIAL 2019 EJ 6 - uso el switch para excluir las horas no validas 
    switch (true)
    {
        case laHora > 0 && laHora < 24:
            if (laHora > 5 && laHora < 13)
            {
                mensaje = "es de mañana";
            }
            else 
            {
                if( laHora > 12 && laHora < 20 ) 
                {
                    mensaje = "es de tarde";
                }
                else
                {
                    mensaje = "es de noche";
                    if (laHora > 24)
                    {
                        mensaje = "a dormir";
                    } 
                
                }
            }
        break;
        default:
            mensaje = "no es una hora valida";
        break;

    }
    
    
    alert (mensaje);

}

