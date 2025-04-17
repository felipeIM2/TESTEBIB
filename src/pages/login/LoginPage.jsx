import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/loginForm.jsx';
import userLogSetHome from '../../components/functions/userLogSetHome.jsx';
import TopLoadingBar from '../../components/loadingBar/topLoadingBar.jsx';

function Login() {
  
  userLogSetHome();
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800); // simula carregamento
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <TopLoadingBar loading={loading} />
      <div className={loading ? 'opacity-50 pointer-events-none' : ''}>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
