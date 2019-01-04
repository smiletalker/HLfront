/*点击提交，跳转到信息*/
function mySubmit() {
    if ($("#myPwd").val()=="" || $("#myEmail").val()==""){
        $("#myPwd").next("span").html("请填写密码").addClass("redSpan").removeClass("greenSpan");
        $("#myEmail").next("span").html("请填写您的电子邮件").addClass("redSpan").removeClass("greenSpan");
    }else {
        $.ajax({
            type:"POST",
            url:"/login.do",
            data:$("#myEmail").serialize(),
            success:function (data) {
                console.log(data);
                // console.log(data[0].userPhone);
                if (data.length>0){
                    if($("#myPwd").val() == data[0].userPassword){
                        // console.log(data[0].userId);
                        localStorage.setItem("myUserId",data[0].userId);
                        location.href="account.do";
                        // window.history.back(-1);
                    }else {
                        $("#myPwd").next("span")
                            .html("密码错误，请重新输入密码")
                            .addClass("redSpan")
                            .removeClass("greenSpan");
                    }
                } else {
                    $("#myPwd").val()=="";
                }

                sessionStorage.setItem("myUserPhone",data[0].userPhone)
            },
            error:function (data) {
                console.log(data);
            }
        });
    }
}

function checkIsExist(obj,successHints,failHints) {
    console.log($(obj).serialize());
    $.ajax({
        type:"GET",
        url:"/searchUser.do",
        data:$(obj).serialize(),
        success:function (data) {
            console.log(data.length);
            if (data.length == 0){//没有查询到该用户
                $(obj).next("span")
                    .html(failHints)
                    .addClass("redSpan")
                    .removeClass("greenSpan");
            } else {//查询到该用户
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

/*检测电子邮件*/
function checkEmail(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        checkIsExist(obj, "√","该电子邮件不存在");
    }
}
/*检测密码*/
function checkPwd(obj,tips) {
    if ($(obj).val()==""){
        $(obj).next("span").html(tips).addClass("redSpan").removeClass("greenSpan");
    }else {
        $(obj).next("span").html("").addClass("greenSpan").removeClass("redSpan");

    }
}
