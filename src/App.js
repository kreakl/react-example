import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MyComponent from "./MyComponent"
import UlComponent from "./ListComponent"

function App() {
  const array = [
    { id: 1, content: 'firstElement'},
    { id: 2, content: 'secondElement'},
    { id: 3, content: 'thirdElement'},
  ];

  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filtered = !searchInput
      ? array
      : array.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
        });
//dd

  useEffect(() => {
    setCount(searchInput.length < 1 ? 0 : filtered.length);
    if (count) {
      document.title = `Found ${count} element${count > 1 ? 's' : ''}`;
    }
    else {
      document.title = "useEffect hook example";
    }
  }, [searchInput.length, filtered.length, count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="search" className="Input-search"
        placeholder="Type in text to search" onChange={handleSearchChange/*(e) => searchItems(e.target.value)}*/}/>
        <UlComponent value={searchInput.length < 1 ? array : filtered} />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
