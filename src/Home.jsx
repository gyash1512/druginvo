import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return (
        <div className="h-screen flex">
        <Link to="/login" className="mx-auto flex justify-center  self-center"><p className='text-4xl rounded-md px-2 py-1 bg-blue-600 text-white'>Login</p></Link>
        </div>
    )
}
export default Home;