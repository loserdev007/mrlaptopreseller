import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
   const { googleSignIn, emailPassLogin, user } = useContext(AuthContext);
   const navigate = useNavigate();
   if (user && user.uid) {
      navigate("/", { replace: true });
   }
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   // useTitle("Login");

   const emailPassSignInHandler = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      emailPassLogin(email, password, () => {
         navigate(from, { replace: true });
      });
   };

   const googleSignInHandler = () => {
      googleSignIn(() => {
         navigate(from, { replace: true });
      });
   };

   return (
      <>
         <div className="hero min-h-screen">
            <div className="hero-content w-full md:w-2/3 lg:w-1/3">
               <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                  <h2 className="pt-6 text-center text-4xl font-bold">Login</h2>
                  <form
                     className="card-body space-y-5"
                     onSubmit={emailPassSignInHandler}
                  >
                     <div className="form-control">
                        <label className="input-group">
                           <span className="">Email</span>
                           <input
                              type="email"
                              name="email"
                              placeholder="youremail@gmail.com"
                              className="input input-bordered w-full"
                           />
                        </label>
                     </div>
                     <div className="form-control">
                        <label className="input-group">
                           <span className="w-1/2 lg:w-1/4">Password</span>
                           <input
                              type="password"
                              name="password"
                              placeholder="******"
                              className="input input-bordered w-full"
                           />
                        </label>
                        <label className="label">
                           <Link
                              to="#"
                              className="label-text-alt link link-hover"
                           >
                              Forgot password?
                           </Link>
                        </label>
                     </div>
                     <div className="divider">Login with social accounts</div>
                     <div className=" my-6 space-y-4 w-full flex justify-center">
                        <button
                           aria-label="Login with Google"
                           type="button"
                           className="flex items-center justify-center w-full lg:w-1/2 p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-green-400"
                           onClick={googleSignInHandler}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              className="w-5 h-5 fill-current"
                           >
                              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                           </svg>
                           <p>Login with Google</p>
                        </button>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">
                           Login
                        </button>
                     </div>
                     <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                        Don't have an account?
                        <Link
                           rel="noopener noreferrer"
                           to="/register"
                           className="underline dark:text-gray-100"
                        >
                           Sign up
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;
