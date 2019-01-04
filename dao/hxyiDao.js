/**
 * Created by shu on 2018/11/7.
 */
const dbPool=require("../config/poolConfig");

const hxyiDao={
    hxYi1(params,callback){
        let p1=new Promise((resolve,reject)=>{
            dbPool.connect("SELECT clothes.goodsId,clothes.goodsKind,clothes.goodsname,clothes.des,goodsimages.goodsKindId,goodsimages.goodsId,goodsimages.src1,goodsimages.src2,goodsimages.src3,goodsimages.src4,goodsimages.src5,goodsimages.src6,goodsimages.src7,goodsimages.src8,goodsmp.goodsKindId,goodsmp.goodsId,goodsmp.price,goodsstock.goodsKindId,goodsstock.goodsId,goodsstock.color,goodsstock.size FROM jd.goodsimages INNER JOIN jd.clothes ON (goodsimages.goodsId = clothes.goodsId) INNER JOIN jd.goodsmp ON (goodsmp.goodsId = clothes.goodsId) INNER JOIN jd.goodsstock ON (goodsstock.goodsId = clothes.goodsId) WHERE (clothes.goodsId =5 AND clothes.goodsKind =3 AND goodsimages.goodsKindId =3 AND goodsimages.goodsId =5 AND goodsstock.goodsKindId =3 AND goodsstock.goodsId =5);",
            params, (err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        });
        return p1;
        },
    buycar1(params,callback){
        console.log(1111);
        dbPool.connect("INSERT INTO shoppingcar VALUES (?,?,?,?,?,?,?,?,1)",
            params,(err,data)=>{
                console.log(data);
                // callback(data);
            })
    },
    accountCollection1(params,callback){
        console.log(1111);
        dbPool.connect("INSERT INTO usercollect VALUES (?,?,?)",
            params,(err,data)=>{
                console.log(data);
                callback(data);
            })
    }
};

module.exports=hxyiDao;