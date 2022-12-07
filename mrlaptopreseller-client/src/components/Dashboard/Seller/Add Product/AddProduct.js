import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/UserContext";
import "./AddProduct.css";
// {URL.createObjectURL(image)}

const AddProduct = () => {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   useEffect(()=>{
      if (parseInt(localStorage.getItem("userRole")) === 1) {
         navigate("/dashboard/my-orders", { replace: true });
      }else if(parseInt(localStorage.getItem("userRole")) === 3){
         navigate("/dashboard/all-buyer", { replace: true });
      }
   },[navigate])

   const addProductHandler = async (e) => {
      e.preventDefault();
      const imagefile = e.target.productPicture.files["0"];
      const formData = new FormData();
      formData.append("image", imagefile);

      const imageResponse = await fetch(
         `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`,
         { method: "POST", body: formData }
      );
      const imageResponseJson = await imageResponse.json();
      const productObject = {
         productTitle: e.target.productTitle.value,
         productDescription: e.target.productDescription.value,
         productPicture: imageResponseJson.data.url,
         productLocation: e.target.productLocation.value,
         productOriginalPrice: e.target.productOriginalPrice.value,
         productResalePrice: e.target.productResalePrice.value,
         productYearOfPurchase: e.target.productYearOfPurchase.value,
         productCategory: e.target.productCategory.value,
         productCondition: e.target.productCondition.value,
         authorMobileNumber: e.target.authorMobileNumber.value,
         isAdvertised: e.target.isAdvertised.checked,
         authorUid: user.uid,
      };
      try {
         const productResponse = await fetch("https://b612-used-products-resale-server-side-loserdev007.vercel.app/products", {
            method: "POST", // or 'PUT'
            headers: {
               "Content-Type": "application/json",
               uid: user.uid,
               authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(productObject),
         });
         if (productResponse) {
            navigate("/dashboard/my-products");
         }
      } catch (e) {}
   };

   return (
      <section className="hero">
         <h1 className="text-center text-3xl font-bold">My Orders</h1>
         <div className="hero-content w-full lg:w-9/12">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
               <h2 className="pt-6 text-center text-4xl font-bold">
                  Add Product
               </h2>
               <form
                  className="card-body space-y-5"
                  onSubmit={addProductHandler}
               >
                  <div className="form-control">
                     <label className="input-group">
                        <span className="w-1/3 justify-center">
                           Product Name
                        </span>
                        <input
                           required
                           type="text"
                           placeholder="Product Name"
                           name="productTitle"
                           className="input input-bordered w-full"
                        />
                     </label>
                  </div>
                  <div className="form-control">
                     <label className="input-group">
                        <span className="w-1/3 justify-center">
                           Product Description
                        </span>
                        <textarea
                           required
                           className="textarea w-full textarea-bordered"
                           placeholder="Product Description"
                           name="productDescription"
                        ></textarea>
                     </label>
                  </div>
                  <div className="form-control">
                     <label className="input-group">
                        <span className="w-1/3 justify-center">Location</span>
                        <input
                           required
                           type="text"
                           placeholder="Location"
                           className="input input-bordered w-full"
                           name="productLocation"
                        />
                     </label>
                  </div>
                  <div className="flex space-x-5">
                     <div className="form-control w-1/2">
                        <label className="input-group">
                           <span className="w-1/2 justify-center">
                              Original Price
                           </span>
                           <input
                              required
                              type="number"
                              placeholder="Original Price"
                              name="productOriginalPrice"
                              className="input input-bordered w-full w-1/2"
                              min={1}
                           />
                        </label>
                     </div>
                     <div className="form-control w-1/2">
                        <label className="input-group">
                           <span className="w-1/2 justify-center">
                              Resale Price
                           </span>
                           <input
                              required
                              type="number"
                              name="productResalePrice"
                              placeholder="Resale Price"
                              className="input input-bordered w-full w-1/2"
                              min={1}
                           />
                        </label>
                     </div>
                  </div>
                  <div className="flex space-x-5">
                     <div className="form-control w-1/2">
                        <label className="input-group">
                           <span className="w-1/2 justify-center">
                              Year of purchase
                           </span>
                           <input
                              required
                              type="date"
                              name="productYearOfPurchase"
                              placeholder="Original Price"
                              className="input input-bordered w-full w-1/2"
                              min={1}
                           />
                        </label>
                     </div>
                     <div className="form-control w-1/2">
                        <label className="input-group">
                           <span className="w-1/2 justify-center">
                              Category
                           </span>
                           <select
                              required
                              className="select select-bordered w-1/2 max-w-xs"
                              name="productCategory"
                           >
                              <option disabled selected>
                                 Select One
                              </option>
                              <option value="1">Acer</option>
                              <option value="2">Dell</option>
                              <option value="3">HP</option>
                              <option value="4">Asus</option>
                              <option value="5">Lenovo</option>
                              <option value="6">Apple</option>
                           </select>
                        </label>
                     </div>
                  </div>
                  <div className="flex space-x-5">
                     <div className="form-control w-1/2">
                        <label className="input-group">
                           <span className="w-1/2 justify-center">
                              Condition
                           </span>
                           <select
                              required
                              className="select select-bordered w-1/2 max-w-xs"
                              name="productCondition"
                           >
                              <option disabled selected>
                                 Select One
                              </option>
                              <option className="bg-success">Excellent</option>
                              <option className="bg-warning">Good</option>
                              <option className="bg-error">Fair</option>
                           </select>
                        </label>
                     </div>
                     <div className="form-control w-1/2">
                        <label className="input-group">
                           <span className="w-1/2 justify-center">
                              Mobile Number
                           </span>
                           <input
                              required
                              type="tel"
                              placeholder="Mobile Number"
                              name="authorMobileNumber"
                              className="input input-bordered w-full w-1/2"
                           />
                        </label>
                     </div>
                  </div>
                  <div className="flex space-x-5">
                     <div className="form-control w-1/2">
                        <input
                           required
                           type="file"
                           name="productPicture"
                           accept="image/png, image/jpeg"
                           className="file-input file-input-bordered w-full"
                        />
                     </div>
                     <div className="form-control w-1/2">
                        <label className="input-group h-full items-center">
                           <span className="w-1/2 justify-center h-full">
                              Advertise
                           </span>
                           {/* <input
                              type="tel"
                              placeholder="Original Price"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              className="input input-bordered w-full w-1/2"
                           /> */}
                           <input
                              type="checkbox"
                              value="ss"
                              className="checkbox mx-auto rounded"
                              name="isAdvertised"
                           />
                        </label>
                     </div>
                  </div>
                  <div className="form-control mt-6 items-center w-full">
                     <button
                        className="btn gap-2 btn-primary mx-4 lg:btn-wide lg:btn-wide text-lg"
                        type="submit"
                     >
                        <svg
                           className="w-5 h-5 fill-current"
                           xmlns="http://www.w3.org/1999/xlink"
                           viewBox="0 0 512 512"
                        >
                           <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>
                        Add
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddProduct;
