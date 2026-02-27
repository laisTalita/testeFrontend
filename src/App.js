import { BrowserRouter, Routes, Route,Navigate } from 
"react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./components/pages/Home";
import Escolas from "./components/pages/Escolas";
import Familias from "./components/pages/Familias";
import Empresas from "./components/pages/Empresas";
import Footer from "./components/Footer";




  function App() {
  return (

      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Routes className="main">
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/Escolas" element={<Escolas />} />
            <Route path="/Familias" element={<Familias />} />
            <Route path="/Empresas" element={<Empresas />} />
          </Routes>
             
          <Footer />
        </div>

      </BrowserRouter>
      

  );
}
export default App;
