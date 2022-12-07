import { useEffect, useState } from "react";

const useToken = (userData,user) => {
   const [userMetaData, setUserMetaData] = useState({});
   useEffect(() => {
      if (user?.uid) {
         console.log(userData)
         fetch("https://b612-used-products-resale-server-side-loserdev007.vercel.app/users", {
            method: "GET",
            headers: {
               userData: JSON.stringify(userData)
            },
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.token) {
                  console.log(data)
                  localStorage.setItem("token", data.token);
                  localStorage.setItem("userRole", data.userRole);
                  localStorage.setItem("userImageURL", data.userImageURL);
                  localStorage.setItem("userDisplayName", data.userDisplayName);
                  localStorage.setItem("userVerified", data.userVerified);
                  setUserMetaData(data);
               }
            });
      }
   }, [userData, user?.uid]);
   return [userMetaData]
};

export default useToken;
