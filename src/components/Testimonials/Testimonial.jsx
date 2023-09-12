import React from "react";
import Logo from "./Logo/Logo.png"


export default function Testimonial( {children} ){

    return (
        <div className="testContainer">
            <img src={Logo} alt="" />
            {children}
        </div>
    )
}