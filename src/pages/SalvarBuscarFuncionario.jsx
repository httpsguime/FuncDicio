import React, { useState } from 'react';

const SalvarBuscarFuncionario = ({ adicionarFuncionario, buscarFuncionario }) => {
  const [formData, setFormData] = useState({ nome: '', idade: '', trabalho: '', foto: '' });
  const [buscaId, setBuscaId] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    adicionarFuncionario(formData);
    setFormData({ nome: '', idade: '', trabalho: '', foto: '' });
    alert('Funcionário salvo!');
  };

  const handleBuscar = () => {
    const funcionario = buscarFuncionario(buscaId);
    if (funcionario) {
      setResultadoBusca(funcionario);
    } else {
      alert('Funcionário não encontrado');
      setResultadoBusca(null);
    }
  };

  return (
    <div className="page-container">
      <h1>Salvar/Buscar Funcionário</h1>
      
      <div className="form-container">
        <h2>Salvar Funcionário</h2>
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        <input type="number" name="idade" placeholder="Idade" value={formData.idade} onChange={handleChange} />
        <input type="text" name="trabalho" placeholder="Trabalho" value={formData.trabalho} onChange={handleChange} />
        <input type="text" name="foto" placeholder="URL da Foto" value={formData.foto} onChange={handleChange} />
        <button onClick={handleSubmit}>Salvar</button>
      </div>

      <div className="form-container">
        <h2>Buscar Funcionário</h2>
        <input type="text" name="id" placeholder="ID do funcionário" value={buscaId} onChange={(e) => setBuscaId(e.target.value)} />
        <button onClick={handleBuscar}>Buscar</button>

        {resultadoBusca && (
          <div className="result-container">
            <h3>Resultado da Busca</h3>
            <p><strong>Nome:</strong> {resultadoBusca.nome}</p>
            <p><strong>Idade:</strong> {resultadoBusca.idade}</p>
            <p><strong>Trabalho:</strong> {resultadoBusca.trabalho}</p>
            <img src={resultadoBusca.foto} alt={`Foto de ${resultadoBusca.nome}`} className="funcionario-foto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalvarBuscarFuncionario;


