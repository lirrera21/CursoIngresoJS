/*
Nombre: Luciana
Apellido: Irrera
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres

    var  precioUno;
    var  precioDos;
    var  precioTres;
    var  resultado;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);
    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    precioTres = txtIdPrecioTres.value;
    precioTres =parseInt(precioTres);
    
    resultado = precioUno + precioDos + precioTres;
    
    alert(resultado);
    	
}
function Promedio () 
{
	 //txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres

    var  precioUno;
    var  precioDos;
    var  precioTres;
    var  resultado;
    var  promedio;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);
    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    precioTres = txtIdPrecioTres.value;
    precioTres =parseInt(precioTres);
    
    resultado = precioUno + precioDos + precioTres;
    promedio = resultado / 3

    alert(promedio);
    	
}
function PrecioFinal () 
{
	//txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres

    var  precioUno;
    var  precioDos;
    var  precioTres;
    var  resultado;
    var  preciofinal;
    var  iva;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);
    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    precioTres = txtIdPrecioTres.value;
    precioTres =parseInt(precioTres);
    
    resultado = precioUno + precioDos + precioTres;
    iva = resultado * 21/100;
    preciofinal= resultado + iva;
    alert(preciofinal);
}