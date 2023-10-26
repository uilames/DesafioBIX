import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './ResponsiveStyles.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifique se o token de autenticação está armazenado no localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      // Verificando a validade do token
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {isAuthenticated ? (
          <Route path="/dashboard" component={Dashboard} />
        ) : (
          <Redirect to="/login" />
        )}
        {/* ... outras rotas ... */}
      </Switch>
    </Router>
  );
}

export default App;
