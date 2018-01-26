<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
$verb = $_SERVER['REQUEST_METHOD'];

/*if ($verb =='PUT'){

  $putdata = fopen("php://input", "r");
  parse_str(file_get_contents("php://input"),$post_vars);
  $writefile = fopen("thefile.txt", "a+");
  $old_content = file_get_contents($mytextfile);
  $new_content = $post_vars['mykey'].$post_vars['value']. "\n";
  fwrite($mytextfile, $new_content."\n".$old_content);
  fclose($mytextfile);
*/
if ($verb == 'POST') {

  if(isset($_GET['mykey'], $_GET['value']))
      {
    $writefile = fopen("thefile.txt", "a");
    $name = $_GET["mykey"];
    $message = $_GET["value"];
    fwrite($writefile, $name.": ".$message."\n");
    fclose($writefile);
      }

    } elseif ($verb=='GET') {
      if(isset($_GET['mykey'], $_GET['value'])) {
      $readfile=fopen("thefile.txt", "r");
      while(! feof($readfile)){
          echo fgets($readfile). "<br />";
          }
        }
      }

 ?>
