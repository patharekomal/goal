const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect(){
    let result =await client.connect();
    let db = result.db("ecommerce");
    return db.collection("group")
}

module.exports=dbConnect;
