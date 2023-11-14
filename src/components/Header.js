import { Link } from "react-router-dom"
import {useOnline} from "../utils/useOnline"
import { useSelector } from "react-redux"



const Header= ()=>{
    const cartItems= useSelector(store=> store.cart.items);
    const onlineStatus= useOnline()

    return(
        <>
            {/* <div className="flex justify-around border border-solid border-black"> */}
            <div className="header-data">
                <div className="header-image">
                    <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="data"/>
                </div>

                <ul className="header-list">
                <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
                    {/* <li className="list-none m-2">Home</li> 
                    <li className="list-none m-2">About Us</li>
                    <li className="list-none m-2">Contact Us</li>*/}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart">Cart- +{cartItems.length} </Link>
                </ul>
            </div>
        </>
    )
}

export default Header