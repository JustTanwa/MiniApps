import React, { useState }from 'react';
import './Textbox.css';

export const Textbox = ({updateOption}) => {
    const handleChange = (e) => {
        if (e.key === "Enter") {
            const option = e.target.value.trim();
            if(option !== "") {updateOption(option)};
            e.target.value = "";
        }
        
    }

    return (
        <div className='txt'>
            <input onKeyPress={handleChange} type="text" ></input>
        </div>
    )
}