<?php
if(isset($_POST['send'])){
	$sql = mysqli_connect("localhost", "root","","chatbox");
	
	$q = "INSERT INTO messages VALUES (NULL, 1, ".$_POST['id'].", NOW(), '".$_POST['send']."')";
	
	$res = mysqli_query($sql, $q);
	if($res){
		echo mysqli_insert_id($sql);
	}
}
if(isset($_POST['fetch'])){
	$sql = mysqli_connect("localhost", "root","","chatbox");
	
	$q = "SELECT * FROM messages WHERE indx > ".$_POST['fetch'];
	
	$res = mysqli_query($sql, $q);
	if($res){
		$arr = array();
		while($row=mysqli_fetch_array($res)){
			$arr[] = $row;
		}
		echo json_encode($arr);
	}
}
?>