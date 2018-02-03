// 引入gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
// 创建一个gulp任务：编译sass
gulp.task('compileSass',function(){
	// 查找sass文件
	gulp.src('./src/sass/*.scss')
	// 编译
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});
// 创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
	// 当文件有修改，则执行complieSass任务
	gulp.watch('./src/sass/*.scss',['compileSass'])
})

// browserSync = require('browser-sync');
// // 设置任务---架设静态服务器
// gulp.task('browser-sync', function () {
//     browserSync.init({
//         files:['**'],
//         server:{
//             baseDir:'./src/',  // 设置服务器的根目录
//             index:'html/text.html' // 指定默认打开的文件
//         },
//         port:8050  // 指定访问服务器的端口号
//     });
// });


// 自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
    // 启动一个自动刷新的服务器
    browserSync({
        //创建一个静态服务器
        // server:'./src',

        // 指定端口
        port:1008,

        // 代理服务器
        // 用browserSync代理php服务器
        //  * 识别php
        //  * 自动刷新
        proxy:'http://localhost:888',

        // 监听文件修改
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });

    // 监听sass修改
    gulp.watch('./src/sass/*.scss',['compileSass']);
});