<?php

    require('connect.php');

    // 删除指定商品
    $id = isset($_GET['id'])?$_GET['id'] : null;
    // echo $id;
    $res = $conn->query("DELETE FROM cart where idnum='$id'");

    // 修改指定商品的qty
    $qtyid = isset($_GET['qtyid'])?$_GET['qtyid'] : null;
    $qtynum = isset($_GET['qtynum'])?$_GET['qtynum'] : null;
    $conn->query("update cart set qty='$qtynum' where idnum='$qtyid'");

    //获取购物车信息

    $sql = "select * from cart";

    $res = $conn->query($sql);

    $row = $res->fetch_all();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>