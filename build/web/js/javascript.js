/*
$(document).on("ready", inicio);
var contador= 2;

function inicio()
{

	$("#bgaleria").on("click", bgaleria);
	$("#bpersonajes").on("click", bpersonajes1);
	$("#imagengal").on("click", cambioimagen);
}

function bgaleria()
{
	//alert("hola");
	var cambiosCSS=
	{
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0,
		height: 0
		
	};

	var cambiomenu=
	{		
		
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0,
		height: 0
	};

	var cambios=
	{
		
		overflow: "visible",
		width: "100%",
		height: "100%"
		
	};

	$("#spersonajes").css(cambiosCSS);
	$("#aside").css(cambiomenu);
	$("#capa").css(cambios);

}



function bpersonajes1()
{
	//alert("hola");
	//var cambiosa= width: 100%, 	height: 100% ;
	//$("#spersonajes").css(cambiosa);
	//$("#aside").css(cambiomenu1);
	var cambiosCSS=
	{
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0,
		height: 0
		
	};
	
	var cambiosmenu=
	{
		
		overflow: "visible",
		width: "15%",
		height: "100%",
		background: "red",		
		margin: "10px 10px",
		position: "fixed"
		
	};

	var cambiossec=
	{
			overflow: "visible",
			width: "100%",
			height: "100%"
	}
	
	$("#capa").css(cambiosCSS);
	$("#spersonajes").css(cambiossec);
	$("#aside").css(cambiosmenu);
	

}

*/



$(function(){
    
    
    var contador= 2;
    $("#imagengal").on("click", camimg);
    function camimg()
    {


            console.log(contador);
            $("#imagengal").html("<img src='img/gal" + contador + ".jpg' class=\"lagaleria\">");

            contador+=1 ;
            if(contador >5){
                    contador=1;
            }


    }
    
    var pers = false;
    var gale = true;
    var come = true;
    
   $("#bgaleria").on('click',galeria);
   $("#bpersonajes").on('click',personajes);
   
   function personajes(e)
   {
       e.preventDefault();
       if(pers)
       {
       $("#respuesta").slideUp("slow");
       $("aside").slideDown("slow");
       $(".posicion_personajes").slideDown("slow");
        $("#Sesion").slideUp("slow");
       
       $("#galeria").slideUp("easeInOutElastic");
        
       pers = false; 
       gale = true;
       come = true;
       
       }
   }
   
   function galeria(e)
   {
       e.preventDefault();
       if(gale)
       {
       $("#respuesta").slideUp("slow");
       $("aside").slideUp("slow");
       $(".posicion_personajes").slideUp("slow");
       
       
        $('html, body').animate({
            scrollTop: $("#enlace").offset().top
        }, 1000);
       
       $("#galeria").slideDown("easeInOutElastic");
       $("#Sesion").slideUp("slow");
       pers = true;
       gale = false;
       come = true;
       }
   }
   
   $("#bcomentarios").on('click',function(e){
       
       e.preventDefault();
       
      
       $("#Sesion").slideDown("slow");
       $("#galeria").slideUp("easeInOutElastic");
       $("aside").slideUp("slow");
       $(".posicion_personajes").slideUp("slow");
       $("#respuesta").slideUp("slow");
       
       pers = true;
       gale = true;
       come = false;
       
   })
   
   $("#biniciar").on('click',function(e){
       
       var resp;
       e.preventDefault();
       
       var coneccion = new XMLHttpRequest();
       var resp;
       
       coneccion.onreadystatechange= function()
       {
           if(coneccion.readyState==4 && coneccion.status==200)
               {
                   resp = coneccion.responseText+""
                   if(resp==1)
                    {
                        alert('Sesion Iniciada')
                        $("#Sesion").slideUp("slow")
                        
                        $("#bnombre").click()
                    }
                    
                    else
                    {
                        alert('Datos incorrectos')
                    }
                    
               }
       }
       
       var direccion = "Sesion.jsp?act=2&correo="+$("#correo").val()+"&contra="+$("#contra").val()
       coneccion.open("GET",direccion,true)
       coneccion.send();
       
       
       //------------------------------------//
       
   })
   
   $("#bnombre").on('click',function(e){
       
       e.preventDefault();
       $("#respuesta").slideDown("slow");
       var respuesta="<br><br>Bienvenido "
       var coneccion = new XMLHttpRequest();
       coneccion.onreadystatechange= function()
       {
           if(coneccion.readyState==4 && coneccion.status==200)
               {
                  
                    respuesta+= coneccion.responseText;
                    respuesta+="\n\
<br><br><br> <h2>Ingrese su comentario</h2>    \n\
<textarea cols='20'rows='5'> </textarea>"
                    $("#respuesta").html(respuesta)
               }
       }
       
       var direccion2 = "Sesion.jsp?act=4"
       coneccion.open("GET",direccion2,true)
       coneccion.send();
       
       
   })
   
  
   
   $("#bregistrarse").on('click',function(e){
      
       var resp;
       e.preventDefault();
       
       var coneccion = new XMLHttpRequest();
       
       coneccion.onreadystatechange= function()
       {
           if(coneccion.readyState==4 && coneccion.status==200)
               {
                   
                   resp = coneccion.responseText;
                   $("#respuesta").html(resp)
               }
       }
       
       var direccion = "Sesion.jsp?act=1&correoreg="+$("#correoreg").val()+"&contrareg="+$("#contrareg").val()+"&nom="+$("#nombre").val()
       coneccion.open("GET",direccion,true)
       coneccion.send();
       
   })
    
});