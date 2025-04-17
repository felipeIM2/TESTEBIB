
import { useNavigate } from 'react-router-dom';

export default function UserLogSetHome() {

  const navigate = useNavigate();
  
  setTimeout(() => {
    let validateToken = sessionStorage.getItem("token");
    if(validateToken) return navigate("/Home");
  }, 200);

}





