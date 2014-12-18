$(document).on("ready", inicio);

function inicio()
{
	$("#personalizar").on("click", transicion);
}

function transicion()
{
	//alert("wi");
	var cambiosCSS = 
	{
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var person =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	}

	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(person);
	$("#color div").on("click", cambiarcolor);
}

function cambiarcolor(datos){

	var col= datos.currentTarget.id;
	//alert(col);
	$("#coche img").attr("src", "c"+col+".jpg");
}