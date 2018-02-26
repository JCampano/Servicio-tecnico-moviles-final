$("#divfrmlistadodispositivos").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmListadoDispositivos")[0].reset();
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

document.getElementById("listadoDispositivos").addEventListener("click",comprobarListadoDispositivos,false);
document.frmAltaCliente.volver.addEventListener("click",volverListadoDispositivos,false);

function volverListadoDispositivos(){
	$("#divfrmlistadodispositivos").dialog("close");
}

function reiniciarValidacionesListadoDispositivos(){
	document.frmListadoDispositivos.reset();
	document.frmListadoDispositivos.garantiaDispositivo.style.background = "white";
}

function comprobarListadoDispositivos(){
        /*
	ocultarInicio();
    $("#listados").html("");
	tipoListado="dispositivos";
	llamadaAjaxListado("dispositivos/listadoDispositivos.php");
    */
    var sDatos = $("#frmListadoDispositivos").serialize();
    $.post("dispositivos/listadodispositivos.php", sDatos, respuestaListadoDispositivos, 'json');

function respuestaListadoDispositivos(oDatosDevueltos, sStatus, oAjax) {


            $("#divfrmlistadodispositivos").dialog("close");
            alert("hola");

    }
}
