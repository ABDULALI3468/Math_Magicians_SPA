/* eslint max-len: ["error", { "code": 1000 }] */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
// import Calc from './pages/Calc';
import Quote from './pages/Quote';
import Nav from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
