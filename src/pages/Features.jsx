import React from "react";
import Item from "../components/Item";


export default function Features() {
    return(
        <div className="p-16 bg-white">
            <div className="font-bold text-4xl text-center md:text-left">Featured Products</div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
               <Item title="Phone Model 1" star={5} rate={`${1100}`}/>
               <Item title="Phone Model 2" star={4} rate={`${950}`}/>
               <Item title="Phone Model 3" star={3} rate={`${899}`}/>
               <Item title="Phone Model 4" star={5} rate={`${999}`}/>
                
            </div>
        </div>
    )
}