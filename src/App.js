import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import { Textbox } from './components/Textbox';
import React, { useState, useEffect } from 'react';
import Wheel from './components/Wheel';

function App() {
  const defaultList = [{ name: "Bowling", id: 1 },
    { name: "Take away", id: 2 },
    { name: "Watch movies", id: 3 },
    { name: "Rock climbing", id: 4 }
  ]
  const [option, setOption] = useState('');
  const [optionList, setOptionList] = useState(defaultList);

  useEffect(() => {
    let nextId = optionList[optionList.length - 1 ].id + 1;
    if (option !== "") {
      setOptionList((prev) => [...prev, { name: option, id: nextId }]);
      setOption("");
    }

  }, [option]);

  const updateOption = (newOption) => {
    setOption(newOption)
  }
  const handleDelete = (id) => {
    const newList = optionList.filter((item) => item.id !== id);
    if (newList.length > 0) {
      setOptionList(newList);
    } else {
      setOptionList(defaultList);
    }
    
  }

  const handleSpin = () => {
    console.log("code the spinning");
  }

  return (
    <div className='App'>
      <Navbar />
      <div className='main-container'>
        <div className='left-container'>
          <p className='header'> Add an option here</p>
          <Textbox updateOption={updateOption} />
          <ul className='option-item'>
            {optionList.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    {item.name}
                    <button type="button" onClick={() => handleDelete(item.id)}>&#10060;</button>
                  </li>
                </>)
            })}
          </ul>
        </div>
        <div className='right-container'>
          <div className='wheel-container'>
            <Wheel slices={optionList.length? optionList.length: 1} optionList={optionList} width='400' height='400' />
          </div>          
        </div>
      </div>
    </div>


  );
}

export default App;
