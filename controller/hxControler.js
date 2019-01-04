/**
 * Created by shu on 2018/11/7.
 */
const hxyiDao=require("../dao/hxyiDao");


const hxControler= {
    hxYi(req, resp){
        hxyiDao.hxYi1([]).then(function (data) {
            resp.render("hxyi",{hello:data});
            // console.log(ss)
        })
    },
    buycar(req,resp) {
        if (req.session.myUserId==undefined){
            resp.render("login",{});
        } else{
            let name=req.query.name;
            let price1=req.query.price1;
            let tu=req.query.tu;
            let si=req.query.si;
            let co=req.query.co;
            let ki=req.query.ki;
            let gid=req.query.gid;
            let uid=req.session.myUserId;
            // console.log(name);
            hxyiDao.buycar1([uid,ki,gid,tu,name,si,co,price1],function (result) {
                // console.log(name);
                console.log(result);
                // resp.render("buycar");
            })

        }

    },
    accountCollection(req,resp) {
        if (req.session.myUserId==undefined){
            resp.render("login",{});
        } else{
            let ki=req.query.ki;
            let gid=req.query.gid;
            let uid=req.session.myUserId;
            // console.log(name);
            hxyiDao.accountCollection1([uid,ki,gid],function (result) {
                // console.log(name);
                console.log("11111");
                console.log(result);
                resp.render("accountCollection");
            })

        }

    },
};
module.exports=hxControler;