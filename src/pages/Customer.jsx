import React from "react";
import Box from "../components/Box"

export default function Customer() {
    return(
        <div>
            <div className="m-4 font-bold text-4xl">What Our Customers Say</div>
            <div className="grid grid-cols-1 md:grid-cols-3">
            <Box title = "Great selection of phones and excellent customer service. I'm very happy with my purchase!" subtitle="- Happy Customer 1"/>
            <Box title = "Great selection of phones and excellent customer service. I'm very happy with my purchase!" subtitle="- Happy Customer 2"/>
            <Box title = "Great selection of phones and excellent customer service. I'm very happy with my purchase!" subtitle="- Happy Customer 3"/>
        </div>
        </div>
    )
}