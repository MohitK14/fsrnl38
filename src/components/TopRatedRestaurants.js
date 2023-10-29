import { restaurants } from "../utils/restaurants"

const TopRatedRestaurants= (props)=>{

    function getTopRatedRestaurants(){
       const filteredRestaurants= restaurants.filter(x=> x.avgRating>4);

       props.topRatedRestaurants(filteredRestaurants)
    }

    return(
        <>
            <button onClick={getTopRatedRestaurants}>TopRatedRestaurants</button>
        </>
    )
}

export default TopRatedRestaurants