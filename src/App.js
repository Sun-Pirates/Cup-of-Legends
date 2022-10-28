import './App.css';

// Pages
import { Home } from './Pages/Home/Home';
import { Download } from './Pages/Download/Download';

// Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
<<<<<<< HEAD
        <Route path="/download" element={<Download></Download>} />
=======
        <Route path="/teste" element={<Teste></Teste>} />
        
>>>>>>> c04372d79fabe6d93aff08438800507a1ef3aedf
      </Routes>
    </BrowserRouter>
  );
}

export default App;
