<?php

	$con = mysqli_connect('localhost','root','');

	if (!$con) {
		echo 'Not Connected To Server';
	}else{
		echo 'coneected';
	}
	if(!mysqli_select_db($con,'fw'))
	{
		echo "Database Not Selected";
	}
	$FirstName = $_POST['first-name'];
	$LastName = $_POST['last-name'];
	$Email = $_POST['email'];
	$People = $_POST['people'];
	$Date1 = $_POST['date'];
	$Time1 = $_POST['time'];

	$sql = "INSERT INTO reservation (FirstName,LastName,Email,People,Date1,Time1) VALUES ('$FirstName','$LastName','$Email','$People','$Date1','$Time1')";

	if (!mysqli_query($con,$sql)) {
		echo 'Not inserted';
	}
?>

