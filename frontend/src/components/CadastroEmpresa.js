import React, { useState } from 'react';

const CadastroEmpresa = () => {
  const [empresaData, setEmpresaData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar dados para o servidor Django para cadastro
      const response = await fetch('/api/empresas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empresaData),
      });

      if (response.ok) {
        alert('Empresa cadastrada com sucesso!');
        // Redirecionar ou realizar outra ação após o cadastro
      } else {
        alert('Ocorreu um erro ao cadastrar a empresa.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar a empresa:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={empresaData.nome}
            onChange={(e) => setEmpresaData({ ...empresaData, nome: e.target.value })}
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={empresaData.endereco}
            onChange={(e) => setEmpresaData({ ...empresaData, endereco: e.target.value })}
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={empresaData.telefone}
            onChange={(e) => setEmpresaData({ ...empresaData, telefone: e.target.value })}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroEmpresa;
