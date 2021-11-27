/*
Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).


*/
function mostrar()
{
    var planeta;
    planeta = prompt("Ingrese un planeta: ");

    switch (planeta)
    {
        case "Tierra":
            mensaje = "acá vivimos";
        break;
        case "Mercurio":
        case "Venus":
            mensaje = "acá hace más calor";
        break;
        case "Marte":
        case "Jupiter":
        case "Saturno":
        case "Urano":
        case "Neptuno":
        case "Pluton":
            mensaje = "acá hace más frio";
        break;
        default:
            mensaje = "no es un planeta valido";
        break;
    }

    alert(mensaje);
}
