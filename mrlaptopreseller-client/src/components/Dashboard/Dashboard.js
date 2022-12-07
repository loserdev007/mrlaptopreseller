import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Dashboard = () => {
   const {userServerResponse, userMetaData} = useContext(AuthContext)
   const navigate = useNavigate();

   useEffect(()=>{
      if(parseInt(userServerResponse.userRole) === 1 || parseInt(userMetaData.userRole) === 1){
         navigate("/dashboard/my-orders", { replace: true });
      }
      else if(parseInt(userServerResponse.userRole) === 2 || parseInt(userMetaData.userRole) === 2){
         navigate("/dashboard/add-product",{ replace: true });
      }
      else if(parseInt(userServerResponse.userRole) === 3 || parseInt(userMetaData.userRole) === 3){
         navigate("/dashboard/all-buyer",{ replace: true });
      }
   }, [userServerResponse.userRole, userMetaData.userRole, navigate])

   return (
      <section className="min-h-screen flex justify-center items-center">
         Dashboard
      </section>
   );
};

export default Dashboard;
