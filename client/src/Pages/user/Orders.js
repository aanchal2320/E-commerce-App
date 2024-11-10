import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from 'axios'
import { useAuth } from '../../context/auth'
const Orders = () => {
  const[orders,setOrders] = useState([])
  const[auth,setSAuth] = useAuth()
  const getOrders = async() =>{
    try {
      const {data} = await axios.get('/api/v1/auth/orders')
      setOrders(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(auth?.token) getOrders()
  },[auth?.token]);
  return (
   <Layout title={'Your Orders'}>
    <div className="container-flui p-3 m-3">
        <div className="row">
           <div className="col-md-3">
            <UserMenu/>
           </div>
           <div className="col-md-9">
            <h1 className='text-center'>All Orders</h1>
            {
              orders?.map((o,i) => {
                return(
                  <div className='border shadow'>
                    <table className='table'>
                    <thead>
                      <tr>
                        <td scope='col'>#</td>
                        <td scope='col'>Status</td>
                        <td scope='col'>Buyer</td>
                        <td scope='col'>Orders</td>
                        <td scope='col'>Payment</td>
                        <td scope='col'>Quantity</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{i+1}</th>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                  
                )
              })
            }
           </div>
        </div>
    </div>
   </Layout>
  )
}

export default Orders
