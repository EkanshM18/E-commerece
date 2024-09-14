import React from "react";

export default function Special() {
    function logger() {
        console.log("Button Clicked")
    }
    return(
        <div className="bg-blue-500 p-16  flex flex-col items-center justify-center item-center">
            <div className="font-bold text-4xl text-white p-3">Special Offer</div>
            <div className="mt-1 text-white test-center">Get 20% off on all accessories when you buy any smartphone. Limited time offer!</div>
            <button className="bg-white text-blue-400 m-4 p-2 rounded-md" onClick={logger}>Shop Now</button>
        </div>
    )
}