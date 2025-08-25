import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MiniContent from './content/MiniContent';
import Listings from './content/Listings';
import Footer from './components/Footer'
import AboutUs from './content/AboutUs';
import Contact from './content/Contact';
import Gallery from './content/Gallery';


function Home() {
  return (
    <>
      <Hero />
      <MiniContent />
      <Listings />
    </>
  )
}

function Layout() {
  return (
    <div className='min-h-dvh flex flex-col'>
      <NavBar />
      <div className='h-14' aria-hidden='true' />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={Contact} />
          <Route path='/gallery' element={Gallery} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
