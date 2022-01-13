import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Error from './pages/Error';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
