import React from 'react';
import FuncionarioList from '../components/FuncionarioList';
import './ListaFuncionarios.css';

const ListaFuncionarios = ({ funcionarios, setFuncionarios }) => {
  const apagarFuncionario = (id) => {
    const updatedFuncionarios = { ...funcionarios };
    delete updatedFuncionarios[id];
    setFuncionarios(updatedFuncionarios);
  };

  return (
    <div className="page-container">
      <h1>Lista de Funcionários</h1>
      <FuncionarioList funcionarios={funcionarios} apagarFuncionario={apagarFuncionario} />
    </div>
  );
};

export default ListaFuncionarios;



