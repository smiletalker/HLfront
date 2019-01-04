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