import RegisterForm from '../../components/registerForm.jsx'
import userLogSetHome from '../../components/functions/userLogSetHome.jsx';
import TopLoadingBar from '../../components/loadingBar/topLoadingBar.jsx';
import React, { useState, useEffect } from 'react';


function Register() {

   userLogSetHome()

     const [loading, setLoading] = useState(true);
     useEffect(() => {
       const timeout = setTimeout(() => setLoading(false), 800); // simula carregamento
       return () => clearTimeout(timeout);
     }, []);

  return (
    <div>
      <TopLoadingBar loading={loading} />
     <RegisterForm/>
    </div>
  );
}

export default Register;