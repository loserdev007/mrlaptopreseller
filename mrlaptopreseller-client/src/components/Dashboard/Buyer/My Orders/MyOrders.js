import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../../Layout/Product/Product";
import ProductTable from "../../../Layout/ProductTable/ProductTable";
import "./MyOrders.css";

const MyOrders = () => {
   const navigate = useNavigate();

   useEffect(() => {
      if (parseInt(localStorage.getItem("userRole")) === 2) {
         navigate("/dashboard/add-product", { replace: true });
      } else if (parseInt(localStorage.getItem("userRole")) === 3) {
         navigate("/dashboard/all-buyer", { replace: true });
      }
   }, [navigate]);
   const cards = [];

   for (let i = 0; i < 3; i++) {
      cards.push(<Product></Product>);
   }

   return (
      <div className="container max-w-7xl mx-auto space-y-12">
         <h1 className="text-center text-3xl font-bold">My Orders</h1>
         <ProductTable></ProductTable>
      </div>
   );
};

export default MyOrders;
