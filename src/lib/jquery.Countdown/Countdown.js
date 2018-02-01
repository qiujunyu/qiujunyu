;(function($){
    $.fn.Countdown = function(options){
        var starttime = new Date(options);
        var $this = $(this);
        setInterval(function () {
            var nowtime = new Date();
            var time = starttime - nowtime;
            var day = parseInt(time / 1000 / 60 / 60 / 24);
            var hour = parseInt(time / 1000 / 60 / 60 % 24);
            var minute = parseInt(time / 1000 / 60 % 60);
            var seconds = parseInt(time / 1000 % 60);
            $this.html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
        }, 1000); 
    }
})(jQuery);