import React from "react";

const ColorChoice = React.createContext()
export { ColorChoice }

export default function BadgeColor({children}){
    const [color, setColor] = React.useState("")
    let badgeColor = document.getElementById("badgeColors")

    function colorChoice(){
        color === "" ?  setColor(`gray`) :  setColor(`${badgeColor.value}`)
    }
    
    return (
        <ColorChoice.Provider value={color}>
        <div className="badgeContainer">   
            <select 
            onClick={colorChoice} 
            id="badgeColors" 
            className="colorOption"
            name="badgeColors">
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
            </select>

            <div className="ChildContainer">
                {children}
            </div>

        </div>
        </ColorChoice.Provider>
    )
}