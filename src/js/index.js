jQuery(function($){
    // $('header').load('html/header.html');
    // 大轮播图
    $('.banner_min').qCarousel({imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.png','img/banner5.png'],width:780,height:390});
    // 楼层轮播图
    $('.big1').qCarousel({imgs:['img/7f2bd2aa-5003-4841-a755-806b65d4a83b5588.jpg','img/fe96a153-33e5-45c6-ba30-f1e90aed294f7345.jpg'],width:300,height:363})
    $('.big2').qCarousel({imgs:['img/381757a8-179b-446c-9537-405d36cb076e4173.jpg','img/cc733ce5-01fb-4609-83b2-33ec0d6f00565930 (1).jpg'],width:300,height:363})
    $('.big3').qCarousel({imgs:['img/420b8a8a-19ab-4a69-9ffc-c3a49e4a914f7468.jpg','img/78a65af7-2c0c-4963-be82-d0c8b1d4887e2483 (1).jpg'],width:300,height:363})
    $('.big4').qCarousel({imgs:['img/4d3e0bf0-ac38-4b8e-ad9c-5e12feb0cd472265.jpg','img/4a157818-2176-4dd7-bd55-024bbb7a5e4b8723.jpg'],width:300,height:363})
    $('.big5').qCarousel({imgs:['img/40344594-efcf-4e0d-8a96-6df63b89c3669918 (1).jpg','img/08ec8b4a-166f-4c86-8e18-ba1863b0b2022676 (1).jpg'],width:300,height:363})
    $('.big6').qCarousel({imgs:['img/be5188fb-3a70-441a-9740-c270efa0614b6216 (1).jpg','img/big6.jpg'],width:300,height:363})
    $('.mid_lbt').qCarousel({imgs:['img/5fb48e0c-2daa-45d3-a61a-e2d2d12a071b6894 (1).jpg','img/f8dddda3-5ac6-4096-85a9-2c81a47270198071 (1).jpg'],width:442,height:266})

    // 楼层
    var flag = true;  
    $("#menu li").click(function() {
        flag = false;
        //当前点击的楼号绿色的 其余白色的
        $(this).find("a")
            .addClass("active")
            .end()
            .siblings()
            .find("a")
            .removeClass("active");
        $(this).find('span').css('color', '#fff').end().siblings().find('span').css('color', '#999');;

        //获取当前楼号对应楼层的 top值
        var sTop = $(".Louti").eq($(this).index()).offset().top;

        //将页面滚走的距离设置为 sTop  
        $("body,html").stop().animate({
            "scrollTop": sTop
        }, 1000, function() {
            flag = true;
        });
    })
    $(window).scroll(function() {
        if (flag) {

            //获取页面滚走的距离
            var sTop = $(document).scrollTop();

            if(sTop >= 700){
                $('#menu').fadeIn();
            }else{
                $('#menu').fadeOut();
            }
            //filter  返回满足条件的那个对象 
            //找到满足某个条件的楼层对象    
            var $floor = $(".Louti").filter(function(index, ele) {
                return Math.abs($(ele).offset().top - sTop) < $(ele).height() / 2;
            })

            //根据楼层的索引设置相应楼层的样式
            $("#menu li").eq($floor.index())
                .find("a")
                .addClass("active")
                .end()
                .siblings()
                .find("a")
                .removeClass("active");
            $("#menu li").eq($floor.index()).find('span').css('color', '#fff').end().siblings().find('span').css('color', '#999');
        }

        // 吸顶菜单
        if($(document).scrollTop() >= 500){
            $('.fix_top').fadeIn();
            console.log(66)
        }else{
            $('.fix_top').fadeOut();
        }
    })

    // 评论轮播
    var speed = 50;
    var idx = 0;
    setInterval(function(){
        idx++;
        var top = idx * 50;
        $('.pl ul').animate({top:-top});
        if($('.pl ul').position().top <= -500){
            idx = 0;
        }
    },1000);
    
    // 底部链接切换
    $('.hot-btn').on('mouseenter',function(){
        $('.hot-goods').show().siblings().hide();
        $('.hot-btn').addClass('f-active').siblings().removeClass('f-active');
    })
    $('.yq-btn').on('mouseenter',function(){
        $('.yqlj').show().siblings().hide();
        $('.yq-btn').addClass('f-active').siblings().removeClass('f-active');
    })

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

})