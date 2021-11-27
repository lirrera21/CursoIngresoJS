/*
Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:

Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.
*/


function mostrar()
{
    var dia;

    dia = prompt("Ingresar un dia: ")

    switch (dia)
    {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            mensaje = "a trabajar";
        break;
        case "Sábado":
        case "Domingo":
            mensaje = "buen finde";
        break;
        default:
            mensaje = "No es un dia válido."

    }
    alert (mensaje);
}
