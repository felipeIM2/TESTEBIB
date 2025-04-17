import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const RecoverPassword = () => {

  const [step, setStep] = useState('request'); 
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [tokenDisabled, setTokenDisabled] = useState(true);

  useEffect(() => {

    if (step === 'validate') {
      setEmailDisabled(true);
      setTokenDisabled(false);

      const timer = setTimeout(() => {
        setEmailDisabled(false);
        setTokenDisabled(true);
        setStep('request');
      }, 2 * 60 * 1000); 

      return () => clearTimeout(timer);
    }
  }, [step]);


    const [token, setToken] = useState('');
  
    const handleChange = (e) => {
      const rawValue = e.target.value.replace(/^BIB-/, ''); 
      const digitsOnly = rawValue.replace(/\D/g, ''); 
      const limitedDigits = digitsOnly.slice(0, 6);
      setToken(limitedDigits);
    };

  const handleReceiveToken = (e) => {
    e.preventDefault();
    setStep('validate');
  };

  const handleValidateToken = (e) => {
    e.preventDefault();
    setStep('reset');
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Senha redefinida!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-5 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-2">Recuperar senha</h3>
        <p className="text-center text-muted mb-4">
          Informe o e-mail para receber um link de redefinição.
        </p>

        <form>
          {(step === 'request' || step === 'validate') && (
            <>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Digite email cadastrado"
                  disabled={emailDisabled}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Token de autenticação:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu token..."
                  value={token.length > 0 ? `BIB-${token}` : token}
                  onChange={handleChange}
                  disabled={tokenDisabled}
                />
              </div>

              {step === 'request' ? (
                <button className="btn btn-dark w-100 mb-3" onClick={handleReceiveToken}>
                  Receber token
                </button>
              ) : (
                <button className="btn btn-dark w-100 mb-3" onClick={handleValidateToken}>
                  Validar token
                </button>
              )}
            </>
          )}

          {step === 'reset' && (
            <>
              <div className="mb-3">
                <label className="form-label">Nova senha:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite uma nova senha..."
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmar senha:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirme sua nova senha..."
                />
              </div>

              <button className="btn btn-dark w-100 mb-3" onClick={handleResetPassword}>
                Redefinir
              </button>
            </>
          )}

          <div className="text-center">
            <small className="text-muted">
              LEMBROU SUA SENHA?{' '}
              <a href="/" className="text-decoration-none fw-bold">
                LOGIN
              </a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
