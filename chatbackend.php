<?php
header("Access-Control-Allow-Origin: *");

$myfile = fopen("thefile.txt", "a");
$name = $_GET["username"];
$message = $_GET["usermsg"];
echo $name.$message;
fwrite($myfile, $name.$message."\n");
fclose($myfile);


/*if(isset($_GET['username'], $_GET['usermsg']))
    {
  global $myfile;
  $name = $_GET["username"];
  $message = $_GET["usermsg"];
  fwrite($myfile, $name.$message."\n");
  fclose($myfile);
}*/

/*
    if(!($fp=fopen("thefile.txt","r")))
    	{
    		echo '<p class="style">Problem in opening the file!</p>';
    	}
    	else
    	{
    		while(!feof($fp))
    		{
    			$str=fgets($fp);
    			echo $str."<br>";
    		}
    	}
    	fclose($fp);
      */
 ?>
