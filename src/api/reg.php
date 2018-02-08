<?php

    require('connect.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null;
    $email = isset($_GET['email']) ? $_GET['email'] : null;
    $gender = isset($_GET['gender']) ? $_GET['gender'] : null;
    $realname = isset($_GET['realname']) ? $_GET['realname'] : null;
    $area = isset($_GET['area']) ? $_GET['area'] : null;
    $address = isset($_GET['address']) ? $_GET['address'] : null;

    $data = $conn->query("select * from reg where username='$username'");

    if($data->num_rows == 0){
        // 密码md5加密
        $password = md5($password);
        
        // 写入数据sql语句
        $sql = "insert into reg(username,password,phone,email,gender,realname,area,address) values('$username','$password','$phone','$email','$gender','$realname','$area','$address')";

        $res = $conn->query($sql);
        // var_dump($res);
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }
?>