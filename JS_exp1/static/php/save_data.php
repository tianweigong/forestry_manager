<?php
	// Create a database connection
	$mysqli = mysqli_connect("localhost","eco_mdb_root","KZrQupBmNL","eco_mdb1");

	//error report
	if (mysqli_connect_error($mysqli)){
	    echo(233);
	}else{
		// Get values passed from JS
		$ip = $_SERVER['REMOTE_ADDR'];

		$date = date('Y-m-d');
		$theExp = $_POST['theExp'];
		$theID = $_POST['theID'];
		$theAge=$_POST['theAge'];
		$theGender=$_POST['theGender'];
		$theFeedback=$_POST['theFeedback'];
		$theData=$_POST['theData'];
		$theOnlineData=$_POST['theOnlineData'];
		//Create a query
		$query = "INSERT INTO tia_event (ip, date, theExp,theID,theAge,theGender,theFeedback,theData,theOnlineData) VALUES ('{$ip}', '{$date}','{$theExp}','{$theID}','{$theAge}','{$theGender}','{$theFeedback}','{$theData}','{$theOnlineData}')";
		//Do it
		mysqli_query($mysqli, $query);

		//Close connection
		mysqli_close($mysqli);
	}
	
?>