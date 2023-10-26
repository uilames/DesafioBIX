import React, { useState, useEffect } from 'react';

const EdicaoEmpresa = ({ id }) => {
  const [empresaData, setEmpresaData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
  });

  useEffect(() => {
    // Buscar dados da empresa do servidor Django com base no ID
    fetch(`/api/empresas/${id}`) // Certifique-se de que a URL corresponda à configuração no seu Django
      .then((response) => response.json())
      .then((data) => setEmpresaData(data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar dados atualizados para o servidor Django para edição
      const response = await fetch(`/api/empresas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empresaData),
      });

      if (response.ok) {
        alert('Empresa atualizada com sucesso!');
        // Redirecionar ou realizar outra ação após a edição
      } else {
        alert('Ocorreu um erro ao atualizar a empresa.');
      }
    } catch (error) {
      console.error('Erro ao atualizar a empresa:', error);
    }
  };

  return (
    <div>
      <h2>Edição de Empresa</h2>
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
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EdicaoEmpresa;
