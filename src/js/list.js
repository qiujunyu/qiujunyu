jQuery(function($){
    // 底部药品分类
    var idx ;
    $('.lnav').on('mouseenter','a',function(){
        idx = $(this).index();
        // console.log($('.links .item')[0])
        var item = $('.links .item')[idx];

        $(item).show().siblings().hide();
        // console.log($(this))
        $(this).addClass('active').siblings().removeClass('active');
    })

    // 左边栏点击显示更多
    $('.all_list i').on('click',function(){
        // console.log($(this).is('.s'))
        if($(this).is('.s')){
            $(this).removeClass('s').css({"background-position": "-214px -83px"});
            $(this).parents('li').find('.items').hide();
        }else{
            $(this).addClass('s').css({"background-position": "-214px -109px"});
            $(this).parents('li').find('.items').show();
        }
    })

});