import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      
    </BrowserRouter>
  );
}

export default App;
