import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/layout/Footer';

import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;