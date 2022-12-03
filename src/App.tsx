import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import All from './container/All/All';

function App() {
  const quotes = [
    {id: '/'},
    {id: 'star-wars' },
    {id: 'motivational' },
    {id: 'saying' },
    {id: 'humour' },
  ]
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={(
          <All id={quotes[0].id}/>
        )} />
        <Route path='/star-wars' element={(
          <All id={quotes[1].id}/>
        )} />
        <Route path='/saying' element={(
          <All id={quotes[3].id}/>
        )} />
        <Route path='/humour' element={(
          <All id={quotes[4].id}/>
        )} />
        <Route path='/motivational' element={(
          <All id={quotes[2].id}/>
        )} />
      </Routes>
    </div>
  );
}

export default App;
