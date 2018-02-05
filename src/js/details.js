jQuery(function($){

    // 放大镜
    $('.top .img_show').zoom({width:500,height:369,gap:-100});

    // 飞入购物车
    $('.main .add').on('click',function(){
        $img = $('.img_show img')
        var $copyImg = $img.clone();
        $fImg = $($copyImg[0]);
        $('body').append($fImg);
        // 设定图片样式
        $fImg.css({
            position:'absolute',
            left:$img.offset().left,
            top:$img.offset().top,
            width:100,
            height: 0
        });
        // 飞入购物车动画
        $fImg.animate({
            left:1370,
            top:258,
            width:20,
            height:20
        },1500,function(){
            // 删除复制的图片
            $fImg.remove();
        })
    })

    // 小图切换    // 点击切换大图
    var $ul = $('.img_min ul');
    var $li = $ul.find('li');
    var $width = $li.width();
    var $prev = $('.img_min .prev');
    var $next = $('.img_min .next');
    $li.on('click','img',function(){
        var $cImg = $(this).clone();
        $('.img_show img').remove();
        $cImg.appendTo($('.img_show'));
        // 放大镜
        $('.top .img_show').zoom({width:500,height:369,gap:-100});
    })

    // 左右切换
    $prev.on('click',function(){
        if($ul[0].offsetLeft <= -124){
            $ul[0].style.left = -124;
        }else{
            $ul.stop().animate({left:($ul[0].offsetLeft-$width)});
        }
    })
    $next.on('click',function(){console.log($ul[0].offsetLeft)
        if($ul[0].offsetLeft >= 0){
            $ul[0].offsetLeft = 0;
        }else{
            $ul.stop().animate({left:($ul[0].offsetLeft+$width)});
        }
    })

    // 商品信息切换
    // 初始化第一个tab高亮
    $('.tabnav a').eq(0).addClass('active2');
    var idx2;
    $('.tabnav').on('click','a',function(){
        idx2 = $(this).index();
        // console.log($('.links .item')[0])
        $('.bot .items').eq(idx2).show().siblings('.items').hide();
        $(this).addClass('active2').siblings().removeClass('active2');
    })

    // 底部药品分类切换
    var idx ;
    $('.lnav').on('mouseenter','a',function(){
        idx = $(this).index();
        // console.log($('.links .item')[0])
        var item = $('.links .item')[idx];

        $(item).show().siblings().hide();
        // console.log($(this))
        $(this).addClass('active').siblings().removeClass('active');
    })

});