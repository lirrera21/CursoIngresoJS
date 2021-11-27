/* Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan 
nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo") 
y temperatura corporal.
a) El nombre de la persona con mas temperatura. // Maxima temp
b) Cuantos mayores de edad estan viudos // switch estado
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/

function mostrar()


{
	var respuesta;
    var nombreIngresado;
    var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;
    var temperaturaIngresada;
    var banderaMaxima;
    var temperaturaMaxima;
    var nombreTemperaturaMaxima;
    var contadorViudosMayoresDeEdad;
    var contadorHombresViudos;
    var contadorHombresSolteros;
    var sumaHombresNoCasados;
    var contadorMayoresTemperaturaAlta;
    var acumuladorEdadHombresSolteros;
    var promedioEdadHombresSolteros;
   

    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeE;

    banderaMaxima = 0;
    contadorViudosMayoresDeEdad = 0;
    contadorHombresSolteros=0;
    contadorHombresViudos = 0;
    contadorMayoresTemperaturaAlta =0;
    acumuladorEdadHombresSolteros = 0;

    do
    {
    nombreIngresado = prompt ("Ingrese nombre: ");

    edadIngresada = prompt("Ingrese edad: ");
    edadIngresada = parseInt(edadIngresada); 
    while(edadIngresada <= 0 || isNaN(edadIngresada))
    {
    edadIngresada = prompt("Dato inválido. Ingrese edad: ");
    edadIngresada = parseInt(edadIngresada);
    }
        
    sexoIngresado = prompt("Ingrese genero >>> f-m ");
    sexoIngresado = sexoIngresado.toLowerCase();
    while(sexoIngresado != "f" && sexoIngresado != "m" )
    {
    sexoIngresado = prompt("Dato inválido.Ingrese genero >>> ");
    sexoIngresado = sexoIngresado.toLowerCase();
    }
    
    estadoCivilIngresado = prompt("Ingrese estado Civil >>> soltero-casado-viudo");
    estadoCivilIngresado = estadoCivilIngresado.toLowerCase();
    while(estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo" )
    {
    estadoCivilIngresado = prompt("Dato inválido.Ingrese estado Civil >>> soltero-casado-viudo");
    estadoCivilIngresado = estadoCivilIngresado.toLowerCase();
    }

    temperaturaIngresada = prompt("Ingrese temperatura corporal: ");
    temperaturaIngresada = parseInt(temperaturaIngresada); 
    while(temperaturaIngresada <= 34 || isNaN(temperaturaIngresada))
    {
    temperaturaIngresada = prompt("Dato inválido. Ingrese temperatura corporal: ");
    temperaturaIngresada = parseInt(temperaturaIngresada);
    }

    //hasta aca pedi datos

    if(temperaturaMaxima < temperaturaIngresada || banderaMaxima == 0)
    {
        temperaturaMaxima = temperaturaIngresada;
        nombreTemperaturaMaxima = nombreIngresado;
        banderaMaxima = 1;
    }

    switch(estadoCivilIngresado)
    {
        case "soltero": 
            if ( sexoIngresado == "m")
            {
                contadorHombresSolteros ++ ;
                acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edadIngresada; 
            }
            
        break;
        case "casado":
        break;
        default:
            if (edadIngresada>18)
            {
                contadorViudosMayoresDeEdad ++;
            }
            if ( sexoIngresado == "m")
            {
                contadorHombresViudos ++ ;
            } 
        break;

    }

    if ( temperaturaIngresada > 38 && edadIngresada > 60)
    {
        contadorMayoresTemperaturaAlta ++;
    }


    if (contadorHombresSolteros > 0)
    {
    promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros ;
    }
    else 
    {
    promedioEdadHombresSolteros = 0; 
    }

    respuesta = confirm("¿Desea continuar?");
    }while(respuesta == true);

    sumaHombresNoCasados = contadorHombresSolteros + contadorHombresViudos;

    mensajeA = "a. El nombre de la persona con mas temperatura es: " + nombreTemperaturaMaxima;
    mensajeB = "b. La cantidad de Mayores de edad viudos es: " + contadorViudosMayoresDeEdad;
    mensajeC = "c. La cantidad de Hombres solteros o viudos es: " + sumaHombresNoCasados;
    mensajeD = "d. La cantidad adultos mayores de 60 que tienen temperatura mayor a 38 es: " +contadorMayoresTemperaturaAlta;
    mensajeE = "e. El promedio de edad de los hombres solteros es: " + promedioEdadHombresSolteros;


    document.write ( "<br>" +  mensajeA + "<br>" +  mensajeB + "<br>" +  mensajeC + "<br>"+  mensajeD + "<br>"+ mensajeE );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* //creo las variables
    var nombreIngresado;
    var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;
    var respuesta;
    var temperaturaCorporal;
    var mayorTemperatura;
    var nombreMayorTemperatura;
    var banderaDelPrimero;
    var contadorViudosMayores;
    var contadorHombresNoCasados;
    var contadorPersonasConTemperaturaAlta;
    var contadorHombres;
    var acumuladorEdadHombres;
    var promedioEdadHombres;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeE;

    // inicializo las variables que se precisan inicializadas
    respuesta = "si";
    contadorViudosMayores = 0;
    contadorHombresNoCasados = 0;
    contadorHombres = 0;
    acumuladorEdadHombres=0;
    banderaDelPrimero = 0;
    contadorPersonasConTemperaturaAlta = 0;

    // creo un while que pregunte con respuesta
    while(respuesta == "si")
    {
        //pido dato de nombre
        nombreIngresado = prompt("Ingrese nombre: ");
        // pido dato de edad
        edadIngresada = prompt ("Ingrese edad: ");
        edadIngresada = parseInt(edadIngresada);
        // pido dato de sexo validado f-m
        sexoIngresado =  prompt ("Ingrese sexo >>> f-m");
        sexoIngresado =  sexoIngresado.toLowerCase();

        while (sexoIngresado != "f" && sexoIngresado != "m")
	    {
		sexoIngresado = prompt("Dato inválido, ingrese f ó m");
		sexoIngresado = sexoIngresado.toLowerCase();
	    }
       
        // pido dato de estado civil (soltero-casado-viudo)

        estadoCivilIngresado =  prompt("Ingrese estado civil >>> soltero-casado-viudo");
        estadoCivilIngresado =  estadoCivilIngresado.toLowerCase();
        while(estadoCivilIngresado !="soltero" && estadoCivilIngresado !="casado" && estadoCivilIngresado !="viudo" )
        {
            estadoCivilIngresado =  prompt("Dato inválido. Ingrese estado civil: soltero, casado o viudo");
            estadoCivilIngresado =  estadoCivilIngresado.toLowerCase();   
        }

        //temperatura corporatl
        temperaturaCorporal = prompt("Ingrese temperatura corporal: ");
        temperaturaCorporal = parseInt(temperaturaCorporal);

        if (mayorTemperatura < temperaturaCorporal || banderaDelPrimero == 0)
        {
            mayorTemperatura = temperaturaCorporal;
            nombreMayorTemperatura = nombreIngresado;
        }

        if (edadIngresada > 18 && estadoCivilIngresado == "viudo")
        {
            contadorViudosMayores =  contadorViudosMayores + 1 ;
        }

        if(sexoIngresado == "m") 
        {
            contadorHombres = contadorHombres +1;
            acumuladorEdadHombres =  acumuladorEdadHombres + edadIngresada;
        
            if(estadoCivilIngresado == "soltero" || estadoCivilIngresado == "viudo")
            {
                contadorHombresNoCasados =  contadorHombresNoCasados +1;
            }
        }

        if ( edadIngresada> 60 && temperaturaCorporal > 38)
        {
            contadorPersonasConTemperaturaAlta ++; 
        }

        if( contadorHombres != 0)
        {
            promedioEdadHombres =  acumuladorEdadHombres / contadorHombres ;
        }
        
        banderaDelPrimero= 1;
        respuesta = prompt ("¿Desea continuar? >>> si-no");
        respuesta = respuesta.toLowerCase();
    }

    mensajeA = "a.El nombre de la persona que tiene mas temperatura es: " + nombreMayorTemperatura;
    mensajeB = "b.La cantidad de mayores viudos son: " + contadorViudosMayores;
    mensajeC = "c.La cantidad de hombres solteros o viudos es: " + contadorHombresNoCasados;
    mensajeD = "d.La cantidad de personas mayores a 60 con temperatura mayor a 38° es: " + contadorPersonasConTemperaturaAlta;
    mensajeE = "e.La edad promedio de los hombres es: " +promedioEdadHombres;
    /*console.log (nombreIngresado);
    console.log (sexoIngresado);
    console.log (edadIngresada);
    console.log (estadoCivilIngresado);
    console.log (temperaturaCorporal);

    console.log (mensajeA);
    console.log (mensajeB);
    console.log (mensajeC);
    console.log (mensajeD);
    console.log (mensajeE); */

}
