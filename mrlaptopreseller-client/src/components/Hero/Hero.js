import React from "react";
import "./Hero.css";
import bannerImage from "../../assets/Banner.png";
import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <header>
         <div
            className="hero min-h-screen"
            style={{
               backgroundImage: `url(${bannerImage})`,
            }}
         >
            <div className="hero-overlay bg-opacity-70 bg-black"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-3xl">
                  <h1 className="mb-10 text-5xl lg:text-7xl font-bold w-fit mx-auto">
                     <span className="text-sm lg:text-lg font bold inline-block w-full text-center lg:text-left text-accent">
                        Welcome to
                     </span>
                     <br />
                     Mr. <span className="text-secondary">Laptop</span> Reseller
                  </h1>
                  <p className="mb-10 max-w-md mx-auto text-md lg:text-xl ">
                     Find your preferred reseller laptop from planty of laptop
                     brand. Most reliable second hand laptop shop with quality
                     products in suitable price.
                  </p>
                  <div className="space-y-2">
                     <Link
                        className="btn gap-2 btn-primary mx-4 lg:btn-wide lg:btn-wide text-lg"
                        to=""
                     >
                        <svg
                           className="w-5 h-5 mx-2 fill-current"
                           xmlns="http://www.w3.org/1999/xlink"
                           viewBox="0 0 512 512"
                        >
                           <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                        </svg>
                        Discover
                     </Link>
                     <Link
                        className="btn gap-2 btn-primary mx-4 lg:btn-wide text-lg"
                        to=""
                     >
                        <svg
                           className="w-5 h-5 mx-2 fill-current"
                           xmlns="http://www.w3.org/1999/xlink"
                           viewBox="0 0 512 512"
                        >
                           <path d="M272 288h-64C163.8 288 128 323.8 128 368C128 376.8 135.2 384 144 384h192c8.836 0 16-7.164 16-16C352 323.8 316.2 288 272 288zM240 256c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64S204.7 256 240 256zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM400 448c0 8.836-7.164 16-16 16H96c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h288c8.836 0 16 7.162 16 16V448z" />
                        </svg>
                        Contact
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Hero;
