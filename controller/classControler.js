const classDao=require("../dao/classDao");


var hXueFu;
var tKui;
var xZi;
var yJing;
var sTao;
var hXueBan;
const classControler={
    dShan:function(req,resp){
        resp.render("dShan.ejs",{});
    },
    pYan:function (req,resp) {
        resp.render("pYan.ejs",{});
    },
    hXue:function (req,resp) {
        classDao.hXueFu([]).then((data)=>{
            hXueFu=data;

        });
        classDao.tKui([]).then((data)=>{
            tKui=data;
        });
        classDao.xZi([]).then((data)=>{
            xZi=data;
        });
        classDao.yJing([]).then((data)=>{
            yJing=data;
        });
        classDao.sTao([]).then((data)=>{
            sTao=data;
        });
        classDao.hXueBan([]).then((data)=>{
            hXueBan=data;
            resp.render("hXue.ejs",{hx:[hXueFu,tKui,xZi,yJing,sTao,hXueBan]})
        })

    },




    onFoot:function(req,resp){
        resp.render("onFoot.ejs",{});
    },
    pBu:function(req,resp){
        resp.render("pBu.ejs",{});
    },


};


module.exports=classControler;

