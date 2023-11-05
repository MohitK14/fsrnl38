
import { useParams } from "react-router-dom"


const RestaurantDetails= ()=>{


    const params= useParams();
    console.log(params)
    return (
        <>
            <div>Restaurant id: {params}</div>
        </>
    )
}

export default RestaurantDetails