import Lottie from "lottie-react";
import React from "react";
import hehe from "../assets/hehe.json"

export default function Landing() {
    function logger() {
        console.log("Button Clicked")
    }
    return(
        <div className="bg-black grid grid-cols-1 md:grid-cols-2 min-h-screen p-16 items-center">
            {/*Left */}
            <div>
                <div className="text-white text-5xl font-bold">
                    Discover the Latest in Mobile Technology
                </div>
                <div className="text-[#d1d5da] text-xl mt-2">Explore our wide range of cutting-edge smartphones and accessories. Find the perfect device to suit your lifestyle.</div>
                <div className="space-x-3 mt-3">
                    <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-green-500" onClick={logger}>Shop Now</button>
                    <button  className="bg-blue-500 text-white p-3 rounded-md hover:bg-red-400" onClick={logger}>Learn More</button>
                </div>
            </div>
            {/* Right */}
            <div> 
                <Lottie animationData={hehe} loop={true} />
            </div>
        </div>
    )
}