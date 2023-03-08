const axios=require("axios")


const requestValidator=async (req, res, next)=>{
    const token=req.headers.token
    console.log(token)
    const data=await axios.post("http://authserver:8000/token/validation", {"token": token})
    if(!data) return await res.status(404).json({"message": "user not found"})
    next()
}

module.exports={requestValidator}