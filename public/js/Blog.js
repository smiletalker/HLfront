var everyPage=0;
$(".butHoverCss").click(function () {
    console.log(everyPage);
    $.ajax({
        type:"POST",
        url:"/Blog.do",
        data:{
            everyPage:everyPage,
        },
        success:function (data) {
            console.log(data);
            var array=new Array();
            array.push(data[0].blogLable);
            console.log(array);
            for(var i=0;i<data.length/2;i++){
                var d = document.createElement('div');
                d.innerHTML ="<div class=\"middle_all\">\n" +
                    "            <div class=\"content_middle_left\">\n" +
                    "                <img src=\""+data[i].blogImageSrc+"\" alt=\"\" width=\"622\" height=\"289\">\n" +
                    "                <div class=\"middle_left_right\">\n" +
                    "                    <a href=\"#\">"+data[i].blogLable+"</a>\n" +
                    "                </div>\n" +
                    "                <div class=\"shit\">\n" +
                    "                    <p class=\"p1\">"+data[i].blogTitle+"</p>\n" +
                    "                    <p class=\"p2\">"+data[i].blogContent+"<a href=\"\">现在阅读</a> </p>\n" +
                    "                    <p class=\"p3\">"+data[i].blogDate+"</p>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "            <div class=\"content_middle_right\">\n" +
                    "                <img src=\""+data[i+1].blogImageSrc+"\" alt=\"\" width=\"622\" height=\"289\">\n" +
                    "                <div class=\"middle_left_right1\">\n" +
                    "                    <a href=\"#\">"+data[i+1].blogLable+"</a>\n" +
                    "                </div>\n" +
                    "                <div class=\"shit shit1\">\n" +
                    "                    <p class=\"p1\">"+data[i+1].blogTitle+"</p>\n" +
                    "                    <p class=\"p2\">"+data[i+1].blogContent+"<a\n" +
                    "                            href=\"\">现在阅读</a></p>\n" +
                    "                    <p class=\"p3\">"+data[i+1].blogDate+"</p>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>";
                $(".content_middle")[0].appendChild(d);
            }
        },
        err:function (err) {
            console.log(err);
        }
    });
    everyPage+=3;
    if(everyPage>25){
        $(".butHoverCss")[0].classList.add("btn");
        $(".butHoverCss")[0].setAttribute("disabled","disabled");
        $(".butHoverCss")[0].innerHTML="没有更多";
    }
}
);

$("#search_blog").click(function () {
    var search_value=$(".uk-width-1-1").val();
    $(".uk-width-1-1").val("");//清除输入框的输入的值
    $.ajax({
        type:"get",
        url:"/blog_search",
        data:{
            search_value:search_value,
        },
        success:function (data) {
            console.log(data);
            for(var i=0;i<data.length/2;i++){
                document.getElementsByClassName('content_middle')[0].innerHTML+="<div class=\"middle_all\">\n" +
                    "            <div class=\"content_middle_left\">\n" +
                    "                <img src=\""+data[i].blogImageSrc+"\" alt=\"\" width=\"622\" height=\"289\">\n" +
                    "                <div class=\"middle_left_right\">\n" +
                    "                    <a href=\"#\">"+data[i].blogLable+"</a>\n" +
                    "                </div>\n" +
                    "                <div class=\"shit\">\n" +
                    "                    <p class=\"p1\">"+data[i].blogTitle+"</p>\n" +
                    "                    <p class=\"p2\">"+data[i].blogContent+"<a href=\"\">现在阅读</a> </p>\n" +
                    "                    <p class=\"p3\">"+data[i].blogDate+"</p>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "            <div class=\"content_middle_right\">\n" +
                    "                <img src=\""+data[i+1].blogImageSrc+"\" alt=\"\" width=\"622\" height=\"289\">\n" +
                    "                <div class=\"middle_left_right1\">\n" +
                    "                    <a href=\"#\">"+data[i+1].blogLable+"</a>\n" +
                    "                </div>\n" +
                    "                <div class=\"shit shit1\">\n" +
                    "                    <p class=\"p1\">"+data[i+1].blogTitle+"</p>\n" +
                    "                    <p class=\"p2\">"+data[i+1].blogContent+"<a\n" +
                    "                            href=\"\">现在阅读</a></p>\n" +
                    "                    <p class=\"p3\">"+data[i+1].blogDate+"</p>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>";
            };
            document.getElementsByClassName("middle_all")[0].style.display="none";
            document.getElementsByClassName("middle_all")[1].style.display="none";
            document.getElementsByClassName("middle_all")[2].style.display="none";
            document.getElementsByClassName("middle_all")[3].style.display="none";
            document.getElementsByClassName("butHoverCss")[0].style.display="none";
        },
        err:function (err) {
          console.log(err);
        }
    });
});