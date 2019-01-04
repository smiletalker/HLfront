function updateAddr() {
    // location.href="account.html#addrManage";
    // console.log($("#myAddrForm").serialize());
    $.ajax({
        type:"POST",
        url:"/addMyAddr.do",
        data:$("#myAddrForm").serialize(),
        success:function (data) {

        },
        error:function (data) {
            console.log(data);
        }
    });
    location.href="account.do#addrManage";
}
/*地址选择判断*/
function selectAddr() {
    // console.log($("#addrCategory").val());
    if ($("#addrCategory").val() == 0){
        $("#addrCategory").next("span").html("请选择地址类别").addClass("redSpan").removeClass("greenSpan");
    }
}
/*检测用户名*/
function checkName(obj,tips) {
    if ($(obj).val()==""){
        // $(obj).next("span").css("display","block");
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
    }
}
/*检测联系方式*/
function checkPhone(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
    }
}
/*地址的三级联动*/
/*安装三级联动插件
npm install distpicker
引入distpicker.js*/

/*检测详细地址*/
function checkAddr(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
    }
}