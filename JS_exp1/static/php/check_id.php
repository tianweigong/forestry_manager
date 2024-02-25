<?php
	// Create a database connection
	$mysqli = mysqli_connect("localhost","eco_mdb_root","KZrQupBmNL","eco_mdb1");


	//error report
	if (mysqli_connect_error($mysqli)){
	    echo(233);
	}else{
		$ip_address = gethostbyname($_SERVER['REMOTE_ADDR']);
		// $ip_address = "18.111.62.18";
		//slashes added for escaping
		$ip_address = addslashes($ip_address);

		$query = "(SELECT 'ip' FROM tia_event WHERE tia_event.ip ='$ip_address')";
		//$query = "(SELECT 'ip' FROM neil_time2 WHERE neil_time2.ip ='$ip_address')";

		$result = mysqli_query($mysqli, $query) or die ("Something went wrong!");

		$num_result = mysqli_num_rows($result);

		if ($num_result > 0){
			// echo("You've done this before") ;
			echo(1);
		}else{
			// echo("you can do it!");
			echo(0);
		}
	}

?>

