<?php
    
    require('connect.php');
    // 获取购物车所有信息
    $sql = "select * from cart";

    $res = $conn->query($sql);

    $row = $res->fetch_all();

    // 获取购物车商品数量
    $num = $conn->query("select qty from cart");

    $num = $num->fetch_all();
    $sum = 0;

    foreach($num as $val){
       $sum += $val[0];
    }

    $res_arr = array(
        'data'=>$row,
        'num'=>$sum
    );

    echo json_encode($res_arr,JSON_UNESCAPED_UNICODE);
    
?>