//var oSAT = new SAT();
// Cargar datos desde XML
//cargarDatosXML();
//eventos botones menu

//document.getElementById("menu").addEventListener("click", mostrarInicio, false);
function ocultarMenu(){
	document.getElementById("menuDesplegable").style.visibility = "hidden";
}

function mostrarMenu(){
	document.getElementById("menuDesplegable").style.visibility = "visible";
	
}

document.getElementById("navAltaCliente").addEventListener("click", mostrarAltaCliente, false);
document.getElementById("navBajaCliente").addEventListener("click", mostrarBajaCliente, false);
document.getElementById("navModificarCliente").addEventListener("click", mostrarModificarCliente, false);

document.getElementById("navAltaEmpleado").addEventListener("click", mostrarAltaEmpleado, false);
document.getElementById("navBajaEmpleado").addEventListener("click", mostrarBajaEmpleado, false);
document.getElementById("navModificarEmpleado").addEventListener("click", mostrarModificarEmpleado, false);

document.getElementById("navAltaProveedor").addEventListener("click", mostrarAltaProveedor, false);
document.getElementById("navBajaProveedor").addEventListener("click", mostrarBajaProveedor, false);
document.getElementById("navModificarProveedor").addEventListener("click", mostrarModificarProveedor, false);


document.getElementById("navAltaDispositivo").addEventListener("click", mostrarAltaDispositivo, false);
document.getElementById("navBajaDispositivo").addEventListener("click", mostrarBajaDispositivo, false);
document.getElementById("navModificarDispositivo").addEventListener("click", mostrarModificarDispositivo, false);

document.getElementById("navAltaPieza").addEventListener("click", mostrarAltaPieza, false);
document.getElementById("navBajaPieza").addEventListener("click", mostrarBajaPieza, false);
document.getElementById("navModificarPieza").addEventListener("click", mostrarModificarPieza, false);

document.getElementById("navAltaReparación").addEventListener("click", mostrarAltaReparacion, false);
document.getElementById("navModificarReparación").addEventListener("click", mostrarModificarReparacion, false);
document.getElementById("navEliminarReparacion").addEventListener("click", mostrarBajaReparacion, false);

function mostrarAltaCliente(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaCliente').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltacliente"></div>').appendTo('#formularios').load("clientes/frmaltacliente.html",
            function() {
                $.getScript("clientes/altacliente.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesAltaCliente();
		$('#divfrmaltacliente').dialog("open");
    }
}

function mostrarBajaCliente(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaCliente').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajacliente"></div>').appendTo('#formularios').load("clientes/frmbajacliente.html",
            function() {
                $.getScript("clientes/bajacliente.js");
            });

    } else {// si se cargo abrimos el dialogo  
		reiniciarValidacionesBajaCliente();	
		$('#divfrmbajacliente').dialog("open");
    }
}

function mostrarModificarCliente(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarCliente').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarcliente"></div>').appendTo('#formularios').load("clientes/frmmodificarcliente.html",
            function() {
                $.getScript("clientes/modificarcliente.js");
            });

    } else {// si se cargo abrimos el dialogo    
		reiniciarValidacionesModificarCliente();
		$('#divfrmmodificarcliente').dialog("open");
    }
}

function mostrarAltaEmpleado(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaEmpleado').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltaempleado"></div>').appendTo('#formularios').load("personal/frmaltaempleado.html",
            function() {
                $.getScript("personal/altaempleado.js");
            });

    } else {// si se cargo abrimos el dialogo   
		reiniciarValidacionesAltaEmpleado();
		$('#divfrmaltaempleado').dialog("open");
    }
}

function mostrarBajaEmpleado(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaEmpleado').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajaempleado"></div>').appendTo('#formularios').load("personal/frmbajaempleado.html",
            function() {
                $.getScript("personal/bajaempleado.js");
            });

    } else {// si se cargo abrimos el dialogo        
		$('#divfrmbajaempleado').dialog("open");
		reiniciarValidacionesBajaEmpleado();
    }
}

