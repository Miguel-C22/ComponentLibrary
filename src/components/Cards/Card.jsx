import React from "react";
import Icon from "./Icon/Brand icon.png"
// import { v4 as uuidv4 } from 'uuid';

export default function Card({ children }){

    const [hover , setHover] = React.useState(false)

    function hoverClass(){
            setHover(true); 
            console.log('match');
    }

    function hoverLeave(){
        setHover(false)
    }

    const backgroundColor = !hover ? "" : " rgb(99, 98, 98) 0px 0px 20px 0px";

    return(
        <>
        <div
        className="cards"
        style={{  boxShadow: backgroundColor}}
        onMouseOver={ hoverClass}
        onMouseLeave= {hoverLeave}
        >
            <div className="cardIcon">
                <img className="cardIcon" src={Icon} alt="" />
            </div>
            {children}
        </div>
        </>
        
    )
}
