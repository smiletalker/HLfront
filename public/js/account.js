/*账户信息中心----点击+展开地址详情，点击-缩回地址详情*/
function addrOpen(obj) {
    // console.log(obj);
    if ($(obj).html()=="+"){
        $(obj).html("-");
        $(obj).parent(".getAddr").css("height","80px");
    } else{
        $(obj).html("+");
        $(obj).parent(".getAddr").css("height","22px");
    }
};

/*检查联系方式输入的值是否为空*/
function checkTel(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("").addClass("greenSpan").removeClass("redSpan");
    }
}

/*检查输入的地址是否为空*/
function checkAddress(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("").addClass("greenSpan").removeClass("redSpan");
    }
}

/*检查输入的姓名是否为空*/
function checkName(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("").addClass("greenSpan").removeClass("redSpan");
    }
}

