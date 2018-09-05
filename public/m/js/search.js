//加载
$(function() {
    //创建乐淘对象
    var letao = new Letao();
    //初始化搜索页面
    letao.initSearch(letao);
    letao.initHistory();
    letao.deleteHistory(letao);
    letao.clearHistoryAll(letao);
})

//定义该网站的构造函数
var Letao = function() {

}

Letao.prototype = {

    //乐淘搜索页面刷新,初始化

    initSearch: function(that) {
        // 给搜索按钮绑定点击事件

        $(".btn-search").on("tap", function(e) {
            //阻止button在表单中的默认事件
            var e = e || window.event;
            e.preventDefault();
            // 点击获取input输入的value值,没有则return
            var $searchVal = $(".search-input").val();
            if (!$searchVal.trim()) {
                alert("请输入搜索关键词!");
                return;
                //如果input的值为空则return,并且弹出提醒框
            }
            //如果输入的关键词不为空则保存该搜索纪录
            var id = 1; //id默认值为1,从1开始
            //创建一个对象用于存放搜索的数据,并且id值是唯一的
            var searcbObj = { id: id, value: $searchVal };
            //左值判断,如果本地没有historyArr这个key则给他创建一个数组
            var historyArr = JSON.parse(localStorage.getItem("historyArr")) || [];
            //能力判断,如果本地有historyArr这个key则把他该key的值的长度减1后的值的id再加1,赋给新的对象id
            if (localStorage.getItem("historyArr")) {
                searcbObj.id = JSON.parse(historyArr[historyArr.length - 1].id + 1);
            }
            //把对象添加到数组中
            historyArr.push(searcbObj);
            //把数组转为json格式存放到浏览器里面
            localStorage.setItem("historyArr", JSON.stringify(historyArr));
            //刷新一下历史数据
            that.initHistory();

        })
    },
    //渲染搜索历史
    initHistory: function() {
        //获取本地搜索数据
        var historyList = JSON.parse(localStorage.getItem("historyArr"));
        //把数据添加到模板,并生成模板
        var $HTML = template("historyTmp", { "list": historyList });
        ///console.log(historyList)
        //把模板添加到页面上
        $(".searchList").html($HTML);
        //清空input的内容
        $(".search-input").val(null);

    },
    //点击搜索历史数据右边的X删除该条数据
    deleteHistory: function(that) {

        //给x添加点击事件
        $(".searchList").on("tap", ".icon_delete", removerTap);

        function removerTap() {
            var $ID = $(this).data("id");
            //获取本地数据
            var locality = JSON.parse(localStorage.getItem("historyArr")) || [];
            // 当数组中的数据与点击的数据相等则执行删除
            for (var i = 0; i < locality.length; i++) {
                if (locality[i].id == $ID) {
                    locality.splice(i, 1); //记得删除的位置是重 i 开始而不是 $ID
                    //把数组转为json格式存放到浏览器里面
                    localStorage.setItem("historyArr", JSON.stringify(locality));
                    //当搜索历史只有一个数据的时候,直接把key和数组也清除了
                    if (locality.length < 1) {
                        localStorage.removeItem("historyArr");
                    }

                    //刷新一下历史数据
                    that.initHistory();

                }
            }

        }

    },

    //清空搜索纪录
    clearHistoryAll: function(that) {
        $(".icon_clear").on("tap", function() {
            localStorage.removeItem("historyArr");
            that.initHistory();
        })

    }
    //
}
