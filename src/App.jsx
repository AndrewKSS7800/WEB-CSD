import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';
import Contact from './pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;