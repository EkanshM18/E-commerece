import React from "react";

export default function Updated() {
    function logger(){
        console.log("Button clicked")
    }
    return(
        <div className="bg-gray-200 p-6">
            <div className="font-bold text-center text-4xl">Stay Updated</div>
            <div className="text-center mt-2">Subscribe to our newsletter for the latest deals and product updates.</div>
            <div className="flex justify-center items-center space-x-2">
                <input className="p-2 m-4 rounded-md border border-gray-400 w-64" type="email" placeholder="Enter your email"/>
                <button className="text-white bg-black rounded-md p-2 m-4" onClick={logger}>Subscribe</button>
            </div>
        </div>
    )
}