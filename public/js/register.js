$(function () {
    $(".returnBack").click(function () {
        window.history.back(-1);
    });

//    加载完后自动刷新一个验证码
    refreshMyCode();

});
/*注册，插入数据*/
function reLogin() {
        $.ajax({
            type:"POST",
            url:"/addRegister.do",
            data:$("#myRegisterForm").serialize(),
            success:function (data) {
                console.log("注册成功");
                location.href="login.html";
            },
            error:function (data) {
                console.log("请重新注册");
                console.log(data);
            }
        });
}

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
                    .html(failHints)
                    .addClass("redSpan")
                    .removeClass("greenSpan");
            } else {
                $(obj).next("span")
                    .html(successHints)
                    .addClass("greenSpan")
                    .removeClass("redSpan");
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
        // 用户名正则
        var uName=/^[a-z0-9_\u2E80-\u9FFF]{3,16}$/;
        var myName=$(obj).val();

        if (myName.match(uName)!=null) {
            /*检查该用户名是否已存在*/
            checkIsExist(obj,"该用户名可用","该用户名已存在，请重新注册一个用户名，字符3~16个，可包含中文、数字、字母、下划线“_”");

        }else {
            $(obj).next("span")
                .html("请重新注册一个用户名，字符3~16个，可包含中文、数字、字母、下划线“_” ")
                .removeClass("greenSpan")
                .addClass("redSpan");
        }

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
            checkIsExist(obj,"该联系方式可用","该联系方式已存在，请重新填写您的联系方式，字符11个");
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
            checkIsExist(obj,"该电子邮件地址可用","该电子邮件地址已存在，请重新填写您的电子邮件地址");
        }else {
            // console.log("请重新填写");
            $(obj).next("span").html("请重新填写您的电子邮件地址").removeClass("greenSpan").addClass("redSpan");
        }
    }
}
/*检测密码*/
function checkPwd(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*密码*/
        var uPwd=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,18}$/;
        var myPwd=$(obj).val();

        if (myPwd.match(uPwd)!=null){
            $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
        }else {
            $(obj).next("span").html("请重新填写您的密码，字符6~18个，至少包含数字、大写字母、小写字母其中的两种").removeClass("greenSpan").addClass("redSpan");
        }
    }
}
/*检测确认密码*/
function checkSurePwd(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*密码*/
        var uEmail=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{6,18}$/;
        var myEmail=$(obj).val();
        if (myEmail.match(uEmail)!=null){
            if (myEmail == $("#userPwd").val()){
                $(obj).next("span").html("√").addClass("greenSpan").removeClass("redSpan");
            }else {
                $(obj).next("span").html("请再次确认您的密码").removeClass("greenSpan").addClass("redSpan");
            }
            // console.log(myPhone.match(uPhone));
        }else {
            // console.log("请重新填写");
            $(obj).next("span").html("您输入的密码与新密码不同").removeClass("greenSpan").addClass("redSpan");
        }
    }
}
/*检测验证码*/
function checkVCode(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("div").next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        /*验证码*/
        var myVerifyCode=$(obj).val();
        console.log($("div.verifyCode i").html());
        if (myVerifyCode == $("div.verifyCode i").html()){
            $(obj).next("div").next("span").html("√").addClass("greenSpan").removeClass("redSpan");
        }else {
            $(obj).next("div").next("span").html("请重新输入验证码").removeClass("greenSpan").addClass("redSpan");
        }
        // console.log(myPhone.match(uPhone));
    }
}
/*刷新验证码*/
function refreshMyCode() {
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var code='';
    for (var i=0;i<4;i++){
        code+=''+arr[Math.floor(Math.random()*arr.length)];
        $("div.verifyCode i").html(code);
        // console.log($("div.verifyCode i").html());
    }
}