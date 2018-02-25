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
cargarComboBajaReparaciones();

document.getElementById("bajaReparacion").addEventListener("click",validarBajaReparacion,false);
document.frmBajaReparacion.volver.addEventListener("click",volverBajaReparacion,false);

function volverBajaReparacion(){
	$("#divfrmbajareparacion").dialog("close");    	
}

function reiniciarValidacionesBajaReparacion(){
	document.frmBajaReparacion.reset();
	document.frmBajaReparacion.repararDispositivoBaja.style.background = "white";
}


function validarBajaReparacion(){
	
	if(document.frmBajaReparacion.repararDispositivoBaja.value.trim() != "Lista de dispositivos en reparación"){			      
        var dispositivo = document.frmBajaReparacion.repararDispositivoBaja.value.trim();
       document.frmBajaReparacion.repararDispositivoBaja.style.background = "white";
        //bajaReparacion
	}
	else{ 
		alert("Debe seleccionar una reparación");
	 document.frmBajaReparacion.repararDispositivoBaja.style.background = "yellow";
	}
}


function cargarComboBajaReparaciones(){
//con load
$("#repararDispositivoBaja").load("reparaciones/cargarComboBajaReparaciones.php");
}


function vaciarComboBajaReparaciones(){
$('#repararDispositivoBaja').each(function(){
          $('#repararDispositivoBaja option').remove();
      });
}
