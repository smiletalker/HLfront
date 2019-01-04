const dbpool=require("../config/poolConfig");

const classDao={
    hXueFu(params){
        return new Promise(function (resolve,reject) {
            dbpool.connect("SELECT c.goodsId,c.goodsname,p.price,i.src1,i.src2,i.src3,i.src4 FROM clothes c\n" +
                "JOIN goodsmp p ON c.goodsId=p.goodsId\n" +
                "JOIN goodsimages i ON i.goodsId=p.goodsId \n" +
                "WHERE c.exerciseName='滑雪'\n" +
                "GROUP BY c.goodsname\n" +
                "\n" +
                "\n",
                params,(err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        })

    },
    tKui(params){
        return new Promise(function (resolve,reject) {
            dbpool.connect("SELECT h.goodsId,h.goodsname,p.price,i.src1,i.src2,i.src3,i.src4 FROM helmet h\n" +
                "JOIN goodsmp p ON h.goodsId=p.goodsId\n" +
                "JOIN goodsimages i ON i.goodsId=p.goodsId \n" +
                "WHERE h.exerciseName='滑雪'\n" +
                "GROUP BY h.goodsname\n" +
                "\n" +
                "\n",
                params,(err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        })

    },
    xZi(params){
        return new Promise(function (resolve,reject) {
            dbpool.connect("SELECT s.goodsId,s.goodsname,p.price,i.src1,i.src2,i.src3,i.src4 FROM shoes s\n" +
                "JOIN goodsmp p ON s.goodsId=p.goodsId\n" +
                "JOIN goodsimages i ON i.goodsId=p.goodsId \n" +
                "WHERE s.exerciseName='滑雪'AND\n" +
                "(i.goodsKindId=4)\n" +
                "GROUP BY s.goodsname\n" +
                "\n" +
                "\n",
                params,(err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        })

    },
    yJing(params){
        return new Promise(function (resolve,reject) {
            dbpool.connect("SELECT gl.goodsId,gl.goodsname,p.price,i.src1,i.src2,i.src3,i.src4 FROM glasses gl\n" +
                "JOIN goodsmp p ON gl.goodsId=p.goodsId\n" +
                "JOIN goodsimages i ON i.goodsId=p.goodsId \n" +
                "WHERE gl.exerciseName='滑雪'AND\n" +
                "(i.goodsKindId=13)\n" +
                "GROUP BY gl.goodsname",
                params,(err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        })

    },
    sTao(params){
        return new Promise(function (resolve,reject) {
            dbpool.connect("SELECT g.goodsId,g.goodsname,p.price,i.src1,i.src2,i.src3,i.src4 FROM glove g\n" +
                "JOIN goodsmp p ON g.goodsId=p.goodsId\n" +
                "JOIN goodsimages i ON i.goodsId=p.goodsId \n" +
                "WHERE g.exerciseName='滑雪'AND\n" +
                "(i.goodsKindId=12)\n" +
                "GROUP BY g.goodsname\n" +
                "\n" +
                "\n",
                params,(err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        })

    },
    hXueBan(params){
        return new Promise(function (resolve,reject) {
            dbpool.connect("SELECT sk.goodsId,sk.goodsname,p.price,i.src1,i.src2,i.src3,i.src4 FROM ski sk\n" +
                "JOIN goodsmp p ON sk.goodsId=p.goodsId\n" +
                "JOIN goodsimages i ON i.goodsId=p.goodsId \n" +
                "WHERE sk.exerciseName='滑雪'AND\n" +
                "(i.goodsKindId=10)\n" +
                "GROUP BY sk.goodsname",
                params,(err,data)=>{
                    console.log(data);
                    resolve(data);
                })
        })

    },

};

module.exports=classDao;