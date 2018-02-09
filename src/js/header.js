jQuery(function($){

    // 个人中心
    $('.person .p_open').click(function(){
        $('.person .menu').show();    
        // console.log(66)      
    })
     $('.person .p_off').click(function(){
        $('.person .menu').hide();          
    })

     // 网站导航
    $('.daohang .d_open').click(function(){
        $('.daohang .other').show();    
        $('.daohang .line').show();    
        // console.log(66)      
    })
     $('.daohang .d_off').click(function(){
        $('.daohang .other').hide();     
        $('.daohang .line').hide();      
    })

     // 搜索选择
     $('.search .current').click(function(){
        $('.search_menu').show();
     })
     $('.search .current2').click(function(){
        $('.search_menu').hide();
     })

    // 二级导航
    $('.navall').on('click',function(){
        console.log($(666))
        if($(this).is('.c')){
            $(this).removeClass('c');
            $('.classify').hide().css({'display':'none'});
            $('.classify_menu').hide().css({'display':'none'});
        }else{
            $(this).addClass('c');
            $('.classify').show().css({'display':'block'});
            $('.classify_menu').show().css({'display':'block'});
        }
    })
    // 三级导航
    var idx;
    $('.classify_menu').on('mouseover','li',function(){
        idx = $(this).index();
        $(this).css({'background': '#f4f4f4'}).siblings().css({'background': '#fff'});
        $('.classify_list').eq(idx).show();
    }).on('mouseout',function(){
        $('.classify_list').hide();
        $('.classify_menu li').css({'background': '#fff'});
    })
    $('.classify_list').on('mouseover',function(){
        $(this).css({'display':'block'});
    })


});