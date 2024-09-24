import React from "react";

export default function Card(props) {
    return(
        <div className="p-7 bg-white m-4 rounded-md">
           <div className="font-bold p-1">{props.title}</div> 
           <div className="p-1">{props.subtitle}</div>
           <div className="text-blue-500 hover:underline p-1">{props.link}</div>
        </div>
    )
}