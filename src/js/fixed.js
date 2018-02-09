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

        // 获取购物车数据
        var num = 0;
        $.ajax({
            url: '../api/fixed.php',
            success: function(data){
                let res = JSON.parse(data);
                res1 = res.data;
                // 写入购物车信息
                console.log($('.cart ul'))
                $('.cart ul')[0].innerHTML = res1.map(item=>{
                    return `
                            <li data-id="${item[1]}">
                                <img src="${item[3]}" alt="" />
                                <div class="name">${item[2]}</div>
                                <div class="price">单价 : ${item[4]}</div>
                                <div class="qty">数量 : ${item[5]}</div>
                            </li>
                        `
                }).join('');
                // 显示购物车商品总数
                $('.cart_li .num').text(res.num);
            }
        })

        // 移入移出
        $('.cart_li').on('mouseover',function(){
            $('.cart').show();
        }).on('mouseout',function(){
            $('.cart').hide();
        })
    })
})