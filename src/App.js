import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListaFuncionarios from './pages/ListaFuncionarios';
import SalvarBuscarFuncionario from './pages/SalvarBuscarFuncionario';
import './styles/styles.css';

function App() {
  const [funcionarios, setFuncionarios] = useState({
    1: { nome: 'João', idade: 25, trabalho: 'Desenvolvedor', foto: 'https://i.pinimg.com/736x/01/d2/7f/01d27f91da6fd10723fce369a939491d.jpg' },
    2: { nome: 'Maria', idade: 30, trabalho: 'Designer', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSeZ2rzBq_YDwqCrA3-NjJAsqm8CP1gK7Zg&s' },
    3: { nome: 'Carlos', idade: 35, trabalho: 'Gerente de Projetos', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSN7j_idYpCtWHrakhYK748ksxPSpcfX5FfA&s' }
  });

  const adicionarFuncionario = (dados) => {
    const newId = Math.max(...Object.keys(funcionarios).map(Number)) + 1;
    setFuncionarios({ ...funcionarios, [newId]: dados });
  };

  const buscarFuncionario = (id) => funcionarios[id] || null;

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<ListaFuncionarios funcionarios={funcionarios} setFuncionarios={setFuncionarios} />} />
          <Route path="/salvar" element={<SalvarBuscarFuncionario adicionarFuncionario={adicionarFuncionario} buscarFuncionario={buscarFuncionario} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
