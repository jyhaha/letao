//加载
$(function() {
    //创建乐淘对象
    var letao = new Letao();
    letao.initSlide();
})

//定义该网站的构造函数
var Letao = function() {

}

Letao.prototype.initSlide = function() {
    //获得slider插件对象,初始化轮播图信息
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000
            //自动轮5播周期，若为0则不自动播放，默认为0；
    });
}
