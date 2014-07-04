//JavaScript
	
$(document).ready(function(e){
var TuNombre;
var Dia;
var MES;
var ANIO;
var Fecha;
var EDAD, DiasFaltantes;

$('#ContinuarFecha').click(
function(e){
	TuNombre=$('#Nombre').val();
});//click continuar fecha

$('#ContinuarResultado').click(
function(e){
		
	DIA=$('#DIA').val();
	
		
	MES=$('#MES').val();

		
	ANIO=$('#ANIO').val();
	
	
	$('#Quien').text(TuNombre);
	
	//var Fecha= new Date();
	//alert(Fecha);
	//var Fecha1= new Date ('getFullYear/getMonth/getDate');
	//alert(Fecha1)
	//var Fechaactual= new Date();
	
//var Fecha= new Date();
//alert(Fecha.getFullYear());
//alert(Fecha.getMonth());
//alert(Fecha.getDate());
var Fecha=new Date();
var FechaActual=new Date(Fecha.getFullYear()+'/'+(Fecha.getMonth()+1)+'/'+(Fecha.getDate()));
alert (FechaActual)
var miFecha=new Date(Fecha.getFullYear() +'/'+ MES +'/'+ DIA );
alert(miFecha)

EDAD=Fecha.getFullYear()-ANIO;

if (miFecha.getMonth() >= FechaActual.getMonth())

{
   if (miFecha.getMonth() == FechaActual.getMonth())
       {
         if (miFecha.getDate () > FechaActual.getDate () )
           {
			   DiasFaltantes= (( miFecha-FechaActual)/1000/60/60/24);
			  
			 EDAD=EDAD -1;
			
			   }
			 else
                 {
					miFecha=new Date ((miFecha.getFullYear()+1)+'/'+ MES +'/'+ DIA);
                    DiasFaltantes= ((miFecha-FechaActual)/1000/60/60/24);
					
				 }
}
   else 
   {
	  DiasFaltantes=((miFecha-FechaActual)/1000/60/60/24);  
	 	 EDAD=EDAD -1;
   }
}
else 
{
   miFecha=new Date (( miFecha.getFullYear()+1)+'/'+MES+'/'+DIA);
   DiasFaltantes= ((miFecha-FechaActual)/1000/60/60/24);
  
  }
   
  $('#faltan').text(DiasFaltantes);
 
      $('#anioscumplidos').text(EDAD);
	  
	  
	  
if (DiasFaltantes < 31)
	   {
		   $('#imagen').show();
	   }
	   else{
		   $('#imagen').hide();}
		   
	
 alert(DiasFaltantes);
	   alert(EDAD);
	   $('#anioscumplidos').text(EDAD);
	   $('#faltan').text(DiasFaltantes);	 
	
	 
	  
	   
});//click continuar fecha

});//ready