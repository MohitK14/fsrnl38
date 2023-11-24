
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import TopRatedRestaurants from "./TopRatedRestaurants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body= ()=>{


    const [searchText, setsearchText]= useState("");
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    function filterRestaurant(){
        console.log(searchText);
        const filteredData= allRestaurants.filter(
            x=> x.name.toLowerCase().includes(searchText.toLowerCase())
        );
        
        setFilteredRestaurants(filteredData)
    }

    function filterTopRatedRestaurant(allRestaurants){
        setFilteredRestaurants(allRestaurants)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData(){
        // const data = await fetch(
        //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        //   );
          const data = await fetch(
            "http://localhost:5000/api/restaurants"
          );
          const response = await data.json();
          console.log(response);

        setFilteredRestaurants(response);

        setAllRestaurants(response);
    }
    return (
        <>
            <div className="input-data">
                <input type="text" onChange={(e)=>setsearchText(e.target.value)}/>
                <button type="button" onClick={filterRestaurant}>Search</button>
                <TopRatedRestaurants 
                    topRatedRestaurants={filterTopRatedRestaurant}
                    filteredRestaurants={filteredRestaurants}/>
            </div>

            {
                filteredRestaurants?.length === 0 
                    ? (<Shimmer/>)
                    :
                    <div className="restaurant-cards">
                        {filteredRestaurants.map((restaurant) => (
                            <Link to={`/restaurant/${restaurant._id}`}>
                                <RestaurantCard key={restaurant._id}  details={restaurant}/>
                            </Link>

                        ))}
                    </div>
            }
      
        </>
    )
}

export default Body;