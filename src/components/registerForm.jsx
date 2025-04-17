import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import AlertCredential from './alerts/AlertError.jsx';
import AlertSuccess from './alerts/AlertSuccess.jsx';
import axios from 'axios';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showToastError, setShowToastError] = useState(false)
  const [showToastSuccess, setShowToastSuccess] = useState(false)

  const navigate = useNavigate();

  const onSubmit = async (data) => {
 
    const { password, confirmPassword } = data;
    
    if (password !== confirmPassword) {
      setErrorMessage("Favor confirmar sua senha, as senhas não coincidem.");
      setShowToastError(true);
      return;
    }
    
    let user = {
      name: data.name,
      email: data.email,
      password: data.password  
    }

  
    try {
      
      let resGet = await axios.get('http://localhost:3000/api/users/?email=' + user.email)
     
      if(resGet.data){
        setErrorMessage("Email já cadastrado, favor realizar outro registro ou seguir para login.");
        setShowToastError(true);
        return;
      }
    
    } catch (error) {

        try {

          await axios.post('http://localhost:3000/api/users', user);
          // console.log('Usuário criado com sucesso!', resPost.data);
          // alert("Cadastro realizado com sucesso!");
          setSuccessMessage("Cadastro realizado com sucesso!");
          setShowToastSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);

        } catch (error) {
               
          if (error.response && error.response.status === 400) {
            console.error('Erro 400: Campos obrigatórios faltando');
          } else {
            console.error('Erro inesperado:', error);
          }
          
        }
    }
   
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <AlertCredential
        message={errorMessage}
        show={showToastError}
        onClose={() => setShowToastError(false)}
      />

      <AlertSuccess
        message={successMessage}
        show={showToastSuccess}
        onClose={() => setShowToastSuccess(false)}
      />




      <div className="card p-5 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-2">REGISTRAR</h3>
        <p className="text-center text-muted mb-4">Crie uma conta e comece utilizar o BIB</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nome:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Seu nome completo"
              {...register("name", { 
                required: "Nome é obrigatório",
                
                minLength: {
                  value: 4,
                  message: "O nome deve ter no mínimo 4 caracteres"
                } 
              
              })}
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Insira o seu email"
              {...register("email", { 
                required: "Email é obrigatório",

                minLength: {
                  value: 1,
                  message: "Favor inserir um email válido"
                }
              
              })}
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Senha:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Crie uma senha"
              {...register("password", { 
                required: "Senha é obrigatória",
                
                minLength: {
                  value: 6,
                  message: "O nome deve ter no mínimo 6 caracteres"
                }

              })}
            />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmar senha:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirme sua senha"
              {...register("confirmPassword", { 
                required: "Confirme a senha",
                
                minLength: {
                  value: 6,
                  message: "O nome deve ter no mínimo 6 caracteres"
                }

              })}
            />
            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword.message}</small>}
          </div>

          <button type="submit" className="btn btn-dark w-100 mb-3">Registrar</button>

          <div className="text-center">
            <small className="text-muted">
              JÁ TEM UMA CONTA? <a href="/" className="text-decoration-none fw-bold">LOGIN</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
