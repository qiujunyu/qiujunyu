require.config({
    paths:{
        'jquery':'jquery-3.2.1',
        'zoom':'../lib/jquery.qZoom/qzoom',
        'qCarousel':'../lib/jquery.qCarousel/jquery.qCarousel'
    },
    shim:{
        // 设置依赖
        'zoom':['jquery'],
        'common':['jquery'],
        'qCarousel':['jquery'],
        'fixed':['jquery']
    }
});