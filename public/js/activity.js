

function shit() {
    $.ajax({
        type:"get",
        url:"/activity.do",
        data:{},
        success:function (data) {
            for(var i=0;i<data.length;i++){
                console.log(data[i].endDate);
                document.getElementById("shit").innerHTML+=" <div class=\"acti_all\">\n" +
                    "        <div class=\"acti_art1\">\n" +
                    "            <img src=\""+data[i].imagesSrc+"\" alt=\"滑雪活动\" height=\"250\" width=\"400\">\n" +
                    "        </div>\n" +
                    "        <div class=\"acti_art2\">\n" +
                    "            <div class=\"acti_art2_content\">\n" +
                    "<a href=\"activityDetails.html\">\n"+
                    "                <h4>"+data[i].activityTitle+"</h4>\n" +
                    "</a>\n"+
                    "                <div class=\"art2_content_word\">\n" +
                    "                    <p><i class=\"glyphicon glyphicon-time\"></i>报名截止日期：<span class=\"alldate\">"+data[i].endDate+"</span></p>\n" +
                    "                    <p><i class=\"glyphicon glyphicon-map-marker\"></i>活动地点：<span>云南省迪庆藏族自治州中甸县</span><span> <a href=\""+data[i].src+"\">查看全景图</a> </span></p>\n" +
                    "                    <p><i class=\"glyphicon glyphicon-user\"></i>已经报名：<span class=\"allNum\">"+data[i].allNum+"</span><span>(上限人数300)</span></p>\n" +
                    "                </div>\n" +
                    "               <!-- <div class=\"art_price\">\n" +
                    "                    <h1>免费</h1>\n" +
                    "                    <p><button class=\"butHoverCss\">点击报名</button></p>\n" +
                    "                </div>-->\n" +
                    "                <div class=\"acti_button\">\n" +
                    "                    <button class=\"butHoverCss\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">点击报名</button>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>";
            }
        },
        err:function (err) {
            console.log(err);
        }
    });
}
shit();

var myDate = new Date();
var shitDate=myDate.toLocaleDateString().replace(/\//g,"-");
var shitDate_num=Date.parse(shitDate);
function disableButton() {
    var allNum=$(".allNum");
    console.log(allNum.length);
    for(var j=0;j<allNum.length;j++){
        var allNum1=parseInt($(".allNum")[j].innerText);
        var alldate=$(".alldate")[j].innerText;
        var alldate_num=Date.parse(alldate);
        console.log(alldate_num);
        console.log(shitDate_num);
        if(alldate_num>=shitDate_num){
            if(allNum1>=300){
                $(".butHoverCss")[j].classList.add("btn");
                $(".butHoverCss")[j].setAttribute("disabled","disabled");
                $(".butHoverCss")[j].innerHTML="人数已满";
            }
        }else{
            console.log("djgiosdjgiosdhoig");
            $(".butHoverCss")[j].classList.add("btn");
            $(".butHoverCss")[j].setAttribute("disabled","disabled");
            $(".butHoverCss")[j].innerHTML="活动过期";
        }
        /*else if(alldate_num<shitDate_num){
            console.log("djgiosdjgiosdhoig");
            $(".butHoverCss")[j].innerHTML="活动过期";
        }*/
        console.log(allNum1);
    }
}

/*function tab(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if(oDate1.getTime() > oDate2.getTime()){//转换成毫秒进行比较
        return true;
    } else {
        return false;
        /!*   console.log('第二个大');
      *  var allNum=$(".allNum");
          for(var j=0;j<allNum.length;j++){
              $(".butHoverCss")[j].innerHTML="活动过期";
          }*!/
    }
}*/


setTimeout(disableButton,50);