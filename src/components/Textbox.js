import React from 'react';
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
        <label className='txt'>
            <input onKeyPress={handleChange} type="text" className='form-control-sm' ></input>
        </label>
    )
}