import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../../styles/AuthStyles.css';
const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [answer,setAnswer] = useState("")
    const navigate = useNavigate()

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
                const res = await axios.post('/api/v1/auth/register',{
                    name,
                    email,
                    password,
                    phone,
                    address,
                    answer,
         } );
            if(res && res.data.success){
                toast.success(res.data && res.data.message, {
                    autoClose: 5000 // Display for 3 seconds (adjust as needed)
                  });
                  setTimeout(() => {
                    navigate("/login"); // Navigate after 5 seconds (adjust if needed)
                }, 3000); // Delay navigation by 3 seconds to match toast duration
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
        <form onSubmit={handleSubmit}>
        <h4 className='title'>Register Form</h4>
            <div className="mb-3">
                <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control" 
                id="exampleInputName"
                placeholder='Enter your Name' 
                required
                autoFocus
                />   
            </div>

            <div className="mb-3">
                <input 
                type="email" 
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
                <input type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control" 
                id="exampleInputPhone"
                placeholder='Enter Phone Number'
                required />   
            </div>

            <div className="mb-3">
                <input type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress" 
                placeholder='Enter Address'
                required/>   
            </div>
            <div className="mb-3">
                <input
                 type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputAddress" 
                placeholder='What is you first school name'
                required
                />   
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
        </form>

       </div>
    </Layout>
  )
}

export default Register
