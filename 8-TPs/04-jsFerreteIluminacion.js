/*
Nombre: Luciana
Apellido : Irrera 
Division: G
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
************Modificado: al hacer el ultimo cambio incluyo en el else cantidad 1 y 2.
Inclui un nuevo If para que lo que quede es 1 y 2.. y modifique un case que no funcionaba porque habia
olvidado el breark; ******************
 */
function CalcularPrecio ()
{

    //txtIdCantidad
    //Marca
    var cantidadLamparitas;
    var precio;
    var valorDescuento;
    var marca;
    var subtotal;
    var total;
    var impuesto;
    

    cantidadLamparitas = document.getElementById("txtIdCantidad").value ;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marca = document.getElementById("Marca").value;

    precio = 35
    subtotal = cantidadLamparitas * precio;
    //valorDescuento = 0;
    total = subtotal;

  /*   
    switch (true)
    {
        case cantidadLamparitas > 5:
            porcentajeDescuento = 50;
	    break;
        default://en el default entra los que no tienen descuentos y los diferentes descuentos
            switch(cantidadLamparitas)
            {          
                case cantidadLamparitas = 5:
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentajeDescuento = 40;
                        break;
                        default:
                            porcentajeDescuento = 30;
                        break;
                    }
                break;
                case cantidadLamparitas = 4:
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                        case "FelipeLamparas":
                            porcentajeDescuento = 25;
                        break;
                        default:
                            porcentajeDescuento = 20;
                        break; 

                    }
                break;
                case cantidadLamparitas = 3:
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentajeDescuento = 15;
                        break;
                        case "FelipeLamparas":
                            porcentajeDescuento = 10;
                        break;
                        default:
                            porcentajeDescuento = 5;
                        break;
                    }
            
                break;
                //default:
                //break;
            }

        break;
    }
    
    total = subtotal * ((100 - porcentajeDescuento)/100);
    
    switch(true)
    {
        case total > 120 :
            impuesto = total * (10/100);
            total = total + impuesto ;
            alert("Usted paga" + impuesto + " de IIBB.");
        break;
        //default: // es opcional
        //break;

    }
    
    //txtIdprecioDescuento
    document.getElementById("txtIdprecioDescuento").value = total;  
    */
 /*   
    if(cantidadLamparitas>5)
    {
        porcentajeDescuento = 50 ;
    }else
    {   
        if(cantidadLamparitas == 5)
        {   
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento = 40 ;
                break;
                default:
                    porcentajeDescuento = 30;
                break;
            }
            
        }else
        {
            if(cantidadLamparitas == 4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentajeDescuento = 25 ;
                    break;
                    default:
                        porcentajeDescuento = 20;
                    break;
                }

            }else 
            {
                if(cantidadLamparitas == 3)
                {
                    switch(marca)
                    {
                    case "ArgentinaLuz":
                    porcentajeDescuento = 15 ;
                    break;
                    case "FelipeLamparas":
                    porcentajeDescuento = 10 ;  
                    break;  
                    default:
                    porcentajeDescuento = 5;
                    break;  
                    }
                } else
                {
                    porcentajeDescuento = 0;
                }   
            }
                                
        }
           
    }
    total = subtotal * ((100 - porcentajeDescuento)/100)
    
    if(total > 120 )
    {
        impuesto = total * (10/100);
        total = total + impuesto ;
        alert("Usted paga" + impuesto + " de IIBB." )
    } 
     
    //txtIdprecioDescuento
    document.getElementById("txtIdprecioDescuento").value = total; 
*/ 

   switch(cantidadLamparitas)
    {
        case 1:
        case 2:
            valorDescuento = 0;
        break;
        case 5:
                if( marca == "ArgentinaLuz")
                {
                    valorDescuento = 40;
                }
                else 
                {
                    valorDescuento = 30
                }
        break;
        case 4:
                if(marca !== "ArgentinaLuz" && marca !== "FelipeLamparas" )
                {
                    valorDescuento = 20 ; 
                }else 
                {
                    valorDescuento = 25 ; 
                }
        break;
        case 3:
                if(marca == "ArgentinaLuz" )
                {
                    valorDescuento = 15 ; 
                }
                else 
                {
                    if(marca == "FelipeLamparas")
                    {
                    valorDescuento = 10 ;
                    }
                    else
                    {
                    valorDescuento = 5 ;   
                    }
                    
                }
        break;
        default:
                valorDescuento = 50;
        break;
    }

    total = subtotal * ((100 - valorDescuento)/100)
    
    if(total > 120 )
    {
        impuesto = total * (10/100);
        total = total + impuesto ;
        alert("Usted paga" + impuesto + " de IIBB." )
    } 

    document.getElementById("txtIdprecioDescuento").value = total;
    

    /*
    if(cantidadLamparitas>5)
    {
        porcentajeDescuento = 50 ;
    }else
    {   
        if(cantidadLamparitas == 5)
        {   
            
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 40 ; 
            }else 
            {
                porcentajeDescuento = 30;
            }
            
        }else
        {
            if(cantidadLamparitas == 4)
            {
                if(marca !== "ArgentinaLuz" && marca !== "FelipeLamparas" )
                {
                    porcentajeDescuento = 20 ; 
                }else 
                {
                    porcentajeDescuento = 25 ; 
                }
                

            }else 
            {
                if(cantidadLamparitas == 3)
                {
                     if(marca == "ArgentinaLuz" )
                    {
                        porcentajeDescuento = 15 ; 
                    }else 
                    {
                        if(marca == "FelipeLamparas")
                        {
                        porcentajeDescuento = 10 ;
                        }else
                        {
                        porcentajeDescuento = 5 ;   
                        }
                    
                }   }
                
            }   
           
        }
           
    }
    total = subtotal * ((100 - porcentajeDescuento)/100)
    
    if(total > 120 )
    {
        impuesto = total * (10/100);
        total = total + impuesto ;
        alert("Usted paga" + impuesto + " de IIBB." )
    } 
    
    

    //txtIdprecioDescuento
    document.getElementById("txtIdprecioDescuento").value = total;
    */
}
