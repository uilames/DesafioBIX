import React, { useState, useEffect } from 'react';
import Timeline from './Timeline';

const Dashboard = () => {
  const [empresas, setEmpresas] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    // Buscar dados das empresas do servidor Django
    fetch('/api/empresas/') 
      .then((response) => response.json())
      .then((data) => setEmpresas(data));

    // Buscar dados dos funcionários do servidor Django
    fetch('/api/funcionarios/') 
      .then((response) => response.json())
      .then((data) => setFuncionarios(data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo à sua área de dashboard! Aqui estão algumas informações:</p>

      <h3>Empresas:</h3>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.id}>{empresa.nome}</li>
        ))}
      </ul>

      <h3>Funcionários:</h3>
      <ul>
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>{funcionario.nome}</li>
        ))}
      </ul>

      {/* Componente Timeline*/}
      <h3>Linha do Tempo:</h3>
      <Timeline />
    </div>
  );
};

export default Dashboard;
