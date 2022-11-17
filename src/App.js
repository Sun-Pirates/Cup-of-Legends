import './App.css';

// Pages
import { Home } from './Pages/Home/Home';
import { Download } from './Pages/Download/Download';
import {Groups} from './Pages/Groups/Groups';

// Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/download" element={<Download></Download>} />
        <Route path="/groups" element={<Groups></Groups>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
