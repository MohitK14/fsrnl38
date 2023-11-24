const restaurantModel= require("../model/restaurant.model")


exports.create= (req,res)=>{
    // console.log("req body"+ req.body.json())
    const { name, avgRating, cuisines, cloudinaryImageId, costForTwo, menuItems }= req.body;

    const newRestaurant= new restaurantModel({
        name, avgRating, cuisines, cloudinaryImageId, costForTwo, menuItems
    });

    newRestaurant.save()
    .then(data=>{
        if(!data){
            res.status(400).send("Something went wrong")
        }
        res.send(data);
    })
    .catch(error=>{
        res.status(500).json({message: "Server issue"});
    });
}

exports.fetch= (req, res)=>{
    restaurantModel.find()
    .then(data=>{
        if(!data){
            res.status(400).json({message: "Data not found"})
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).json({message: "Server not available"})
    })
}

exports.fetchOne= (req, res)=>{
    const _id= req.params.id;

    restaurantModel.find({_id: _id})
        .then(data=>{
            if(!data){
                res.status(400).json({message: "Data not found"})
            }
            res.send(data);
        })
        .catch(err=>{
            res.status(500).json({message: "Server not available"})
        })
}

exports.updateOne= (req, res)=>{
    const _id= req.params.id;

    restaurantModel.findByIdAndUpdate(_id, {avgRating:"5.0"})
        .then(data=>{
            if(!data){
                res.status(400).json({message: "Data not found"})
            }
            res.send(data);
        })
        .catch(err=>{
            res.status(500).json({message: "Server not available"})
        })
}

exports.delete= (req, res)=>{
    const _id= req.params.id;

    restaurantModel.findByIdAndDelete(_id, {avgRating:"5.0"})
        .then(data=>{
            if(!data){
                res.status(400).json({message: "Data not found"})
            }
            res.send(data);
        })
        .catch(err=>{
            res.status(500).json({message: "Server not available"})
        })
}