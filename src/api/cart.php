<?php
    
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $img = isset($_GET['img']) ? $_GET['img'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;

    // 判断是否已存在商品
    $data = $conn->query("select * from cart where idnum='$id'");
    // 不存在则新加入后台数据
    if($data->num_rows == 0){

        // 写入数据sql语句
        $sql = "insert into cart(idnum,name,img,price,qty) values('$id','$name','$img','$price','1')";

        $res = $conn->query($sql);

        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }

    // 存在则修改商品的qty
    // if($data->num_rows > 0){
    //     $res = $conn->query("select * from cart where idnum='$id'");
    //     $row = $res->fetch_assoc();
    //     echo json_encode($row,JSON_UNESCAPED_UNICODE);
    // }

?>