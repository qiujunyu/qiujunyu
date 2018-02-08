<?php
    
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $img = isset($_GET['img']) ? $_GET['img'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;

    // 判断是否已存在商品
    $data = $conn->query("select * from cart where idnum='$id'");
    var_dump($data->num_rows);
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
    }else{
        // 商品已存在，修改qty
        $num = $conn->query("select qty from cart where idnum='$id'");
        $res = $num->fetch_row();

        $res = $res[0]+1;
        $row = $conn->query("update cart set qty='$res' where idnum='$id'");

        if($row){
            echo "success2";
        }else{
            echo "fail2";
        }

        $num->close();
    }
?>