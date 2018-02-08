<?php

    require('connect.php');

    //获取购物车信息

    $sql = "select * from cart";

    $res = $conn->query($sql);

    $row = $res->fetch_all();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>