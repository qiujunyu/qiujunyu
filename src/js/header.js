jQuery(function($){
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