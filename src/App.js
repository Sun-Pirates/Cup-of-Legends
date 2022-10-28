import './App.css';

// Pages
import { Home } from './Pages/Home/Home';

// Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from './Pages/Teste/Teste';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/teste" element={<Teste></Teste>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
