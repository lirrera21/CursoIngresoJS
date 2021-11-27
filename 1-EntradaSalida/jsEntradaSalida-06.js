/* Nombre Luciana 
Apellido   Irrera 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
/*	var numeroUno;
	var numeroDos;
    var resultado;
    
	numeroUno = parseInt(txtIdNumeroUno.value);
	numeroDos = parseInt(txtIdNumeroDos.value);


    resultado = numeroUno + numeroDos;
    

	alert (resultado);
	*/

	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;
	primerNumero = txtidNumeroUno.value;
	alert(primerNumero);
	primerNumero = 6;
	segundoNumero = 66;
 	suma = primerNumero + segundoNumero;
	alert (suma);

	primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	sumar = primerNumero + segundoNumero;
	mensaje = "la suma es: " + suma
	alert (mensaje);
}