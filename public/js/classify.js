$(function(){
    //折叠
    $(".listActive").click(function () {
        $(this).parent(".listMenu").children("ul").slideToggle();
        var mark=$(this).children("span").next();
        // console.log(mark);
        if(mark.text()=="-"){
            mark.text("+");
        }else{
            mark.text("-");

        }
    }) ;

   $(".goodsOder").click(function(){
       // this.next().next().slideToggle();
       var th=$(this).next().next();
       // console.log(th);
       th.toggle();
   }) ;

   $(".seat>li").click(function(){
       // var index=$(this);
       // console.log(index);
       var content=$(".tHuan");

       $(content).text($(this).text());
       console.log(content);

       $(".seat").css("display","none");

   })
    $(".ab a").click(function () {
        var txt=$(this);
        console.log(txt);
        if (txt.text()=="DESC"){
            txt.text("ASC");
        }else{
            txt.text("DESC");
        }
    })

   // $(".textActive").mouseenter(function(){
   //     var tr=$(this).children("a").children("div").next().next().next()
   //     // console.log(tr);
   //     tr.text("任性秀出来,挑战新高度");
   //
   // }).mouseleave(function () {
   //     var tr=$(this).children("a").children("div").next().next().next();
   //     tr.text("￥150.00");
   //
   // });

});