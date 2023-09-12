import React from "react";
import { ColorChoice } from "./BadgeColor";

export default function Badge({children}){
    const  color  = React.useContext(ColorChoice)

    return (
    <div
     className={`badge gray ${color} `}>
        {children}
    </div>
    )
}

//Old Code
 // const [color, setColor] = React.useState("")
    // let badgeColor = document.getElementById("badgeColors")
    
    // return (
    //     <div className="badgeContainer">   
    //         <select 
    //         onClick={() => {color === "" ?  setColor(`gray`) :  setColor(`${badgeColor.value}`)}} 
    //         id="badgeColors" 
    //         className="colorOption"
    //         name="badgeColors">
    //             <option value="gray">Gray</option>
    //             <option value="red">Red</option>
    //             <option value="yellow">Yellow</option>
    //             <option value="green">Green</option>
    //             <option value="blue">Blue</option>
    //             <option value="indigo">Indigo</option>
    //             <option value="purple">Purple</option>
    //             <option value="pink">Pink</option>
    //         </select>

    //         <div className={`gray ${color} `}>
    //             {children}
    //         </div>
    //     </div>
    // )