import React from "react";
import Grid from "../components/Grid";


export default function Features() {
    return(
        <div className="p-4 bg-white">
            <div className="font-bold text-4xl">Featured Products</div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
                <Grid title = "Phone Model 1"/>
                <Grid title = "Phone Model 2"/>
                <Grid title = "Phone Model 3"/>
                <Grid title = "Phone Model 4"/>
                
            </div>
        </div>
    )
}