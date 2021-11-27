/*Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos:
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/

function mostrar()
{
    
    var respuesta ;
    var letraIngresada;
    var numeroIngresado;
    var contadorPares;
    var contadorImpares;
    var contadorCeros;
    var acumuladorPositivos;
    var promedioPositivos;
    var acumuladorNegativos;
    var banderaPrimero;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;

    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeF;



    contadorPares = 0;
    contadorImpares = 0;
    contadorCeros = 0;
    contadorPositivos = 0;
    acumuladorPositivos = 0;
    acumuladorNegativos = 0;
    banderaPrimero = 0; //true

do
{
    letraIngresada = prompt("Ingrese una letra: ");
    numeroIngresado = prompt ("Ingrese un número:");
    numeroIngresado = parseInt(numeroIngresado);

    while(numeroIngresado < -100 || numeroIngresado > 100 || isNaN(numeroIngresado))
    {
        numeroIngresado = prompt ("Dato inválido. Ingrese un número entre -100 y 100");
        numeroIngresado = parseInt(numeroIngresado);
    }

    if(numeroIngresado > 0)
    {
        contadorPositivos = contadorPositivos + 1;
        acumuladorPositivos = acumuladorPositivos + numeroIngresado;
    }
    else
    {
        acumuladorNegativos = acumuladorNegativos + numeroIngresado;
        if (numeroIngresado == 0)
        {
            contadorCeros = contadorCeros + 1;
        }
        else
        {
            contadorCeros = 0;
        }
    }
    
    if(numeroIngresado%2 == 0)
    {
        contadorPares = contadorPares + 1; 
        
    }
    else 
    {
        contadorImpares = contadorImpares +1;
        
    }

    if (numeroMaximo < numeroIngresado || banderaPrimero == 0)
    {
        numeroMaximo = numeroIngresado;
        letraMaximo = letraIngresada;
    }

    if(numeroMinimo> numeroIngresado || banderaPrimero==0)
    {
        numeroMinimo = numeroIngresado;
        letraMinimo = letraIngresada;
    }

    banderaPrimero = 1;
    respuesta = confirm ("¿Desea continuar?");

}while (respuesta==true); 
    

    if (contadorPositivos !=0)
    {
        promedioPositivos = acumuladorPositivos / contadorPares ;
    }
    
    mensajeA = " a. La cantidad de números pares es: " + contadorPares;
    mensajeB = " b. La cantidad de números impares es: " +  contadorImpares;
    mensajeC = " c. La cantidad de números ceros es: " + contadorCeros;
    mensajeD = " d. El promedio de positivos es: " + promedioPositivos;
    mensajeE = " e. La suma de todos los números negativos es : " + acumuladorNegativos;
    mensajeF = " f. La letra y el número del máximo es :" +letraMaximo+" "+numeroMaximo + " y  la letra del minimo es: "+letraMinimo+ " "+ numeroMinimo;



    // alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE + mensajeF);
    document.write ( "<h2>Las repuestas son: </h2><br>"+ mensajeA + "<br>"+ mensajeB + "<br>" + mensajeC + "<br>"+ mensajeD + "<br>" + mensajeE + "<br>"+ mensajeF )
    
    
    
    
     
    
    
    
    
    /*
    // creo las variables 
    var numeroIngresado;
    var letraIngresada;
    var respuesta;
    var contadorCeros;
    var contadorPositivos;
    var acumuladorPositivos;
    var promedioPositivos;
    var contadorNegativos;
    var acumuladorNegativos;
    var numeroMaximo;
    var banderaUno;
    var numeroMinimo;
    var numeroMaximo;
    var letraMaximo;
    var letraMinimo;


    
    respuesta="si";
    //inicializo los contadores y acumuladores y bandera
    contadorPositivos= 0;
    acumuladorPositivos = 0;
    contadorNegativos = 0;
    acumuladorNegativos = 0;
    contadorCeros = 0;
    banderaUno = 0;

    //hago un while con respuesta si para continuar
    while (respuesta=="si")
    {
        //dentro del while pido el dato de letras y de numeros validando el ingreso (que van desde el -100 al 100)
        letraIngresada =  prompt("Ingrese una letra: ");

        numeroIngresado = prompt("Ingrese un numero en el rango de -100 a 100: ");
        numeroIngresado= parseInt(numeroIngresado);

        while (numeroIngresado < -100 || numeroIngresado > 100 || isNaN(numeroIngresado))
        {
            numeroIngresado = prompt("Número invalido. Por favor ingrese un n° del -100 al 100. ")
            numeroIngresado =parseInt(numeroIngresado);
        }
        
        

        if (numeroIngresado > numeroMaximo || banderaUno == 0)
        {
            numeroMaximo = numeroIngresado ;
            letraMaximo = letraIngresada;
        }
        if (numeroIngresado < numeroMinimo || banderaUno == 0)
        {
            numeroMinimo = numeroIngresado;
            letraMinimo = letraIngresada;
            banderaUno = 1;

        }


        if (numeroIngresado!=0 && numeroIngresado < 0)
        {
            contadorNegativos = contadorNegativos + 1;
            acumuladorNegativos =  acumuladorNegativos + numeroIngresado;
 
        } 
        else 
        {
            if(numeroIngresado == 0)
            {
                contadorCeros = contadorCeros +1;
            }
            else
            {
                contadorPositivos = contadorPositivos +1 ;
                acumuladorPositivos = acumuladorPositivos + numeroIngresado;
            }
            
        } 

        respuesta =  prompt ("¿Desea continuar? si - no");

    }
    if ( contadorPositivos !=0)
    {
        promedioPositivos = acumuladorPositivos / contadorPositivos ;
    } 
     

    console.log("contadorPositivos: " + contadorPositivos); //a
    console.log("contadorNegativos: " + contadorNegativos); //b
    console.log("contadorCeros: " + contadorCeros); // c
    console.log ("Promedio de numeros Positivos: " + promedioPositivos ); // d
    console.log ("Suma de los negativos: "+ acumuladorNegativos); //e
    console.log ("El número minimo es: "+ numeroMinimo + " y su letra es: " +letraMinimo); //f
    console.log ("El número máximo es: "+ numeroMaximo + " y su letra es: " +letraMaximo); //f

 */




}
