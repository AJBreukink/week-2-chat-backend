<?php
if(isset($_POST['username'], $_POST['usermsg'])) {
  $myfile = fopen("thefile.txt", "a");
  $name = $_POST["username"];
  $message = $_POST["usermsg"];
  fwrite($myfile, $name.$message."\n");
  fclose($myfile);
}


$read = file('thefile.txt');
$count = count($read);
$i = 1;
foreach ($read as $line) {
  echo $line;
  if($i < $count) {
    echo ', ';
  }
  $i++;
}
 ?>
