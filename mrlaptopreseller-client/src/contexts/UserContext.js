import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import useToken from "../hooks/useToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
   // Providers
   const googleProvider = new GoogleAuthProvider();

   // States
   const [user, setUser] = useState({});
   const [isAuthLoading, setIsAuthLoading] = useState(true);
   const [userMetaData, setUserMetaData] = useState({});

   const [userServerResponse] = useToken(userMetaData, user);
   // Authentication Methods

   // EMAIL PASSWORD
   const emailPassSignUp = (email, password, userRole, fullname, nextStep) => {
      setIsAuthLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const newUser = userCredential.user;
            const userData = {
               userUid: newUser.uid,
               userEmail: newUser.email,
               userDisplayName: fullname,
               userRole
            };
            setUserMetaData(userData);
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
            nextStep()
         })
         .catch((e) => {
            console.log(e)
         });
   };

   // GOOGLE
   const googleSignIn = (nextStep) => {
      setIsAuthLoading(true);
      signInWithPopup(auth, googleProvider)
         .then((userCredential) => {
            const newUser = userCredential.user;
            const userData = {
               userUid: newUser.uid,
               userDisplayName: newUser.displayName,
               userImageURL: newUser.photoURL,
               userEmail: newUser.email
            };
            setUserMetaData(userData);
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
            nextStep()
         })
         .catch((e) => {});
      // return signInWithPopup(auth, googleProvider);
   };

   const emailPassLogin = (email, password, nextStep) => {
      setIsAuthLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const newUser = userCredential.user;
            const userData = {
               userUid: newUser.uid,
               userEmail: newUser.email
            };
            setUserMetaData(userData);
            nextStep()
         })
         .catch((e) => {});
   };

   const logOut = () => {
      signOut(auth)
         .then(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userRole");
            localStorage.removeItem("userImageURL");
            localStorage.removeItem("userDisplayName");
            localStorage.removeItem("userVerified");
         })
         .catch((e) => {});
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUserMetaData({
            userRole: localStorage.getItem("userRole"),
            userImageURL: localStorage.getItem("userImageURL"),
            userDisplayName: localStorage.getItem("userDisplayName"),
            userVerified: localStorage.getItem("userVerified"),
            userUid: currentUser?.uid
         })
         setUser(currentUser);
         setIsAuthLoading(false);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   const authValues = {
      user,
      userServerResponse,
      userMetaData,
      isLoading: isAuthLoading,
      emailPassSignUp,
      googleSignIn,
      logOut,
      emailPassLogin,
   };

   return (
      <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
   );
};

export default UserContext;
