import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookNowModal = () => {
   const [disableButton, setDisableButton] = useState(false)

   const onSubmitHandler = (e) => {
      toast.success("Successfully booked the product!", {
         position: "bottom-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
      setDisableButton(true)
   };

   return (
      <>
         {/* The button to open modal */}
         <input type="checkbox" id="book-now" className="modal-toggle" />
         <label
            htmlFor="book-now"
            className="modal modal-bottom sm:modal-middle"
         >
            <label className="modal-box relative" htmlFor="">
               <div className="overflow-x-auto space-y-10">
                  <h2 className="text-center text-2xl font-bold">
                     Product Name
                  </h2>
                  <table className="table w-full">
                     <tbody>
                        <tr>
                           <td>Buyer Name</td>
                           <td className="text-sm">Buyer Name</td>
                        </tr>
                        <tr>
                           <td>Buyer Email</td>
                           <td className="text-sm">Buyer Email</td>
                        </tr>
                        <tr>
                           <td>Product Price</td>
                           <td className="text-sm">Product Price</td>
                        </tr>
                        <tr>
                           <td>Year of purchase</td>
                           <td className="text-sm">Year of purchase</td>
                        </tr>
                        <tr>
                           <td>Condition</td>
                           <td className="text-sm">Condition</td>
                        </tr>
                     </tbody>
                  </table>
                  <div className="flex flex-col space-y-3 text-sm">
                     <div className="form-control w-full">
                        <label className="input-group">
                           <span className="w-1/3 justify-center">
                              Mobile Number
                           </span>
                           <input
                              type="tel"
                              placeholder="Mobile Number"
                              className="input input-bordered w-full w-2/3"
                              min={1}
                           />
                        </label>
                     </div>
                     <div className="form-control w-full">
                        <label className="input-group">
                           <span className="w-1/3 justify-center">
                              Location
                           </span>
                           <input
                              type="text"
                              placeholder="Location"
                              className="input input-bordered w-full w-2/3"
                              min={1}
                           />
                        </label>
                     </div>
                  </div>
                  <div className="w-full flex justify-center">
                     <button
                        className="btn gap-2 btn-primary w-1/3 cursor-pointer"
                        onClick={onSubmitHandler}
                        disabled={disableButton}
                     >
                        {/* <svg
                           className="h-4 fill-current"
                           xmlns="http://www.w3.org/1999/xlink"
                           viewBox="0 0 512 512"
                        >
                           <path d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z" />
                        </svg> */}
                        Submit
                     </button>
                  </div>
               </div>
            </label>
         </label>
      </>
   );
};

export default BookNowModal;
