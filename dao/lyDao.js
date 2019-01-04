const dbPool=require("../config/poolConfig");
const myDao={
    /*基于用户表的条件查询*/
    searchUserDao:function(params){
        return new Promise((resolve,reject)=>{
            let userName=params[0] || "";
            let userEmail=params[1] || "";
            let userPwd=params[2] || "";
            let userPhnoe=params[3] || "";
            let sql="select * from userRegist where 1=1";
            let str=params[0]+params[1]+params[2]+params[3];
            if (userName!="" || userName==undefined){
                sql+=" and userName=?";
                str=str.replace("NaN","").replace("undefinedundefinedundefined","").trim();
            }
            if (userEmail!="" || userEmail==undefined) {
                sql+=" and userEmail=?";
                str=str.replace("undefined","").replace("undefinedundefined","").trim();
                // console.log(str);
            }
            if (userPwd!="" || userPwd==undefined) {
                sql+=" and userPassword=?";
                str=str.replace("NaN","").replace("undefined","").trim();
            }
            if (userPhnoe!="" || userPhnoe==undefined) {//一个密码不能确定一个用户，暂时先根据密码来查询一个用户
                sql+=" and userPhone=?";
                str=str.replace("NaN","").replace("undefinedundefined","").trim();
            }
            // console.log("dao"+str);
            // console.log(sql);
            dbPool.connect(sql,str,(err,data)=>{
                if (!err){
                    // console.log(data);
                    resolve(data);
                } else {
                    // console.log(err);
                    reject(err);
                }
            })
        });
    },

    /*登录页面根据邮件地址查询密码*/
    searchPwd:function(params){
        return new Promise((resolve,reject)=>{
            let sql="select userId,userPassword,userPhone from userRegist where userEmail=?";
            dbPool.connect(sql,params,(err,data)=>{
                if (!err){
                    // console.log(data);
                    resolve(data);
                } else {
                    // console.log(err);
                    reject(err);
                }
            })
        });
    },

    /*注册*/
    registerDao:function(params){
        return new Promise((resolve,reject)=>{
            dbPool.connect("insert into userRegist value(null,?,?,?,?)"
                ,params
                ,(err,data)=>{
                    if (!err){
                        // console.log(data);
                        resolve(data);
                    } else {
                        // console.log(err);
                        reject(err);
                    }
            })
        })
    },

    /*我的账户首页*/
    accountMsgDao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("SELECT ug.userName AS userName,ug.userEmail AS userEmail,ud.userAddress1 AS userAddr,ud.userName AS userAddrName,ud.phoneName AS phoneName\n" +
                "FROM userregist ug LEFT JOIN useraddress ud \n" +
                "ON ug.userID=ud.userId\n" +
                "WHERE ug.userID=?"
                ,params,(err,data)=>{
                if (!err){
                    // console.log(data);
                    resolve(data);
                } else {
                    // console.log(err);
                    reject(err);
                }
            });
        });
    },

    /*新增地址*/
    addAddrDao:function(params){
        return new Promise((resolve,reject)=>{
            dbPool.connect("INSERT INTO useraddress VALUES(?,?,?,?)",params,(err,data)=>{
                if (!err){
                    console.log(data);
                    resolve(data);
                } else {
                    console.log(err);
                    reject(err);
                }
            })
        })
    },

    /*我的订单*/
    orderDao:function(params){
        return new Promise((resolve,reject)=>{
            // let sql="SELECT * FROM userorder where 1=1";
            dbPool.connect("SELECT ug.userId,ua.userName,ua.phoneName,ur.userOderAddress,ur.orderNo,ur.orderId,ur.goodsId,ur.goodsKind,ur.goodsImageSrc,\n" +
                "ur.goodsName,ur.goodsSize,ur.goodsColor,ur.goodsPrice,ur.goodsNum,ur.payTime,ur.isPay,ur.isDelivery,ur.isArriva\n" +
                "FROM userregist ug JOIN userorder ur\n" +
                "ON ur.userId=ug.userId\n" +
                "JOIN useraddress ua\n" +
                "ON ur.userId=ua.userId\n" +
                "AND ur.userOderAddress = ua.userAddress1\n" +
                "WHERE ug.userId=?",
                params,
                (err,data)=>{
                if (!err){
                    // console.log(data);
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    
    /*我的收藏*/
    collectionDao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("SELECT img.src1,ct.goodsname,gd.price\n" +
                "FROM usercollect AS uc LEFT JOIN goodsimages AS img\n" +
                "ON uc.goodsKind=img.goodsKindId AND uc.goodsId=img.goodsId\n" +
                "JOIN clothes AS ct\n" +
                "ON ct.goodsId=img.goodsId AND ct.goodsKind=img.goodsKindId\n" +
                "JOIN goodsmp AS gd\n" +
                "ON gd.goodsId=ct.goodsId AND gd.goodsKindId=ct.goodsKind\n" +
                "WHERE uc.userId=?"
                ,params
                ,(err,data)=>{
                if (!err){
                    // console.log(data);
                    resolve(data);
                } else {
                    // console.log(err);
                    reject(err);
                }
            })
        });
    },

    /*修改地址*/
    updateAddrDao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("UPDATE useraddress SET userAddress1=?,userName=?,phoneName=?\n" +
                "WHERE userAddress1=? AND userName=? AND phoneName=?"
                ,params
                ,(err,data)=>{
                    if (!err){
                        console.log(data);
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },

    /*修改用户信息*/
    /*修改用户名、密码、联系方式*/
    updateMsg1Dao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("UPDATE userregist SET userName=?,userPassword=?,userPhone=? WHERE userID=?"
                ,params
                ,(err,data)=>{
                if (!err){
                    // console.log(data);
                    resolve(data);
                } else {
                    reject(data);
                }
            })
        })
    },
    /*修改用户名、电子邮件、联系方式*/
    updateMsg2Dao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("UPDATE userregist SET userName=?,userEmail=?,userPhone=? WHERE userID=?"
                ,params
                ,(err,data)=>{
                    if (!err){
                        // console.log(data);
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    /*修改用户名、电子邮件、密码、联系方式*/
    updateMsg3Dao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("UPDATE userregist SET userName=?,userEmail=?,userPassword=?,userPhone=? WHERE userID=?"
                ,params
                ,(err,data)=>{
                    if (!err){
                        // console.log(data);
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    /*修改用户名、练习方式*/
    updateMsg4Dao:function (params) {
        return new Promise((resolve,reject)=>{
            dbPool.connect("UPDATE userregist SET userName=?,userPhone=? WHERE userID=?"
                ,params
                ,(err,data)=>{
                    if (!err){
                        // console.log(data);
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    }
};


module.exports=myDao;