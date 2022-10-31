import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Juridica from './components/Juridica'
import Fisica from './components/Fisica'
import Investimento from './components/Investimento'
import Contato from './components/Contato'
import Redes from './components/Redes'
import Entrar from './components/Entrar'
import Cadastro from './components/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Bank() {
  return (
    <div>
      <Router>
<Nav />
    <Routes>
<Route path= '/' element={<Home />} />
<Route path='/Juridica' element={<Juridica />} />
<Route path='/Fisica' element={<Fisica />} />
<Route path='/Investimento' element={<Investimento />} />
<Route path='/Contato' element={<Contato />} />
<Route path='/Entrar' element={<Entrar />} />
<Route path='/Cadastro' element={<Cadastro />} />
</Routes>
<Redes />
</Router>
    </div>
  );
}

export default Bank;
