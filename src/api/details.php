<?php

    require('connect.php');

    $id = isset($_POST['id']) ? $_POST['id'] : '';

    $sql = "select * from goods where id=$id";

    $res = $conn->query($sql);

    $row = $res->fetch_assoc();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>