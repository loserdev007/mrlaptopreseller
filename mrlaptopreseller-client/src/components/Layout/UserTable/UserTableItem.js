import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";

const ProductTableItem = (props) => {
   const { user } = useContext(AuthContext);
   const buyerOrSeller = props.item

   const verification = ()=>{
      fetch(`https://b612-used-products-resale-server-side-loserdev007.vercel.app/admin`, {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
            uid: user?.uid,
            queryData:JSON.stringify({
               type: "verify",
               userUid: buyerOrSeller?.userUid
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
   }

   return (
      <>
         <tr>
            <th>
               <label>
                  <input type="checkbox" className="checkbox" />
               </label>
            </th>
            <td>
               <div className="flex items-center space-x-3">
                  <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img
                           src={`${buyerOrSeller?.userImageURL}`}
                           alt="Avatar Tailwind CSS Component"
                        />
                     </div>
                  </div>
                  <div>
                     <div className="font-bold">{buyerOrSeller?.userDisplayName}</div>
                  </div>
               </div>
            </td>
            <td className="text-md">{buyerOrSeller?.userEmail}</td>
            <th className="flex flex-col space-y-3 items-center">
               <label
                  htmlFor="book-now"
                  className="btn gap-2 btn-primary rounded-full btn-sm w-fit"
               >
                  <svg
                     className="h-4 fill-current"
                     xmlns="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512"
                  >
                     <path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" />
                  </svg>
                  Delete {parseInt(buyerOrSeller?.userRole) === 1 ? "Buyer" : "Seller"}
               </label>
               {buyerOrSeller?.userVerified === "requested" ? (
                  <button
                  onClick={verification}
                     className="btn gap-2 btn-warning rounded-full btn-sm w-fit"
                  >
                     <svg
                        className="h-4 fill-current"
                        xmlns="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                     >
                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                     </svg>
                     Confirm Verification
                  </button>
               ) : (
                  ""
               )}
            </th>
         </tr>
      </>
   );
};

export default ProductTableItem;
