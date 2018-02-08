<?php
    // 此文件作废
    
    require('connect.php');

    $id = isset($_GET['id'])?$_GET['id'] : null;
    // echo $id;
    $res = $conn->query("DELETE FROM cart where idnum='$id'");


?>