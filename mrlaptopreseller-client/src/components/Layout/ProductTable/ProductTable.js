import React from "react";
import ProductTableItem from "./ProductTableItem";

const ProductTable = () => {
   const items = []

   for (let index = 0; index < 5; index++) {
      items.push(<ProductTableItem></ProductTableItem>)
      
   }
   return (
      <>
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* <!-- head --> */}
               <thead>
                  <tr>
                     <th>
                        <label>
                           <input type="checkbox" className="checkbox" />
                        </label>
                     </th>
                     <th>Name</th>
                     <th>Short Info</th>
                     <th>Price</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {/* <!-- row 1 --> */}
                  {items}
                  {/* <!-- foot --> */}
                  {/* <tfoot>
                     <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                     </tr>
                  </tfoot> */}
               </tbody>
            </table>
         </div>
      </>
   );
};

export default ProductTable;
