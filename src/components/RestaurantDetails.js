
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer";
import { useState } from "react";


const RestaurantDetails= ()=>{
     const {id}= useParams();

    // const [restMenuItems, setRestMenuItem]= useState([]);

     const menu_data= useRestaurantMenu(id)

     if (menu_data === null) return <Shimmer />;

     const itemCards =
       menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
         ?.card?.card?.itemCards;

    
    return (
        <>
            {/* <div>Restaurant id: {params}</div> */}
            <div>Restaurant id: {id}</div>

            {itemCards.length===0 && <Shimmer/> }

            {itemCards.map(item=>{
                return <h1>{item.card.info.name}</h1>
            })}
        </>
    )
}

export default RestaurantDetails