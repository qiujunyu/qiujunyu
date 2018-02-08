<?php

    require('connect.php');

    $cat = isset($_GET['cat']) ? $_GET['cat'] : 2;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 1;
    
    $sql = "select * from goods where";

    if($cat){
        $sql .= " class='$cat' and"; 
    }

    $sql .= ' 1=1';

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);

    // 根据qty截取数据
    $res = array_slice($row,0,$qty);

    // var_dump($res);
    // 输出json字符串
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>