function mostrarModificarEmpleado(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarEmpleado').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarempleado"></div>').appendTo('#formularios').load("personal/frmmodificarempleado.html",
            function() {
                $.getScript("personal/modificarempleado.js");
            });

    } else {// si se cargo abrimos el dialogo        
		$('#divfrmmodificarempleado').dialog("open");
		reiniciarValidacionesModificarEmpleado();
    }
}

function mostrarAltaProveedor(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaProveedor').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltaproveedor"></div>').appendTo('#formularios').load("proveedores/frmaltaproveedor.html",
            function() {
                $.getScript("proveedores/altaproveedor.js");
            });

    } else {// si se cargo abrimos el dialogo        
		$('#divfrmaltaproveedor').dialog("open");
		reiniciarValidacionesAltaProveedor();
    }
}

function mostrarBajaProveedor(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaProveedor').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajaproveedor"></div>').appendTo('#formularios').load("proveedores/frmbajaproveedor.html",
            function() {
                $.getScript("proveedores/bajaproveedor.js");
            });

    } else {// si se cargo abrimos el dialogo      
		reiniciarValidacionesBajaProveedor();
		$('#divfrmbajaproveedor').dialog("open");
    }
}

function mostrarModificarProveedor(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarProveedor').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarproveedor"></div>').appendTo('#formularios').load("proveedores/frmmodificarproveedor.html",
            function() {
                $.getScript("proveedores/modificarproveedor.js");
            });

    } else {// si se cargo abrimos el dialogo 
		reiniciarValidacionesModificarProveedor();
		$('#divfrmmodificarproveedor').dialog("open");
    }
}


function mostrarAltaDispositivo(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaDispositivo').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltadispositivo"></div>').appendTo('#formularios').load("dispositivos/frmaltadispositivo.html",
            function() {
                $.getScript("dispositivos/altadispositivo.js");
            });

    } else {// si se cargo abrimos el dialogo    
		reiniciarValidacionesAltaDispositivo();
		$('#divfrmaltadispositivo').dialog("open");
    }
}

function mostrarBajaDispositivo(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaDispositivo').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajadispositivo"></div>').appendTo('#formularios').load("dispositivos/frmbajadispositivo.html",
            function() {
                $.getScript("dispositivos/bajadispositivo.js");
            });

    } else {// si se cargo abrimos el dialogo 
		reiniciarValidacionesBajaDispositivo();
		$('#divfrmbajadispositivo').dialog("open");
    }
}

function mostrarModificarDispositivo(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarDispositivo').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificardispositivo"></div>').appendTo('#formularios').load("dispositivos/frmmodificardispositivo.html",
            function() {
                $.getScript("dispositivos/modificardispositivo.js");
            });

    } else {// si se cargo abrimos el dialogo 
		reiniciarValidacionesModificarDispositivo();
		$('#divfrmmodificardispositivo').dialog("open");
    }
}


function mostrarAltaPieza(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaPieza').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltapieza"></div>').appendTo('#formularios').load("piezasderepuesto/frmaltapieza.html",
            function() {
                $.getScript("piezasderepuesto/altapieza.js");
            });

    } else {// si se cargo abrimos el dialogo  
		reiniciarValidacionesAltaPieza();
		cargarComboIdReparacion();
		vaciarComboIdReparacion();
		$('#divfrmaltapieza').dialog("open");		
    }
}

function mostrarBajaPieza(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaPieza').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajapieza"></div>').appendTo('#formularios').load("piezasderepuesto/frmbajapieza.html",
            function() {
                $.getScript("piezasderepuesto/bajapieza.js");
            });

    } else {// si se cargo abrimos el dialogo   
		reiniciarValidacionesBajaPieza();
		$('#divfrmbajapieza').dialog("open");
    }
}

