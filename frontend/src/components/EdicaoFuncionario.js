import React, { useState, useEffect } from 'react';

const EdicaoFuncionario = ({ id }) => {
  const [funcionarioData, setFuncionarioData] = useState({
    nome: '',
    cargo: '',
    salario: '',
  });

  useEffect(() => {
    // Buscar dados do funcionário do servidor Django com base no ID
    fetch(`/api/funcionarios/${id}`) // Certifique-se de que a URL corresponda à configuração no seu Django
      .then((response) => response.json())
      .then((data) => setFuncionarioData(data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar dados atualizados para o servidor Django para edição
      const response = await fetch(`/api/funcionarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(funcionarioData),
      });

      if (response.ok) {
        alert('Funcionário atualizado com sucesso!');
        // Redirecionar ou realizar outra ação após a edição
      } else {
        alert('Ocorreu um erro ao atualizar o funcionário.');
      }
    } catch (error) {
      console.error('Erro ao atualizar o funcionário:', error);
    }
  };

  return (
    <div>
      <h2>Edição de Funcionário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={funcionarioData.nome}
            onChange={(e) => setFuncionarioData({ ...funcionarioData, nome: e.target.value })}
          />
        </div>
        <div>
          <label>Cargo:</label>
          <input
            type="text"
            name="cargo"
            value={funcionarioData.cargo}
            onChange={(e) => setFuncionarioData({ ...funcionarioData, cargo: e.target.value })}
          />
        </div>
        <div>
          <label>Salário:</label>
          <input
            type="text"
            name="salário"
            value={funcionarioData.salario}
            onChange={(e) => setFuncionarioData({ ...funcionarioData, salario: e.target.value })}
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EdicaoFuncionario;
