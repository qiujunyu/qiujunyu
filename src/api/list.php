<?php

    require('connect.php');

    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : 10;
    $cat = isset($_GET['category']) ? $_GET['category'] : null;

    $sql = "select * from goods where";

    if($cat){
        $sql .= " category='$cat' and"; //select * from goods where category=nike
    }

    $sql .= ' 1=1';

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);

    // 根据分页截取数据
    $res = array(
        'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty
    );

    // // 输出json字符串
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>