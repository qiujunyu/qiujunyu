jQuery(function($){
    $('#dl').click(function(){
        if($('#username').val().length > 0 && $('#password').val().length > 0){
            $.ajax({
                url:'../api/log.php',
                data:{
                    username:$('#username').val(),
                    password:$('#password').val()
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = '../index.html';
                    }else if(data === 'fail'){
                        alert('账号输入有误')
                    }
                }
            })
        }else{
            alert('请输入账号和密码')
        } 
    })

    // 跳转注册页面
    $('.ljzc').click(function(){
        location.href = '../html/reg.html';
    }) 
    
});