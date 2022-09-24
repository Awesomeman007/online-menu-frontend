import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import SlideBar from './slideBar';
import Content from './content';

function App() {
  return (
    <div className="App">
      <Header />
      <SlideBar />
      <Content />
    </div>
  );
}

export default App;
