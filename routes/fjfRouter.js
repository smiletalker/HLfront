const express=require("express");
const fjfControler=require("../controller/fjfControler");

const fjfrouter=express.Router();
fjfrouter.get("/activity.do",fjfControler.actGet);
fjfrouter.post("/Blog.do",fjfControler.GetBlog);
fjfrouter.get("/blog_search",fjfControler.blog_search);
fjfrouter.get("/hXue",function () {
    console.log("dfdfdf");
});



module.exports=fjfrouter;
