/*Nombre: Luciana
Apellido: Irrera
Division: G
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/

function mostrar()
{
 // creo las variables
 var sexoIngresado;
 var alturaIngresada;
 var alturaPromedio;
 var contadorIngresos;
 var acumuladorAlturas;
 var alturaMinima;
 var alturaMaxima;
 var contadorMujeresAltas;
 var mensajeA;
 var mensajeB;
 var mensajeC;
 var sexoAlturaMinima;

 contadorIngresos = 0 ;
 acumuladorAlturas = 0;
 contadorMujeresAltas = 0;
 
 // EL WHILE POR 5 VECES
  while (contadorIngresos<5)
  {
     // dentro del for hago while para validar el ingreso de los datos
 
            // while sexo validar f o m, loadcase 

            sexoIngresado = prompt("Ingrese f ó m .");
            sexoIngresado = sexoIngresado.toLowerCase(); 
            
                while ( sexoIngresado != "f" && sexoIngresado != "m")
                {
                    sexoIngresado = prompt("Dato no valido. Ingrese f ó m");
                    sexoIngresado = sexoIngresado.toLowerCase();
                }   

            // while altura validar centrimetros alturas en centimetros(validar entre 0 y 250) y es NaN
            alturaIngresada = prompt ("Ingrese altura entre 0 y 250: "); //a.
            alturaIngresada = parseInt(alturaIngresada);
        
                while (alturaIngresada<0 || alturaIngresada> 250 || isNaN(alturaIngresada) )                        
                {
                    console.log(isNaN(alturaIngresada));
                    alturaIngresada = prompt("Altura no valida. Ingrese una altura entre 0 y 250: ");
                    alturaIngresada = parseInt(alturaIngresada);
                }
                 

           
                
            if(alturaMaxima < alturaIngresada || contadorIngresos == 0 ) ////b. es mayor a la que existe
            {
                alturaMaxima = alturaIngresada;

                if(sexoIngresado == "f" && alturaMaxima> 190)
                {
                    contadorMujeresAltas= contadorMujeresAltas + 1 ;
                }
            }
            if(alturaMinima > alturaIngresada || contadorIngresos == 0 ) // es menor a la que existe
            {
                alturaMinima = alturaIngresada;
                sexoMasBajo =  sexoIngresado;
            
                if (sexoIngresado == "f") 
                {
                    sexoAlturaMinima = "Fenemino";
                }else 
                {
                    sexoAlturaMinima = "Masculino";
                }
                
                mensajeB = " b. La altura mas baja es: " + alturaMinima + " y es de un " + sexoAlturaMinima + "." ; 
                
            } 

    contadorIngresos = contadorIngresos + 1;
    acumuladorAlturas = acumuladorAlturas + alturaIngresada;


   
  }
   
 //esto fuera del bucle:

 // a. promedio de las alturas necesitamos contador y acumulador
    if( contadorIngresos !=0)
    {
        alturaPromedio= acumuladorAlturas / contadorIngresos; 
        mensajeA = " a. La altura promedio es : " + alturaPromedio + ". ";
    }

 // c. if (sexo = f  && altura > 190 cm){ contadorMujeresAltas}
    mensajeC = " c. La cantidad de mujeres que son mas altas de 190 cm : " + contadorMujeresAltas ; 

    console.log(mensajeA + mensajeB + mensajeC);
}
