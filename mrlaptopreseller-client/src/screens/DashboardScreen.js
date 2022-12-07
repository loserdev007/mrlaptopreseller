import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../contexts/UserContext";
import "./DashboardScreen.css";

const DashboardScreen = () => {
   const { userServerResponse, userMetaData } = useContext(AuthContext);

   return (
      <>
         <Navbar></Navbar>
         <section className="min-h-screen">
            <div className="drawer drawer-mobile">
               <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
               />
               <div className="drawer-content px-16 py-40">
                  {/* <!-- Page content here --> */}
                  <Outlet></Outlet>
                  <label
                     htmlFor="my-drawer-2"
                     className="btn btn-primary drawer-button lg:hidden"
                  >
                     Open drawer
                  </label>
               </div>
               <div className="drawer-side">
                  <label
                     htmlFor="my-drawer-2"
                     className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-80 bg-base-200/50 text-base-content pt-40 space-y-2">
                     {/* <!-- Sidebar content here --> */}
                     {parseInt(userServerResponse.userRole) === 1 ||
                     parseInt(userMetaData.userRole) === 1 ? (
                        <li>
                           <Link to="/dashboard/my-orders">My orders</Link>
                        </li>
                     ) : (
                        ""
                     )}
                     {parseInt(userServerResponse.userRole) === 2 ||
                     parseInt(userMetaData.userRole) === 2 ? (
                        <>
                           <li>
                              <NavLink
                                 to="/dashboard/add-product"
                                 className={({ isActive }) =>
                                    isActive ? "bg-gray-200" : undefined
                                 }
                              >
                                 Add Product
                              </NavLink>
                           </li>
                           <li>
                              <NavLink
                                 to="/dashboard/my-products"
                                 className={({ isActive }) =>
                                    isActive ? "bg-gray-200" : undefined
                                 }
                              >
                                 My Products
                              </NavLink>
                           </li>
                           <li>
                              <NavLink
                                 to="/dashboard/my-orders"
                                 className={({ isActive }) =>
                                    isActive ? "bg-gray-200" : undefined
                                 }
                              >
                                 My Buyers
                              </NavLink>
                           </li>
                        </>
                     ) : (
                        ""
                     )}
                     {parseInt(userServerResponse.userRole) === 3 ||
                     parseInt(userMetaData.userRole) === 3 ? (
                        <>
                           <li>
                              <Link to="/dashboard/all-buyer">All Buyers</Link>
                           </li>
                           <li>
                              <Link to="/dashboard/all-seller">
                                 All Sellers
                              </Link>
                           </li>
                           <li>
                              <Link to="/dashboard/my-orders">
                                 Reported Items
                              </Link>
                           </li>
                        </>
                     ) : (
                        ""
                     )}
                  </ul>
               </div>
            </div>
         </section>
      </>
   );
};

export default DashboardScreen;
