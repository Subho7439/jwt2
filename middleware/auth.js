const jwt = require("jsonwebtoken")
const ensure = (req,res,next)=>{
    const auth = req.headers["authorization"]
    if(!auth){
        res.send("mot authirized")
    }
    const decode = jwt.verify(auth,process.env.secret_code)
    req.user = decode
    next()
}
module.exports = { ensure}