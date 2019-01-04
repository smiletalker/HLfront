$(function () {
//页头
    // 商店移入
    $("#shop").mouseover(function () {
        $("#navMoveSd").css({
            "opacity":"1",
            "marginLeft":"27%"
        });
        $("#shopD").css({
            "opacity":"1",
            "left":"-0%",
            "transition":"all .5s linear"
        });
        $("#communityD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
        $("#supportD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
        $("header").css("zIndex","2");
        // $("nav>ul>li>a").css("color","black");
        // $("#logoW").attr("src","./images/logoB.png");
        // $("nav>span>a").css("color","black");
        // $("nav>span").css("color","black");
        // $("#navMoveSd").css("background","rgb(0,140,168)")
    });

    // 商店移出
    $("#shopD").mouseleave(function () {
        $("#shopD").css({
            "opacity":"0",
            "left":"-100%"
        });
        $("header").css("zIndex","0");
        // $("nav>ul>li>a").css("color","white");
        // $("#logoW").attr("src","./images/logoW.png");
        // $("nav>span>a").css("color","white");
        // $("nav>span").css("color","white");
        // $("#navMoveSd").css("background","white")
    });


    //社区移入
    $("#community").mouseover(function () {
        $("#navMoveSd").css({
            "opacity":"1",
            "marginLeft":"38.5%"
        });
        $("#shopD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
        $("#communityD").css({
            "opacity":"1",
            "left":"-0%",
            "transition":"all .5s linear"
        });
        $("#supportD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
        $("header").css("zIndex","2");
        // $("nav>ul>li>a").css("color","black");
        // $("#logoW").attr("src","./images/logoB.png");
        // $("nav>span>a").css("color","black");
        // $("nav>span").css("color","black");
        // $("#navMoveSd").css("background","rgb(0,140,168)")
    });

    // 社区移出
    $("#communityD").mouseleave(function () {
        $("#communityD").css({
            "opacity":"0",
            "left":"-100%",

        });
        $("header").css("zIndex","0");
        // $("nav>ul>li>a").css("color","white");
        // $("#logoW").attr("src","./images/logoW.png");
        // $("nav>span>a").css("color","white");
        // $("nav>span").css("color","white");
        // $("#navMoveSd").css("background","white")
    });

    //支持移入
    $("#support").mouseover(function () {
        $("#navMoveSd").css({
            "opacity":"1",
            "marginLeft":"50%"
        });
        $("#shopD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
        $("#supportD").css({
            "opacity":"1",
            "left":"-0%",
            "transition":"all .5s linear"
        });
        $("#communityD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
        $("header").css("zIndex","2");
        // $("nav>ul>li>a").css("color","black");
        // $("#logoW").attr("src","./images/logoB.png");
        // $("nav>span>a").css("color","black");
        // $("nav>span").css("color","black");
        // $("#navMoveSd").css("background","rgb(0,140,168)");

    });
    // 支持移出
    $("#supportD").mouseleave(function () {
        $("#supportD").css({
            "opacity":"0",
            "left":"-100%",

        });
        $("header").css("zIndex","0");
        // $("nav>ul>li>a").css("color","white");
        // $("#logoW").attr("src","./images/logoW.png");
        // $("nav>span>a").css("color","white");
        // $("nav>span").css("color","white");
        // $("#navMoveSd").css("background","white")
    });
    //商店导航DIV 文字移入
    $(".smallImgD>ul>li>a").mouseover(function () {
        $(this).css("color","rgb(0,140,168)");
        $(this).parent().css("marginLeft","10%");
    });
    $(".smallImgD>ul>li>a").mouseleave(function () {
        $(this).css("color","black");
        $(this).parent().css("marginLeft","0");
    });

    //社区导航DIV 文字移入
    $(".midD>p>a").mouseover(function () {
        $(this).css("color","rgb(0,140,168)");
        $(this).parent().css("marginLeft","10%");
    });
    $(".midD>p>a").mouseleave(function () {
        $(this).css("color","black");
        $(this).parent().css("marginLeft","0");
    });

    // 支持导航DIV 文字移入
    $(".bigD>ul>li>a").mouseover(function () {
        $(this).css("color","rgb(0,140,168)");
        $(this).parent().css("marginLeft","15%");
    });
    // 支持导航DIV 文字移入
    $(".bigD>ul>li>a").mouseleave(function () {
        $(this).css("color","black");
        $(this).parent().css("marginLeft","0");
    });

    // 搜索按钮
    $("#navSpan2").click(function () {
        if ($("#searchIn").css("opacity")=="1"){
            $("#searchIn").css({
                "opacity":"0",
                "top":"-200%"
            })
        }else {
            $("#searchIn").css({
                "opacity":"1",
                "top":"60px"
            })
        }
    });

    // 页尾文字移入
    $(".ulD>ul>li>a").mouseover(function () {
        $(this).css("color","white");
        $(this).parent().css("marginLeft","5%");
    });
    $(".ulD>ul>li>a").mouseleave(function () {
        $(this).css("color","#999");
        $(this).parent().css("marginLeft","0");
    });
    // 页尾返回页头
    $("#backHead").click(function () {
        $("html,body").stop().animate({scrollTop:0},1000);

    });



    // 增加

        $(".add").click(function () {

            var num=$(this).prev().val();

            num =parseInt(num)+1;


            $(this).prev().val(num);
            var smon=parseInt($(this).parent().next().children(".mon").html());
            var mon=parseInt($(this).parent().prev().children().text());
            $("#all").html(parseInt($("#all").text())+mon+".00 元");
            $("#allIn").html(parseInt($("#allIn").text())+mon+".00 元");
            $(this).parent().next().children(".mon").html(smon+mon+".00元");
        });
    //减少
        $(".sub").click(function () {
            if (parseInt($(this).next().val())>0){
                var num=$(this).next().val();

                num =parseInt(num)-1;

                $(this).next().val(num);
                var smon=parseInt($(this).parent().next().children(".mon").html());
                var mon=parseInt($(this).parent().prev().children().text());
                $("#all").html(parseInt($("#all").text())-mon+".00 元");
                $("#allIn").html(parseInt($("#allIn").text())-mon+".00 元");
                $(this).parent().next().children(".mon").html(smon-mon+".00元");
            }


        });

    //删除
    $(".delete").click(function () {
       $(this).parent().parent().remove();
        var mon=parseInt($(this).parent().prev().prev().children().text());
        var vle=parseInt($(this).parent().prev().children("input").val());
        $("#all").html(parseInt($("#all").text())-mon*vle+".00 元");
        $("#allIn").html(parseInt($("#allIn").text())-mon*vle+".00 元");
    });

    // 清空
    $("#clear").click(function () {
        $("tbody").children().filter("tr").remove();
        $("#all").html("0.00 元");
        $("#allIn").html("0.00 元");
    });

    $(".input").click(function () {
        var sp=parseInt($(this).parent().next().text());
        var sc=parseInt($(this).parent().next().next().children("input").val());

        if ($(this).is("checked")){
               $(this).prop("checked",true);
        }else{
            $("#allIn").html(parseInt($("#allIn").text())-sp*sc+".00 元");
            $("#all").html(parseInt($("#all").text())-sp*sc+".00 元");
            $(this).parent().next().next().children("input").val(0);
            // $(this).parent().next().next().next().html(0+".00 元");

        }
    });




});

$("#fisB").click(function () {
    var allGoodsId=[];
    for (var i=0;i<$(".input:checked").length;i++){
            allGoodsId.push(parseInt($(".input:checked").eq(i).val()));
    }
    console.log(allGoodsId);

    $(this).attr("href","/order?myType="+allGoodsId);
});





