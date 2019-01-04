const express=require("express");

const lyController=require("../controller/lyController");

const router=express.Router();

/*拦截账户信息首页*/
router.get("/account.do",lyController.myAccount);
/*拦截账户信息*/
router.get("/accountMsg.do",lyController.myAccountMsg);
/*拦截地址管理*/
router.get("/accountAddr.do",lyController.myAccountAddr);
/*添加地址*/
router.post("/addMyAddr.do",lyController.myAddAddr);
/*拦截我的订单*/
router.get("/accountOrder.do",lyController.myAccountOrder);
/*拦截我的收藏*/
router.get("/accountCollection.do",lyController.myAccountCollection);

/*拦截登录页面*/
router.post("/login.do",lyController.myLogin);

/*拦截注册*/
router.post("/addRegister.do",lyController.myRegister);

/*拦截查询用户的姓名，邮件，密码，电话*/
router.get("/searchUser.do",lyController.searchUser);

/*拦截查询地址*/
router.get("/updateAddr.do",lyController.updateAddr);

/*拦截修改用户信息的请求*/
router.post("/updateMsg.do",lyController.updateMsg);

module.exports=router;