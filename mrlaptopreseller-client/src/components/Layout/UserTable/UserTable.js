import React from "react";
import "./UserTable.css";
import UserTableItem from "./UserTableItem";

const UserTable = (props) => {
   const buyerList = props.buyerList;

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
                     <th>Total Item Booked</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {buyerList.map((el) => (
                     <UserTableItem setUpdate={props.setUpdate} item={el}></UserTableItem>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};

export default UserTable;
