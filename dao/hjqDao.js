const dbpool=require("../config/poolConfig");


const hjqDao={
    buyCarDao(params,callback){
        dbpool.connect("SELECT * FROM shoppingCar where userId=?", params, (err,data) => {
            callback(data);
        })
    },
    addressDao:function (params) {
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM useraddress where userId=?",params,(err,data)=> {

               if (!err){
                   resolve(data);
               } else {
                   reject(err);
               }
            });

        })

    },
    goodsDao:function (params) {
        var u_g=[];
        var goodsId="";
        u_g.push(params[0]);
        for (var i=0;i<params[1].length;i++){
            u_g.push(params[1][i]);
            if (i==0){
                goodsId+=" goodsId=?";
            } else{
                goodsId+=" or goodsId=?";
            }

        }

         return new Promise((resolve,reject)=>{
             // for (var i=0;i<params[1].length;i++){
             dbpool.connect("SELECT * FROM shoppingcar where userId=? and"+goodsId,u_g,(err,data)=>{
                 if (!err){
                     resolve(data);

                 } else {
                     reject(err);
                 }
                })
             // }
         })

    },
    orderDao:function (params,callback) {
        dbpool.connect("INSERT INTO userorder VALUE(NULL,?,?,?,?,?,?,?,?,?,?,?,'2018-12-12',?,'1','0','0')",params,(err,data)=>{

        console.log(params);
             console.log(data);
        })
    }
};


module.exports=hjqDao;