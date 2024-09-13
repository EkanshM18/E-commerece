import React from "react";
import Card from "../components/Card";

export default function Product() {
    return(
        <div className="p-4 bg-[#f3f4f6]">
           <div className="text-center text-3xl font-semibold">Product Categories</div> 
           <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
           <Card title = "Smartphone" subtitle="Explore our range of Smartphones" link="Shop Smartphone"/>
           <Card title = "Tablets" subtitle="Explore our range of Tablets" link="Shop Tablets"/>
           <Card title = "Accessories" subtitle="Explore our range of Accessories" link="Shop Accessories"/>
           </div>
        </div>
    )
}