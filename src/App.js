
import Navbar from './components/Navbar';
import './App.css';
import { Component } from 'react';
import Banner from './components/Banner';
import Movie from './components/Movie';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Movie />
    </>
  );
}

export default App;
