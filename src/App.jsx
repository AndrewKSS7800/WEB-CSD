import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Si el usuario está en la raíz "/WEB-CSD", lo redirige a Inicio
    if (location.pathname === "/WEB-CSD/") {
      window.location.replace("/WEB-CSD/inicio");
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="inicio" element={<Home />} />
        <Route path="sobre-nosotros" element={<About />} />
        <Route path="noticias" element={<News />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="inicio" />} /> {/* Redirige cualquier URL inválida a Inicio */}
      </Routes>
    </>
  );
}

export default App;