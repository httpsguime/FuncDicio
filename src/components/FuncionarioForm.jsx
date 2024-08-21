import React, { useState } from 'react';

const FuncionarioForm = ({ salvarFuncionario }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [trabalho, setTrabalho] = useState('');
  const [foto, setFoto] = useState('');

  const handleSalvar = () => {
    if (nome && idade && trabalho && foto) {
      const novoFuncionario = {
        nome,
        idade,
        trabalho,
        foto,
      };
      salvarFuncionario(novoFuncionario);
      setNome('');
      setIdade('');
      setTrabalho('');
      setFoto('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Trabalho"
        value={trabalho}
        onChange={(e) => setTrabalho(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL da Foto"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
      />
      <button onClick={handleSalvar}>Salvar Funcionário</button>
    </div>
  );
};

export default FuncionarioForm;



