import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './request';



function App() {
    const [selectedOption ,setSelectedOption] = useState (requests.fetchTrending);
  return (
    <div className="app">
      
      {/* heder */}
      <Header />

      {/*  nav*/}
      <Nav setSelectedOption={setSelectedOption}/>

      {/* result */}
      <Results selectedOption= {selectedOption}/>

      
    </div>
  );
}

export default App;
                      