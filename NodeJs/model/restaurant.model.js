const mongoose= require("mongoose");

const restaurantSchema= mongoose.Schema({
    name: String,
    avgRating: String,
    cuisines: Array,
    cloudinaryImageId: String,
    costForTwo: String,
    menuItems: Array
});

const restaurantModel= mongoose.model("restaurants", restaurantSchema);

module.exports= restaurantModel