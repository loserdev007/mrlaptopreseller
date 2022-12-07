import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyBuyers.css'

const MyBuyers = () => {
   const navigate = useNavigate();

   useEffect(()=>{
      if (parseInt(localStorage.getItem("userRole")) === 1) {
         navigate("/dashboard/my-orders", { replace: true });
      }else if(parseInt(localStorage.getItem("userRole")) === 3){
         navigate("/dashboard/all-buyer", { replace: true });
      }
   },[navigate])
   return (
      <div>
      
      </div>
   );
};
   
export default MyBuyers;