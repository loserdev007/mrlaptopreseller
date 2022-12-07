import React from "react";
import banner from '../assets/error.jpg'

const ErrorPage = () => {
   return (
      <div
         className="hero min-h-screen"
         style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "contain"
         }}
      >
         <div className="hero-content text-center text-neutral-content">
            
         </div>
      </div>
   );
};

export default ErrorPage;
