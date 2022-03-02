import { useState } from 'react';
import './App.css';
import { ITEMS } from './db';

function App() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list-grid">
        {ITEMS.map(nameArray => {
          return (
            <button onClick={handleClick} className="shopping-item">
              {nameArray.name.de}
            </button>
          );
        })}
      </div>
      <h2>What do you wan't to buy?</h2>
      <input></input>
    </>
  );
}

export default App;
