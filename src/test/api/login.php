<?php
$_POST=json_decode(file_get_contents('php://input'),true);
$email=$_POST['email'];
$password=$_POST['password'];
$response=array();
if($email=='majid'&& $password=='123')
{
	$response=array(
		'success'=>'0',
		'message'=>'Logged In Successfully'
	);
	
}else{
		$response=array(
		'success'=>'1',
		'message'=>'Failed Please Try Again'
	);
}
echo json_encode($response);
die;
?>