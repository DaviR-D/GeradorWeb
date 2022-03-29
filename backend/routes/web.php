<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/getAtividade', function () {
  $file = fopen("../gerador.json", "r") or die("Unable to open file!");
  $jfile = json_decode(fread($file,filesize("../gerador.json")), true);
  fclose($file);

  $atividade = array();
  for ($i=0; $i < 3; $i++) {
    array_push($atividade, $jfile[rand(0,4)]);
  }
  $jatividade = json_encode($atividade);
  return $jatividade;
});
