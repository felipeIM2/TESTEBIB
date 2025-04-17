
import { useNavigate } from 'react-router-dom';

export default function UserLogSetLogin() {

  const navigate = useNavigate();
  
  setTimeout(() => {
    let validateToken = sessionStorage.getItem("token");
    if(!validateToken) return navigate("/");
  }, 200);

}





