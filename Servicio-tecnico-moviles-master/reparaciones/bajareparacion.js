// Creacion del dialogo
$("#divfrmbajareparacion").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaReparacion")[0].reset();
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

document.getElementById("bajaReparacion").addEventListener("click",validarBajaReparacion,false);

function reiniciarValidacionesBajaReparacion(){
	document.frmBajaReparacion.reset();
	document.frmBajaReparacion.repararDispositivo.style.background = "white";
}


function validarBajaReparacion(){
	
	if(document.frmBajaReparacion.repararDispositivo.value.trim() != "Lista de dispositivos en reparación"){			      
        var dispositivo = document.frmBajaReparacion.repararDispositivo.value.trim();
       document.frmBajaReparacion.repararDispositivo.style.background = "white";
        //bajaReparacion
	}
	else{ 
		alert("Debe seleccionar una reparación");
	 document.frmBajaReparacion.repararDispositivo.style.background = "yellow";
	}
}