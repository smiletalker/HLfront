const hjqDao=require("../dao/hjqDao");
const lyDao=require("../dao/lyDao");

var address;
var goods;
const hjqControler={
    getGoods:function (req,resp) {
         if (req.session.myUserId==undefined){
             resp.render("login",{});
         } else{
             hjqDao.buyCarDao([req.session.myUserId],function (result){

                 resp.render("buycar",{goods:result});


             })

         }

    },
    saveAddress:function (req,resp) {
        hjqDao.addressDao([req.session.myUserId]).then(function (data) {
           address=data;
        });

        hjqDao.goodsDao([req.session.myUserId,req.query.myType]).then(function (data) {
            goods=data;
            resp.render("order",{a_g:[address,data]});

        })
    },
    retrunHtml:function (req,resp) {

        if (req.session.myUserId==undefined) {
            resp.render("login",{});
        }else  {
            lyDao.accountMsgDao([req.session.myUserId])
                .then((data)=>{
                    console.log(data);
                    resp.render("account",{userMsg:data});

                });
        }
    },
    order:function (req,resp) {

       hjqDao.orderDao([req.query.dataArr[1],goods[0].userId,goods[0].goodsId,goods[0].goodsKind,goods[0].goodsImageSrc,goods[0].goodsName,goods[0].goodsSize,goods[0].goodsColor,goods[0].goodsPrice,goods[0].goodsNum,req.query.dataArr[0],req.query.dataArr[4]],function (result) {


       })
    }

};



module.exports=hjqControler;