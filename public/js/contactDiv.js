var contact=document.getElementsByClassName("contact")[0];

window.addEventListener("scroll",function(){
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollHeight);
    if(scrollHeight>433){
        contact.style.position="fixed";
        contact.style.top="2px";
    }
    if(scrollHeight<=434){
        contact.style.position="absolute";
        contact.style.top="433px";
    }
})
