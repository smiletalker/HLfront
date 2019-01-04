const express=require("express");
const router=express.Router();
const hjqControler=require("../controller/hjqControler");


router.get("/buycar",hjqControler.getGoods);
router.get("/order",hjqControler.saveAddress);
router.get("/login.do",hjqControler.retrunHtml);
router.get("/buy.do",hjqControler.order);
//



module.exports=router;