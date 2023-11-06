
import { useParams } from "react-router-dom"


const RestaurantDetails= ()=>{


    const params= useParams();
    console.log(params)
    return (
        <>
            {/* <div>Restaurant id: {params}</div> */}
            <div>Restaurant id: {params.id}</div>
        </>
    )
}

export default RestaurantDetails