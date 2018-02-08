;require(['config'],function(){
    require(['jquery'],function($){
        // console.log(666)
        // 侧边栏移入显示信息
        $('.fix .fix_li').on('mouseenter',function(){
            $('.fix .contact').show();
        })
        $('.fix .fix_li').on('mouseleave',function(){
            $('.fix .contact').hide();
        })
        // 点击关闭按钮
        $('.fix #f-cls').click(function(){
            $('.fix .contact').hide();
        })
        // 移入显示微信二维码
        $('.fix .wx_li').on('mouseenter',function(){
            $('.fix .wx').show();
        }).on('mouseleave',function(){
            $('.fix .wx').hide();
        })
        // 移入显示手机app
        $('.fix .app_li').on('mouseenter',function(){
            $('.fix .app').show();
        }).on('mouseleave',function(){
            $('.fix .app').hide();
        })  
            // 返回顶部
        $(".backTop").click(function() {
          $("html,body").animate({scrollTop:0}, 500);
        }); 
    })
})