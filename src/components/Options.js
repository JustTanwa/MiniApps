import React from "react";

function Options() {
    return (
        <>
            <Textbox updateOption={updateOption} />
            <ul className='option-item'>
                {optionList.map((item) => {
                    return (
                        <>
                            <li key={item.id}>
                                {item.name}
                            </li>
                            <button type="button" onClick={() => handleDelete(item.id)} className='option-btn'>&#10060;</button>
                        </>)
                })}
            </ul>
        </>
    )
}