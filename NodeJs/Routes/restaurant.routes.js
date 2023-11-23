const restaurantController= require("../controllers/restaurant.controller")


module.exports= (app)=>{
    app.post("/api/restaurants", restaurantController.create)
}