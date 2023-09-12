import React from "react";

const WarningOption = React.createContext()
export { WarningOption }

export default function BannerWarning({children}){
    const [warning, setColor] = React.useState("")
    let bannerWarningOption = document.getElementById("bannerWarningOption")

    function colorChoice(){
        warning === "" ?  setColor(`success`) :  setColor(`${bannerWarningOption.value}`)
    }
    
    return (
        <WarningOption.Provider value={warning}>
        <div className="bannerContainer">   
            <select 
            onClick={colorChoice} 
            id="bannerWarningOption" 
            className="bannerWarningOption"
            name="bannerWarningOptions">
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="neutral">Neutral</option>
            </select>

            <div className="ChildContainer">
                {children}
            </div>

        </div>
        </WarningOption.Provider>
    )
}