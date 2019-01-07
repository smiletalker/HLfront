const mysql=require("mysql");

const dbPool={
    pool:{},
    config:{
        host:"120.77.251.109",
        port:"3306",
        user:"root",
        password:"123456fjf",
        database:"jd",
        dateStrings:true// 强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (默认: false)
    },
    create(){
        this.pool=mysql.createPool(this.config);
    },
    connect(sql,pramas,fn){
        this.pool.getConnection((err,connection)=>{
            connection.query(sql, pramas, fn);
            //释放连接
            connection.release();
        });
    }
};

dbPool.create();

module.exports=dbPool;