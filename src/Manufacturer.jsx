import React from "react";
function Manufacturer() {
    return (
        <>
        <div className="flex h-20 px-4 py-2 border-2 border-solid border-black justify-between bg-[#9ee493]">
            <img src="/logo.jpeg"/>
            <div className="self-center flex gap-6 mr-8">
            <button className="border rounded-md px-3 py-1 teaxt-5xl font-bold h-12 hover:border-black hover:border-6 bg-[#88aoa8]">FAQ</button>
            <Link to="/login"><button className="border rounded-md px-3 py-1 teaxt-5xl font-bold h-12 hover:border-black hover:font-extrabold">Sign-Up/Register</button></Link>
            <BsTelephonePlusFill className="rounded-md h-12 w-12 self-center border px-2 py-2 hover:border-black hover:font-extrabold"/>
            </div>

        </div>
        </>
    )
}