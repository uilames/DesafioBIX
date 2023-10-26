import React, { useState } from 'react';

const CadastroFuncionario = () => {
  const [funcionarioData, setFuncionarioData] = useState({
    nome: '',
    cargo: '',
    salario: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar dados para o servidor Django para cadastro
      const response = await fetch('/api/funcionarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(funcionarioData),
      });

      if (response.ok) {
        alert('Funcionário cadastrado com sucesso!');
        // Redirecionar ou realizar outra ação após o cadastro
      } else {
        alert('Ocorreu um erro ao cadastrar o funcionário.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o funcionário:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Funcionário</h2>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroFuncionario;
