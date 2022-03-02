import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import HomePage from './paginas/HomePage';
import NovedadesPage from './paginas/NovedadesPage';
import ContactoPage from './paginas/contactoPage';
import NosotrosPage from './paginas/NosotrosPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/nosotros" exact element={<NosotrosPage />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<ContactoPage />} />
        
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;

