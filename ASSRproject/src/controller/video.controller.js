const dbConnection = require('../conf/database');
const connection = dbConnection();
let getVideos = async (req,res)=>{
await connection.query("select * from video", (err,result)=>{
if (result)
res.send(result);
else
res.status(500).send(err);
});
}

module.exports = {
getVideos

}