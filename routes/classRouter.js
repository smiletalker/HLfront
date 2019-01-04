const express=require("express");

const router=express.Router();
const classControler=require("../controller/classControler");
module.exports=router;



// 登山


router.get("/dShan.ejs",classControler.dShan);



// 攀岩


router.get("pYan.ejs",classControler.pYan);

// 滑雪


router.get("/hXue.ejs",classControler.hXue);

// 徒步旅行


router.get("/onFoot.ejs",classControler.onFoot);

// 高山跑步


router.get("/pBu.ejs",classControler.pBu);