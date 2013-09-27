<?php

header('Access-Control-Allow-Origin: *');

$quebra_linha = "\n";
$emailsender = "webmaster@vctbrasil.com.br";

$headers = "MIME-Version: 1.1" . $quebra_linha;
$headers .= "Content-type: text/html; charset=utf-8" . $quebra_linha;
$headers .= "From: " . $emailsender . $quebra_linha;
$headers .= "Return-Path: " . $emailsender . $quebra_linha; 

$emaildestinatario = $_POST["emaildestinatario"];
$assunto = $_POST["assunto"];
$mensagemHTML = $_POST["mensagemHTML"];

if($emaildestinatario == "" || $assunto == "" || $mensagemHTML == ""){
	echo 0;
}

$envio = mail( $emaildestinatario, $assunto, $mensagemHTML, $headers,"-r".$emailsender);
echo $envio;