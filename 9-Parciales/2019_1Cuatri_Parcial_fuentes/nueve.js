/*Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )

*/
function mostrar()
{
 //creo las variables
 var paisIngresado;
 var cantidadHabitantes; // lo podria haber llamado acumuladorHabitantes
 var contadorPaisesIngresados;
 var temperaturaMinimaIngresada;
 var respuesta;
 var contadorTemperaturaMinima;
 var minimosHabitantes;
 var banderaUno;
 var contadorTemperaturaMasAlta; // es para contar las temperaturas que superan los 40 grados
 var paisMinimosHabitantes;
 var promedioDeHabitantes;
 var paisMinimaTemperatura;
 var temperaturaMinimaRegistrada;

 respuesta = "si";
 contadorTemperaturaMinima = 0;
 contadorTemperaturaMasAlta = 0;
 acumuladorTemperaturas = 0;
 contadorPaisesIngresados = 0;
 banderaUno = 0;
 
 // while con respuesta
 while( respuesta == "si") 
 {
    //adentro del while pido nombre de pais
    paisIngresado = prompt ( "Ingrese el nombre del pais: "); 
    contadorPaisesIngresados = contadorPaisesIngresados + 1 ;

    //cantidad de habitantes entre 1 y 7000
    cantidadHabitantes = prompt ("Ingrese la cantidad de habitantes: ");
    cantidadHabitantes = parseInt (cantidadHabitantes);

    while ( cantidadHabitantes < 1 || cantidadHabitantes > 7000)
    {
        cantidadHabitantes = prompt ("Dato inválido. Por favor reingrese la cantidad de habitantes: ");
        cantidadHabitantes = parseInt (cantidadHabitantes);
    }
    if ( cantidadHabitantes < minimosHabitantes || banderaUno == 0) //b.
    {
        minimosHabitantes =  cantidadHabitantes;
        paisMinimosHabitantes = paisIngresado;
        
        
    }


    //pido temperatura minima validada entre -50 y 50
    temperaturaMinimaIngresada = prompt ("Ingrese temperatura mínima: ");
    temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);

    while (temperaturaMinimaIngresada < -50 || temperaturaMinimaIngresada > 50)
    {
        temperaturaMinimaIngresada = prompt ("Dato inválido. Por favor reingrese temperatura mínima: ");
        temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
        
    }
    

    if (temperaturaMinimaIngresada%2 == 0)
    {
        contadorTemperaturaMinima = contadorTemperaturaMinima + 1 ; //a
    }

    if (temperaturaMinimaIngresada > 40) 
    {
        contadorTemperaturaMasAlta = contadorTemperaturaMasAlta + 1 ; 
    }

    if (temperaturaMinimaIngresada< temperaturaMinimaRegistrada|| banderaUno == 0)
    {
        temperaturaMinimaRegistrada =  temperaturaMinimaIngresada ; 
        paisMinimaTemperatura =  paisIngresado;
    }

    acumuladorTemperaturas = acumuladorTemperaturas + temperaturaMinimaIngresada;
    
    banderaUno = 1;
    respuesta = prompt ("¿Desea continuar? si-no");
 }
      
    if ( contadorPaisesIngresados !=0 )
    {
        promedioDeHabitantes = cantidadHabitantes / contadorPaisesIngresados;
    }
    

    console.log ( "a. Cantidad de temperaturas pares: " + contadorTemperaturaMinima); //a.
    console.log ( "b. El nombre del pais con menos habitantes es: " + paisMinimosHabitantes); //b. 
    console.log ( "c. La cantidad de paises con temperatura que supera los 40° son : " + contadorTemperaturaMasAlta); //c.
    console.log ( "d. El promedio de habitantes por pais es : " + promedioDeHabitantes ) ; //d
    console.log ( "f. La temperatuta minima ingresada es: " +temperaturaMinimaIngresada + " y fue en el pais: " + paisMinimaTemperatura); //f.



}
