jQuery(function($){
    $('#dl').click(function(){
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
                    console.log(777);
                }
            }
        })
        
    })
});