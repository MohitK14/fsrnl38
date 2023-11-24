const userModel= require("../model/user.model");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken")

exports.register= (req, res)=>{
    // eslint-disable-next-line no-unused-vars
    const { fullName, email, password }= req.body;


    const newUser= new userModel({
        fullName, 
        email,
        password: bcrypt.hashSync(password, 10)
    })

    userModel.findOne({email})
        .then(data=>{
            if(data){
                res.status(400).json({message:"User already registered"});
            }
            else{
                newUser.save().then(data=>{
                    res.status(200).json({message:"User registered successfully"});
                })
            }
        })
        .catch(err=>{
            res.status(500).json({message:"Server error"});
        })

}

exports.login= (req, res)=>{

    const {email, password}= req.body;

    userModel.findOne({email})
        .then(data=>{
            if(!data){
                return res.status(404).json({message:"User is not registered"});
            }

            let isValidPassword= bcrypt.compareSync(password, data.password);

            if(!isValidPassword){
                return res.status(401).json({message:"Invalid Password"});
            }
            let accessToken= jwt.sign({id: data._id}, "secretKey", {expiresIn:"1h"});

            res.status(200).json({
                user:{
                    fullName: data.fullName,
                    email: data.email
                },
                token: accessToken
            })
        })
        .catch(err=>{
            return res.status(500).json({message:"Server error"})
        })
}

