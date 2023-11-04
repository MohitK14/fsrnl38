import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "./useRestaurantMenu";



const RestaurantDetails= ()=>{

    const {id}= useParams();

    const menu_item= useRestaurantMenu(id);



    const params= useParams();

    return (
        <>Restaurant id: {params}</>
    )
}

export default RestaurantDetails