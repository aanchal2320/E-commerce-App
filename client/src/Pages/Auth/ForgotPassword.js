import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../../styles/AuthStyles.css';



const ForgotPassword = () => {
    const [email,setEmail] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [answer,setAnswer] = useState("")


    const navigate = useNavigate()


    //form function
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
              const res = await axios.post('/api/v1/auth/forgot-password',{
                  email,
                  newPassword,
                  answer
                  
       } );
          if(res && res.data.success){
              toast.success(res.data && res.data.message, {
                  autoClose: 3000 // Display for 3 seconds (adjust as needed)
                });
             
              
                setTimeout(() => {
                  navigate("/login"); // Navigate after 5 seconds (adjust if needed)
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
    <Layout title={'forgot-password'}>
         <div className="form-container">
        <h1>RESET PASSWORD</h1>
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
                <input type="text" 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control" 
                id="exampleInputEmail"
                placeholder='Enter yout first school name'
                required />   
            </div>

            <div className="mb-3">
             <input type="password" 
             value={newPassword}
             onChange={(e) => setNewPassword(e.target.value)}
             className="form-control"
              id="exampleInputPassword" 
              placeholder='Enter Password'
              required/>
            </div>

            <button type="submit" className="btn btn-primary">
              Reset
            </button>
        </form>

       </div>
    </Layout>
  )
}

export default ForgotPassword
