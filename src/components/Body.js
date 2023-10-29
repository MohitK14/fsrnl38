import { restaurants } from "../utils/restaurants"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import TopRatedRestaurants from "./TopRatedRestaurants";
import axios from "axios"
import Shimmer from "./Shimmer";

const Body= ()=>{


    const [searchText, setsearchText]= useState("");
    const [filteredRestaurants, setFilteredRestaurants]= useState(restaurants);
    // const [allRestaurants, setAllRestaurants] = useState([]);

    function filterRestaurant(){
        console.log(searchText);
        const filteredData= restaurants.filter(
            x=> x.name.toLowerCase().includes(searchText.toLowerCase())
        );
        
        setFilteredRestaurants(filteredData)
    }

    function filterTopRatedRestaurant(restaurants){
        setFilteredRestaurants(restaurants)
    }

    // useEffect(()=>{
    //     fetchData()
    // }, [])

    async function fetchData(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
          const response = await data.json();
        // setFilteredRestaurants(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants)
    }
    return (
        <>
            <div className="input-data">
                <input type="text" onChange={(e)=>setsearchText(e.target.value)}/>
                <button type="button" onClick={filterRestaurant}>Search</button>
                <TopRatedRestaurants topRatedRestaurants={filterTopRatedRestaurant}/>
            </div>

            {
                filteredRestaurants.length === 0 
                    ? (<Shimmer/>)
                    :
                    <div className="restaurant-cards">
                        {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} details={restaurant} />
                        ))}
                    </div>  
            }
      
        </>
    )
}

export default Body;