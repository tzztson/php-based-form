<?php
$email = $_REQUEST["email"];
$comment = $_REQUEST["comment"];
$ip = $_REQUEST["ip"];
$date = date("Y.m.d");

 $exportJson = Array
 (
	"email" => $email,
	"comment" => $comment,
	"ip" => $ip,
	"date" => $date 
);
 
 $exportJson = json_encode($exportJson);

 echo $exportJson;

file_put_contents("form.json", $exportJson);


?>
