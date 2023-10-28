import { restaurants } from "../utils/restaurants"
import RestaurantCard from "./RestaurantCard"

const Body= ()=>{
    return (
        <>
            <input type="text" />
            <button>Search</button>
            <div className="restaurant-cards">
                {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} details={restaurant} />
                ))}
            </div>        
        </>
    )
}

export default Body;