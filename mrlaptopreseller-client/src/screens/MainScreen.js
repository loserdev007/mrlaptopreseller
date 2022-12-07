import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import "./MainScreen.css";

const MainScreen = () => {
   return (
      <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
         <ToastContainer/>
      </>
   );
};

export default MainScreen;
