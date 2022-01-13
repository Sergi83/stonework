import React from 'react';

// pages, components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
