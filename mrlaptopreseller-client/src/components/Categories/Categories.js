import React from "react";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
   // const navigate = useNavigate();
   const location = useLocation();
   // const from = location.state?.from?.pathname || "/";
   return (
      <section className="container max-w-7xl mx-auto px-3">
         <h1 className="col-span-full text-center text-3xl lg:text-5xl font-bold">Categories</h1>
         <div className="divider m-0 w-1/2 mx-auto"></div>
         <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 lg:gap-10 mt-8 lg:mt-16">
            <Link className="card w-full bg-base-100 shadow-xl py-6 lg:py-12" to="/category/1" state={{ from: location }}>
               <div className="card-body">
                  <h2 className="card-title justify-center text-4xl lg:text-6xl text-gray-500 grow">Acer</h2>
               </div>
            </Link>
            <Link className="card w-full bg-base-100 shadow-xl py-6 lg:py-12" to="/category/2" state={{ from: location }}>
               <div className="card-body">
                  <h2 className="card-title justify-center text-4xl lg:text-6xl text-gray-500 grow">Dell</h2>
               </div>
            </Link>
            <Link className="card w-full bg-base-100 shadow-xl py-6 lg:py-12" to="/category/3" state={{ from: location }}>
               <div className="card-body">
                  <h2 className="card-title justify-center text-4xl lg:text-6xl text-gray-500 grow">HP</h2>
               </div>
            </Link>
            <Link className="card w-full bg-base-100 shadow-xl py-6 lg:py-12" to="/category/4" state={{ from: location }}>
               <div className="card-body">
                  <h2 className="card-title justify-center text-4xl lg:text-6xl text-gray-500 grow">Asus</h2>
               </div>
            </Link>
            <Link className="card w-full bg-base-100 shadow-xl py-6 lg:py-12" to="/category/5" state={{ from: location }}>
               <div className="card-body">
                  <h2 className="card-title justify-center text-4xl lg:text-6xl text-gray-500 grow">Lenovo</h2>
               </div>
            </Link>
            <Link className="card w-full bg-base-100 shadow-xl py-6 lg:py-12" to="/category/6" state={{ from: location }}>
               <div className="card-body">
                  <h2 className="card-title justify-center text-4xl lg:text-6xl text-gray-500 grow">Apple</h2>
               </div>
            </Link>
         </div>
      </section>
   );
};

export default Categories;
