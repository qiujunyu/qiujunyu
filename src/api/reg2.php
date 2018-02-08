<?php

    require('connect.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null;
    $email = isset($_GET['email']) ? $_GET['email'] : null;

    $dataname = $conn->query("select * from reg where username='$username'");
    $dataphone = $conn->query("select * from reg where phone='$phone'");
    $dataemail = $conn->query("select * from reg where email='$email'");

    $arr = array();

    if($dataname->num_rows == 0){
        $arr[0] = "yesname";
    }else{
        $arr[0] = "noname";
    }

    if($dataphone->num_rows == 0){
        $arr[1] = "yesphone";
    }else{
        $arr[1] = "nophone";
    }

    if($dataemail->num_rows == 0){
        $arr[2] = "yesemail";
    }else{
        $arr[2] = "noemail";
    }

    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

?>