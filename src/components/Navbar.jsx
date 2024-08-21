import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Empresa Ltda.</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Lista de Funcionários</Link>
        <Link to="/salvar">Salvar/Buscar Funcionário</Link>
      </div>
    </nav>
  );
};

export default Navbar;
