import { Outlet } from "react-router-dom";

const About= ()=>{
    return (
    <>
        <h1>About</h1>
        <Outlet/>
        {/* <Profile/> */}
    </>

    )
}

export default About;