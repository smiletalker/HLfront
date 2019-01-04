/*1.全局安装 npm install gulp -g
* 2.根目录下安装开发者模块 npm install gulp --save-dev*/

/*gulp的配置及任务*/
const gulp=require("gulp");

/*文件删除
* npm install del --save-dev*/
const del=require("del");

/*删除插件 npm install gulp-clean --save-dev-------------------尽量使用clean删除插件，不使用del,因为可能会出现冲突*/
const gulpClean=requie("gulp-clean");

/*
* gulp.task(1.任务名称，2.回调函数)
*1.task()定任务
* 2.src()源头文件
* 3.pipe()管道-接通源头文件的输入和目的文件的输出
* 4.dest()输出文件的目的地
* 5.watch()监视
* */

/*实时刷新插件
* npm install browser-sync --save-dev*/
const broSync=require("browser-sync");
gulp.task("broSync",["reBuild"],function () {
    /*init(1.要监听的文件[]，2.对象配置(服务器：{资源根目录:路径}))*/
    let files=["./dest/**/*.html","./dest/**/*.css"];

    broSync.init(files, {server:{naseDir:"./dist/public"}})
});

/*gulp-concat合并
* npm install gulp-concat --save-dev*/
const gulpC=require("gulp-concat");
gulp.task("gulpConcat",function () {
    return gulp.src("./punlic/js/*.js").pipe(gulpC("combine.js")).pipe("./dist/punlic/js")
});

/*gulp-uglify 压缩JS
* npm install gulp-uglify --save-dev*/
const uglify=require("gulp-uglify");
gulp.task("uglifyJs",function () {
    return gulp.src("./punlic/js/*.js").pipe(gulpC("combine2.js"))//合并
        .pipe(uglify({//可以不调用参数，直接使用
            mangle:false,//修改变量名，默认true--要修改
            comnpress:false,//是否完全压缩 默认true--完全压缩
            output:{
                comments:"all"//默认false 用true或者all可以保存注释
            }
        }))//压缩
        .pipe("./dist/punlic/js")
});

/*压缩css gulp-clean-css
* npm install gulp-clean-css*/
const gulpCss=require("gulp-clean-css");
gulp.task("gulpCleanCss",function () {
    return gulp.src()
        .pipe(gulpC("xx.css"))//合并
        .pipe(gulpCss({//压缩
            /*0--全手动，手动配置
            * 1--只有花单个属性的css
            * 2--多个申明以及选择器的优化，最高等级的优化*/
            level:2
        }))
        .pipe(gulp.dest("./dist/pulic/css"))
});

/*重命名插件 gulp-rename
* npm install gulp-rename --save-dev*/
const rename=require("gulp-rename");
gulp.task("uglifyJsRename",function () {
    return gulp.src("public/js/*.js")//找文件
        .pipe(gulpC("xx.js"))//合并所有文件
        .pipe(gulp.dest("./dist/pulic/js"))//输出未压缩版本
        .pipe(uglify())//压缩
        .pipe(rename("xx.min.js"))//重命名
        .pipe(gulp.dest("./dist/pulic/js"))//输出压缩版

});

/*图片压缩 gulp-imagemin
* npm install gulp-imagemin --save-dev*/
const imagemin=require("gulp-imagemin");
gulp.task("myImagemin",function () {
    return gulp.src("public/imagaes/*")//找文件
        .pipe(gulpC("xx.js"))//合并所有文件
        .pipe(imagemin())//输出未压缩版本
        .pipe(gulp.dest("./dist/pulic/images"))//输出压缩版
});

/*改变链接 gulp-cheerio
* npm install gulp-cheerio --save-dev*/
const cheerio=require("gulp-cheerio");
gulp.task("myCheerio",function () {
    return gulp.src("./dist/public/*.html")//找压缩后的HTML文件
        .pipe(cheerio(function ($) {/*$ gulp自己封的一个$方法*/
            $("link").remove();
            $("script").remove();
            $("head").append("<link rel='stylesheet'> href='css/xx.css'/>");
            $("body").append("<script src='js/xx.min.js'></script>");
        }))//输出未压缩版本
        .pipe(gulp.dest("./dist/pulic"))//输出压缩版
});

/*gulp-file-include   添加公共部分
* npm install gulp-file-include --save-dev*/
const fileInclude=require("gulp-file-inclue");
gulp.task("myFileInclude",function () {
    return gulp.src("./public/index.html")//找要改的HTML文件，引入---@@include("nav.html")
        .pipe(fileInclude({
            prefix:"@@",
            basepath:"@file"
        }))//基础配置
        .pipe(gulp.dest("./dist/pulic"))//要引入的公共部分
});