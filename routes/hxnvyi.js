
const express=require("express");

const router=express.Router();

const hxControler=require("../controller/hxControler");

router.get("/hxyi.do",hxControler.hxYi);
router.get("/buycar.ejs",hxControler.buycar);
router.get("/accountCollection.ejs",hxControler.accountCollection);

module.exports=router;

