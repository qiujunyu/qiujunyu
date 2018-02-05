;(function($){
    $.fn.zoom = function(options){
        // 初始化
        var defaults = {
            width:350,
            height:300,
            position:'right',
            gap: 20
        }

        return this.each(function(){
            var opt = $.extend({}, defaults, options);
            // 小图
            $small = $(this);
            $small.css({position: 'relative'});
            $smallImg = $small.find('img');
            // 放大镜
            var $zoom = $('<div/>');
            $zoom.css({
                display: 'none',
                position: 'absolute',
                border: '1px solid #ccc',
                background: '#ccc',
                opacity: 0.5
            });
            // 插入页面
            $zoom.appendTo($small);

            // 大图
            var $big = $('<div/>');
            var $bigImg = $smallImg.clone();
            $bigImg.appendTo($big);
            $bigImg.css({
                position: 'absolute',
                width: $smallImg.width()*3,
                height: $smallImg.height()*3
            });
            $big.css({
                zIndex:999,
                display: 'none',
                overflow: 'hidden',
                position: 'absolute',
                border: '1px solid #e5e5e5',
                width: opt.width,
                height: opt.height,
                left: $(this).offset().left + $(this).width() + opt.gap,
                top: 0
            });
            // 插入页面
            $big.appendTo($small);
            // 鼠标移入
            $small.on('mouseenter',function(e){
                $zoom.fadeIn();
                $big.fadeIn();
            }).on('mouseleave',function(){
                $zoom.fadeOut();
                $big.fadeOut();
            }).on('mousemove',function(e){
                    // 初始化放大镜位置
                    var left =e.clientX - $(this).offset().left - $zoom.width()/2;
                    var top =e.clientY - $(this).offset().top - $zoom.height()/2;

                    // 求出比例值
                    var ratio = $bigImg.width()/$smallImg.width();

                    // 设置放大镜的宽高
                    $zoom.css({
                        width: opt.width/ratio,
                        height: opt.height/ratio,
                    });         
                    // 判断放大镜是否超出边框
                    var a = $(this).width() - $zoom.width();
                    var b = $(this).height() - $zoom.height();

                    if(left > a){
                        left = a;
                    }else if(left <= 0){
                        left = 0;
                    }
                    if(top > b){
                        top = b;
                    }else if(top <= 0){
                        top = 0;
                    }

                    $zoom.css({
                        left:left,
                        top:top
                    })
                    
                    $bigImg.css({   
                        left: -left*ratio,
                        top: -top*ratio
                    });
                })
        })
    }
})(jQuery);