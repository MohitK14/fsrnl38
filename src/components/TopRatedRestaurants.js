
const TopRatedRestaurants= (props)=>{

    function getTopRatedRestaurants(){
       const filteredRestaurants= props.filteredRestaurants.filter(x=> x.info.avgRating>4);

       props.topRatedRestaurants(filteredRestaurants)
    }

    return(
        <>
            <button onClick={getTopRatedRestaurants}>TopRatedRestaurants</button>
        </>
    )
}

export default TopRatedRestaurants