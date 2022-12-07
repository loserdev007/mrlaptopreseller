import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";
import BookNowModal from "./BookNowModal";
import "./Product.css";
const monthNames = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
const Product = (props) => {
   const { user } = useContext(AuthContext);
   const product = props.productData;
   console.log(product)
   const dateObj = new Date(product.productPostDate);
   const date = dateObj.getDate();
   const month = monthNames[dateObj.getMonth()];
   const year = dateObj.getFullYear();
   
   const reportHandler = () => {
      fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/product`, {
         method: "PUT", // or 'PUT'
         headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            uid: user?.uid,
            queryData:JSON.stringify({
               productID: product?.productID,
               report: "true"
            })
         },
      })
         .then((res) => res.json())
         .then((res) => {
            if (res.modifiedCount > 0) {
               props.setUpdate(prev=>!prev)
            }
         })
         .catch((e) => {});
   };
   const deleteHandler = () => {
      fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/product`, {
         method: "DELETE", // or 'PUT'
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
            uid: user?.uid,
            queryData:JSON.stringify({
               productID: product?.productID
            })
         },
      })
         .then((res) => res.json())
         .then((res) => {
            if (res.deletedCount > 0) {
               props.setUpdate(prev=>!prev)
            }
         })
         .catch((e) => {});
   };
   const advertiseHandler = () => {
      fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/product`, {
         method: "PUT", // or 'PUT'
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
            uid: user?.uid,
            queryData:JSON.stringify({
               productID: product?.productID,
               advertise: `${!product?.isAdvertised}`
            })
         },
      })
         .then((res) => res.json())
         .then((res) => {
            if (res.modifiedCount > 0) {
               props.setUpdate(prev=>!prev)
            }
         })
         .catch((e) => {});
   };
   // const addAdvertiseHandler = () => {};

   console.log(product);

   return (
      <div className="group h-full mx-auto flex flex-col max-w-2xl overflow-hidden bg-white hover:bg-teal-50 transition ease-in-out duration-300 rounded-lg shadow-md dark:bg-gray-800 relative w-full">
         <BookNowModal></BookNowModal>
         <div className="dropdown dropdown-end absolute z-20 right-0">
            <label
               tabIndex={0}
               className="btn btn-sm btn-ghost border-0 rounded-full mt-2 mr-2 text-white p-1"
            >
               <svg
                  className="w-8 h-5 mx-2 fill-current"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
               >
                  <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
               </svg>
            </label>

            <ul
               tabIndex={0}
               className="mt-1 mr-1 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
               {!product.isAdvertised ? (
                  <li>
                     <button onClick={advertiseHandler}>Advertise</button>
                  </li>
               ) : (
                  ""
               )}
               {product.authorUid === user?.uid ? (
                  <>
                     {product.isAdvertised ? (
                        <>
                           <li>
                              <button onClick={advertiseHandler}>
                                 Remove Advertise
                              </button>
                           </li>
                        </>
                     ) : (
                        ""
                     )}
                     <li>
                        <button onClick={deleteHandler}>Delete Product</button>
                     </li>
                  </>
               ) : (
                  <li>
                     <button onClick={reportHandler}>Report</button>
                  </li>
               )}
            </ul>
         </div>
         {product.isSold ? (
            <div className="w-full absolute left-0 bg-white/70 z-10 h-full flex flex-col justify-center items-center group">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Number of comments"
                  className="w-24 h-24 fill-current text-success"
               >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
               </svg>
               <h3 className="text-4xl font-bold text-success mt-4">Sold</h3>
               <button className="btn btn-primary absolute bottom-1/4">
                  <svg
                     className="w-5 h-5 mx-2 fill-current"
                     xmlns="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512"
                  >
                     <path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" />
                  </svg>
                  Delete Product
               </button>
            </div>
         ) : (
            ""
         )}
         <img
            className="object-cover w-full h-64"
            src={`${product.productPicture}`}
            alt="Article"
         />

         <div className="p-6 flex-1 flex box-border">
            <div className="flex flex-col grow">
               <div className="flex items-center justify-between mb-2">
                  <div className="">
                     <div className="flex items-center">
                        <div className="flex items-center">
                           <Link
                              to="#"
                              className="text-md"
                              tabIndex="0"
                              role="link"
                           >
                              <img
                                 className="object-cover h-10 rounded-full"
                                 src={`${product.productAuthor.authorImageURL}`}
                                 alt="Avatar"
                              />
                           </Link>
                           <div className="mx-2 flex flex-col font-semibold text-gray-700 dark:text-gray-200">
                              <Link
                                 to="#"
                                 className="text-md flex items-center"
                                 tabIndex="0"
                                 role="link"
                              >
                                 {`${product.productAuthor.authorName}`}
                                 {/* <span className="bg-teal-200 text-green-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                    Admin
                                 </span> */}
                                 {product.productAuthor.authorVerified ===
                                 "verified" ? (
                                    <div
                                       className="tooltip tooltip-top tooltip-info flex items-center p-1 space-x-1.5"
                                       data-tip="Verified"
                                    >
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                          aria-label="Number of comments"
                                          className="w-6 h-4 fill-current text-blue-600"
                                       >
                                          <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                       </svg>
                                    </div>
                                 ) : (
                                    ""
                                 )}
                              </Link>
                              <span className="text-xs font-normal text-gray-500 dark:text-gray-300 select-none">
                                 {`${date} ${month.slice(0, 3)}, ${year}`}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="form-control">
                     <label className="cursor-pointer label">
                        <span className="label-text">Advertise?</span>
                        <input
                           type="checkbox"
                           checked
                           className="checkbox checkbox-secondary checkbox-sm ml-2"
                        />
                     </label>
                  </div> */}
                  {product.isAdvertised ? (
                     <div className="badge badge-lg p-4">Advertised</div>
                  ) : (
                     ""
                  )}
               </div>
               <Link
                  className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline capitalize"
                  tabIndex="0"
                  role="link"
               >
                  {`${product.productTitle}`}
               </Link>
               <p className="select-none description mt-2 text-sm text-gray-600 dark:text-gray-400 text-ellipsis overflow-hidden flex-1 capitalize">
                  {`${product.productDescription}`}
               </p>
               <div className="overflow-x-auto box-border mt-4">
                  <table className="table w-full text-xs">
                     <tbody>
                        <tr>
                           <td className="bg-gray-100/60">Condition</td>
                           <td className="bg-gray-100/60">
                              {`${product.productCondition}`}
                           </td>
                        </tr>
                        <tr>
                           <td className="bg-gray-100/60">Category</td>
                           <td className="bg-gray-100/60">
                              {`${product.productCategory}`}
                           </td>
                        </tr>
                        <tr>
                           <td className="bg-gray-100/60">Location</td>
                           <td className="bg-gray-100/60">
                              {`${product.productLocation}`}
                           </td>
                        </tr>
                        <tr>
                           <td className="bg-gray-100/60">Original Price</td>
                           <td className="bg-gray-100/60">
                              {`${product.productOriginalPrice}`}
                           </td>
                        </tr>
                        <tr>
                           <td className="bg-gray-100/60">Years of purchase</td>
                           <td className="bg-gray-100/60">
                              {`${product.productYearOfPurchase}`}
                           </td>
                        </tr>
                        <tr>
                           <td className="bg-gray-100/60">
                              Seller Contact No.
                           </td>
                           <td className="bg-gray-100/60">
                              {`${product.authorMobileNumber}`}
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="flex mt-4 items-center">
                  {/* <p className="text-sm ml-2 text-gray-700">(861)</p> */}
                  <div className="flex space-x-2 text-sm text-gray-400 flex-1 justify-end">
                     <button type="button" className="">
                        <div
                           className="tooltip tooltip-top tooltip-accent flex items-center p-1 space-x-1.5"
                           data-tip="Chat"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Number of comments"
                              className="w-6 h-4 fill-current text-secondary"
                           >
                              <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                           </svg>
                           <span className="text-gray-600">30</span>
                        </div>
                     </button>
                     <button
                        type="button"
                        className="flex items-center p-1 space-x-1.5"
                     >
                        <div
                           className="tooltip tooltip-top tooltip-accent flex items-center p-1 space-x-1.5"
                           data-tip="Likes"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Number of likes"
                              className="w-4 h-4 fill-current text-secondary"
                           >
                              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                           </svg>
                           <span className="text-gray-600">283</span>
                        </div>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="group-hover:bg-gray-200 transition ease-in-out duration-300 flex items-center justify-between px-4 py-3 bg-gray-100 border-t border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 select-none">
               {`$${product.productResalePrice}`}
            </h1>
            {props.isAdvertised ? (
               <button className="btn gap-2 btn-primary">
                  <svg
                     className="w-5 h-5 mx-2 fill-current"
                     xmlns="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512"
                  >
                     <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328H162.8l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3L208 237.7zM392 256c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24zm24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v96 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z" />
                  </svg>
                  Advertise
               </button>
            ) : (
               <label htmlFor="book-now" className="btn gap-2 btn-primary">
                  <svg
                     className="w-5 h-5 mx-2 fill-current"
                     xmlns="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512"
                  >
                     <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
                  </svg>
                  Book Now!
               </label>
            )}
         </div>
      </div>
   );
};

export default Product;
