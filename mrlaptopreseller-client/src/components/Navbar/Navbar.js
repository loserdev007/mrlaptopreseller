import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Navbar.css";

const Navbar = () => {
   const { user, userServerResponse, userMetaData, logOut } =
      useContext(AuthContext);
console.log(userMetaData, userServerResponse)
   const logoutHandler = () => {
      logOut();
   };
   return (
      <div className="w-full bg-gray-100 h-20 border-b fixed border-gray-200 z-50 flex items-center">
         <nav className="navbar flex container mx-auto max-w-7xl">
            <div className="flex-1">
               <Link
                  className="btn btn-ghost normal-case text-md lg:text-xl"
                  to="/"
               >
                  Mr.LaptopReseller
               </Link>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal p-0 mr-5">
                  {user?.uid ? (
                     <li>
                        <NavLink
                           to="/dashboard"
                           className={({ isActive }) =>
                              isActive ? "rounded bg-gray-200" : "rounded"
                           }
                        >
                           Dashboard
                        </NavLink>
                     </li>
                  ) : (
                     ""
                  )}
                  {!user ? <li></li> : ""}
               </ul>
               {user?.uid ? (
                  <div className="dropdown dropdown-end">
                     <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                     >
                        <div className="w-10 rounded-full">
                           <img
                              src={`${
                                 userServerResponse.userImageURL ||
                                 userMetaData.userImageURL
                              }`}
                              alt={`${
                                 userServerResponse.userDisplayName ||
                                 userMetaData.userDisplayName
                              }`}
                           />
                        </div>
                     </label>
                     <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                     >
                        {userMetaData?.userVerified === "nonverified" ? (
                           <li>
                              <button onClick={logoutHandler}>Request Verification</button>
                           </li>
                        ) : (
                           ""
                        )}
                        <li>
                           <button onClick={logoutHandler}>Logout</button>
                        </li>
                     </ul>
                  </div>
               ) : (
                  ""
               )}
               {!user ? (
                  <Link className="btn btn-primary text-md" to="/login">
                     <svg
                        className="w-5 h-5 mr-2 fill-current"
                        xmlns="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                     >
                        <path d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
                     </svg>
                     Login
                  </Link>
               ) : (
                  ""
               )}
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
