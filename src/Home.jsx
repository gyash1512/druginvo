import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { BsTelephonePlusFill } from "react-icons/bs";
function Home(){
    return (
        <>
        <div className="flex h-20 px-4 py-2 border-2 border-solid border-black justify-between bg-black">
            <img src="/logo.jpeg"/>
            <div className="self-center flex gap-6 mr-8">
            <button className=" px-3 py-1 teaxt-5xl font-bold h-12  bg-[#88aoa8] text-white">Ask me</button>
            <button className=" px-3 py-1 teaxt-5xl font-bold h-12  bg-[#88aoa8] text-white">FAQ</button>
            <button className=" px-3 py-1 teaxt-5xl font-bold h-12 bg-[#88aoa8] text-white">Contact Us</button>
            <Link to="/login"><button className=" px-3 py-1 teaxt-5xl font-bold h-12 hover:font-extrabold text-white">Sign-Up/Register</button></Link>
            </div>

        </div>
        <div className="flex bg-[#daf7dc] h-screen px-24 py-8 justify-between">
            <p className="self-center text-center w-5/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img className="w-[500px] h-[500px] self-center" src="timepass.jpeg"/>
            
        </div>
        <div className="flex bg-red-300 px-24 py-8 justify-between">
            <div className="self-center w-4/12 space-y-4">
            <h1 className="font-bold text-4xl">Why Choose us?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="grid-cols-2 grid gap-4">
                <div className="flex flex-col gap-4 w-72 border rounded-md py-4 px-4">
                    <img  className="w-20 h-20 self-center" src="/timepass.jpeg" />
                    <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="flex flex-col gap-4 w-72 border rounded-md py-4 px-4">
                    <img  className="w-20 h-20 self-center" src="/timepass.jpeg" />
                    <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="flex flex-col gap-4 w-72 border rounded-md py-4 px-4">
                    <img  className="w-20 h-20 self-center" src="/timepass.jpeg" />
                    <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="flex flex-col gap-4 w-72 border rounded-md py-4 px-4">
                    <img  className="w-20 h-20 self-center" src="/timepass.jpeg" />
                    <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                

            </div>
            
        </div>
        
        </>
    )
}
export default Home;