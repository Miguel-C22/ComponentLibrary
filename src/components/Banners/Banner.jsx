import React from "react";
import { WarningOption } from "./BannerWarning";
import Check from "./Icons/Check circle.png"
import Exclamation from "./Icons/Exclamation.png"
import Icon from "./Icons/Icon.png"
import Xcircle from "./Icons/X circle.png"


export default function Banner(){
    const warning = React.useContext(WarningOption)

    function img(){
        if(warning == 'success'){
            return <img src={`${Check}`} alt="" />
        }
        else if(warning == 'warning'){
            return <img src={`${Exclamation}`} alt="" />
        }
        else if(warning == 'error'){
            return <img src={`${Xcircle}`} alt="" />
        }
        else if(warning == 'neutral'){
            return <img src={`${Icon}`} alt="" />
        }
        else{
            return <img src={`${Check}`} alt="" />
        }
    }

    return (
    <div
     className={`banner success ${warning} `}
     >
        <div className="imgInput">
            {img()}
            <input type="title" 
            className={`success ${warning}`} 
            placeholder={`${warning == "" ? "success" : warning}`} 
            />
        </div>

        <textarea name="message" 
        className={`success ${warning}`} 
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        ></textarea>
    </div>
    )
}