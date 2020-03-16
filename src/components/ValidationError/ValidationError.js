import React from 'react';
import './ValidationError.css'; 
import warning from '../../image/exclamation-circle.png';
import { useState } from "react";

const ValidationError = ({ content }) => {
    const [isShowWarning, setIsShowWarning] = useState(false);

    const showWarning = (e) =>{
        // const element = e.target;
        // element.classList.add('show-warning');
        if (isShowWarning){
            setIsShowWarning(false);
        }else{
            setIsShowWarning(true);
        }
    }

    return (
        <div className="uk-text-danger uk-text-small" style={{ "height": "21px" }}>
            {   content!==""?
                <img src={warning} className="exclamation-circle" onClick={showWarning} alt="exclamation-circle.png"></img>
                :""
            }
            {isShowWarning?content:""}
        </div>
    )


}

export default ValidationError;