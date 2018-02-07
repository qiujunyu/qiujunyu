jQuery(function($){
    $('.iform input').blur(function() {
        var reg = /^[A-Za-z]\w+$/; //正则表达式 必须以字母开头的账号
        if (!reg.test($('#username').val())) {
            $('#username').next().text("账号必须是以 字母开头的 可以包含数字字母下划线的字符串");
            return false;
        } else {
            $('#username').next().css({color:'#58bc58'}).text("账号验证成功");
        }
        reg=/^(13|15|17|18)\d{9}$/;
        if(!reg.test($('#phone').val())){
            $('#phone').next().text("请输入正确手机号");
            return false;
        }else{
            $('#phone').next().css({color:'#58bc58'}).text("手机验证成功");
        }
        // 邮箱
        reg=/^\w{3,}@\w+(\.\w+)+$/;
        if(!reg.test($('#email').val())){
            $('#email').next().text("请输入正确的邮箱地址");
            return false;
        }else{
            $('#email').next().css({color:'#58bc58'}).text("邮箱验证成功");
        }
        // 密码
        reg=/^[0-9a-zA-Z_]{6,10}$/;
        if(!reg.test($('#password').val())){
            $('#password').next().text("密码必须以数字字母开头，6到10位");
            return false;
        }else{
            $('#password').next().css({color:'#58bc58'}).text("密码验证成功");
        }
        // 确认密码
        if(!($('#password2').val() === $password.val())){
            $('#password2').next().text("俩次密码不一致");
            return false;
        }else{
            $('#password2').next().css({color:'#58bc58'}).text("密码验证成功");
        } 
    });

    $('.zhuce').on('click',function(){
        $.ajax({
            url:'../api/reg.php',
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                if(data === 'success'){
                    location.href = 'log.html';
                }else if(data === 'fail'){
                    console.log(777)
                }
            }
        })      
    })
});