import React from 'react';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import './App.css';

function App() {
  return (
    <div className='App'>
			<div className='Main'>
				<Header />
				<Signup />
			</div>
    </div>
  );
}

export default App;
