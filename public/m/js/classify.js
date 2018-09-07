//加载
$(function() {
    //创建乐淘对象
    var calssIfy = new Letao();
    calssIfy.highlight();
    //打开页面,默认发送一次请求
    calssIfy.initClassify();
    // 渲染右边商品数据
    classIfy.initProduct();
})

Letao.prototype.highlight = function() {
    //点击添加高亮/category/queryTopCategory
    $(".cate-slide-left ul").on("tap", ".gaoliang", function() {
        $(".gaoliang").removeClass('active');
        $(this).addClass("active");
    })

}

// 渲染分类页面数据
Letao.prototype.initClassify = function() {
    $.ajax({
        url: "/category/queryTopCategory",
        success: function(obj) {
            console.log(obj)
            var html = template("classifyTmp", { "list": obj });
            $(".cate-slide-left ul").html(html);
        }
    })
}

// 渲染右边商品数据
Letao.prototype.initProduct = function() {
    $.ajax({
        url: "/category/querySecondCategory",
        success: function(obj) {
            console.log(obj)
            var html = template("classifyTmp", { "list": obj });
            $(".cate-slide-left ul").html(html);
        }
    })
}
