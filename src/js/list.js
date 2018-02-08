;require(['config'],function(){
    require(['jquery','fixed'],function(){
        // 载入头尾
        $('header').load('../html/header.html');
        $('footer').load('../html/footer.html');
        $('nav').load('../html/fixed.html');
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
        $('.all_list i').on('click',function(){console.log(666)
            // console.log($(this).is('.s'))
            if($(this).is('.s')){
                $(this).removeClass('s').css({"background-position": "-214px -83px"});
                $(this).parents('li').find('.items').hide();
            }else{
                $(this).addClass('s').css({"background-position": "-214px -109px"});
                $(this).parents('li').find('.items').show();
            }
        })

        // 接收后台数据
        var datalist = document.querySelector('.goods_list');
        var page = document.querySelector('#page');
        var pageNo = 1;
        var qty = 40;
        $.ajax({
            type: 'POST',
            url: '../api/list.php',
            data:'pageNo='+pageNo+'&qty='+qty,
            success: function(data){
                let res = JSON.parse(data);
                console.log(res)

                let ul = document.createElement('ul');
                ul.innerHTML = res.data.map(item=>{
                    return `
                        <li data-id="${item.id}">
                            <img src="${item.img1}">
                            <p class="price">￥${item.price}</p>
                            <p class="name">${item.name}</p>
                            <p class="size">${item.size}</p>
                        </li>
                    `
                }).join('');

                // 写入页面
                datalist.innerText = '';
                datalist.appendChild(ul);

                // 处理分页
                let pageQty = Math.ceil(res.total/res.qty);

                page.innerText = '';
                for(let i=1;i<=pageQty;i++){
                    let span = document.createElement('span');
                    span.innerText = i;
                    page.appendChild(span);
                }

            }
        });
        // 点击切换分页
        $(page).on('click','span',function(){               
            $(this).css({'background':'#0cb95f'}).siblings().css({'background':'#fff'});
            pageNo = $(this).text();console.log(pageNo)
            $.ajax({
                type: 'POST',
                url: '../api/list.php',
                data:'pageNo='+pageNo+'&qty='+qty,
                success:function(data){
                    let res = JSON.parse(data);
                    console.log(res)

                    let ul = document.createElement('ul');
                    ul.innerHTML = res.data.map(item=>{
                        return `
                            <li data-id="${item.id}">
                                <img src="${item.img1}">
                                <p class="price">￥${item.price}</p>
                                <p class="name">${item.name}</p>
                                <p class="size">${item.size}</p>
                            </li>
                        `
                    }).join('');

                    // 写入页面
                    datalist.innerText = '';
                    datalist.appendChild(ul);
                }
            })
        })

        // 点击跳转详情页
        $('.goods_list').on('click','li',function(){
            var params = '?' + $(this).data('id');
            location.href = 'details.html' + params;
        })
    })
})