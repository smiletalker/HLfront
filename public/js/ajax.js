//1.创建xhr对象
var xhr=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
function ajax(method,Url,params,getAll,failureFn,async) {
    if(async==undefined){//true 异步  false-同步
        async==true
    }
    //4.响应就绪
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                getAll();
            }else {
                if(failureFn) {
                    failureFn();
                }else {
                    alert(xhr.status);
                }
            }
        }
    };
    //2.打开与服务器的链接
    if(method=="get"){
        xhr.open(method,Url+"?"+params,async);
        xhr.send(null);
    }else if(method=="post"){
        xhr.open(method,Url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params)
    }
    /* //3.发送给服务器
     xhr.send(null);*/
}