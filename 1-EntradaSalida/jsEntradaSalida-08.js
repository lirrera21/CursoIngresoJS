/*
Nombre Luciana
Apellido Irrera
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//txtIdNumeroDividendo
	// txtIdNumeroDivisor

	var numeroDividendo;
	var numeroDivisor;
	var resultado;

	numeroDividendo = parseInt(txtIdNumeroDividendo.value);
	numeroDivisor = parseInt(txtIdNumeroDivisor.value);
	resultado = numeroDividendo % numeroDivisor;
	alert ("el resto es " + resultado);
}
