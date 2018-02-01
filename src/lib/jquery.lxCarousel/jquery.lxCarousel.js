;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){
		// 如何安全使用$：匿名函数传参
		// 如何获取.box：this=>jquery对象

		// 默认参数
		var defualts = {
			width:320,
			height:320,
			index:0,
			page:true,
			autoPlay:true,

			// 轮播间隔
			duration:3000,

			// 轮播类型
			type:'vertical',//horizontal,fade

			// 无缝滚动
			marquee:true
		}

		return this.each(function(){
			// 这里的this为dom节点
			// var opt = Object.assign({},defualts,options);

			// 比assign强大
			// 能实现深复制
			var opt = $.extend({},defualts,options);
			opt.len = opt.imgs.length + 1;
			var $this = $(this);

			// 添加特定类
			$this.addClass('lx-carousel');

			// 设定样式
			$this.css({
				width:opt.width,
				height:opt.height
			});

			var $ul;

			init();

			var timer;
			var height;
			var width;

			// 鼠标移入移除
			$this.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(function(){
					opt.index++;

					show();
				},opt.duration);
			}).trigger('mouseleave');

			// 初始化
			// 获取/生成节点
			// 绑定事件
			function init(){
				$ul = $('<ul/>')
				$ul.css({
					width: (opt.imgs.length + 1)*opt.width,
					height: opt.height
				});

				var html = $.map(opt.imgs,function(url){
					return '<li><img src="'+ url +'"/></li>';
				}).join('\n');
				html += `<li><img src="${opt.imgs[0]}"></li>
					<div class="next">&rarr;</div>
					<div class="prev">&larr;</div>
				`
				$ul.html(html);

				$this.append($ul);

				move();
			} 

			function show(){
				if(opt.index >= opt.len){
					opt.index = 1;
					$ul.css({left:0})
				}else if(opt.index<0){
					opt.index = opt.len-2;
					$ul.css({left:-opt.width*(opt.len-1)})
				}
 
				var target = -opt.index*opt.width;

				$ul.stop().animate({left:target});
			}
		
			// 点击左右播放
			function move(){
				$next = $('.next');
				$prev = $('.prev');
				
				$next.on('click',function(){
					opt.index++;
					show();
				})
				$prev.on('click',function(){
					opt.index--;
					show();
				})	
				
			}
		});
	}
})(jQuery);