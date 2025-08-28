import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AboutUs from './content/AboutUs';
import Contact from './content/Contact';
import Gallery from './content/Gallery';
import Home from './content/Home';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
