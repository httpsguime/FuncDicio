import React from 'react';

const FuncionarioList = ({ funcionarios, apagarFuncionario }) => {
  return (
    <div className="list-container">
      {Object.keys(funcionarios).length > 0 ? (
        Object.keys(funcionarios).map((id) => (
          <div className="funcionario-item" key={id}>
            <img src={funcionarios[id].foto} alt={funcionarios[id].nome} />
            <div className="info">
              <h3>{funcionarios[id].nome}</h3>
              <p>Idade: {funcionarios[id].idade}</p>
              <p>Trabalho: {funcionarios[id].trabalho}</p>
            </div>
            <button onClick={() => apagarFuncionario(id)}>Apagar</button>
          </div>
        ))
      ) : (
        <p className="no-funcionarios">Nenhum funcionário cadastrado.</p>
      )}
    </div>
  );
};

export default FuncionarioList;

