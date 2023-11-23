const restaurantModel= require("../model/restaurant.model")


exports.create= (req,res)=>{
    console.log("req body"+ req.body.json())
    const { name, avgRating, cuisines, cloudinaryImageId, costForTwo }= req.body;

    const newRestaurant= new restaurantModel({
        name, avgRating, cuisines, cloudinaryImageId, costForTwo
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