/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado; //creo la variable
	// guardo en la variable el dato del 
	//input[@id='txtIdNombre']
	
	//nombreIngresado=txtIdNombre.value; o 
	nombreIngresado = document.getElementById('txtIdNombre').value;
	
	alert(nombreIngresado);

}


