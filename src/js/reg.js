jQuery(function($){

    var res = 'ok';
    $('.iform input').blur(function() {
        var reg = /^[A-Za-z]\w+$/; //正则表达式 必须以字母开头的账号
        if (!reg.test($('#username').val())) {
            $('#username').next().text("账号必须是以 字母开头的 可以包含数字字母下划线的字符串");
            return false;
        } else {
            $.ajax({
                url: '../api/reg2.php',
                data: 'username='+$('#username').val(),
                success: function(data){
                    data = JSON.parse(data);
                    if(data[0] === 'yesname'){
                        $('#username').next().css({color:'#58bc58'}).text("用户名验证成功");
                        res = 'ok';
                    }else if(data[0] === 'noname'){
                        $('#username').next().css({color:'red'}).text("用户名已被占用");
                        res = 'no';
                    }
                }
            })
        }
        reg=/^(13|15|17|18)\d{9}$/;
        if(!reg.test($('#phone').val())){
            $('#phone').next().text("请输入正确手机号");
            return false;
        }else{
            $.ajax({
                url: '../api/reg2.php',
                data: 'phone='+$('#phone').val(),
                success: function(data){
                    data = JSON.parse(data);
                    if(data[1] === 'yesphone'){
                        $('#phone').next().css({color:'#58bc58'}).text("手机号验证成功");
                        res = 'ok';
                    }else if(data[1] === 'nophone'){
                        $('#phone').next().css({color:'red'}).text("手机号已被占用");
                        res = 'no';
                    }
                }
            }) 
        }
        // 邮箱
        reg=/^\w{3,}@\w+(\.\w+)+$/;
        if(!reg.test($('#email').val())){
            $('#email').next().text("请输入正确的邮箱地址");
            return false;
        }else{
            $.ajax({
                url: '../api/reg2.php',
                data: 'email='+$('#email').val(),
                success: function(data){
                    data = JSON.parse(data);
                    if(data[2] === 'yesemail'){
                        $('#email').next().css({color:'#58bc58'}).text("邮箱验证成功");
                        res = 'ok';
                    }else if(data[2] === 'noemail'){
                        $('#email').next().css({color:'red'}).text("邮箱已被占用");
                        res = 'no';
                    }
                }
            }) 
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
        if(!($('#password2').val() === $('#password').val())){
            $('#password2').next().text("俩次密码不一致");
            return false;
        }else{
            $('#password2').next().css({color:'#58bc58'}).text("密码验证成功");
        } 
    });

    $('.zhuce').on('click',function(){
        if(res === 'ok'){
            $.ajax({
                url:'../api/reg.php',
                data:{
                    username:$('#username').val(),
                    password:$('#password').val(),
                    phone:$('#phone').val(),
                    email:$('#email').val(),
                    gender:$('#gender').val(),
                    realname:$('#realname').val(),
                    area:$('#area').val(),
                    address:$('#address').val()
                },
                success:function(data){
                    if(data === 'success'){
                        location.href = 'log.html';
                    }else if(data === 'fail'){
                        console.log(777)
                    }
                }
            })              
        }else{
            alert('请完善必填信息')
        }
    })
});