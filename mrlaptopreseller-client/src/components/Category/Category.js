import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import Product from "../Layout/Product/Product";
import Categories from "../Categories/Categories";
import "./Category.css";

const Category = () => {
   const { user } = useContext(AuthContext);
   const [productList, setProductList] = useState([]);

   const location = useLocation();
   const token = localStorage.getItem("token");

   useEffect(() => {
      if (user && token) {
         fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app${location.pathname}`, {
            method: "GET", // or 'PUT'
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
   }, [user?.uid, location.pathname, user, token]);
   return (
      <div className="space-y-48">
         <section className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-52">
            {productList.map((el) => (
               <Product key={el.productID} productData={el}></Product>
            ))}
         </section>
         <Categories></Categories>
      </div>
   );
};

export default Category;
