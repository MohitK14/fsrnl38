const Header= ()=>{
    return(
        <>
            {/* <div className="flex justify-around border border-solid border-black"> */}
            <div className="header-data">
                <div className="header-image">
                    <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="data"/>
                </div>

                <ul className="header-list">
                    <li className="list-none m-2">Home</li>
                    <li className="list-none m-2">About Us</li>
                    <li className="list-none m-2">Contact Us</li>
                </ul>
            </div>
        </>
    )
}

export default Header