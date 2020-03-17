import React from 'react';
import './ValidationError.css'; 
import warning from '../../image/exclamation-circle.png';
import { useState } from "react";

const ValidationError = ({ content }) => {
    const [isShowWarning, setIsShowWarning] = useState(false);

    const showWarning = (e) =>{
        if (isShowWarning){
            setIsShowWarning(false);
        }else{
            setIsShowWarning(true);
        }
    }

    return (
        <div className="uk-text-danger" style={{ "height": "21px" }}>
            {   content!==""?
                <img src={warning} className="exclamation-circle" onClick={showWarning} alt="exclamation-circle.png"></img>
                :""
            }
            {isShowWarning?content:""}
        </div>
    )


}

export default ValidationError;