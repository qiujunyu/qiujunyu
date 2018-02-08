;require(['config'],function(){
    require(['jquery'],function(){
        // 载入尾部
        $('footer').load('../html/footer.html');

        // 获取购物车数据
        $.ajax({
            url: '../api/cart2.php',
            success:function(data){
                let res = JSON.parse(data);
                console.log(res)
                $('.wrap ul')[0].innerHTML = res.map(item=>{
                    return `
                            <li>
                                <div class="top">
                                    <span>商品信息</span>
                                    <span>小计</span>
                                    <span>数量</span>
                                    <span>单价</span>
                                </div>
                                <div class="bot">
                                    <img src="${item[3]}" alt="" />
                                    <span class="name">${item[2]}</span>
                                    <span class="all_price">无</span>
                                    <span class="qty">${item[5]}</span>
                                    <span class="price">${item[4]}</span>
                                </div>
                            </li>
                    `
                }).join('');
            }
        })
    })
})