
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/carSlice";


const RestaurantDetails= ()=>{
     const {id}= useParams();
    const dispatch= useDispatch();
    // const [restMenuItems, setRestMenuItem]= useState([]);

     const menu_data= useRestaurantMenu(id)

     if (menu_data === null) return <Shimmer />;

     const itemCards =
       menu_data[0]?.menuItems

    function handleItem(item){
        dispatch(addItem(item))
    }
    return (
        <>
            {/* <div>Restaurant id: {params}</div> */}
            <div>Restaurant id: {id}</div>

            {itemCards.length===0 && <Shimmer/> }

            {itemCards.map(item=>{
                return <div
                data-testid="foodItems"
                key={item.id}
                className="items-data"
              >
                <div className="w-3/12 p-4">
                  <img
                    src={CDN_IMG_URL + item.imageId}
                    className="w-full" alt="imagedata"
                  />
                </div>
                <div className="w-9/12">
                  <div className="py-2">
                    <span>{item.name}</span>
                    <span>
                      - ₹
                      {item.price
                        ? item.price / 100
                        : item.name / 100}
                    </span>
                  </div>
                  <p className="text-xs">{item.description}</p>
                  <div className="absolute">
                    <button
                      className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                      onClick={()=>handleItem(item)}>
                      Add +
                    </button>
                  </div>
                </div>
                
              </div>
            })}
        </>
    )
}

export default RestaurantDetails