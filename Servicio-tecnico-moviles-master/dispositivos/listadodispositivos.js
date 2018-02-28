$("#divfrmlistadodispositivos").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmListadoDispositivos")[0].reset();
		mostrarMenu();
		volverListado();
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

document.getElementById("listadoDispositivos").addEventListener("click",comprobarListadoDispositivos,false);
document.frmListadoDispositivos.volver.addEventListener("click",volverListadoDispositivos,false);

function volverListadoDispositivos(){
	$("#divfrmlistadodispositivos").dialog("close");
	volverListado();
}

function reiniciarValidacionesListadoDispositivos(){
	document.frmListadoDispositivos.reset();
	document.frmListadoDispositivos.garantiaDispositivo.style.background = "white";
}

function comprobarListadoDispositivos(){
    //guardo el parametro del filtro    
	var sDatos = document.frmListadoDispositivos.garantiaDispositivo.value;
alert(sDatos);	
	
	llamadaAjaxListadoParametros("dispositivos/listadoDispositivos.php",sDatos);
	// $.post("clientes/altacliente.php", sDatos, respuestaAltaCliente, 'json');
}    