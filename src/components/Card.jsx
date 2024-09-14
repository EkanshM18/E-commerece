import React from "react";

export default function Card(props) {
    return(
        <div className="p-4 bg-white m-4 rounded-md">
           <div className="font-bold">{props.title}</div> 
           <div className="">{props.subtitle}</div>
           <div className="text-blue-500 hover:underline">{props.link}</div>
        </div>
    )
}