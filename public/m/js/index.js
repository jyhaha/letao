//加载
$(function() {
    //创建乐淘对象
    var letao = new Letao();
    letao.initSlide();
    letao.initScroll();
    letao.highlight();
})

//定义该网站的构造函数
var Letao = function() {

}

Letao.prototype = {
    //获得slider插件对象,初始化轮播图信息
    initSlide: function() {
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1000
                //自动轮5播周期，若为0则不自动播放，默认为0；
        });
    },
    //初始化滚动条
    initScroll: function() {
        mui('.mui-scroll-wrapper').scroll({
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        });
    },

// 点击分类高亮
    highlight: function() {
        $(".cate-slide-left ul").on("tap", ".gaoliang", function() {
            $(".gaoliang").removeClass('active');
            $(this).addClass("active");
        })
    }

}
