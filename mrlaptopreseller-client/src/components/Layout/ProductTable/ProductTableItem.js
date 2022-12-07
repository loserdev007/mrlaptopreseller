import React from "react";

const ProductTableItem = () => {
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
                           src="https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871597.jpg"
                           alt="Avatar Tailwind CSS Component"
                        />
                     </div>
                  </div>
                  <div>
                     <div className="font-bold">Hart Hagerty</div>
                  </div>
               </div>
            </td>
            <td>
               Place:
               <span className="badge badge-ghost badge-md mx-2">
                  Zemlak, Daniel and Leannon
               </span>
               <br />
               Years of use:
               <span className="badge badge-ghost badge-sm">5 Years</span>
            </td>
            <td className="font-bold text-xl">$500</td>
            <th>
               <label
                  htmlFor="book-now"
                  className="btn gap-2 btn-primary rounded-full btn-sm"
               >
                  <svg
                     className="h-4 fill-current"
                     xmlns="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512"
                  >
                     <path d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z"/></svg>
                  Pay
               </label>
            </th>
         </tr>
      </>
   );
};

export default ProductTableItem;
