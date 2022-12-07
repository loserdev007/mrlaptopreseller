import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/UserContext';
import UserTable from '../../../Layout/UserTable/UserTable';
import './AllSeller.css'

const AllSeller = () => {
   const navigate = useNavigate();
   useEffect(()=>{
      if (parseInt(localStorage.getItem("userRole")) === 2) {
         console.log("asdas")
         navigate("/dashboard/add-product", { replace: true });
      }else if(parseInt(localStorage.getItem("userRole")) === 1){
         navigate("/dashboard/add-products", { replace: true });
      }
   },[navigate])
   const {user} = useContext(AuthContext);
   const [buyerList, setBuyerList] = useState([])
   const [update, setUpdate] = useState(false);

   useEffect(()=>{
      fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/admin`, {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
            uid: user?.uid,
            queryData:JSON.stringify({
               type: "seller"
            })
         },
      })
         .then((res) => res.json())
         .then((res) => {
            console.log(res)
            setBuyerList(res)
         })
         .catch((e) => {});
   },[user?.uid, update])
   return (
      <UserTable setUpdate={setUpdate} buyerList={buyerList}></UserTable>
   );
};
   
export default AllSeller;