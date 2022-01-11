import './App.css';
import Navbar from './components/Navbar';
import { Textbox } from './components/Textbox';
import React, { useState, useEffect } from 'react';
import Wheel from './components/Wheel';
import Footer from './components/Footer';

function App() {
  const defaultList = [{ name: "Bowling", id: 1 },
  { name: "Take away", id: 2 },
  { name: "Watch movies", id: 3 },
  { name: "Rock climbing", id: 4 }
  ]
  const [option, setOption] = useState('');
  const [optionList, setOptionList] = useState(defaultList);

  useEffect(() => {
    let nextId = optionList[optionList.length - 1].id + 1;
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

  return (
    <div className='App'>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <p className='header'> Add an option here</p>
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
          </div>
          <div className='col-md-9'>
            <div className='wheel-container'>
              <Wheel slices={optionList.length ? optionList.length : 1} optionlist={optionList} width='400' height='400' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>


  );
}

export default App;
