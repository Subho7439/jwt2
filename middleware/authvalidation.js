const joi = require("joi")

const signupValidation = (req,res,next)=>{
    //console.log("kkk")
    const schema = joi.object({
        name : joi.string().min(3).max(100).required(),
        email : joi.string().email().required(),
        password: joi.string().min(6).max(100).required()
    })
    const {error} = schema.validate(req.body)
    if(error){
        //console.log("valid noi")
        //eita kaj kor6e nhh
        return res.status(400).json({
            messege : "bad request",
            details : error.details.map(d=>d.message)
        })
    }
    next()
}
const loginvalidation = function (req,res,next){
    const schema = joi.object({
        
        email : joi.string().email().required(),
        password: joi.string().min(6).max(100).required()
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            messege : "bad request",
            details : error.details.map(d=>d.message)
        })
    }
    next()
}
module.exports = {signupValidation,loginvalidation}

