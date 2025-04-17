import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import AlertCredential from './alerts/AlertError.jsx';
import axios from 'axios';
import '../App.css'

const login = async (data) => {

  try {
      
    let res = await axios.get('http://localhost:3000/api/users/?email=' + data.email)

    if(res.data.email === data.email && res.data.password === data.password){

      let token = Math.floor(Math.random() * 999999);
      let formatToken = 'BIB-' + String(token)

      return { data: { token: formatToken } };
    }else {
      return { data: { error: "Atenção Senha Inválida!" } };
    }
    
  } catch (error) {

   return { data: { error: "Atenção Email Inválido!" } };

  }

};

const LoginForm = () => {

  const { register, handleSubmit } = useForm();
  const [checked, setChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      if (!response.data.token) {
        throw new Error(response.data.error || "Credenciais inválidas");
      }
      sessionStorage.setItem("token", response.data.token);
      navigate("/Home");
    } catch (error) {
      setErrorMessage(error.message);
      setShowToast(true);
    }

  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light position-relative">

      <AlertCredential
        message={errorMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="card p-5 shadow w-[500px]" >
        <h3 className="text-center mb-2">Login</h3>
        <p className="text-center text-muted mb-4">Entre em sua conta para começar a usar o BIB</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Insira o seu email"
              // value="luis@teste.com"
              {...register("email", { required: true })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Insira a sua senha"
              // value="senha"
              {...register("password", { required: true })}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Manter Logado
              </label>
            </div>
            <a href="/recovery" className="text-decoration-none">Recuperar senha</a>
          </div>

          <button type="submit" className="btn btn-dark w-100 mb-3">Entrar</button>

          <div className="text-center mt-3">
            <small className="text-muted">
              NÃO TENHO CONTA? <a href="/register" className="text-decoration-none fw-bold">CRIAR CONTA</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
