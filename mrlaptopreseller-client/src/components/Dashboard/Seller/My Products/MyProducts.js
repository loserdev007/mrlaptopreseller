import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/UserContext";
import Product from "../../../Layout/Product/Product";
import "./MyProducts.css";

const MyProducts = () => {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   useEffect(() => {
      if (parseInt(localStorage.getItem("userRole")) === 1) {
         navigate("/dashboard/my-orders", { replace: true });
      } else if (parseInt(localStorage.getItem("userRole")) === 3) {
         navigate("/dashboard/all-buyer", { replace: true });
      }
   }, [navigate]);
   const [productList, setProductList] = useState([]);
   const [update, setUpdate] = useState(false);
   const token = localStorage.getItem("token")

   useEffect(() => {
      if (user && token) {
         console.log("Fetch")
         fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/my-products`, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               authorization: `Bearer ${localStorage.getItem("token")}`,
               uid: user?.uid,
            },
         })
            .then((res) => res.json())
            .then((res) => setProductList(res))
            .catch((e) => {});
      }
   }, [user?.uid, user, token, update]);
   return (
      <section className="container mx-auto max-w-7xl gricontainer mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 d grid-cols-3 gap-10">
         {productList.map((el) => (
            <Product key={el.productID} setUpdate={setUpdate} productData={el}></Product>
         ))}
      </section>
   );
};

export default MyProducts;
