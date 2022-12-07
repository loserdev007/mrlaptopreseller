import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainScreen from "./screens/MainScreen";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Category from "./components/Category/Category";
import MyOrders from "./components/Dashboard/Buyer/My Orders/MyOrders";
import AddProduct from "./components/Dashboard/Seller/Add Product/AddProduct";
import MyProducts from "./components/Dashboard/Seller/My Products/MyProducts";
import DashboardScreen from "./screens/DashboardScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import AllBuyer from "./components/Dashboard/Admin/All Buyer/AllBuyer";
import AllSeller from "./components/Dashboard/Admin/All Seller/AllSeller";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./private/PrivateRoute";
import MyBuyers from "./components/Dashboard/Seller/My Buyers/MyBuyers";

function App() {
   // const { user } = useContext(AuthContext);
   const router = createBrowserRouter([
      {
         path: "/",
         element: <MainScreen></MainScreen>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
            {
               path: "/login",
               element: <Login></Login>,
            },
            {
               path: "/register",
               element: <Register></Register>,
            },
            {
               path: "category/:id",
               element: (
                  <PrivateRoute>
                     <Category></Category>
                  </PrivateRoute>
               ),
            },
         ],
      },
      {
         path: "/dashboard",
         element: (
            <PrivateRoute>
               <DashboardScreen></DashboardScreen>
            </PrivateRoute>
         ),
         children: [
            {
               path: "",
               element: <Dashboard></Dashboard>,
            },
            {
               path: "my-orders",
               element: <MyOrders></MyOrders>,
            },
            {
               path: "add-product",
               element: <AddProduct></AddProduct>,
            },
            {
               path: "my-products",
               element: <MyProducts></MyProducts>,
            },
            {
               path: "my-buyers",
               element: <MyBuyers></MyBuyers>,
            },
            {
               path: "all-buyer",
               element: <AllBuyer></AllBuyer>,
            },
            {
               path: "all-seller",
               element: <AllSeller></AllSeller>,
            },
         ],
      },
      {
         path: "*",
         element: <ErrorPage></ErrorPage>,
      },
   ]);

   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
