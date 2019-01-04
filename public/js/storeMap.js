function showAtrributes(event){
    var out='';
    for(var p in event){
        if(typeof(p)!="function"){
            out+=p+"="+event[p]+"  ";
        }
    }
    alert(out);
}
var key='F4bfb7ec82f386cf8541158ad5801138';
var map = new BMap.Map("map");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.setDefaultCursor("crosshair");
map.enableScrollWheelZoom();
map.enableContinuousZoom();
preMarker='';
map.addEventListener("click", function(e){
    if(!e.overlay){
        document.getElementById("mapx").innerHTML="鼠标当前x位置:"+e.point.lng;
        document.getElementById("mapy").innerHTML="鼠标当前y位置:"+e.point.lat;
        document.getElementById("level").innerHTML="缩放等级:"+this.getZoom();
        var targetUrl='http://api.map.baidu.com/geocoder/v2/?ak='+key+'&location='+e.point.lat+','+e.point.lng+'&output=json&pois=0';
        $.ajax({
            url:targetUrl,
            type:"get",
            async : false,
            dataType:'jsonp',
            beforeSend:function(){
            },
            success:function(data,status){
                if(status=='success' && data.status==0){
                    var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
                        offset: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0 - 10 * 25)
                    });
                    var marker=new BMap.Marker(e.point,{icon:myIcon});
                    map.removeOverlay(preMarker);
                    map.addOverlay(marker);
                    content="<div>地址:"+data.result.formatted_address+"</div>";
                    content+='<form action="around.php" method="post"><input type="hidden" name="lng" value="'+data.result.location.lng+'"><input type="hidden" name="lat" value="'+data.result.location.lat+'"><input type="submit" value="查看附近幼儿园"></form>';
                    var info=new BMap.InfoWindow(content);
                    marker.openInfoWindow(info);
                    preMarker=marker;
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
                alert(errorThrown);
            }
        });

    }
});
map.addEventListener("dragend", function(){
    var center = map.getCenter();
    document.getElementById("mapx").innerHTML="拖拽后中心x位置:"+center.lng;
    document.getElementById("mapy").innerHTML="拖拽后中心y位置:"+center.lat;
    document.getElementById("level").innerHTML="缩放等级:"+this.getZoom();
});
map.addEventListener("zoomend", function(){
});
function serachlocal(){
    var markerArray=new Array();
    var typeArray=new Array('','－公交站','','－地铁站');
    var local = new BMap.LocalSearch(map, {
        renderOptions: {
            map: map,
            autoViewport: true,
            selectFirstResult: false
        },
        pageCapacity: 8,
        onMarkersSet:function(pois){
            for(var i=0;i<pois.length;i++){
                (function(){
                    var index=i;
                    var curPoi=pois[i];
                    var curMarker=pois[i].marker;
                    markerArray[i]=curMarker;

                    content="<h3>"+curPoi.title+typeArray[curPoi.type]+"</h3>";
                    content+="<div>地址:"+curPoi.address+"</div>";
                    content+='<form action="around.php" method="post"><input type="hidden" name="lng" value="'+curPoi.point.lng+'"><input type="hidden" name="lat" value="'+curPoi.point.lat+'"><input type="submit" value="查看附近鞋店"></form>';

                    curMarker.addEventListener('click',function(event){
                        //showAtrributes(event);
                        var info=new BMap.InfoWindow(content);
                        curMarker.openInfoWindow(info);
                        var position=curMarker.getPosition();
                        document.getElementById("mapx").innerHTML="拖拽后中心x位置:"+position.lng;
                        document.getElementById("mapy").innerHTML="拖拽后中心y位置:"+position.lat;
                        //document.getElementById("level").innerHTML="缩放等级:"+this.getZoom();

                    });
                })();
            }

        },
        onSearchComplete:function(results){
            if(local.getStatus() == BMAP_STATUS_SUCCESS){

                var html='<ol style="list-style: none outside none; padding: 0px; margin: 0px;">';
                for(var i=0;i<results.getCurrentNumPois();i++){
                    var poi=results.getPoi(i);
                    var bYposition=2-i*20;
                    html+='<li id="poi'+i+'" index="'+i+'" style="margin: 2px 0px; padding: 0px 5px 0px 3px; cursor: pointer; overflow: hidden; line-height: 17px;">';
                    html+='<span style="background:url(http://api.map.baidu.com/bmap/red_labels.gif) 0 '+bYposition+'px no-repeat;padding-left:10px;margin-right:3px"></span>'
                    html+='<span style="color:#00c;text-decoration:underline"><b>'+poi.title+'</b>'+typeArray[poi.type]+'</span>';
                    html+='<span style="color:#666;">-'+poi.address+'</span>'
                    html+='</li>';
                }
                html+="</ol>";
                $("#results").html(html);

                for(var i=0;i<results.getCurrentNumPois();i++){
                    (function(){
                        var index=i+1;
                        var poi=results.getPoi(i);
                        content="<h3>"+poi.title+typeArray[poi.type]+"</h3>";
                        content+="<div>地址:"+poi.address+"</div>";
                        content+='<form action="around.php" method="post"><input type="hidden" name="lng" value="'+poi.point.lng+'"><input type="hidden" name="lat" value="'+poi.point.lat+'"><input type="submit" value="查看附近鞋店"></form>';
                        var info=new BMap.InfoWindow(content)
                        $("#poi"+i).click(function(){
                            markerArray[$(this).attr('index')].openInfoWindow(info);
                        });
                    })();

                }

            }
        },
    });

    local.search(document.getElementById("searchtext").value);
}

$(".ulD>ul>li>a").mouseover(function () {
    $(this).css("color","white");
    $(this).parent().css("marginLeft","5%");
});
$(".ulD>ul>li>a").mouseleave(function () {
    $(this).css("color","#999");
    $(this).parent().css("marginLeft","0");
});
$("#backHead").click(function () {
    $("html,body").stop().animate({scrollTop:0},1000);
});
$("#zhid").click(function () {
    $("html,body").stop().animate({scrollTop:360},500);
});


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
            "transition":"all .2s linear"
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
            "transition":"all .2s linear"
        });
        $("#supportD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
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
            "transition":"all .2s linear"
        });
        $("#communityD").css({
            "opacity":"0",
            "left":"-100%",
            "transition":"all 0s"
        });
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
    })
});