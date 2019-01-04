$(function () {
    /*更改电子邮件被选中*/
    $("#upEmail").click(function () {
        if ($(this).is(":checked")) {//如果被点击的CheckBox为checked
            $("#upEmail").prop("checked",true);//设置CheckBox的属性checked为true----被选中
            $("#upEmailTitle").html("更改电子邮件");
            $(".email").css("display","block");
            $("#upEmailTitle").css("display","block");
            if ($("#upPwd").prop("checked")==true){
                $("#upEmailTitle").html("更改电子邮件和密码");
                $(".password").css("display","block");
            }

        }else{
            $("#upEmail").prop("checked",false);//设置CheckBox的属性checked为false----不被选中
            $(".email").css("display","none");
            if ($("#upPwd").prop("checked")==true){
                $("#upEmailTitle").html("更改密码");
            }else {
                $("#upEmailTitle").html("");
            }
            $("#upEmailTitle").css("display","block");
        }

    });
    $("#upPwd").click(function () {
        if ($(this).is(":checked")) {
            $("#upPwd").prop("checked",true);
            $("#upEmailTitle").html("更改密码");
            $(".password").css("display","block");
            $("#upEmailTitle").css("display","block");

            if ($("#upEmail").prop("checked")==true){
                $("#upEmailTitle").html("更改电子邮件和密码");
                $(".email").css("display","block");
            }
        }else{
            $("#upPwd").prop("checked",false);
            $(".password").css("display","none");
            if ($("#upEmail").prop("checked")==true){
                $("#upEmailTitle").html("更改电子邮件");
            }else {
                $("#upEmailTitle").html("");
            }

            $("#upEmailTitle").css("display","block");
        }

    });

    /*左侧菜单被点击后添加类menuClicked*/
    $(".leftMenu>ul>li:nth-of-type(3)>a").addClass("menuClicked");
    $(".leftMenu>ul>li:nth-of-type(3)>a:hover").addClass("menuClicked");

});

/*根据输入框的值，查询数据库里面该值是否已经存在*/
function checkIsExist(obj,successHints,failHints) {
    // console.log($(obj).serialize());
    $.ajax({
        type:"GET",
        url:"/searchUser.do",
        data:$(obj).serialize(),
        success:function (data) {
            console.log(data.length);
            if (data.length>0){
                $(obj).next("span")
                    .html(successHints)
                    .addClass("greenSpan")
                    .removeClass("redSpan");
            } else {
                $(obj).next("span")
                    .html(failHints)
                    .addClass("redSpan")
                    .removeClass("greenSpan");
            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}

/*检测用户名*/
function checkName(obj,tips) {
    if ($(obj).val()==""){
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
        /*联系方式*/
        var uPhone=/((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))[0-9]{8}/;
        var myPhone=$(obj).val();

        if (uPhone.test(myPhone)!=false){
            $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
        }else {
            // console.log("请重新填写");
            $(obj).next("span")
                .html("请重新填写您的联系方式，字符11个")
                .removeClass("greenSpan")
                .addClass("redSpan");
        }
    }
}
/*检测电子邮件*/
function checkEmail(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*电子邮件*/
        var uEmail=/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
        var myEmail=$(obj).val();
        if (myEmail.match(uEmail)!=null){
            $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
            // console.log(myPhone.match(uPhone));
        }else {
            // console.log("请重新填写");
            $(obj).next("span").html("请重新填写您的电子邮件地址").removeClass("greenSpan").addClass("redSpan");
        }
    }
}
/*检测旧密码密码*/
function checkPwd(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*密码*/
        var uPwd=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,18}$/;
        var myPwd=$(obj).val();

        if (myPwd.match(uPwd)!=null){
            checkIsExist(obj,"√","输入的密码不为当前密码");
            // $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");

        }else {
            $(obj).next("span").html("请重新填写您的密码，字符6~18个，至少包含数字、大写字母、小写字母其中的两种").removeClass("greenSpan").addClass("redSpan");
        }
    }
}
/*检测新密码*/
function checkNewPwd(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*密码*/
        var uPwd=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,18}$/;
        var myPwd=$(obj).val();
        if (myPwd.match(uPwd)!=null){
            if (myPwd == $("#upMyOldPwd").val()) {
                $(obj).next("span")
                    .html("新密码与当前密码重复，请重新填写您的新密码，字符6~18个，至少包含数字、大写字母、小写字母其中的两种")
                    .removeClass("greenSpan").addClass("redSpan");
            }else {
                $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
            }

            // console.log(myPhone.match(uPhone));
        }else {
            // console.log("请重新填写");
            $(obj).next("span").html("请重新填写您的新密码，字符6~18个，至少包含数字、大写字母、小写字母其中的两种").removeClass("greenSpan").addClass("redSpan");
        }
    }
}
/*检测确认新密码*/
function checkSureNewPwd(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*密码*/
        var uEmail=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,18}$/;
        var myEmail=$(obj).val();
        if (myEmail.match(uEmail)!=null){
            if (myEmail == $("#upMyNewPwd").val()){
                $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
            }else {
                $(obj).next("span").html("您输入的密码与新密码不同，请再次确认您的密码").removeClass("greenSpan").addClass("redSpan");
            }
            // console.log(myPhone.match(uPhone));
        }else {
            // console.log("请重新填写");
            $(obj).next("span").html("请重新输入").removeClass("greenSpan").addClass("redSpan");
        }
    }
}