<?php
function gerarAtividade($numQuest, $file){
  $atividade = array();
  for ($i=0; $i < $numQuest; $i++) {
    array_push($atividade, $file[rand(0,4)]);
  }
print_r($atividade);
}

$file = fopen("gerador.json", "r") or die("Unable to open file!");
$jfile = json_decode(fread($file,filesize("gerador.json")), true);
fclose($file);

gerarAtividade(3, $jfile);
?>
