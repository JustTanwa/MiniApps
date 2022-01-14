import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { Textbox } from './components/Textbox';
import React, { useState, useEffect } from 'react';
import Wheel from './components/Wheel';
import Footer from './components/Footer';
import Todolist from './components/Todolist';


function App() {
  const defaultList = [{ name: "Order take away", id: 1 },
  { name: "Go to the cinema", id: 2 },
  { name: "Go to the gym", id: 3 },
  { name: "Stay in and sleep", id: 4 }
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
      <Home />
      <div className='container-fluid bg-grey vh-100' id="randomiser">
        <div className='row'>
          <div className='col-md-3'>
            <h2 className='text-center pt-3'>Randomiser</h2>
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
            <details className='instructions'>
              <summary>Instructions</summary>
              <p className='steps'>1. Add your own options using the above textbox before removing the default options.</p>
              <p className='steps'>2. When ready, press spin to randomise a selection!</p>
              <p className='steps'>3. To remove an option press the "X".</p>
            </details>
          </div>
          <div className='col-md-9'>
            <div className='wheel-container'>
              <Wheel slices={optionList.length ? optionList.length : 1} optionlist={optionList} width='400' height='400' />
            </div>
          </div>
        </div>
      </div>
      <Todolist />
      <Footer />
    </div>


  );
}

export default App;
