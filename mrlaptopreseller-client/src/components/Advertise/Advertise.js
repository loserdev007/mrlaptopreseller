import React, { useEffect, useState } from "react";
import Product from "../Layout/Product/Product";
import "./Advertise.css";

const Advertise = () => {
   const [productList, setProductList] = useState([]);
   const [update, setUpdate] = useState(false);
console.log(update)
   useEffect(() => {
      fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/advertised`, {
         method: "GET"
      })
         .then((res) => res.json())
         .then((res) => setProductList(res))
         .catch((e) => {});
   },[]);
   return (
      <>
         {productList.length > 0 ? (
            <section className="container mx-auto max-w-7xl px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
               <h1 className="col-span-full text-center text-3xl lg:text-5xl font-bold">
                  Advertisement
               </h1>
               <div className="divider col-span-full m-0 w-1/2 mx-auto"></div>
               {productList.map((el) => (
                  <Product key={el.productID} setUpdate={setUpdate} productData={el}></Product>
               ))}
            </section>
         ) : (
            ""
         )}
      </>
   );
};

export default Advertise;
