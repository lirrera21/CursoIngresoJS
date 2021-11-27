/*Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/


function mostrar()
{
    var nota;
    var acumuladorF;
    var acumuladorM;
    var promedio ; // promedio =  acumulador/5 -porque pide la nota de 5 alumnos
    var sexoIngresado;
    var notaMinimaF;
    var notaMinimaM;
    var notaMayorCinco; //notas mayores o igual a 6 de alumnos con dato "m"
    var contadorIteraciones;//el contador va a iterar 5 veces
    
   

    contadorIteraciones = 0;
    
    acumuladorF= 0;
    acumuladorM= 0;
    //notaMinimaF = 10; //empiezo desde el valor mas grande posible para guardar cuando son menores a 10
    //notaMinimaM = 10;
    notaMayorCinco=0;
    
//a.
    while(contadorIteraciones <5)// CAMBIO A DOS VUELTAS para el test del contador uso el O porque es hasta que por lo menos uno haya llegado
    {
        sexoIngresado = prompt("Ingrese sexo f o m:");
        sexoIngresado = sexoIngresado.toLowerCase();
        nota = prompt("Ingrese una nota: ");
        nota = parseInt(nota);

        while (isNaN(nota)|| nota< 0 || nota >10) 
        {
            nota = prompt ("Por favor ingrese una nota válida: ");
            nota = parseInt(nota);              
        }

        switch(sexoIngresado) 
        {
            case "f":
            acumuladorF = acumuladorF + nota;
            contadorIteraciones = contadorIteraciones +1;
            if( nota < notaMinimaF)
            {
                notaMinimaF = nota;
            }
            console.log(acumuladorF);
            console.log(contadorIteraciones);

            break;
            default:
            acumuladorM = acumuladorM + nota;
            contadorIteraciones = contadorIteraciones+1;
            if( nota < notaMinimaM)
            {
                notaMinimaM = nota;
            }
            //c.
            if (nota>6)
            {
                notaMayorCinco = notaMayorCinco+1;
            }
            break; 
        }

        console.log("AcumuladorF:" + acumuladorF + "AcumuladorM: "+ acumuladorM);
        console.log(contadorIteraciones);
    }

    promedio = (acumuladorF+ acumuladorM) /contadorIteraciones;
    // alert("El promedio de las notas es: " + promedio);
    if (notaMinimaF < notaMinimaM)
    {
        mensajeNotaMinima = "La nota mas baja es: "+notaMinimaF+" y es de sexo f."
    
    }
    else 
    {
        mensajeNotaMinima = "La nota mas baja es: "+notaMinimaM+" y es de sexo m."
    }

    alert("El promedio de las notas es: " + promedio + mensajeNotaMinima + "La cantidad de varones que su nota fue mayor o igual a 6 es: " + notaMayorCinco);

}
