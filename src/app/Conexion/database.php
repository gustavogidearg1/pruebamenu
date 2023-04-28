<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
/*
//base de datos local
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'angularcon';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
*/

$db_host = '168.197.48.110';
$db_username = 'c2110488_PrIspc';
$db_password = '98movadoDO';
$db_name = 'c2110488_PrIspc';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>
