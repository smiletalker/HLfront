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

    })
});



function checkName(obj,tips) {
    if($(obj).val()==""){
       $(obj).next("span").html(tips);
    }else{
        $(obj).next("span").html("");
    }
}


function checkEmail(obj,tips) {
    if($(obj).val()==""){
        $(obj).next("span").html(tips);
    }else{
        $(obj).next("span").html("");
    }
}

function checkPhone(obj,tips) {
    if($(obj).val()==""){
        $(obj).next("span").html(tips);
    }else{
        $(obj).next("span").html("");
    }
}