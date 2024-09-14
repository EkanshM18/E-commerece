import React from "react";
import { StarIcon } from "lucide-react";
import PhoneImage from "../assets/Phone1.png";

export default function Item(props) {
    return(
        <div className="p-4 border-black border-[1px] rounded-md m-4">
            <div>
                <img className="h-50 w-50" src={PhoneImage}/>
            </div>
            <div>{props.title}</div>
            <div className="flex flex-row  my-2">
                {
                    [...Array(props.star)].map((_,index) => (
                        <StarIcon key={index} className="h-5 w-5 fill-current text-yellow-500"/>
                    ))
                }
                
            </div>
            <div>${props.rate}</div>
            <button className="bg-black text-white mt-2 rounded-md p-2 w-full">Add to Cart</button>
        </div>
    )
}