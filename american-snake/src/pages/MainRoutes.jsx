import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/AdminSide/components/Sidebar";
import { AddProduct } from "../components/AdminSide/pages/Addproduct";
import { Dashboard } from "../components/AdminSide/pages/Dashboard";
import { Homepage } from "../components/Homepage/Homepage";
import  SingleProduct from "./SingleProduct";
import AdminPage from "./Adminpage";
import {MensProduct} from "./MensProduct"
import Login from "./Login"
import Signup from "./Signup"
import { AllProducts } from "../components/AdminSide/pages/Allproducts"
import { EditProduct } from "../components/AdminSide/pages/EditProduct"
import { AllUsers } from "../components/AdminSide/pages/AllUsers"
import { AllOrders } from "../components/AdminSide/pages/AllOrders"
import { Bag } from "./Bag"
import Cartpage from "./Cartpage"

export const MainRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/admin-dashboard" element={
                <Sidebar>
                    <Dashboard/>
                </Sidebar>
            }/>
            <Route path="/admin-addproduct" element={
                <Sidebar>
                    <AddProduct/>
                </Sidebar>
            }/>
            <Route path="/admin-products" element={
                <Sidebar>
                    <AllProducts/>
                </Sidebar>
            }/>
             <Route path="/admin-editproduct/:id" element={
                <Sidebar>
                    <EditProduct/>
                </Sidebar>
            }/>
         <Route path="/admin-users" element={
                <Sidebar>
                    <AllUsers/>
                </Sidebar>
            }/>
            <Route path="/admin-orders" element={
                <Sidebar>
                    <AllOrders/>
                </Sidebar>
            }/>
            <Route path="/signup" element={<Signup/>}/>


            <Route path="/products-men" element={<MensProduct />}/>

            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            
            <Route path="/login" element={<Login/>}/>

            <Route path="/bag" element = {<Bag/>} />


            <Route path="/cart" element={<Cartpage/>}/>


        </Routes>

        </>
    );
};
