import React, { useState, useEffect, axios } from 'react';
import './App.css';
import DataFeching from './DataFeching';

function App() {
  return (
    <>
      <div className='App'>
        <DataFeching />
      </div>
    </>
  );
}

export default App;
