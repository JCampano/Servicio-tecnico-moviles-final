// Creacion del dialogo
$("#divfrmbajacliente").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaCliente")[0].reset();
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

document.getElementById("bajaCliente").addEventListener("click",validarBajaCliente,false);
document.frmBajaCliente.volver.addEventListener("click",volverBajaCliente,false);

function volverBajaCliente(){
	$("#divfrmbajacliente").dialog("close");    	
}

function reiniciarValidacionesBajaCliente(){
	document.frmBajaCliente.reset();
	document.frmBajaCliente.nifCliente.style.background = "white";	
}

function validarBajaCliente(){
	var nif = document.frmBajaCliente.nifCliente.value.trim();
	var errores = false;
	var expRegNif = /^\d{8}\w$/;
		
	//validaciones
	var sErrores = "";

	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajaCliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmBajaCliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaCliente.nifCliente.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{
		cad="";	
		if (oSAT.bajaCliente(nif)){
			cad="El Cliente ha sido dado de baja";
		}
		else{
			cad="Cliente no registrado";
			document.frmBajaCliente.reset();
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
}
