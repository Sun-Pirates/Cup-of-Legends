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
        <Route path="/download" element={<Download></Download>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
