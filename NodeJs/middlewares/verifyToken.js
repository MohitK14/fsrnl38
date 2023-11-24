const jwt= require("jsonwebtoken");
const userModel = require("../model/user.model");

const verifyToken= (req, res, next)=>{

    if(    req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"){

        jwt.verify(req.headers.authorization.split(" ")[1], 
        "secretKey", 
        function(err, verifiedToken){
            if(err){
                res.status(401).send("Invalid token");
            }
            userModel.findById(verifiedToken._id)
                .then(user=>{
                    req.user= user;
                    next();
                })
                .catch(err=>{
                    res.status(500).send("Server not available")
                })
        }
        )
    }
    else{
        res.status(403).send("Token not present")
    }
}

module.exports= verifyToken;