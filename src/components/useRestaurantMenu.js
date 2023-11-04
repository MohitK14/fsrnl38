import { useEffect } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu= (id)=>{

    useEffect(()=>{
        fetchData();
    },)

    const fetchData= async()=>{
        const data= await fetch(MENU_API + id);
        const response= await data.json()

        console.log(response)
    }
}

export default useRestaurantMenu