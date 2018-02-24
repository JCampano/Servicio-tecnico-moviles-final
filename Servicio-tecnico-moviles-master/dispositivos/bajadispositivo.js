// Creacion del dialogo
$("#divfrmbajadispositivo").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaDispositivo")[0].reset();
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
document.getElementById("bajaDispositivo").addEventListener("click",validarBajaDispositivo,false);
document.frmBajaDispositivo.volver.addEventListener("click",volverBajaDispositivo,false);

function volverBajaDispositivo(){
	$("#divfrmbajadispositivo").dialog("close");    	
}

function reiniciarValidacionesBajaDispositivo(){
	document.frmBajaDispositivo.reset();	
	document.frmBajaDispositivo.marcaDispositivo.style.background = "white";
	document.frmBajaDispositivo.modeloDispositivo.style.background = "white";
}

function validarBajaDispositivo(){
	var marca = document.frmBajaDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmBajaDispositivo.modeloDispositivo.value.trim();
	var errores = false;	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z0-9]{3,20}$/;
	
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegMarca.test(marca) == false){	
		errores = true;				
		document.frmBajaDispositivo.marcaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Marca debe contener entre 3 y 10 letras\n";				
		document.frmBajaDispositivo.marcaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmBajaDispositivo.marcaDispositivo.style.background = "white";	
	}
	
	//Modelo
	if (expRegModelo.test(modelo) == false){	
		errores = true;				
		document.frmBajaDispositivo.modeloDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras o números\n";
		document.frmBajaDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmBajaDispositivo.modeloDispositivo.style.background = "white";
	}
	
	if(errores)
		alert(sErrores);
	else{
		//bajadispositivo
	}	
}