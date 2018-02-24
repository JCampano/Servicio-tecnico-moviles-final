// Creacion del dialogo
$("#divfrmbajaempleado").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaEmpleado")[0].reset();
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
document.getElementById("bajaEmpleado").addEventListener("click",validarBajaEmpleado,false);
document.frmBajaEmpleado.volver.addEventListener("click",volverBajaEmpleado,false);

function volverBajaEmpleado(){
	$("#divfrmbajaempleado").dialog("close");    	
}

function reiniciarValidacionesBajaEmpleado(){
	document.frmBajaEmpleado.reset();	
    document.frmBajaEmpleado.nifEmpleado.style.background = "white";		
}

function validarBajaEmpleado(){	
	var nif = document.frmBajaEmpleado.nifEmpleado.value.trim();	
	var errores = false;	
	var expRegNif = /^\d{8}\w$/;	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajaEmpleado.nifEmpleado.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmBajaEmpleado.nifEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaEmpleado.nifEmpleado.style.background = "white";	
	}
		
	if(errores)
		alert(sErrores);
	else{
		//bajaEmpleado
	}		
}