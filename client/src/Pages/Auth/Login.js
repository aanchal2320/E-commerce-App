import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';
const Login = () => {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    //form function
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
              const res = await axios.post('/api/v1/auth/login',{
                  email,
                  password,
                  
       } );
          if(res && res.data.success){
              toast.success(res.data && res.data.message, {
                  autoClose: 3000 // Display for 3 seconds (adjust as needed)
                });
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token:res.data.token,
                });
                localStorage.setItem('auth',JSON.stringify(res.data));
                setTimeout(() => {
                  navigate(location.state || "/"); // Navigate after 5 seconds (adjust if needed)
              },2000); // Delay navigation by 3 seconds to match toast duration
          }
          else
          {
              toast.error(res.data.message, {
                  autoClose: 5000 // Display for 5 seconds (adjust as needed)
                });
          }
      }
      catch(error)
      {
          console.log(error);
          toast.error('Something went wrong', {
              autoClose: 5000 // Display for 5 seconds
            });
            
      }
  }
  return (
    <Layout title={"Register - Ecommerce App"}>
       <div className="form-container">
        <h1>LOGIN FORM</h1>
        <form onSubmit={handleSubmit}>
           

            <div className="mb-3">
                <input type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control" 
                id="exampleInputEmail"
                placeholder='Enter Email'
                required />   
            </div>

            <div className="mb-3">
             <input type="password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="form-control"
              id="exampleInputPassword" 
              placeholder='Enter Password'
              required/>
            </div>

            <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
              Forgot Password
            </button>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
        </form>

       </div>
    </Layout>
  )
}

export default Login
