const path=require("path");
const dbpool=require("../config/poolConfig");
const fjfdao=require("../dao/fjfDao");

const fjfControler={
     actGet:function (req,resp){
         fjfdao.activiDao([],function (result) {
             console.log(result);
             resp.send(result);
         })
     },
    
    GetBlog:function (req,resp) {
        let everyPage=parseInt(req.body.everyPage);
       /* console.log(typeof (everyPage));*/
        fjfdao.BlogDao(everyPage).then(
            function (result) {
               /*console.log(result);*/
                resp.send(result);
            }
        );
    },
   blog_search:function (req,resp) {
       let search_value=req.query.search_value;
       console.log(search_value);
       fjfdao.blog_search(["%"+search_value+"%","%"+search_value+"%","%"+search_value+"%"]).then(
           function (result) {
               console.log(result);
               resp.send(result);
           }
       );
   }
};

module.exports=fjfControler;