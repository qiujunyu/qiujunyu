<?php
    $id = isset($_POST['params']) ? $_POST['params'] : null;

    $file_url = './data/goods.json';

    // 打开文件
    $myfile = fopen($file_url, 'r');

    // 读取打开的文件
    $content = fread($myfile, filesize($file_url));

    // 把读取到的内容转成数组
    $arr_data = json_decode($content);

    // 根据分页截取数据
    foreach ($arr_data as $val) {
        if(($val->id) == $id){
            echo json_encode($val,JSON_UNESCAPED_UNICODE);
        }
    }
?>