import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/QuemSomos' element={<QuemSomos />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Cadastro' element={<Cadastro />} />
        </Routes>
      <Footer />
    </Router>
    );
}

export default App;