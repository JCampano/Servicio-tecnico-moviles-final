// Creacion del dialogo
$("#divfrmaltapieza").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaPieza")[0].reset();
		mostrarMenu();
    },
    closeOnEscape: false, // No se cierra con ESCAPE
    hide: {
        effect: "fold",
        duration: 1000
    },
	modal: true,
    show: "fold",
    width:"765px"
  /* buttons: [{
        text: "Aceptar",
        click: validar
    }, {
        text: "Volver",
        click: function() {
            $(this).dialog("close");
        }
    }]*/
});

document.getElementById("altaPieza").addEventListener("click",validarAltaPieza,false);
document.frmAltaPieza.volver.addEventListener("click",volverAltaPieza,false);

function volverAltaPieza(){
	$("#divfrmaltapieza").dialog("close");    	
}


function reiniciarValidacionesAltaPieza(){
	document.frmAltaPieza.reset();
	document.frmAltaPieza.idPieza.style.background = "white";
	document.frmAltaPieza.tipoPieza.style.background = "white";	
	document.frmAltaPieza.precioPieza.style.background = "white";
}

function validarAltaPieza(){
	var id = document.frmAltaPieza.idPieza.value.trim();
	var tipo = document.frmAltaPieza.tipoPieza.value.trim();
	var precio = document.frmAltaPieza.precioPieza.value.trim();
	
	var errores = false;
	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}[€]$/;
		
	//validaciones
	var sErrores = "";

	//ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmAltaPieza.idPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmAltaPieza.idPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaPieza.idPieza.style.background = "white";	
	}
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmAltaPieza.tipoPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El Tipo de pieza debe ser una cadena entre 3 y 20 caracteres \n";			
		document.frmAltaPieza.tipoPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaPieza.tipoPieza.style.background = "white";	
	}
	
	//Precio
	if (expRegPrecio.test(precio) == false){	
		errores = true;				
		document.frmAltaPieza.precioPieza.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Precio debe contener numeros y acabar con el caracter €\n';				
		document.frmAltaPieza.precioPieza.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaPieza.precioPieza.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{
		//altaPieza
	}	
}