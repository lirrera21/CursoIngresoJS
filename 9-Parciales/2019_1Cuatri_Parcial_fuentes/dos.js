/*
Nombre y Apellido: Luciana Irrera Div G
Enunciado:
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son 
xx kilos y el promedio de peso xx ".
*/




function mostrar()
{

    var nombreUno;
    var nombreDos;
    var pesoUno;
    var pesoDos;
    var pesoSuma;
    var pesoPromedio;
    var mensaje;
    
    nombreUno = prompt("Ingrese su nombre: ");
    nombreDos = prompt("Ingrese el nombre de su pareja: ");

    alert("Vamos bien! En las próximas ventanas deberá ingresar el peso de cada uno");

    pesoUno = prompt("Ingrese su peso: ");
    pesoUno = parseInt(pesoUno);
    pesoDos = prompt ("Ingrese el peso de su pareja: ");
    pesoDos = parseInt(pesoDos);

    pesoSuma = pesoUno + pesoDos ; 
    pesoPromedio = pesoSuma / 2 ;

    mensaje  = "Ustedes se llaman " + nombreUno + " y " + nombreDos +" . Pesan " + pesoUno + " kilos" + " y " + pesoDos + " kilos " + ", juntos pesan " + pesoSuma +" kilos, y el promedio de su peso es " +pesoPromedio + " kilos."

    alert(mensaje); 
    alert("Gracias, vuelva pronto");
  
}
