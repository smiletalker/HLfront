const lyDao=require("../dao/lyDao");

const myController={
    /*基于用户表的条件查询*/
    searchUser:function(req,resp){
        // console.log("controller:"+req.query.userName+req.query.userEmail+req.query.userPwd+req.query.userPhnoe);
        let params=[req.query.userName,req.query.userEmail,req.query.userPwd,req.query.userPhnoe];
         lyDao.searchUserDao([params[0],params[1],params[2],params[3]])
              .then((data)=>{
                  resp.send(data);
         })
    },

    /*登录*/
    myLogin:function (req,resp) {
        // console.log(req.body);
        lyDao.searchPwd([req.body.userEmail])
            .then((data)=>{
                console.log(data);
                req.session.myUserId=data[0].userId;
                resp.send(data);
            }).catch((err)=>{
                console.log(err);
        })
    },

    /*注册*/
    myRegister:function (req,resp) {
        // console.log(req.body);
        lyDao.registerDao([req.body.userName,req.body.userEmail,req.body.userPwd,req.body.userPhnoe])
            .then((data)=>{
                resp.send(data);
            }).catch((err)=>{
            console.log(err);
        });
    },

    /*我的账户首页*/
    myAccount:function (req,resp) {
        // console.log("获取缓存"+req.session.myUserId);
        lyDao.accountMsgDao([req.session.myUserId])
            .then((data)=>{
                // console.log(data);
                resp.render("account",{userMsg:data});
        });
    },

    /*账户信息*/
    myAccountMsg:function (req,resp) {
        resp.render("accountMsg",{});
    },

    /*地址管理*/
    myAccountAddr:function (req,resp) {
        resp.render("accountAddr",{});
    },

    /*添加地址*/
    myAddAddr:function(req,resp){
        // console.log(req.body);
        // console.log(req.session.myUserId,req.body.addrProvince+req.body.addrCity+req.body.addrDistrict+req.body.addrDetails,req.body.addrName,req.body.addrTel);
        lyDao.addAddrDao([req.session.myUserId,req.body.addrProvince+req.body.addrCity+req.body.addrDistrict+req.body.addrDetails,req.body.addrName,req.body.addrTel])
            .then((data)=>{
                resp.send(data);
            console.log(data);
        })
            .catch((err)=>{
            console.log(err);
        })
    },

    /*我的订单*/
    myAccountOrder:function (req,resp) {
        lyDao.orderDao([req.session.myUserId])
            .then((data)=>{
            resp.render("accountOrder",{order:data});
            console.log(data);
        })
            .catch((err)=>{
            // console.log(err);

        })
    },

    /*我的收藏*/
    myAccountCollection:function (req,resp) {
        lyDao.collectionDao([req.session.myUserId]).then((data)=>{
            // console.log(data);
            resp.render("accountCollection",{collection:data});
        }).catch((err)=>{
            console.log(err);
        })
    },

    /*修改地址*/
    updateAddr:function (req,resp) {
        console.log(req.query);
        lyDao.updateAddrDao([req.query.myAddress,req.query.receiverName,req.query.receiverTel,req.query.oldMyAddress,req.query.oldReceiverName,req.query.oldReceiverTel])
            .then((data)=>{
                console.log(data);
                resp.send(data);
        }).catch((err)=>{
            console.log(err);
        })

    },

    /*修改用户信息*/
    updateMsg:function (req,resp) {
        console.log(req.session.myUserId);
        console.log(req.body);
        /*修改用户名、密码、联系方式*/
        if (req.body.msgTypeId==1){
            lyDao.updateMsg1Dao([req.body.msgName,req.body.upMyNewPwd,req.body.msgPhone,req.session.myUserId]).then((data)=>{
                console.log("===1controller==="+data);
            }).catch((err)=>{

            })
        }
        /*修改用户名、电子邮件、联系方式*/
        if (req.body.msgTypeId==2){
            lyDao.updateMsg2Dao([req.body.msgName,req.body.upMyEmail,req.body.msgPhone,req.session.myUserId]).then((data)=>{
                console.log("===2controller==="+data);
            }).catch((err)=>{

            })
        }
        /*修改用户名、电子邮件、密码、联系方式*/
        if (req.body.msgTypeId==3){
            lyDao.updateMsg3Dao([req.body.msgName,req.body.upMyEmail,req.body.upMyNewPwd,req.body.msgPhone,req.session.myUserId]).then((data)=>{
                console.log("===3controller==="+data);
            }).catch((err)=>{

            })
        }
        /*修改用户名、练习方式*/
        if (req.body.msgTypeId==4){
            lyDao.updateMsg4Dao([req.body.msgName,req.body.msgPhone,req.session.myUserId]).then((data)=>{
                console.log("===4controller==="+data);
            }).catch((err)=>{

            })
        }
    }
};

module.exports=myController;