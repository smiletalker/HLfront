const dbpool=require("../config/poolConfig");

const fjfDao= {
    activiDao(params, callback) {
        dbpool.connect("SELECT * FROM activityInformation", params, (err, data) => {
            callback(data);
        })
    },

    BlogDao(params){
        let p1=new Promise(function (resolve,reject){
            dbpool.connect("select * from  blogInformation limit ?,4",params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            });
        });
        return p1;
    },

    blog_search(params){
        let p1=new Promise(function (resolve,reject) {
            dbpool.connect("SELECT * FROM  bloginformation WHERE blogTitle LIKE ? OR blogContent LIKE ? OR blogLable LIKE ?",
                params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        });
        return p1;
    },
};

module.exports=fjfDao;