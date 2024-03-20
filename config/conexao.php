<?php
  $link = mysqli_connect("localhost", "brinquedoemania_us3rbrInq", "tR{U54O%[dI*", "brinquedoemania_d4t4b4s3");
  if ($link === false) {
    die("ERROR: Impossível conectar. Erro: " . mysqli_connect_error());
  }
  //echo "Conexão realizada com sucesso. Servidor.: " . mysqli_get_host_info($link);