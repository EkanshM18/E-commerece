import React from "react";

export default function Card(props) {
    return(
        <div className="p-3 bg-white m-3">
           <div className="">{props.title}</div> 
           <div className="font-bold">{props.subtitle}</div>
        </div>
    )
}