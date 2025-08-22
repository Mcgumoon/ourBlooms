import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MiniContent from './content/MiniContent';
import { BrowserRouter } from 'react-router-dom';
import Listings from './content/Listings';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <MiniContent />
      <Listings />
    </BrowserRouter>
  );
}

export default App;
