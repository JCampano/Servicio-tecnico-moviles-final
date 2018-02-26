 <?php

// Va a devolver una respuesta JSON que no se debe cachear
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

//recogemos los datos
$datos=$_POST['datos'];
//los codificamos
$oPieza = json_decode($datos);

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "SELECT num_serie FROM piezas WHERE num_serie='".$oPieza."'";


if ($res = $conexion->query($sql)){
    $contador = $res->num_rows;
}

if($contador==0)
{
	$mensaje= 'No existe una pieza con ese numero de serie';
	$error = true;

}
else
{
	$sql = 'DELETE FROM piezas WHERE num_serie="'.$oPieza.'";';

	if($conexion->query($sql) === TRUE){
	        $mensaje = "Pieza Eliminada";
		    $error = FALSE;
	    }
	    else {
		    $mensaje = "Error: ".$sql." ".$conexion->error;
		    $error = TRUE;
		}

}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta);

mysqli_close($conexion);

?>
