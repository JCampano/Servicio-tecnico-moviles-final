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

    var garantia = document.frmListadoDispositivos.garantiaDispositivo.value.trim();
    var sql = "SELECT ";
        /*
	ocultarInicio();
    $("#listados").html("");
	tipoListado="dispositivos";
	llamadaAjaxListado("dispositivos/listadoDispositivos.php");
    */

    /*
		//dar de alta en la base de datos
    var sDatos = $("#frmAltaCliente").serialize();

    $.post("clientes/altacliente.php", sDatos, respuestaAltaCliente, 'json');

    function respuestaAltaCliente(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false)
        {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmaltacliente").dialog("close");

        }
    else
        {
            alert(oDatosDevueltos[1]);
        }


    }*/

    if (garantia!="S" && garantia!="N")
        {

        }
    else
    {
     if(garantia=="S")
         {

         }
        else
        {

        }
    }
}