function mostrarModificarPieza(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarPieza').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarpieza"></div>').appendTo('#formularios').load("piezasderepuesto/frmmodificarpieza.html",
            function() {
                $.getScript("piezasderepuesto/modificarpieza.js");
            });

    } else {// si se cargo abrimos el dialogo 
		reiniciarValidacionesModificarPieza();
		$('#divfrmmodificarpieza').dialog("open");
    }
}


function mostrarAltaReparacion(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaReparacion').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltareparacion"></div>').appendTo('#formularios').load("reparaciones/frmaltareparacion.html",
            function() {
                $.getScript("reparaciones/altareparacion.js");
            });

    } else {// si se cargo abrimos el dialogo   
		reiniciarValidacionesAltaReparacion();
		vaciarComboAltaReparaciones();
		vaciarComboAltaSolicitante();
		cargarComboAltaReparaciones();
		cargarComboAltaSolicitante();
		$('#divfrmaltareparacion').dialog("open");
    }
}

function mostrarBajaReparacion(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaReparacion').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajareparacion"></div>').appendTo('#formularios').load("reparaciones/frmbajareparacion.html",
            function() {
                $.getScript("reparaciones/bajareparacion.js");
            });

    } else {// si se cargo abrimos el dialogo      
		reiniciarValidacionesBajaReparacion();
		vaciarComboBajaReparaciones();
		$('#divfrmbajareparacion').dialog("open");
    }
}

