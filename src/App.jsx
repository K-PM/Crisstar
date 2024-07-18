
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './page/Home';
import Team from './page/Team';
import ResQBite from './page/ResQBite';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path='/resQbite' element={<ResQBite/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
