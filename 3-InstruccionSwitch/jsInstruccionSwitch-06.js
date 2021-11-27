/* Nombre: Luciana
Apellido: Irrera 
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/

function mostrar()
{
	//tomo la hora
	//txtIdHora
	var horaDelDia;
    horaDelDia = document.getElementById("txtIdHora").value;
    
   	/*horaDelDia = parseInt(horaDelDia);
    //en lugar de evaluar las condiciones de una variable evalua si lo que tiene el case es verdadero
    switch (true) 
    {
        case horaDelDia >6 && horaDelDia <10:
            alert ("Es de mañana");
            break;
        case horaDelDia > 11 && horaDelDia <20 :
             alert ("Es de tarde");
            break;
        case horaDelDia > 19 && horaDelDia <25:
            alert (" Es de noche");
            break;
        case horaDelDia > 24:
            alert ("La hora no existe");
            break;
        }
    */

    switch(horaDelDia)
    {
        case "7" :
        case "8" :
        case "9" :
        case "10":
        case "11":  //entre las 7 y las 11 
            alert ("Es de mañana");
            break;   
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":  //12 y las 19 
            alert ("Es de tarde.");
            break; 
        default:
            alert ("Es de noche.");
            break;    
    }

}//FIN DE LA FUNCIÓN