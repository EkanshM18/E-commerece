import { StarIcon } from "lucide-react";
import React from "react";


export default function Card(props) {
    return(
        <div className="p-6 bg-white m-3 rounded-md border-2 border-black">
            <div className="flex flex-row">
            {
                [...Array(props.star)].map((_,index) => (
                    <StarIcon key={index} className="h-5 w-5 fill-current text-yellow-500"/>
                ))
            }
            </div>
           <div className="my-2">{props.title}</div> 
           <div className="font-bold">{props.subtitle}</div>
        </div>
    )
}