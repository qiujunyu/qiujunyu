;require(['config'],function(){
    require(['jquery'],function(){
        // 载入尾部
        $('footer').load('../html/footer.html');

        // 获取购物车数据
        $.ajax({
            url: '../api/cart2.php',
            success:function(data){
                let res = JSON.parse(data);
                // console.log(res)
                let ap;
                let tp = 0;
                $('.wrap ul')[0].innerHTML = res.map(item=>{
                    ap = item[4]*item[5];
                    tp += ap;
                    return `
                            <li data-id="${item[1]}">
                                <div class="del">&times;</div>
                                <div class="top">
                                    <span>商品信息</span>
                                    <span>小计</span>
                                    <span>数量</span>
                                    <span>单价</span>
                                </div>
                                <div class="bot">
                                    <img src="${item[3]}" alt="" />
                                    <span class="name">${item[2]}</span>
                                    <span class="all_price">${ap}</span>
                                    <span class="qty"><i class="more">+</i><i class="less">-</i><b>${item[5]}</b></span>
                                    <span class="price">${item[4]}</span>
                                </div>
                            </li>
                    `
                }).join('');

                // 计算订单总价
                $('.t_price').text(tp);

                // 点击删除商品
                $('.del').click(function(){
                    let id = $(this).closest('li').data('id');
                    $(this).closest('li').remove();
                    $.ajax({
                        url: '../api/cart2.php',
                        data: 'id='+id,
                        success:function(){
                            // console.log(77)
                            
                        }
                    });
                    
                })

                // 点击改变商品数量
                $('.more').click(function(){
                    // console.log(66)
                    if($(this).siblings('b').text() >= 1){
                        this.parentNode.children[2].innerText++;
                        // 重新计算价格
                        $money = $(this).closest('span').next().text();
                        $num = $(this).closest('span').find('b').text();
                        // console.log($money*$num)
                        $(this).parent().siblings('.all_price').text($money*$num);
                        $('.t_price').text($money*1+$('.t_price').text()*1);

                        // 当前商品的id
                        let $qtyid = $(this).parents('li').data('id');
                        $.ajax({
                            url: '../api/cart2.php',
                            data: 'qtyid='+$qtyid+'&qtynum='+$num,
                            success: function(){

                            }
                        })
                        
                    }

                })
                $('.less').click(function(){
                    // console.log(77)
                    if($(this).siblings('b').text() > 1){
                        this.parentNode.children[2].innerText--;
                        // 重新计算价格
                        $money = $(this).closest('span').next().text();
                        $num = $(this).closest('span').find('b').text();
                        // console.log($money*$num)
                        $(this).parent().siblings('.all_price').text($money*$num);
                        $('.t_price').text($('.t_price').text()*1-$money*1);
                    }

                })
            }
        })
    })
})