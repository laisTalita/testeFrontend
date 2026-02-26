import { BrowserRouter, Routes, Route } from 
"react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./components/pages/Home";
import Escolas from "./components/pages/Escolas";
import Familias from "./components/pages/Familias";
import Empresas from "./components/pages/Empresas";
import Social from "./components/pages/Social";
import Blog from "./components/pages/Blog";
import Contato from "./components/pages/Contato";
import Vagas from "./components/pages/Vagas";
import Footer from "./components/Footer";




  function App() {
  return (

      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/inicio" element={<Home />} />
            <Route path="/Escolas" element={<Escolas />} />
            <Route path="/Familias" element={<Familias />} />
            <Route path="/Empresas" element={<Empresas />} />
            <Route path="/Social" element={<Social />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Vagas" element={<Vagas />} />

          </Routes>
             <Footer />
        </div>

      </BrowserRouter>
      

  );
}
export default App;