function mostrarModificarReparacion(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarReparacion').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarreparacion"></div>').appendTo('#formularios').load("reparaciones/frmmodificarreparacion.html",
            function() {
                $.getScript("reparaciones/modificarreparacion.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesModificarReparacion();
		vaciarComboModificarReparaciones();
		$('#divfrmmodificarreparacion').dialog("open");
    }
}

document.getElementById("navListadoClientes").addEventListener("click", mostrarListadoClientes, false);
document.getElementById("navListadoProveedores").addEventListener("click", mostrarListadoProveedores, false);
document.getElementById("navListadoEmpleados").addEventListener("click", mostrarListadoEmpleados, false);
/*
document.getElementById("navListadoDispositivos").addEventListener("click", mostrarListadoDispositivos, false);


document.getElementById("navListadoReparaciones").addEventListener("click", mostrarListadoReparacionesFiltro, false);
document.getElementById("navListadoPiezas").addEventListener("click", mostrarListadoPiezasFiltro, false);
*/

//LISTADOS
function ocultarInicio(){
	document.getElementById("jumbo").style.display = "none";	
}
	
//document.getElementById("volverListadoCliente").addEventListener("click",volverListado,false);
function volverListado(){
	$("#listados").html("");
	document.getElementById("jumbo").style.display = "block";		
}

var oAjaxListado = null;
var tipoListado = null;

function mostrarListadoClientes(){	
	ocultarInicio();
	$("#listados").html("");
	tipoListado="clientes";
	llamadaAjaxListado("clientes/listadoClientes.php");	
}

function mostrarListadoProveedores(){	
	ocultarInicio();
	$("#listados").html("");
	tipoListado="proveedores";
	llamadaAjaxListado("proveedores/listadoProveedores.php");	
}

function mostrarListadoEmpleados(){	
	ocultarInicio();
	$("#listados").html("");
	tipoListado="empleados";
	llamadaAjaxListado("personal/listadoEmpleados.php");	
}

/*
function mostrarListadoDispositivos(){	
	ocultarInicio();
	tipoListado="dispositivos";
	llamadaAjaxListado("clientes/listadoDispositivos.php");	
}
*/
function objetoXHR() {
			if (window.XMLHttpRequest) {
				return new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				var versionesIE = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');
				for (var i = 0; i < versionesIE.length; i++) {
					try {
						return new ActiveXObject(versionesIE[i]);
					} catch (errorControlado) {} //Capturamos el error,
				}
			}
			throw new Error("No se pudo crear el objeto XMLHttpRequest");
		}

function llamadaAjaxListado(sURL){

	oAjaxListado = objetoXHR();

	oAjaxListado.open("GET",sURL,true);
			
	oAjaxListado.onreadystatechange = respuestaListado;

	oAjaxListado.send(null);
}


function respuestaListado(){
	if(oAjaxListado.readyState == 4 && oAjaxListado.status ==200){
		//Recojo el documento XML en variable global
		var oXML = oAjaxListado.responseXML;
		switch(tipoListado){
			//SIN FILTROS
			case 'clientes':
			procesaListadoClientesXML(oXML);
			break;

			case 'proveedores':
			procesaListadoProveedoresXML(oXML);
			break;

			case 'empleados':
			procesaListadoEmpleadosXML(oXML);
			break;			
	
			//CON FILTROS
	
			case 'dispositivos':
			procesaListadoDispositivosXML(oXML);
			break;

			case 'reparaciones':
			procesaListadoReparacionesXML(oXML);
			break;

			case 'FGFGGFFGSG':
			(oXML);
			break;
		}					
	}
}

function procesaListadoClientesXML(oXML){		
	var jqTabla = $('<table class="table" id="listado">');
	
	var oCliente = oXML.getElementsByTagName("cliente");
	$('<tr><th>DNI</th><th>NOMBRE</th><th>APELLIDOS</th><th>TELEFONO</th><th>DIRECCION</th>').appendTo(jqTabla);
	
	for(var i=0;i<oCliente.length;i++){
		$('<tr>' +
			'<td>'+oCliente[i].getElementsByTagName('idcliente')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('apellido')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('movil')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }	
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");
	 
}


function procesaListadoEmpleadosXML(oXML){
	var jqTabla = $('<table class="table" id="listado">');
		
	var oEmpleado = oXML.getElementsByTagName("empleado");
	$('<tr><th>ID</th><th>NOMBRE</th><th>APELLIDOS</th><th>TELEFONO</th><th>DIRECCION</th>').appendTo(jqTabla);
	
	for(var i=0;i<oEmpleado.length;i++){
		$('<tr>' +
			'<td>'+oEmpleado[i].getElementsByTagName('id')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('apellido')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('movil')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }	
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");
	 
}


function procesaListadoProveedoresXML(oXML){
	var jqTabla = $('<table class="table" id="listado">');	
	
	var oProveedor = oXML.getElementsByTagName("proveedor");
	$('<tr><th>ID</th><th>NOMBRE</th><th>APELLIDOS</th><th>TELEFONO</th><th>DIRECCION</th>').appendTo(jqTabla);
	
	for(var i=0;i<oProveedor.length;i++){
		$('<tr>' +
			'<td>'+oProveedor[i].getElementsByTagName('id')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('apellido')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('movil')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }	
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");
	 
}

//eventos botones aceptar
/*
document.getElementById("altaCliente").addEventListener("click", validarAltaCliente, false);
document.getElementById("bajaCliente").addEventListener("click", validarBajaCliente, false);
document.getElementById("modificarCliente").addEventListener("click", validarModificarCliente, false);

document.getElementById("altaDispositivo").addEventListener("click", validarAltaDispositivo, false);
document.getElementById("bajaDispositivo").addEventListener("click", validarBajaDispositivo, false);
document.getElementById("modificarDispositivo").addEventListener("click", validarModificarDispositivo, false);

document.getElementById("altaReparacion").addEventListener("click", validarAltaReparacion, false);
document.getElementById("bajaReparacion").addEventListener("click", validarBajaReparacion, false);
document.getElementById("modificarReparacion").addEventListener("click", validarModificarReparacion, false);

document.getElementById("altaEmpleado").addEventListener("click", validarAltaEmpleado, false);
document.getElementById("bajaEmpleado").addEventListener("click", validarBajaEmpleado, false);
document.getElementById("modificarEmpleado").addEventListener("click", validarModificarEmpleado, false);

document.getElementById("altaPieza").addEventListener("click", validarAltaPieza, false);
document.getElementById("bajaPieza").addEventListener("click", validarBajaPieza, false);
document.getElementById("modificarPieza").addEventListener("click", validarModificarPieza, false);

document.getElementById("altaProveedor").addEventListener("click", validarAltaProveedor, false);
document.getElementById("bajaProveedor").addEventListener("click", validarBajaProveedor, false);
document.getElementById("modificarProveedor").addEventListener("click", validarModificarProveedor, false);




//LISTADOS
function mostrarListadoClientes()
{
	document.getElementById('listados').style.display = "block";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";

	var oCapa = document.getElementById("listados");

	if (oCapa.firstChild) 
		oCapa.removeChild(oCapa.lastChild);
	

	var nombre = prompt("¿Busca un nombre?", "Escriba el nombre o en blanco para listado normal");
	nombre = nombre.trim();
	var listado = oSAT.pintarListadoClientes(nombre);


	oCapa.appendChild(listado);
 
}

function mostrarListadoDispositivos()
{
	document.getElementById('listados').style.display = "block";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";

	var oCapa = document.getElementById("listados");

	if (oCapa.firstChild) 
		oCapa.removeChild(oCapa.lastChild);
	
	var garantia = prompt("¿Tiene garantia?", "Escriba S o N,introduzca cualquier otro caracter para un listado normal");
	garantia = garantia.trim();
	var listado = oSAT.pintarListadoDispositivos(garantia);
	oCapa.appendChild(listado);
 
}

function mostrarListadoProveedores()
{
	document.getElementById('listados').style.display = "block";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";

	var oCapa = document.getElementById("listados");

	if (oCapa.firstChild) 
		oCapa.removeChild(oCapa.lastChild);

	var listado = oSAT.pintarListadoProveedores();


	oCapa.appendChild(listado);
 
}


function mostrarListadoEmpleados()
{
	document.getElementById('listados').style.display = "block";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";

	var oCapa = document.getElementById("listados");

	if (oCapa.firstChild) 
		oCapa.removeChild(oCapa.lastChild);

	var listado = oSAT.pintarListadoEmpleados();


	oCapa.appendChild(listado);
 
}

function mostrarListadoReparaciones()
{
	document.getElementById('listados').style.display = "block";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";

	var oCapa = document.getElementById("listados");

	if (oCapa.firstChild) 
		oCapa.removeChild(oCapa.lastChild);

	var listado = oSAT.pintarListadoReparaciones();


	oCapa.appendChild(listado);
 
}


/*
// eventos botones volver
document.frmAltaCliente.volver.addEventListener("click", volverAltaCliente, false);
document.frmBajaCliente.volver.addEventListener("click", volverBajaCliente, false);
document.frmModificarCliente.volver.addEventListener("click", volverModificarCliente, false);


document.frmAltaDispositivo.volver.addEventListener("click", volverAltaDispositivo, false);
document.frmBajaDispositivo.volver.addEventListener("click", volverBajaDispositivo, false);
document.frmModificarDispositivo.volver.addEventListener("click", volverModificarDispositivo, false);


document.frmAltaReparacion.volver.addEventListener("click", volverAltaReparacion, false);
document.frmBajaReparacion.volver.addEventListener("click", volverBajaReparacion, false);
document.frmModificarReparacion.volver.addEventListener("click", volverModificarReparacion, false);

document.frmAltaProveedor.volver.addEventListener("click", volverAltaProveedor, false);
document.frmBajaProveedor.volver.addEventListener("click", volverBajaProveedor, false);
document.frmModificarProveedor.volver.addEventListener("click", volverModificarProveedor, false);

document.frmAltaPieza.volver.addEventListener("click", volverAltaPieza, false);
document.frmBajaPieza.volver.addEventListener("click", volverBajaPieza, false);
document.frmModificarPieza.volver.addEventListener("click", volverModificarPieza, false);


document.frmAltaEmpleado.volver.addEventListener("click", volverAltaEmpleado, false);
document.frmBajaEmpleado.volver.addEventListener("click", volverBajaEmpleado, false);
document.frmModificarEmpleado.volver.addEventListener("click", volverModificarEmpleado, false);


document.frmPago.volver.addEventListener("click", volverPago, false);
document.frmCobro.volver.addEventListener("click", volverCobro, false);
*/
/*
function mostrarInicio(){
	var oCapa = document.getElementById("listados");

	if (oCapa.firstChild) 
		oCapa.removeChild(oCapa.lastChild);
	
	document.frmAltaCliente.style.display = "none";
	document.frmBajaCliente.style.display = "none";
	document.frmModificarCliente.style.display = "none";
	document.frmAltaProveedor.style.display = "none";
	document.frmBajaProveedor.style.display = "none";
	document.frmModificarProveedor.style.display = "none";
	document.frmAltaPieza.style.display = "none";
	document.frmBajaPieza.style.display = "none";
	document.frmModificarPieza.style.display = "none";
	document.frmAltaDispositivo.style.display = "none";
	document.frmBajaDispositivo.style.display = "none";
	document.frmModificarDispositivo.style.display = "none";
	document.frmAltaReparacion.style.display = "none";
	document.frmBajaReparacion.style.display = "none";
	document.frmModificarReparacion.style.display = "none";
	document.frmAltaEmpleado.style.display = "none";
	document.frmBajaEmpleado.style.display = "none";
	document.frmModificarEmpleado.style.display = "none";
	document.frmPago.style.display = "none";
	document.frmCobro.style.display = "none";
	
	document.getElementById('jumbo').style.display = "block";
}

function volverAltaCliente(){
	document.frmAltaCliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaCliente(){
	document.frmBajaCliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarCliente(){
	document.frmModificarCliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaProveedor(){
	document.frmAltaProveedor.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaProveedor(){
	document.frmBajaProveedor.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarProveedor(){
	document.frmModificarProveedor.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaPieza(){
	document.frmAltaPieza.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaPieza(){
	document.frmBajaPieza.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarPieza(){
	document.frmModificarPieza.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaDispositivo(){
	document.frmAltaDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaDispositivo(){
	document.frmBajaDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarDispositivo(){
	document.frmModificarDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaReparacion(){
	document.frmAltaReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaReparacion(){
	document.frmBajaReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarReparacion(){
	document.frmModificarReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaEmpleado(){
	document.frmAltaEmpleado.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaEmpleado(){
	document.frmBajaEmpleado.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarEmpleado(){
	document.frmModificarEmpleado.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverPago(){
	document.frmPago.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}
function volverCobro(){
	document.frmCobro.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

*/
/*
//carga de datos XML
function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	  {
	  xhttp=new XMLHttpRequest();
	  }
	else // code for IE5 and IE6
	  {
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",filename,false);
	
	xhttp.send();
	
	return xhttp.responseXML;
} 

function cargarDatosXML(){
	var oXml = loadXMLDoc("datos.xml");

	var clienteXml = oXml.getElementsByTagName("Clientes");
    var empleadoXml = oXml.getElementsByTagName("Empleados");
    var proveedorXml = oXml.getElementsByTagName("Proveedor");
    var piezaXml = oXml.getElementsByTagName("Piezas");
	var dispositivoXml = oXml.getElementsByTagName("Dispositivos");
	var reparacionesXml = oXml.getElementsByTagName("Reparaciones");
	var pagosXml = oXml.getElementsByTagName("Pagos");
	var cobrosXml = oXml.getElementsByTagName("Cobros");

    var cli = clienteXml[0];
    for(var i = 0; i < cli.getElementsByTagName("cliente").length; i++){
        var nombre = cli.getElementsByTagName("cliente")[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = cli.getElementsByTagName("cliente")[i].getElementsByTagName("apellidos")[0].textContent;
		var nif = cli.getElementsByTagName("cliente")[i].getElementsByTagName("nif")[0].textContent;
		var telf = cli.getElementsByTagName("cliente")[i].getElementsByTagName("telefono")[0].textContent;
		var direccion = cli.getElementsByTagName("cliente")[i].getElementsByTagName("direccion")[0].textContent;

        var oCliente = new Cliente(nombre,apellidos,nif,telf,direccion);
		var cliente = oSAT.altaCliente(oCliente);
    }
	
	
	var emple = empleadoXml[0];
    for(var i = 0; i < emple.getElementsByTagName("empleado").length; i++){
        var nombre = emple.getElementsByTagName("empleado")[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = emple.getElementsByTagName("empleado")[i].getElementsByTagName("apellidos")[0].textContent;
		var nif = emple.getElementsByTagName("empleado")[i].getElementsByTagName("nif")[0].textContent;
		var telf = emple.getElementsByTagName("empleado")[i].getElementsByTagName("telefono")[0].textContent;
		var direccion = emple.getElementsByTagName("empleado")[i].getElementsByTagName("direccion")[0].textContent;
		var ivan = emple.getElementsByTagName("empleado")[i].getElementsByTagName("ivan")[0].textContent;
		var cargo = emple.getElementsByTagName("empleado")[i].getElementsByTagName("cargo")[0].textContent;

        var oEmpleado = new Personal(nombre,apellidos,nif,telf,direccion,ivan,cargo);
		var empleado = oSAT.altaEmpleado(oEmpleado);
    }
	
	
	var prove = proveedorXml[0];
    for(var i = 0; i < prove.getElementsByTagName("proveedor").length; i++){
        var nombre = prove.getElementsByTagName("proveedor")[i].getElementsByTagName("nombre")[0].textContent;
        var tipo = prove.getElementsByTagName("proveedor")[i].getElementsByTagName("tipo")[0].textContent;
		var cif = prove.getElementsByTagName("proveedor")[i].getElementsByTagName("cif")[0].textContent;
		
        var oProveedor = new Proveedor(tipo,nombre,cif);
		var proveedor = oSAT.altaProveedor(oProveedor);
    }
	
	
	
	var disp = dispositivoXml[0];
    for(var i = 0; i < disp.getElementsByTagName("dispositivo").length; i++){
        var marca = disp.getElementsByTagName("dispositivo")[i].getElementsByTagName("marca")[0].textContent;
        var modelo = disp.getElementsByTagName("dispositivo")[i].getElementsByTagName("modelo")[0].textContent;
		var garantia = disp.getElementsByTagName("dispositivo")[i].getElementsByTagName("garantia")[0].textContent;
		var entrada = disp.getElementsByTagName("dispositivo")[i].getElementsByTagName("entrada")[0].textContent;
		var salida = disp.getElementsByTagName("dispositivo")[i].getElementsByTagName("salida")[0].textContent;
		
        oDispositivos = new Dispositivo(marca,modelo,garantia, new Date(entrada), new Date(salida));
        dispositivo = oSAT.altaDispositivos(oDispositivos);
    }
	

	
	var repara = reparacionesXml[0];
	for(var i = 0; i < repara.getElementsByTagName("reparacion").length; i++){
		var modelo = repara.getElementsByTagName("reparacion")[i].getElementsByTagName("modelo")[0].textContent;
		var averia = repara.getElementsByTagName("reparacion")[i].getElementsByTagName("averia")[0].textContent;
		var estado = repara.getElementsByTagName("reparacion")[i].getElementsByTagName("estado")[0].textContent;
		var importePresupuestado = repara.getElementsByTagName("reparacion")[i].getElementsByTagName("importePresupuestado")[0].textContent;
		var comentario = repara.getElementsByTagName("reparacion")[i].getElementsByTagName("comentario")[0].textContent;
			
		oReparaciones = new Reparacion(modelo,averia,estado,importePresupuestado, comentario);
		reparaciones = oSAT.altaReparacion(oReparaciones);
	}
	
}
*/

